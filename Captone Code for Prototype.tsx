import { Button } from "@/components/ui/button";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUp, Bookmark, CheckCircle2, Send, RotateCcw, X } from "lucide-react";

import { Note } from "@/components/app/Note";
import { useApplyFlow } from "@/components/app/useApplyFlow";
import { SwipeCard } from "@/components/match/SwipeCard";
import { useAppStore } from "@/lib/app-store";
import { hitsNorthStar, isAttended, sendsApplication, visibleStatusShare, type SwipeDirection } from "@/lib/application-logic";
import { jobsFor, jobById } from "@/lib/deck-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Naukri Match — Apply where a reply is realistic" },
      {
        name: "description",
        content:
          "Prototype for the Naukri case study: swipe through verified, live roles, see reply odds before applying, and track every application to an attended interview.",
      },
      { property: "og:title", content: "Naukri Match — Apply where a reply is realistic" },
      {
        property: "og:description",
        content: "Verified recruiters, live openings and honest application status — from apply to attended interview.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Discover,
});

const SWIPE_MS = 300;

function Discover() {
  const { state, dispatch, resolveJob } = useAppStore();
  const { requestApply, dialog, used, limit } = useApplyFlow();
  const [exitDirection, setExitDirection] = useState<SwipeDirection | null>(null);
  const busy = useRef(false);

  const persona = state.persona;
  const deck = jobsFor(persona).map(resolveJob);
  const index = state.positions[persona];
  const current = deck[index];
  const fresher = persona === "fresher";

  const finish = useCallback(
    (direction: SwipeDirection) => {
      setExitDirection(direction);
      window.setTimeout(() => {
        dispatch({ type: "advanceDeck", persona, by: 1 });
        setExitDirection(null);
        busy.current = false;
      }, SWIPE_MS);
    },
    [dispatch, persona],
  );

  const swipe = useCallback(
    (direction: SwipeDirection) => {
      if (busy.current || !current) return;
      busy.current = true;
      if (sendsApplication(direction)) {
        requestApply(current, (ok) => {
          if (ok) finish("right");
          else busy.current = false;
        });
        return;
      }
      if (direction === "up") dispatch({ type: "save", jobId: current.id });
      else dispatch({ type: "pass", jobId: current.id });
      finish(direction);
    },
    [current, requestApply, dispatch, finish],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (document.querySelector("[role=dialog]")) return;
      if (e.key === "ArrowRight") swipe("right");
      if (e.key === "ArrowLeft") swipe("left");
      if (e.key === "ArrowUp") {
        e.preventDefault();
        swipe("up");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [swipe]);

  const attended = state.apps.filter(isAttended).length;
  const visible = Math.round(visibleStatusShare(state.apps, state.today) * 100);
  const saved = state.saved.flatMap((id) => {
    const job = jobById(id);
    return job && job.persona === persona ? [resolveJob(job)] : [];
  });

  return (
    <main className="mx-auto grid max-w-7xl gap-6 px-4 py-6 lg:grid-cols-[270px_minmax(0,1fr)_300px]">
      {/* Left: why this screen exists */}
      <aside className="order-2 space-y-4 lg:order-none">
        <div className="rounded-lg border border-border bg-tone-butter p-4">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-normal">North star</p>
          <p className="mt-1 text-sm font-semibold">Seekers who attend an interview within 14 days of their 3rd apply</p>
          <div className="mt-3 flex items-baseline gap-2 font-display font-extrabold">
            <span className="text-2xl text-foreground/50 line-through decoration-2">21%</span>
            <ArrowRight className="h-4 w-4 self-center" />
            <span className="text-4xl">36%</span>
          </div>
          <dl className="mt-3 space-y-1 border-t border-border pt-2 text-xs">
            <Stat label="Applications sent" value={state.apps.length} />
            <Stat label="With a visible status" value={`${visible}%`} />
            <Stat label="Attended (both confirmed)" value={attended} />
            <Stat label="You hit the north star" value={hitsNorthStar(state.apps) ? "Yes" : "Not yet"} />
          </dl>
        </div>
        <Note n={1} title="Fewer, better applies">
          Right-swipe sends an application; up only saves. {limit} focused applies a day — same for free and paying seekers — so
          recruiters see fewer, more serious applicants.
        </Note>
        <p className="text-xs text-muted-foreground">Ranking isn't for sale — paid visibility never alters Reply Odds.</p>
        <Note n={2} title="Reply odds come from behaviour, not money">
          The pill on each card uses the recruiter's last 90 days: share of applicants who got any status within 7 days, when the opening was last confirmed. It can't be bought.
        </Note>
        {fresher && (
          <Note n={3} title="For freshers">
            Freshers apply widely and are the main target of fee scams. Fee requests and unverified contacts are called out in plain
            words, and the apply button pauses before sending.
          </Note>
        )}
      </aside>

      {/* Center: deck */}
      <section className="flex flex-col items-center">
        <div className="mb-4 flex w-full max-w-[380px] items-end justify-between">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-normal text-muted-foreground">
              {fresher ? "Fresher picks · 2026 batch" : "Experienced roles"}
            </p>
            <h1 className="font-display text-2xl font-extrabold tracking-normal">
              {current ? `${deck.length - index} of ${deck.length} roles` : "All caught up"}
            </h1>
          </div>
          <div className="text-right">
            <p className="font-mono text-[10px] uppercase tracking-normal text-muted-foreground">Today's applies</p>
            <div className="mt-1 flex gap-1" aria-label={`${used} of ${limit} applies used`}>
              {Array.from({ length: limit }, (_, i) => (
                <span key={i} className={cn("h-2.5 w-4 rounded-full border border-border", i < used ? "bg-primary" : "bg-card")} />
              ))}
            </div>
          </div>
        </div>

        <div className="relative h-[520px] w-full max-w-[380px]">
          {current ? (
            deck
              .slice(index, index + 3)
              .map((job, i) => (
                <SwipeCard
                  key={job.id}
                  job={job}
                  depth={i}
                  exitDirection={i === 0 ? exitDirection : null}
                  onSwipe={(d) => swipe(d)}
                />
              ))
              .reverse()
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-4 rounded-lg border border-dashed border-border p-8 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-apply-soft">
                <CheckCircle2 className="h-7 w-7 text-apply" />
              </div>
              <h2 className="font-display text-2xl font-extrabold">That's every role in this deck</h2>
              <p className="max-w-[260px] text-sm text-muted-foreground">
                Now watch what happens to your applications. Use <strong>+1 day</strong> at the top to move time forward.
              </p>
              <Link
                to="/applications"
                className="rounded-full border border-border bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-hard-sm"
              >
                Open my applications
              </Link>
              <Button variant="ghost" onClick={() => dispatch({ type: "advanceDeck", persona, by: -index })} className="text-xs font-semibold underline">
                See the deck again
              </Button>
            </div>
          )}
        </div>

        <div className="mt-8 flex items-center gap-3 sm:gap-4">
          <ActionButton label="Back one card" size="sm" onClick={() => dispatch({ type: "advanceDeck", persona, by: -1 })} disabled={index === 0} className="bg-card">
            <RotateCcw className="h-4 w-4" />
          </ActionButton>
          <ActionButton label="Pass" size="lg" onClick={() => swipe("left")} disabled={!current} className="bg-pass-soft text-pass">
            <X className="h-7 w-7" strokeWidth={3} />
          </ActionButton>
          <ActionButton label="Save for later" size="sm" onClick={() => swipe("up")} disabled={!current} className="bg-super-soft text-super">
            <Bookmark className="h-4 w-4 fill-super" />
          </ActionButton>
          <ActionButton label="Apply (uses 1 of today's 5)" size="lg" onClick={() => swipe("right")} disabled={!current} className="bg-primary text-primary-foreground hover:bg-primary-hover">
            <Send className="h-7 w-7" />
          </ActionButton>
        </div>
        <p className="mt-4 flex items-center gap-3 text-center text-xs text-muted-foreground">
          <span className="flex items-center gap-1"><ArrowLeft className="h-3 w-3" /> pass</span>
          <span className="flex items-center gap-1"><ArrowUp className="h-3 w-3" /> save</span>
          <span className="flex items-center gap-1"><ArrowRight className="h-3 w-3" /> apply</span>
        </p>
      </section>

      {/* Right: saved + recent */}
      <aside className="order-3 space-y-4">
        <div className="rounded-lg border border-border bg-card p-4">
          <h2 className="font-display text-lg font-extrabold">Saved for later</h2>
          {saved.length === 0 ? (
            <p className="mt-1 text-xs text-muted-foreground">Swipe up to save without applying.</p>
          ) : (
            <ul className="mt-2 space-y-2">
              {saved.map((j) => (
                <li key={j.id}>
                  <Link to="/jobs/$jobId" params={{ jobId: j.id }} className="block rounded-lg border border-border px-3 py-2 text-xs hover:bg-accent">
                    <span className="font-bold">{j.title}</span>
                    <span className="block text-muted-foreground">{j.company}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <h2 className="font-display text-lg font-extrabold">Your applications</h2>
          <p className="mt-1 text-xs text-muted-foreground">
            {state.apps.length === 0
              ? "Nothing sent yet."
              : `${state.apps.length} sent. Every one shows what the recruiter did and what happens next.`}
          </p>
          <Link to="/applications" className="mt-3 inline-block text-xs font-bold underline decoration-highlight decoration-2 underline-offset-4">
            Track applications
          </Link>
        </div>
        <Note n={4} title="Try the whole journey">
          Apply to 3 roles, then press <strong>+1 day</strong> a few times. Fast recruiters shortlist, stale roles close, ghosting
          recruiters get auto-closed after 7 days. Act as the recruiter in <em>Recruiter view</em>.
        </Note>
      </aside>
      {dialog}
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="flex justify-between gap-2">
      <dt>{label}</dt>
      <dd className="font-mono font-bold">{value}</dd>
    </div>
  );
}

function ActionButton({
  label,
  size,
  className,
  children,
  ...props
}: {
  label: string;
  size: "sm" | "lg";
  className?: string;
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <Button variant="ghost"
      aria-label={label}
      title={label}
      className={cn(
        "flex items-center justify-center rounded-full border border-border shadow-hard-sm transition-transform hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-none disabled:pointer-events-none disabled:opacity-40",
        size === "lg" ? "h-16 w-16" : "h-11 w-11",
        className,
      )}
      {...props}
    >
      {children}
    </Button>
  );
}
