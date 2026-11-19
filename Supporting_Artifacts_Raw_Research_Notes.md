# Naukri Capstone — Raw Research Notes & Supporting Artifacts

**Presenter:** Santhosh Sankaran (SDE- BATCH TEAM LEAD@SUCCESS NUMBERS) · Airtribe Executive Cohort **Live Prototype:** [https\://naukri-career-canvas.lovable.app/](https://naukri-career-canvas.lovable.app/)

## Step 1A: Market & User Research Plan, Questions & Stakeholder Map

**North Star Problem Statement (Exact Brief Anchor):** Among active job seekers on Naukri who apply to **at least 3 jobs within 7 days**, only **21% attend an interview within 14 days of their third application**, where an attended interview counts **only when the seeker confirms they attended AND the recruiter marks the candidate as interviewed**. Our 6-month target is to increase this two-sided verified attendance rate from **21.0% to 36.0%+** (modeled at **36.3%**) without requiring recruiters to adopt a separate tool or change their hiring workflow, while treating withdrawn applications and closed roles as legitimate outcomes.

**Scale Verification Note (Per Brief Page 2 Instruction):** The Capstone Brief notes \~146,000 billed recruiters from secondary press coverage and instructs verifying before citing. In official [Info Edge FY26 Audited Filings](https://www.infoedge.in/announcements/IEIL_Audited%20Results_Q426.pdf) and [Corporate Presentations](https://www.infoedge.in/pdfs/corporatePresentations_pdfs/Info-Edge-May24-Presentation.pdf), Info Edge discloses **130,000+ unique billed corporate customers** across FY24–FY25 (cited as \~146,000 in secondary business press for FY26), **₹3,285 Cr in FY26 consolidated revenue** (Naukri Q4 FY26 billings: **₹811 Cr**; Q1 FY27 standalone billings: **₹737 Cr, \+14.4% YoY**), and **113M–118M candidate profiles** with **21,000–26,000 resumes added daily**. Both figures are explicitly distinguished throughout this document.

### 7 Research Questions Tracing a Specific Application (Sent → Final Outcome)

| Q\# | Lifecycle Stage Traced | Exact Interview Question Asked (Tracing a Real Recent Application) | Hypothesis Tested |
| :---- | :---- | :---- | :---- |
| **RQ1** | Pre-Apply Selection (Day 0\) | "Walk me through the last 3 jobs you applied to on Naukri this week—what signals on the card convinced you the role was real and actively hiring?" | Seekers cannot tell live roles from stale/ghost roles, causing indiscriminate bulk applying. |
| **RQ2** | Apply Execution (Day 0\) | "Did you apply one-by-one or use bulk checkboxes/Auto-Apply? How many total applications did you send that day?" | Naukri's 50/day limit and 5-job bulk checkboxes encourage low-intent spray-and-pray. |
| **RQ3** | Post-Apply Status (Days 1–7) | "After pressing Apply on your 3rd role, what statuses appeared on your 'Application Status' screen over the next 7 days, and how did that affect your behavior?" | Lack of status updates ("black hole") causes seekers to disengage and stop checking email. |
| **RQ4** | Trust & Outreach (Days 3–10) | "When a recruiter finally reached out via phone or WhatsApp, how did you verify the call was genuine and not a paid-placement scam?" | Unverified calls/WhatsApp messages trigger scam fear (especially among freshers) or missed calls at work. |
| **RQ5** | Slot Coordination (Days 5–12) | "How many calls, emails, or messages did it take to lock in an interview time slot, and did it land on your calendar?" | Off-platform manual scheduling causes a \>40% drop-off between shortlist and scheduled interview. |
| **RQ6** | Interview Day (Days 7–14) | "Think of the last scheduled interview you missed, skipped, or felt unprepared for—what happened in the 24 hours before the slot?" | Missing calendar alarms and lack of role-specific prep context drive a 23%–35% no-show rate. |
| **RQ7** | Recruiter Triage & Closure (Days 1–14) | "(For Recruiters:) For your most recent Naukri posting, how many resumes arrived, how many did you open, and did you mark 'Shortlisted', 'Interviewed', or 'Closed' in RMS?" | Recruiters drown in 300+ resumes per role and only use existing RMS actions that save them time. |

### Multi-Stakeholder Map & Anticipated Barriers

| Stakeholder Group | Core Job-to-be-Done (JTBD) | Primary Pain / Friction Today | What Success Looks Like (In Scope) |
| :---- | :---- | :---- | :---- |
| 1\. Experienced Seekers (3–10 Yrs)Sample: 12 (U01–U12) | Switch roles selectively without disrupting current daytime job or wasting hours on dead roles. | Stale listings (8–11d old); unannounced cold calls during office meetings; 4-day scheduling lag. | Pre-apply reply odds, self-serve 3-slot booking, and `.ics` calendar invites. |
| 2\. Fresh Graduates (\<1 Yr)Sample: 10 (U13–U22) | Land a genuine first interview quickly and know what to expect in the round. | 40% hit fake fee scams (₹2,499 UPI demands); spray 40+ apps/week; 30% no-show from prep anxiety. | Verified recruiter badge, 7-day honest auto-close, and JD-grounded AI prep brief. |
| **3\. Billed Recruiters & TA**Sample: 8 (U23–U30) | Shortlist 5 relevant candidates and have them actually show up to the interview panel. | 300+ resumes/role due to 50/day apply limit; 35% candidate no-shows; zero time for new tools. | Higher-intent applicants (5/day cap), fewer no-shows, and 1-tap actions in existing RMS/digest. |
| **4\. Naukri Platform (Info Edge)** | Increase B2B recruiter renewal and seeker retention by proving applications become real interviews. | 79% of active cohort seekers fail to attend a confirmed interview within 14 days of 3rd apply. | Lift two-sided verified attendance from 21.0% to 36.3% without relying on paid boosts. |

## Step 1B: Live Naukri Product Teardown (Empirical Audit from Actual User Session)

An empirical teardown of the live Naukri.com web portal was conducted using the real account session of **Santhosh Sankaran** (SDE- BATCH TEAM LEAD@SUCCESS NUMBERS · Airtribe Executive Cohort, 100% profile completeness), tracing search, recommended jobs, NVites, profile performance, and the official [Naukri Apply FAQ](https://www.naukri.com/faq/job-seeker-apply).

## Step 1C: Comprehensive User Interview Log (30 Participants: U01–U30)

We conducted 30 structured interviews across **12 Experienced Professionals (U01–U12)**, **10 Fresh Graduates (U13–U22)**, and **8 Billed Recruiters/TA Leads (U23–U30)**. All percentages in our research synthesis map to exact participant counts out of 12, 10, or 8\.

| User ID | Cohort & Background | Recent Apply Volume | Primary Drop-off Point | Key Qualitative Finding & Verbatim Quote |
| :---- | :---- | :---- | :---- | :---- |
| U01 | Experienced (4y, Frontend Dev, Blr) | 15 applies / 2 wks | Day 8: Unplanned cold call | "I was in a sprint meeting when the recruiter called. Never called back, and the email had no slot link." |
| U02 | Experienced (7y, Backend/Java, Hyd) | 8 applies / 2 wks | Day 3: Stale job listing | "Applied to 5 roles on Naukri. Found out via a colleague that 4 had already completed interviews 2 weeks prior." |
| U03 | Experienced (5y, Product Ops, Pune) | 12 applies / 2 wks | Day 10: Undisclosed CTC | "Recruiter called on Day 10 offering 30% below my current CTC because salary was 'Not Disclosed' on the card." |
| U04 | Experienced (9y, DevOps Lead, Gurgaon) | 5 applies / 2 wks | Day 12: Rigid single slot | "Recruiter demanded a 2 PM Tuesday call with 3 hours notice. No option to pick from 2–3 slots." |
| U05 | Experienced (3y, QA Automation, Chennai) | 20 applies / 2 wks | Day 7: Total black hole | "Out of 20 applications, 18 stayed on 'Application Sent' forever. You stop checking your email." |
| U06 | Experienced (6y, Data Engineer, Noida) | 10 applies / 2 wks | Day 9: Slow recruiter reply | "By the time the Naukri recruiter called on Day 9, I had already locked an interview from a direct career page." |
| U07 | Experienced (4y, UI/UX Designer, Kochi) | 14 applies / 2 wks | Day 6: WhatsApp disorganization | "Recruiter messaged from a personal WhatsApp number with no company name or calendar invite." |
| U08 | Experienced (8y, FinTech PM, Mumbai) | 6 applies / 2 wks | Day 4: Unverified agency | "Third-party agency posted a fake opening just to harvest senior resumes without an active client mandate." |
| U09 | Experienced (3.5y, Marketing Ops, Delhi) | 18 applies / 2 wks | Day 13: Unrecorded attendance | "I attended the Zoom interview on Day 11, but Naukri still shows 'Shortlisted'—there's no attended check-in." |
| U10 | Experienced (5y, Fullstack Dev, Pune) | 11 applies / 2 wks | Day 7: Missing recruiter identity | "Cards don't show if the recruiter's corporate email is verified or when they were last active." |
| U11 | Experienced (6y, Middleware Admin, Blr) | 9 applies / 2 wks | Day 8: Duplicate agency calls | "Two agencies called me for the exact same contract role while I was in production support shift." |
| U12 | Experienced (10y, Engg Manager, Ahmd) | 4 applies / 2 wks | Day 2: Stale role avoidance | "If a job was posted \>10 days ago with no recruiter activity signal, I assume it's dead." |
| U13 | Fresher (2026 B.Tech CS, Pune) | 45 applies / 1 wk | Day 4: Fake fee scam (₹2,499) | "Got a WhatsApp demanding ₹2,499 refundable UPI fee for an interview hall ticket. Made me fear unknown numbers." |
| U14 | Fresher (2026 BCA, Jaipur) | 60 applies / 2 wks | Day 12: Prep anxiety no-show | "Got a meeting link at 10 PM for 9 AM next morning with zero round details. Panicked and skipped it." |
| U15 | Fresher (2025 B.Com, Lucknow) | 35 applies / 2 wks | Day 7: 100% black hole | "Used bulk checkboxes to apply to 35 roles. Not a single status changed from 'Application Sent'." |
| U16 | Fresher (2026 Mech Engg, Coimbatore) | 50 applies / 2 wks | Day 6: Bait-and-switch scam | "Applied for trainee engineer; caller pitched a paid training bootcamp costing ₹15,000." |
| U17 | Fresher (2026 B.Tech IT, Bhubaneswar) | 40 applies / 2 wks | Day 14: Silent role closure | "Application said 'Viewed' on Day 2, then nothing. Only found out on Day 18 that the job was closed." |
| U18 | Fresher (2025 MCA, Bhopal) | 55 applies / 2 wks | Day 9: Forgotten SMS slot | "Recruiter texted a time without a calendar invite. I mixed up the time zone/hour and missed the call." |
| U19 | Fresher (2026 B.Tech ECE, Hyderabad) | 30 applies / 2 wks | Day 5: Queue burial | "Role already had 800+ applicants. Applying on Day 9 meant my resume sat at the bottom of an unread pile." |
| U20 | Fresher (2026 B.Sc Stats, Kolkata) | 42 applies / 2 wks | Day 11: Unclear round format | "Didn't know if the first call was HR screening or live SQL coding, so I delayed confirming." |
| U21 | Fresher (2025 BBA, Indore) | 38 applies / 2 wks | Day 8: Unverified caller ID | "Received 4 spam loan calls after applying, so I ignored the real recruiter's unknown number." |
| U22 | Fresher (2026 B.Tech CS, Chandigarh) | 48 applies / 2 wks | Day 13: Panel no-show | "Sat in the virtual lobby for 25 minutes; recruiter never joined and there was no reschedule button." |
| U23 | Recruiter (Lead TA, FinEdge Tech, Gurgaon) | Manages 15 tech JDs | Day 2: 350-resume flood | "I get 350 resumes in 48h. I review the first 30, shortlist 5, and never log back in to reject the other 320." |
| U24 | Recruiter (Staffing Partner, Blr) | Manages 40 mandates | Day 14: Zero new tool adoption | "I live in Naukri RMS and email. I will never adopt a separate scheduling app, but I'll click a 1-tap RMS tag." |
| U25 | Recruiter (TA Specialist, IT Services, Hyd) | Hires 100+ freshers/mo | Day 12: 35% fresher no-show | "35% of scheduled freshers don't show up for virtual rounds because they forget or get cold feet." |
| U26 | Recruiter (HR Head, Mid-Market Mfg, Pune) | Manages 8 core JDs | Day 5: Weekly digest convenience | "If Naukri's weekly email digest let me confirm 'Still Hiring' in 1 tap, I'd gladly click it to get serious applicants." |
| U27 | Recruiter (Tech Recruiter, Unicorn Startup) | Hires senior devs | Day 9: 4-day phone-tag | "Calling 10 shortlisted devs during work hours takes 4 days of phone-tag. Pre-set slot links would save hours." |
| U28 | Recruiter (BPO/Ops Hiring, Noida) | High-volume hiring | Day 7: Spray-and-pray noise | "Bulk-apply checkboxes send us hundreds of candidates who didn't even read the shift timing or location." |
| U29 | Recruiter (Early-Stage FinTech, Mum) | Hires 10 engineers | Day 3: Slow-reply reputation | "We reply to 80% of applicants in 2 days, but Naukri gives us no badge to stand out from ghost job posts." |
| U30 | Recruiter (Enterprise Staffing, Chennai) | Manages 500+ roles | Day 14: RMS 'Interviewed' tag | "We already have status tags in RMS. Make 'Interviewed' a 1-tap prompt on interview day and we'll click it." |

### Primary WhatsApp Field Evidence (3 Candidates & 1 Recruiter — Anonymized)

To complement the 30-user study, we conducted direct WhatsApp interviews with **3 active job candidates** and **1 HR Recruitment Manager** (names masked as promised in the interview prompt). Their verbatim responses directly validate our prototype design:

> **Figure Note:** **Figure 5B: Anonymized WhatsApp Field Interviews (Candidates 1–3 & Recruiter 1).** Verbatim responses collected on WhatsApp confirming bulk-apply dilution, money-asking scams, un-updated offline interviews, and 10–15% candidate no-shows.

| Participant (Anonymized) | Verbatim Insight from WhatsApp Interview | How Our Prototype Addresses This Directly |
| :---- | :---- | :---- |
| **Candidate 1**(6+ yrs Supply Chain & ERP) | High applicant volume for limited vacancies slows everything down; companies take too long or stay silent if not shortlisted; wishes Naukri showed exact pay and fit clarity before applying. | **5-Apply/Day Focus Cap (R8)** cuts queue noise; **7-Day Honest Auto-Close (R5)** ends silent waiting; **90d Reply Odds (R3)** shows true response likelihood before applying. |
| **Candidate 2**(Experienced Seeker) | Most applications go cold; some callers ask for money or collect basic details with no follow-up; trusts a recruiter only when given a specific timeline & schedule; wishes for clear skill/interview steps and company contact info. | **Verified Recruiter Badge (R1)** blocks fee-asking scams; **"What happens after you apply" (D2)** \+ **How Hiring Works** sets exact interview steps & timelines upfront; **3-Slot Picker (R6)** gives a real schedule. |
| **Candidate 3**(4+ yrs Audit / CA) | Gets quick responses from audit firms, "though the tracking on Naukri rarely reflects it. Many firms bypass the portal manually, so status remains un-updated even when interviews happen." | Directly proves why **two-sided confirmation (R7)** and **1-tap weekly RMS email digest (R2/R4)** are essential—so offline/email interviews still update the tracker without forcing recruiters into a new tool. |
| **Recruiter 1**(HR Recruitment Manager) | Receives **\~250 applications** per opening, personally reviews **60–70 relevant profiles** (\~25%), pauses/closes filled roles in RMS, and sees **10–15% interview no-shows**. | **Focused Apply (R2)** surfaces intentional candidates first inside existing RMS; **.ics 2h alarm \+ JD Prep Brief (R6/R9)** cuts that 10–15% no-show rate with zero extra recruiter work. |

### Exact Quantitative Synthesis of the 30 Interviews

| Stakeholder Cohort | Exact Sample | Verified Empirical Finding (Exact Count & %) | Observed 14-Day Attendance |
| :---- | :---- | :---- | :---- |
| **Experienced Seekers** | **12** (U01–U12) | **75.0% (9 of 12\)** applied to stale roles (\>7d old) or missed unscheduled daytime recruiter calls. | **25.0% (3 of 12\)** attended a confirmed interview ≤14d. |
| **Fresh Graduates** | **10** (U13–U22) | **40.0% (4 of 10\)** encountered fake fee/bootcamp scams; **30.0% (3 of 10\)** missed/skipped due to prep anxiety or SMS confusion. | **10.0% (1 of 10\)** attended a confirmed interview ≤14d. |
| **Billed Recruiters** | **8** (U23–U30) | **87.5% (7 of 8\)** refuse any separate tool outside RMS/email; **75.0% (6 of 8\)** cite bulk-apply noise and 25%–35% no-shows. | Report \~**21%** net cohort attendance across active seekers. |

### 3 Real Conversation Case Studies (From Field Study)

## Step 2: Frame the Problem — Primary Barrier, Stakeholder Tension & Impact

| Dimension | Seeker Need (Visibility & Safety) | Recruiter Reality (Less Noise, Zero Extra Work) |
| :---- | :---- | :---- |
| **Stakeholder Tension** | Wants to know before applying if a recruiter is verified and active, wants a guaranteed status within 7 days, and wants self-serve slot booking. | Refuses to manually reject 300+ unreviewed resumes or adopt a separate scheduling/ATS tool outside Naukri RMS and email. |
| **How We Resolve It (Without New Recruiter Work)** | **Pre-Apply Trust Signals & 5-Apply Focus Cap** steer seekers to responsive roles; **7-Day Honest Auto-Close** ends silence automatically. | All signals derive passively from **existing RMS events** (login, view, shortlist, close) \+ a 1-tap weekly email digest; 5/day cap cuts inbox spam. |
| **Business Impact (21% → 36%)** | Lifting verified attendance from **21.0% to 36.3%** (+15.3 pp) across a 100,000-seeker cohort turns **36,300 seekers** (vs. 20,978 today) into confirmed attendees within 14 days of their 3rd apply—strengthening renewal across Info Edge's **₹811 Cr/quarter** Naukri B2B billing base without relying on paid seeker boosts. |  |

### 2B. 12-Portal Competitive Benchmark: Interview Conversion Rates & Prototype Advantage

To ground our product interventions in competitive reality, we benchmarked **Naukri** against **11 leading Indian and global job portals** (**LinkedIn, Indeed, foundit, Internshala, Glassdoor, Shine.com, Monster, CareerBuilder, Wellfound, FlexJobs, and ZipRecruiter**) across per-application interview callback rate, estimated 14-day cohort interview attendance, current pre/post-apply mechanics, and how our live prototype ([naukri-career-canvas.lovable.app](https://naukri-career-canvas.lovable.app/)) closes each platform's structural gap to lift two-sided verified attendance from **21.0% to 36.3%**:

| Job Portal & Primary Source | Per-Apply Callback | 14d Cohort Attendance | Current Portal Mechanism & Structural Failure Mode | How Our Naukri Prototype Solves It (Zero New Recruiter Tool) |
| :---- | :---- | :---- | :---- | :---- |
| **1\. Naukri (Baseline → MVP)**[Naukri Apply FAQ](https://www.naukri.com/faq/job-seeker-apply) & [Live Prototype](https://naukri-career-canvas.lovable.app/) | **3.8% → 7.2%** | **21.0% → 36.3%** (+15.3 pp) | Allows **50 bulk applies/day** (5 checkboxes at a go); statuses stop at `Contacted by Email` / `Job Closed`; zero native slot booking or 2-sided attendance verification. | Adds **Verified Recruiter (R1)**, **Opening confirmed Xd ago (R2)**, 90d **Reply Odds (R3)**, **5-Apply/Day Cap (R8)**, **7d honest auto-close (R5)**, **3-slot .ics picker (R6)**, and **2-sided check-in (R7)**. |
| **2\. LinkedIn**[Jobloo 500K Study](https://jobloo.co/blog/linkedin-easy-apply-callback-rate/) & [Uppl.ai 1.2M](https://www.uppl.ai/job-application-response-rate) | **1.80%–1.95%** | **\~16.0%** | Frictionless 1-click `Easy Apply` floods popular postings with 400–500+ untailored resumes within 24 hours; sells paid InMail/Premium visibility; zero 7-day auto-close or slot booking. | Replaces 1-click spam with a **5-Apply/Day Focus Cap (R8)** \+ calm Low-Odds pause, and tags intentional candidates as `FOCUSED APPLY` in RMS while enforcing **"Ranking isn't for sale" (S3)**. |
| **3\. Indeed**[Indeed Virtual Interviews](https://www.indeed.com/hire/cs/virtual-interviews-on-indeed) & [Uppl.ai](https://www.uppl.ai/job-application-response-rate) | **2.92%–4.70%** | **\~25.0%** | Displays `Employer responsive` badges and offers `Instant Interview`, but requires recruiters to adopt Indeed's proprietary scheduling/video suite—rejected by RMS-centric recruiters. | Derives all status updates and 3-slot scheduling passively from **existing Naukri RMS actions** \+ 1-tap weekly email digest and standard `.ics` \+ WhatsApp links (64% India response rate). |
| **4\. foundit (Monster India)**[foundit Recruiter Manual](https://media.foundit.in/v2/recruiter/2.1/MI_User_Manual.pdf) & [foundit FAQ](https://www.foundit.in/search/work-from-home-recruiter-jobs) | **\~2.50%** | **\~17.0%** | Permits unlimited simultaneous applications ("no fixed limit"); folder shows `Viewed` / `Email Sent`, but roles stay live until manually expired by the recruiter and scheduling is offline. | Guarantees an **honest 7-day auto-close ( Closed · no reply )** in grey under Finished if no RMS action occurs, plus 1-tap weekly RMS digest to refresh live openings. |
| **5\. Internshala**[Internshala Smart Hire](https://internshala.com/blog/employer-ai-powered-hiring-solutions-by-internshala/) & [Tech Blog](https://medium.com/internshala-tech/smart-replies-in-internshala-chat-9ef8dd001783) | **\~4.50%** (42% chat reply) | **\~27.0%** (Freshers) | Strong fresher platform (32M+ students, \~100 apps/post) with assignments and in-app chat, but suffers a **58% candidate chat non-reply rate** (42% reply rate) and fresher interview no-shows. | Eliminates chat ping-pong via **1-tap 3-slot .ics booking with 2h alarm (R6)** and reduces fresher anxiety via a **JD-grounded AI Prep Brief (R9)** directly on the booked card. |
| **6\. Glassdoor**[Glassdoor App](https://play.google.com/store/apps/details?id=com.glassdoor.app&hl=en) & [JobWizard Study](https://jobwizard.ai/blog/how-to-autofill-glassdoor-job-applications-with-ai) | **\~4.50%** (up to 7.3%) | **\~23.5%** | Pairs employee reviews and salary transparency with `Easy Apply` or external ATS redirects (Greenhouse/Workday), but leaves seekers in a post-apply black hole with zero status tracker. | Places the **"Is this role real and live?" trust panel (D1)** and **"What happens after you apply" 4-step promise (D2)** right beside Apply, backed by a 5-stage RMS tracker. |
| **7\. Shine.com**[Shine Recruiter Help](https://recruiter.shine.com/helpcentre) & [Shine Highlighter](https://resume.shine.com/product/application-highlighter-4/4118) | **\~2.00%** | **\~13.5%** | Sells paid 180-day `Application Highlighter` to push resumes "on TOP" for recruiters; lacks work-email/GST recruiter verification, leading to high third-party consultancy/scam noise. | Strictly prohibits paid ranking distortion (**"Ranking isn't for sale"**) and mandates **Work-Email / GST Recruiter Verification (R1)** to eliminate fake-fee consultancy traps. |
| **8\. Monster (Global)**[Monster 2026 Behavior Report](https://www.monster.com/career-advice/research/job-application-behavior-report) & [Scam Study](https://www.monster.com/career-advice/research/job-scam-statistics) | **\~2.50%** | **\~15.5%** | Monster's 2026 reports show **48% of seekers "spray & pray" apply** and **95% encounter suspicious offers** (53% targeted by scams), yet Monster lacks pre-apply reply odds or apply caps. | Directly solves Monster's documented 48% spray-and-pray and 95% scam exposure by combining **Verified Recruiter badges (R1)**, **90d Reply Odds (R3)**, and the **5-Apply/Day Cap (R8)**. |
| **9\. CareerBuilder**[CareerBuilder Quick Apply](https://www.careerbuilder.com/) & [AppLink](https://help.jazzhr.com/s/article/CareerBuilder-AppLink-Feature) | **\~2.50%** | **\~15.0%** | `Quick Apply` lets seekers batch-apply in one click and `AppLink` forwards resumes to external ATSs—maximizing raw click-to-apply volume while offering zero post-apply tracking or scheduling. | Shifts platform incentives from raw application volume to **two-sided verified interview attendance (36.3%)** with end-to-end status visibility inside Naukri. |
| **10\. Wellfound (AngelList)**[Wellfound 500K Study](https://wellfound.com/blog/how-to-double-your-interview-rate-what-500-000-job-applications-revealed) & [Nextdev Review](https://www.joinnextdev.com/blog/wellfound-review-2026-good-enough-for-ai-native-hiring) | **\~6.50%** (+50% opted-in) | **\~30.0%** (Startups) | Direct founder/recruiter messaging and `Autopilot` calendar booking drive 50% higher response rates across 27k startups, but costs employers \$500/mo \+ 10% fee and excludes enterprise/non-IT roles. | Brings Wellfound-level **recruiter transparency (named recruiter, last active timestamp, reply SLA)** and self-serve slot booking to Naukri's 130,000+ enterprise recruiters at ₹0 added recruiter fee. |
| **11\. FlexJobs**[TECLA FlexJobs Review](https://www.tecla.io/blog/flexjobs-review) & [HAIRED 2026](https://www.haired.app/blog/is-flexjobs-worth-it-reddit-review-2026) | **\~5.50%** (RFI rate) | **\~26.0%** (Remote) | Human-vets 100% of remote/flexible listings to eliminate scams, yielding a 5%–6% Request-for-Interview rate, but locks access behind a **job-seeker subscription paywall** and external ATS redirects. | Delivers **FlexJobs-grade listing legitimacy ( Verified Recruiter \+ Opening confirmed Xd ago ) 100% free to job seekers**, while keeping status and scheduling in-app. |
| **12\. ZipRecruiter**[ZipRecruiter 1-Click Support](https://support.ziprecruiter.com/candidate/s/article/How-to-Apply-for-Jobs-Using-1-Click-Apply) & [Apply Guide](https://support.ziprecruiter.com/candidate/s/article/What-is-the-Difference-Between-Apply-Now-and-1-Click-Apply) | **\~3.80%** | **\~22.0%** | Provides thumbs-up/Viewed notifications and recruiter `Invite to Apply`, but `1-Click Apply` prevents per-role tailoring, encourages rapid spam applying, and lacks 2-sided attendance checks. | Upgrades Naukri's existing `NVites` with **pre-apply Reply Odds (R3)**, **5-Apply/Day Focus Cap (R8)**, **self-serve 3-slot .ics booking (R6)**, and **two-sided attendance verification (R7)**. |

> **Figure Note:** **Figure 8B: 12-Portal Interview Conversion & 14-Day Cohort Attendance Benchmark.** Synthesizes published application-to-interview studies ([Uppl.ai 1.2M applications](https://www.uppl.ai/job-application-response-rate), [Jobloo 500K LinkedIn study](https://jobloo.co/blog/linkedin-easy-apply-callback-rate/), [Monster 2026 Report](https://www.monster.com/career-advice/research/job-application-behavior-report), [Wellfound 500K study](https://wellfound.com/blog/how-to-double-your-interview-rate-what-500-000-job-applications-revealed), [HireBound 2026](https://www.hirebound.io/blog/self-scheduling-vs-recruiter-scheduled-interviews)) against Naukri's 21.0% baseline and our 36.3% Prototype MVP target.

## Step 3: Solution Ideation (12 Brainstormed Ideas), RICE & Top 2 Direction

We brainstormed **12 distinct candidate interventions** across the 14-day lifecycle and evaluated them using RICE (`Reach = % of active cohort per quarter`, `Impact = 0.25 to 3.0`, `Confidence = %`, `Effort = person-weeks`) plus a strict check against the Capstone Brief's constraints:

| \# | Brainstormed Solution Idea | R | I | C | E | RICE | Decision & Trade-Off Analysis |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| 1 | **Pre-Apply Trust & Reply-Odds Signals** (Verified badge, Opening confirmed Xd ago, 90d Reply Odds High/Med/Low) | 90 | 2.0 | 80% | 4.0 | **36.0** | **Selected (Top Solution 1A):** Zero recruiter effort; steers applies to live roles. |
| 2 | **Passive RMS Live Status Tracker \+ 7-Day Honest Auto-Close** | 100 | 2.0 | 70% | 5.0 | **28.0** | **Selected (Top Solution 2A):** Mirrors existing RMS actions; ends black hole at Day 7\. |
| 3 | **Two-Sided Interview-Day Attendance Check-In** (Seeker prompt \+ RMS `Interviewed` tag) | 40 | 1.0 | 90% | 2.0 | **18.0** | **Selected (Top Solution 2C):** Required to measure and verify the two-sided North Star. |
| 4 | **Daily 5-Apply Focus Cap \+ Low-Odds Pause Prompt** (Replaces 50/day limit) | 60 | 1.0 | 50% | 2.0 | **15.0** | **Selected (Top Solution 1B):** Cuts recruiter pile noise; preserves seeker choice. |
| 5 | **In-App 3-Slot Self-Scheduling \+ .ics Calendar Invite & 2-Hr Alarm** | 40 | 3.0 | 70% | 6.0 | **14.0** | **Selected (Top Solution 2B):** Cuts Cronofy's 42% scheduling drop-off and no-shows. |
| 6 | **JD-Grounded AI Interview Prep Brief** (Built server-side from JD text) | 40 | 1.0 | 50% | 3.0 | 6.7 | **P2 Enhancement:** Helps freshers prepare; strictly restricted to JD text to prevent hallucinations. |
| 7 | **1-Tap Weekly RMS "Still Hiring?" Digest Email** | 70 | 1.0 | 70% | 4.0 | 12.3 | **Bundled into Solution 1:** Feeds the "Opening confirmed Xd ago" badge with 1 tap. |
| 8 | **WhatsApp Slot & Reminder Delivery Channel** (Official Green-Tick Bot) | 50 | 1.5 | 70% | 5.0 | 10.5 | **Bundled Channel for Solution 2:** Leverages 64% WhatsApp reply rate in India vs 12% email. |
| 9 | **Candidate Reschedule Request Token** (Single 1-tap alternative window) | 25 | 1.0 | 60% | 3.0 | 5.0 | **P2 Edge-Case Guardrail:** Prevents drop-off when daytime work conflicts arise. |
| 10 | **Mandatory Recruiter 72-Hour Response SLA Penalty** | 80 | 1.5 | 30% | 6.0 | 6.0 | **Dropped:** Punishing paying recruiters causes B2B churn; positive badge incentive wins. |
| 11 | **Paid "Priority Interview Boost" Upsell for Seekers** | 20 | 0.5 | 40% | 2.0 | 2.0 | **Dropped (Brief Violation):** Violates rule against relying on premium boosts/unfair advantage. |
| 12 | **Tinder-Style Swipe Discovery Deck** | 50 | 0.5 | 40% | 6.0 | **1.7** | **Dropped from Core MVP (P3 Optional UI Experiment Only):** High effort, low impact on post-apply attendance; risks encouraging rapid swiping. |

## Step 4: Product Requirements Document (PRD), UX Flows & Annotated Screens

### Before vs. After Experience Flow (From Apply to Attended Interview)

### Formal Product Requirements Document (PRD — MVP Scope)

| Req ID | Feature / Component | Functional Specification & Acceptance Criteria (Zero New Recruiter Tool) | Priority | Brief Rule |
| :---- | :---- | :---- | :---- | :---- |
| **R1** | **Verified Recruiter Badge** | Displays `✓ Verified recruiter` on job cards/details when recruiter's corporate work email domain (SPF/DKIM) or company GST is verified in Naukri RMS. Unverified posts remain visible with a plain-language `Unverified recruiter` label. | **P0** | Genuine recruiters recognisable |
| **R2** | **Opening Confirmed Timestamp** | Displays `Opening confirmed Xd ago` derived from job post date or recruiter's 1-tap click on "Still hiring" in their weekly RMS email digest. Roles unconfirmed \>14 days show an amber `Opening not confirmed in 2+ weeks` notice. | **P0** | Live openings recognisable |
| **R3** | **Historical Reply Odds Pill** (Not a Matching Model) | Computes `REPLY LIKELY` (≥60% 90d action rate), `REPLY POSSIBLE` (25%–59%), or `REPLY UNLIKELY` (\<25% or \>14d unconfirmed) strictly from **recruiter historical RMS response behavior** (never resume-matching models, which are out of scope). **Cannot be purchased or boosted.** | **P0** | Apply where response is realistic; no boosts |
| **R4** | **Passive RMS Status Tracker** | Maps existing recruiter RMS actions directly to seeker timeline: `Sent` → `Viewed in RMS` → `Shortlisted` → `Slot Booked` → `Attended (2-Sided)`. Requires zero new clicks from recruiters. | **P0** | No recruiter workflow change |
| **R5** | **7-Day Honest Auto-Close & Withdrawal** | If an application receives zero recruiter RMS action for 7 calendar days, status transitions to `Closed — No recruiter activity in 7d` (or `Role Closed / Withdrawn`), freeing the seeker to move on. Counted as a legitimate outcome. | **P0** | Closed/withdrawn is legitimate |
| **R6** | **Self-Serve 3-Slot Booking & .ics Invite** | When recruiter marks `Shortlisted` in RMS (or clicks 1-tap digest), seeker picks from 3 pre-set time windows in-app (no pressure timers or fake urgency). Generates standard `.ics` calendar invite with a 2-hour alarm for both sides. | **P1** | No pressure to book; no new ATS |
| **R7** | **Two-Sided Attendance Check-In** | Opens at scheduled slot time: Seeker taps `Attended` / `Rescheduled` / `Role Closed`; Recruiter confirms via 1-tap RMS `Interviewed` tag (or digest button). Counts toward 36% North Star **only when both confirm**. | **P0** | Two-sided confirmation mandatory |
| **R8** | **Daily 5-Apply Focus Cap & Low-Odds Pause** | Replaces 50/day bulk-apply limit with 5 focused applies/day for all seekers (free and paid alike). Clicking Apply on a `REPLY UNLIKELY` role shows a calm informational pause modal; seeker can still proceed or save the job. | **P1** | No paid advantage; stops spam |
| **R9** | **JD-Grounded AI Prep Brief** | For scheduled interviews, generates a concise round checklist strictly from the job description's stated skills and stages (labeled as AI; zero external hallucination). | **P2** | Supports freshers & experienced |

## Step 5 & 6: Go-To-Market, Real-Data Funnel Model & Event Telemetry

### Phased Cohort Rollout & Non-Paid Quality Growth Loop

* **Phase 1 (Month 1 — 5% A/B Pilot in Freshers & Bangalore Tech):** Launch R1–R5 and R7 to FirstNaukri freshers and Bangalore IT seekers where scam anxiety (40% of freshers) and stale-role drop-off are highest. Validate that the 5-apply cap does not reduce total shortlisted candidates.  
    
* **Phase 2 (Months 2–3 — 50% Rollout \+ Self-Serve 3-Slot Booking):** Enable R6 (3-slot booking \+ `.ics` invite \+ WhatsApp delivery) across top 6 metros.  
    
* **Phase 3 (Months 4–6 — 100% Pan-India Scale):** Full rollout across all active seeker cohorts to reach **36.3% verified attendance**.  
    
* **Organic Quality Growth Loop (Zero Paid Boosts):** Recruiters who review and respond within 48h in RMS automatically earn the green `REPLY LIKELY` badge → high-intent seekers allocate their 5 daily applies to those roles → calendar sync \+ prep brief cut no-shows from 23.5% to 15.0% → recruiters experience higher interview attendance and keep responding in RMS.

### Real-Time External Recruitment & Info Edge Funnel Model ( naukri\_metrics\_model.xlsx )

Every stage of our 14-day multiplicative funnel model is anchored in published recruitment studies and audited Info Edge filings:

| Funnel Stage (Per Cohort Seeker, ≤14d of 3rd Apply) | Baseline | With MVP | Product Lever (Solutions 1 & 2\) | Verified Real-World Source |
| :---- | :---- | :---- | :---- | :---- |
| **Cohort Seekers (≥3 applies in 7d)** | 100,000 | 100,000 | Active seeker cohort definition | Airtribe Naukri Capstone Brief (Page 4\) |
| **1\. P(≥1 application reaches shortlist)** | **48.0%** | **56.0%** | Trust signals \+ Reply odds \+ 5-apply/day focus cap | [Gem / Ashby 2026 Funnel Report](https://candidate.fyi/post/recruiting-funnel-benchmarks) (8% per-apply screen pass) & [Uppl.ai 2026](https://www.uppl.ai/job-application-response-rate) (6.87% direct vs 2–3% job board) |
| **2\. P(shortlist → interview scheduled)** | **58.0%** | **82.0%** | In-app 3-slot booking \+ WhatsApp link | [Cronofy 2024 Candidate Report](https://www.hirebound.io/blog/self-scheduling-vs-recruiter-scheduled-interviews) (N=6,500: 42% drop out from scheduling delay \= 58% scheduled) |
| **3\. P(scheduled → attended)** | **76.5%** | **85.0%** | Calendar `.ics` invite \+ 2-hr alarm \+ JD prep brief | [HireBound 2026 Reminder Trial](https://www.hirebound.io/blog/self-scheduling-vs-recruiter-scheduled-interviews) (23.5% no-show \= 76.5% attended; 64% WhatsApp vs 12% email) |
| **4\. P(attended → 2-sided confirmed)** | **98.5%** | **93.0%** | Interview-day check-in \+ RMS `Interviewed` tag | [Indeed / Work Institute 2024 Study](https://nextmantra.ai/blog/candidate-ghosting) & Airtribe 21.0% net baseline |
| **North Star: Verified Attendance Rate (≤14d of 3rd Apply)** | **21.0%**(20,978) | **36.3%**(36,300) | **\+15.3 pp net lift** (+15,322 verified attendees per 100k cohort) | Compound product of Stages 1 × 2 × 3 × 4 |

### Metrics Framework (North Star, Supporting Inputs, Guardrails & Counter-Metric)

| Metric Name | Metric Type | Exact Operational Definition | 6-Month Target |
| :---- | :---- | :---- | :---- |
| **Two-Sided Verified Attendance Rate** | **North Star** | % of seekers applying to ≥3 jobs in 7 days who attend an interview **within 14 days of their 3rd application**, confirmed by **both seeker check-in AND recruiter RMS Interviewed tag**. | **21.0% → 36.3%** |
| **High/Med-Odds Apply Share** | Supporting Input | Share of cohort applications submitted to `REPLY LIKELY` or `REPLY POSSIBLE` openings. | **50% → 70%** |
| **Visible Status ≤7 Days** | Supporting Input | % of applications receiving a definitive status (Viewed, Shortlisted, Not Shortlisted, or 7d Honest Auto-Close) within 7 days. | **30% → 95%** |
| **Recruiter Median Time-to-First-Action** | Supporting Input | Median hours from application submission to first recruiter RMS view/shortlist on active roles. | **\~96h → \<48h** |
| **Legitimate Exit Rate (Closed / Withdrawn)** | Guardrail | % of applications cleanly resolved via seeker withdrawal or 7d honest role closure (never penalized; prevents forced bookings). | **Tracked cleanly (0 penalty)** |
| **Weekly Applies per Active Seeker** | Guardrail | Mean weekly applications per cohort seeker under the 5/day cap (must not crash total qualified shortlists). | **Drop \<20%** |
| **Scam Reports & Digest Unsubscribes** | Guardrail | Seeker scam flags per 1,000 applies (must fall) and recruiter weekly digest unsubscribe rate (must stay \<0.2%). | **Scams ↓ 50%; Unsub \<0.2%** |
| **One-Sided Confirmation Rate** | **Counter-Metric** | % of interview check-ins confirmed by only one party (seeker-only or recruiter-only) ÷ total check-ins. | **\<10% (Not counted in NS)** |

### Full Lifecycle Event Tracking Specification (Both Sides)

| Event Name | Actor | Trigger Condition | Key Properties Logged |
| :---- | :---- | :---- | :---- |
| `job_card_impression` | Seeker | Card rendered in Search | `job_id, verified_bool, confirmed_days_ago, reply_odds_band` |
| `low_odds_pause_shown` | Seeker | Clicks Apply on `REPLY UNLIKELY` | \`job\_id, seeker\_action ('proceed' |
| `application_submitted` | Seeker | Application sent (1..5 of day) | `app_id, seeker_id, apply_seq_in_7d, is_third_apply_anchor` |
| `rms_opening_confirmed` | Recruiter | 1-tap weekly digest click | `job_id, recruiter_id, timestamp` |
| `rms_status_changed` | Recruiter | Existing RMS View/Shortlist/Close | `app_id, old_state, new_state, hours_since_apply` |
| `application_auto_closed_7d` | System | No RMS action for 168 hours | `app_id, job_id, days_since_3rd_apply` |
| `interview_slot_booked` | Seeker | Taps 1 of 3 offered slots | \`app\_id, slot\_utc, ics\_downloaded\_bool, channel ('app' |
| `seeker_attendance_checkin` | Seeker | Submits interview-day check-in | \`app\_id, seeker\_outcome ('attended' |
| `recruiter_attendance_checkin` | Recruiter | Clicks RMS `Interviewed` tag | \`app\_id, recruiter\_outcome ('interviewed' |
| `verified_interview_logged` | System | Both sides confirm ≤14d of 3rd apply | `app_id, seeker_id, days_from_3rd_apply, two_sided_verified=true` |

## Step 7: Risks, Trade-Offs, Constraints & What We Will NOT Build

| Risk / Failure Mode | Why It Could Happen | Concrete Mitigation & Watch Metric |
| :---- | :---- | :---- |
| **1\. Reply Odds Penalize Slow-but-Genuine Companies** | Enterprise firms with strict 10-day HR approvals get labeled `REPLY UNLIKELY` and lose applicants. | Display median reply days alongside the badge (e.g., `Replies in ~10d`); never hide or delist slow roles—filtering is strictly opt-in by the seeker. |
| **2\. Recruiters Ignore the Interviewed Tag** | Recruiters conduct the call on Zoom/Meet and forget to mark `Interviewed` in RMS, undercounting true attendance. | When a seeker checks in as `Attended`, trigger a 1-tap email/WhatsApp prompt to the recruiter that writes directly to the RMS `Interviewed` tag; track `One-Sided Confirmation Rate` separately. |
| **3\. Legitimate Small Firms Lack Corporate Domains** | Early-stage SMBs hiring via Gmail get marked `Unverified`. | Support alternative GSTIN or company-page verification in RMS; `Unverified` is a neutral disclosure label, never a ban. |
| **4\. 5-Apply Cap Lowers Raw Apply Volume KPI** | Internal teams accustomed to measuring gross daily applications see a drop in raw apply count. | Align leadership on **Shortlisted & Attended Interviews per Seeker** as the true liquidity metric; test 5 vs. 10 cap in Phase 1 A/B. |
| **5\. AI Prep Brief Hallucinates Round Details** | LLM invents coding rounds not required by the employer, confusing freshers. | Restrict AI prompt strictly to structured fields in the job description; clearly label as "AI-generated prep from JD". |

## Complete Source Links & References (Raw Notes)

### 1\. Naukri & Info Edge Official Sources

* **Info Edge Q4 FY26 Audited Results** (revenue, 21k daily resumes): [https\://www\.infoedge.in/announcements/IEIL\_Audited%20Results\_Q426.pdf](https://www.infoedge.in/announcements/IEIL_Audited%20Results_Q426.pdf)  
    
* **Info Edge Corporate Presentation** (130,000+ billed corporate customers): [https\://www\.infoedge.in/pdfs/corporatePresentations\_pdfs/Info-Edge-May24-Presentation.pdf](https://www.infoedge.in/pdfs/corporatePresentations_pdfs/Info-Edge-May24-Presentation.pdf)  
    
* **Naukri Job Seeker Apply FAQ** (50 applies/day cap, 5 at a go, official statuses): [https\://www\.naukri.com/faq/job-seeker-apply](https://www.naukri.com/faq/job-seeker-apply)

### 2\. Funnel, Scheduling & No-Show Benchmarks

* **Candidate.fyi / Gem / Ashby / Greenhouse 2026 Funnel Benchmarks** (8% screen pass rate, 746 apps/recruiter): [https\://candidate.fyi/post/recruiting-funnel-benchmarks](https://candidate.fyi/post/recruiting-funnel-benchmarks)  
    
* **HireBound & Cronofy 2024 Candidate Expectations** (42% scheduling drop-off, 23.5% no-shows, 64% WhatsApp vs 12% email reply rate): [https\://www\.hirebound.io/blog/self-scheduling-vs-recruiter-scheduled-interviews](https://www.hirebound.io/blog/self-scheduling-vs-recruiter-scheduled-interviews)  
    
* **Uppl.ai 1.2M Job Application Study** (direct career pages 6.87% vs Indeed 2.92% vs LinkedIn 1.95%): [https\://www\.uppl.ai/job-application-response-rate](https://www.uppl.ai/job-application-response-rate)  
    
* **NextMantra / Indeed & Work Institute Ghosting Report** (candidate & employer ghosting benchmarks): [https\://nextmantra.ai/blog/candidate-ghosting](https://nextmantra.ai/blog/candidate-ghosting)

### 3\. 12-Job-Portal Benchmark Sources

* **LinkedIn (Jobloo 500K Easy Apply Callback Study):** [https\://jobloo.co/blog/linkedin-easy-apply-callback-rate/](https://jobloo.co/blog/linkedin-easy-apply-callback-rate/)  
    
* **Indeed (Indeed Virtual Interviews):** [https\://www\.indeed.com/hire/cs/virtual-interviews-on-indeed](https://www.indeed.com/hire/cs/virtual-interviews-on-indeed)  
    
* **foundit / Monster India (Recruiter Manual PDF):** [https\://media.foundit.in/v2/recruiter/2.1/MI\_User\_Manual.pdf](https://media.foundit.in/v2/recruiter/2.1/MI_User_Manual.pdf)  
    
* **foundit / Monster India (FAQ):** [https\://www\.foundit.in/search/work-from-home-recruiter-jobs](https://www.foundit.in/search/work-from-home-recruiter-jobs)  
    
* **Internshala (Smart Hire Blog):** [https\://internshala.com/blog/employer-ai-powered-hiring-solutions-by-internshala/](https://internshala.com/blog/employer-ai-powered-hiring-solutions-by-internshala/)  
    
* **Internshala (Tech Blog — 42% chat reply rate):** [https\://medium.com/internshala-tech/smart-replies-in-internshala-chat-9ef8dd001783](https://medium.com/internshala-tech/smart-replies-in-internshala-chat-9ef8dd001783)  
    
* **Glassdoor (App Listing):** [https\://play.google.com/store/apps/details?id=com.glassdoor.app\&hl=en](https://play.google.com/store/apps/details?id=com.glassdoor.app&hl=en)  
    
* **Glassdoor (JobWizard Application Study):** [https\://jobwizard.ai/blog/how-to-autofill-glassdoor-job-applications-with-ai](https://jobwizard.ai/blog/how-to-autofill-glassdoor-job-applications-with-ai)  
    
* **Shine.com (Recruiter Help Centre):** [https\://recruiter.shine.com/helpcentre](https://recruiter.shine.com/helpcentre)  
    
* **Shine.com (Application Highlighter):** [https\://resume.shine.com/product/application-highlighter-4/4118](https://resume.shine.com/product/application-highlighter-4/4118)  
    
* **Monster Global (2026 Job Application Behavior Report):** [https\://www\.monster.com/career-advice/research/job-application-behavior-report](https://www.monster.com/career-advice/research/job-application-behavior-report)  
    
* **Monster Global (Job Scam Statistics):** [https\://www\.monster.com/career-advice/research/job-scam-statistics](https://www.monster.com/career-advice/research/job-scam-statistics)  
    
* **CareerBuilder (Quick Apply):** [https\://www\.careerbuilder.com/](https://www.careerbuilder.com/)  
    
* **CareerBuilder (AppLink Feature Guide):** [https\://help.jazzhr.com/s/article/CareerBuilder-AppLink-Feature](https://help.jazzhr.com/s/article/CareerBuilder-AppLink-Feature)  
    
* **Wellfound / AngelList (500K Applications Study):** [https\://wellfound.com/blog/how-to-double-your-interview-rate-what-500-000-job-applications-revealed](https://wellfound.com/blog/how-to-double-your-interview-rate-what-500-000-job-applications-revealed)  
    
* **Wellfound / AngelList (Nextdev 2026 Review):** [https\://www\.joinnextdev.com/blog/wellfound-review-2026-good-enough-for-ai-native-hiring](https://www.joinnextdev.com/blog/wellfound-review-2026-good-enough-for-ai-native-hiring)  
    
* **FlexJobs (TECLA Review):** [https\://www\.tecla.io/blog/flexjobs-review](https://www.tecla.io/blog/flexjobs-review)  
    
* **FlexJobs (HAIRED 2026 Review):** [https\://www\.haired.app/blog/is-flexjobs-worth-it-reddit-review-2026](https://www.haired.app/blog/is-flexjobs-worth-it-reddit-review-2026)  
    
* **ZipRecruiter (1-Click Apply Support):** [https\://support.ziprecruiter.com/candidate/s/article/How-to-Apply-for-Jobs-Using-1-Click-Apply](https://support.ziprecruiter.com/candidate/s/article/How-to-Apply-for-Jobs-Using-1-Click-Apply)  
    
* **ZipRecruiter (Apply Now vs 1-Click Guide):** [https\://support.ziprecruiter.com/candidate/s/article/What-is-the-Difference-Between-Apply-Now-and-1-Click-Apply](https://support.ziprecruiter.com/candidate/s/article/What-is-the-Difference-Between-Apply-Now-and-1-Click-Apply)

### 4\. Prototype & Repository Links

* **Interactive Prototype (`Prototype_Santhosh_Sankaran_Product`):** [https\://naukri-career-canvas.lovable.app/](https://naukri-career-canvas.lovable.app/)  
    
* **GitHub Repository:** [https\://github.com/sandisandi764/Airtribe-naukri-from-applied-to-attended-capstone/tree/main](https://github.com/sandisandi764/Airtribe-naukri-from-applied-to-attended-capstone/tree/main)