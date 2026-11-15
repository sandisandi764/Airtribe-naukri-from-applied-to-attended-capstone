# Naukri Match: Turning Applications into Attended Interviews

**Presenter:** Santhosh Sankaran (SDE- BATCH TEAM LEAD@SUCCESS NUMBERS) · Airtribe Executive Cohort  
**Program:** Airtribe AI-First Product Management Capstone Project  
**Live Interactive Prototype:** [https://naukri-career-canvas.lovable.app/](https://naukri-career-canvas.lovable.app/)

---

## Executive Summary & North Star Mandate

Among active job seekers on [Naukri.com](https://www.naukri.com/faq/job-seeker-apply) who apply to **at least 3 jobs within 7 days**, only **21.0%** currently attend an interview **within 14 days of their third application**—where an attended interview counts **only when the seeker confirms they attended AND the recruiter marks the candidate as interviewed** in Naukri RMS.

This capstone designs and validates a two-part product intervention that lifts two-sided verified interview attendance from **21.0% to 36.3% (+15.3 pp)** within 6 months while strictly obeying four platform constraints:
1. **Two-Sided Confirmation Required:** Unilateral seeker claims do not count (`One-Sided Confirmation Rate` tracked as a counter-metric `<10%`).
2. **Zero Recruiter Workflow / Tool Change:** Recruiters never adopt a separate tool; all status updates (`Sent → Viewed → Shortlisted → Booked → Attended`) pipe passively from existing Naukri RMS actions plus a 1-tap weekly RMS email digest (`"Still hiring for this role?"`).
3. **Legitimate Exits & Zero Pressure to Book:** A withdrawn application or closed role (`"Role filled"` or `"Closed · no reply"` after 7 days of no RMS action) is a legitimate outcome (`0` penalty, grey `Finished` state).
4. **Strict Scope Discipline:** No resume-matching models, no recruiter pricing changes, and no paid visibility boosts (`Ranking isn't for sale`).

---

## Repository Contents & Capstone Deliverables

| Deliverable File | Format | Description |
| :--- | :--- | :--- |
| [Santhosh\_Sankaran\_Product\_Capstone.pdf](https://www.google.com/search?q=./Santhosh_Sankaran_Product_Capstone.pdf) | PDF (18 Slides) | Final Executive Presentation Deck covering Teardown, 30-User Research (`U01–U30`), 12-Portal Benchmark, RICE, PRD, Annotated Prototype Screens, Funnel Model, and Risk Governance |
| [Santhosh\_Sankaran\_Product\_Capstone.pptx](https://www.google.com/search?q=./Santhosh_Sankaran_Product_Capstone.pptx) | PPTX (18 Slides) | Editable PowerPoint Presentation Deck with embedded speaker notes for Presenter View (`Alt + F5`) |
| [Supporting\_Artifacts\_Santhosh\_Sankaran.pdf](https://www.google.com/search?q=./Supporting_Artifacts_Santhosh_Sankaran.pdf) | PDF (26 Pages) | Complete Supporting Artifacts & PRD (7 Research Questions, Anonymized 30-User Log `U01–U30`, 12-Portal Competitive Matrix, 12-Idea RICE Table, PRD `R1–R9`, 10-Event Telemetry Spec, and Risk Matrix) |
| [naukri\_metrics\_model.xlsx](https://www.google.com/search?q=./naukri_metrics_model.xlsx) | Excel Workbook | 3-Tab Quantitative Model (`Funnel`, `Metrics & Scale`, and `12-Portal Benchmark`) grounded in [Info Edge Q4 FY26 Audited Results](https://www.infoedge.in/announcements/IEIL_Audited%20Results_Q426.pdf) |
| [Santhosh\_Sankaran\_15Min\_Video\_Script.md](https://www.google.com/search?q=./Santhosh_Sankaran_15Min_Video_Script.md) | Markdown | Timestamped 15-minute video walkthrough script for `Santhosh_Sankaran_Product_Capstone.mp4` |
| **Live Prototype (`Prototype_Santhosh_Sankaran_Product`)** | Web App | [https://naukri-career-canvas.lovable.app/](https://naukri-career-canvas.lovable.app/) (Toggle **Design notes** in top-right to inspect annotations `S1–S3`, `D1–D2`, `A1–A4`, and `R1–R3`) |

---

## Two Coherent Product Solutions (Selected from 12-Idea RICE)

### 1. Pre-Apply: Trust & Reply-Odds Decision Layer (RICE 36.0 + 15.0)
- **Verified Recruiter Badge (`R1`):** Work-email domain (`SPF/DKIM`) or GST verification in Naukri RMS blocks fake-fee scams.
- **Opening Confirmed Xd Ago (`R2`):** Sourced from post creation date or a 1-tap weekly RMS email digest (`"Still hiring for this role?"`).
- **90-Day Historical Reply Odds (`R3`):** Computes `REPLY LIKELY`, `REPLY POSSIBLE`, or `REPLY UNLIKELY` strictly from the recruiter's 90-day RMS action rate (never a resume-matching score, and never sold as a boost).
- **Daily 5-Apply Focus Cap & Calm Pause (`R8`):** Replaces Naukri's 50-apply/day bulk rule ([Naukri Apply FAQ](https://www.naukri.com/faq/job-seeker-apply)) with 5 focused applies/day and a non-coercive pause on Low-Odds roles.

### 2. Post-Apply: Zero-Workflow-Change RMS Tracker & Two-Sided Loop (RICE 28.0 + 18.0 + 14.0)
- **Passive 5-Stage RMS Tracker (`R4`) & 7-Day Honest Auto-Close (`R5`):** Mirrors `Sent → Viewed → Shortlisted → Booked → Attended` directly from Naukri RMS and auto-closes roles after 7 days of no action so silence never lasts forever.
- **Self-Serve 3-Slot `.ics` Booking (`R6`) & JD Prep Brief (`R9`):** Lets shortlisted seekers pick 1 of 3 recruiter time slots in-app, dispatches `.ics` calendar invites with a 2-hour native alarm + WhatsApp link ([HireBound 2026](https://www.hirebound.io/blog/self-scheduling-vs-recruiter-scheduled-interviews)), and generates a JD-grounded prep brief.
- **Two-Sided Interview-Day Check-In (`R7`):** Counts an attended interview only when both the seeker check-in and the recruiter's RMS `Interviewed` tag fire within 14 days of the 3rd application.

---

## Real-World Funnel Model Summary (`100,000` Active Cohort Seekers)

| Funnel Stage (≤14 Days of 3rd Apply) | Baseline | With MVP | Product Lever | Empirical Benchmark Source |
| :--- | :---: | :---: | :--- | :--- |
| **1. `P(≥1 apply reaches shortlist)`** | `48.0%` | `56.0%` | Trust signals + Reply Odds + 5-cap | [Gem / Ashby 2026 Benchmarks](https://candidate.fyi/post/recruiting-funnel-benchmarks) & [Uppl.ai 1.2M Study](https://www.uppl.ai/job-application-response-rate) |
| **2. `P(shortlist → scheduled)`** | `58.0%` | `82.0%` | Self-serve 3-slot picker + WhatsApp | [Cronofy 2024 Report (42% scheduling drop-off)](https://www.hirebound.io/blog/self-scheduling-vs-recruiter-scheduled-interviews) |
| **3. `P(scheduled → attended)`** | `76.5%` | `85.0%` | `.ics` 2h alarm + JD AI Prep Brief | [HireBound 2026 Reminder Benchmark (23.5% no-show)](https://www.hirebound.io/blog/self-scheduling-vs-recruiter-scheduled-interviews) |
| **4. `P(attended → 2-sided confirmed)`** | `98.5%` | `93.0%` | Interview-day prompt + RMS `Interviewed` tag | [Work Institute / NextMantra Retention Data](https://nextmantra.ai/blog/candidate-ghosting) |
| **North Star: Verified Attendance Rate** | **`21.0%`** (`20,978`) | **`36.3%`** (`36,300`) | **`+15.3 pp` (`+15,322` confirmed seekers)** | Exceeds `36.0%` 6-month target |
