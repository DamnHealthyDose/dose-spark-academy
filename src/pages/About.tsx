import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Lock, Eye, Phone, Users, Brain, BookOpen, Award, Heart, AlertTriangle } from "lucide-react";
import { useEffect, useRef } from "react";

const teamMembers = [
  {
    name: "Steev Hodgson",
    role: "Founder & CEO",
    bullets: [
      "ADHD domain expert as ICF-credentialed ADHD Coach, veteran of completing 1,300+ 1-1 coach/client sessions",
      "20+ years enterprise tech sales leader; self-taught Flutter/Dart developer who built the original DOSE platform based on his coaching practices",
    ],
    email: "steev@getdose.app",
  },
  {
    name: "Lauren Paul",
    role: "Co-Founder, Chief Marketing Officer",
    bullets: [
      "Drives digital engagement and brand storytelling; proven track record elevating brands through high-impact marketing solutions",
      "Proven track record as a Brand leader with lived ADHD experience",
    ],
    email: "lauren@getdose.app",
  },
  {
    name: "Prelisa Dahal",
    role: "Founding User Experience Designer",
    bullets: [
      "3+ years designing fintech, health tech, and HRIS platforms",
      "Improved workflow efficiency by 80% and user satisfaction scores",
    ],
    email: "prelisa@getdose.app",
  },
  {
    name: "Sommie Santilla",
    role: "Founding Product Designer & UX",
    bullets: [
      "Design experience in EdTech and creative productivity platforms",
      "Providing solutions within learning retention, product scalability and improved flow of user experience",
    ],
    email: "sommie@getdose.app",
  },
  {
    name: "Anand Ochir",
    role: "Founding Software Developer",
    bullets: [
      "AI developer specializing in algorithmic trading systems and real-time data processing with Python",
      "Built AI agents with WebSockets/REST APIs for low-latency insights",
    ],
    email: "anand.a@getdose.app",
  },
  {
    name: "Medhavee Upadhyaya",
    role: "Lead Software Developer",
    bullets: [
      "SDET/QA Automation Engineer with 3+ years building scalable test frameworks for web, mobile, and APIs",
      "Specializes in CI/CD quality gates and AI-assisted testing to reduce regressions and accelerate release cycles",
    ],
    email: "medhavee@getdose.app",
  },
  {
    name: "Zainab Hassani",
    role: "UX Researcher",
    bullets: [
      "Cognitive psychology background with 5+ years conducting qualitative and quantitative research",
      "Experienced in healthcare and mental health UX",
    ],
    email: "zhassani@getdose.app",
  },
  {
    name: "Rashmi Shah",
    role: "UX & UI Designer",
    bullets: [
      "Computer Science professional with a passion for creating intuitive, user-centered digital experiences",
      "Expertise at the intersection of Human-Computer Interaction (HCI), UI/UX design, and usability testing",
    ],
    email: "rashmi@getdose.app",
  },
];

const safetyValues = [
  {
    icon: Shield,
    title: "COPPA Compliant by Design",
    description:
      "No personally identifiable information is stored from users under 13. Parental consent is required before any account is created. This isn't a checkbox — it's the architecture.",
  },
  {
    icon: Lock,
    title: "Zero Content Access for Adults",
    description:
      "Parents and school counselors see engagement metrics — session counts, completion rates, streaks. They never see what a teen wrote, selected, or expressed inside a tool. Oversight without invasion.",
  },
  {
    icon: Eye,
    title: "No Social Features Between Strangers",
    description:
      "Squad Focus only connects teens who explicitly share an invite code with someone they already know. There is no public room, no random matching, no discovery feed. This is permanent.",
  },
  {
    icon: Phone,
    title: "Crisis Detection & 988 Routing",
    description:
      "When a teen's inputs indicate acute distress beyond what the tools can serve, the platform surfaces the 988 Suicide & Crisis Lifeline with a single tap. No friction, no delay.",
  },
  {
    icon: AlertTriangle,
    title: "No Chat Between Minors",
    description:
      "The only communication between teens in Squad Focus is a post-session check-in: completion status and a single word. No messaging, no chat, no DMs. Ever.",
  },
  {
    icon: Heart,
    title: "Shame-Free by Architecture",
    description:
      "Every tool awards partial XP for effort. No session is marked 'incomplete.' Early exits show 'You still showed up.' The app never punishes a teen for struggling.",
  },
];

const clinicalFrameworks = [
  {
    icon: Brain,
    title: "Cognitive Behavioral Therapy (CBT)",
    tool: "SPARK Junior",
    description:
      "Adapted from the STEAR Map framework for identifying and interrupting automatic negative thought patterns. Simplified for adolescent cognitive load with tap-only interaction.",
  },
  {
    icon: Heart,
    title: "RSD Intervention Protocol",
    tool: "RSD Junior",
    description:
      "A somatic-first approach to rejection sensitivity — validate, regulate the body, then reframe. Grounded in ADHD emotional dysregulation research and clinical coaching practice.",
  },
  {
    icon: BookOpen,
    title: "ADHD-Aware Pomodoro",
    tool: "WAVE Junior",
    description:
      "Time-boxing adapted for time blindness, task initiation deficit, and the ADHD reward system. Distraction logging reframes interruptions as a measurable, improvable skill.",
  },
  {
    icon: Users,
    title: "Body-Doubling Research",
    tool: "Squad Focus",
    description:
      "Endorsed by CHADD and ADDitude Magazine. External presence activates social engagement in a way that suppresses task paralysis. Squad Focus is the first teen-safe implementation.",
  },
];

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("opacity-100", "translate-y-0", "blur-0");
          el.classList.remove("opacity-0", "translate-y-4", "blur-[4px]");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

const RevealSection = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const ref = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`opacity-0 translate-y-4 blur-[4px] transition-all duration-700 ease-out ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Section 1 — Mission */}
        <section className="pt-24 pb-20 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <RevealSection>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
                Why we built this —
              </p>
              <h1 className="text-4xl md:text-5xl font-extrabold text-foreground leading-[1.1] mb-8" style={{ textWrap: "balance" }}>
                The tools we needed didn't exist.
              </h1>
            </RevealSection>

            <RevealSection delay={120}>
              <div className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed" style={{ maxWidth: "65ch" }}>
                <p>
                  DOSE Academy was born from a simple, frustrating truth: the gap in ADHD care for teens isn't information. Kids with ADHD know they need to focus. They know they should manage their emotions. The gap is{" "}
                  <span className="text-foreground font-medium">in-the-moment support</span> — tools that activate precisely when the ADHD brain is least able to function.
                </p>
                <p>
                  Steev Hodgson, our founder, is an ICF-credentialed ADHD coach who has completed over 1,300 one-on-one coaching sessions. He is also an ADHD adult himself. After years of watching his teenage clients struggle between appointments — flooding with rejection sensitivity, paralyzed by homework, spiraling in the hallway between classes — he built the first version of DOSE in Flutter, alone, because nothing on the market met them where they actually were.
                </p>
                <p>
                  What started as a coach's workaround became a clinical framework: four discrete tools, each targeting a specific failure mode of the adolescent ADHD brain, each designed to complete in under two minutes, each requiring zero typing and zero prior knowledge. DOSE Academy is not therapy. It's the 47 minutes between the crisis and the next therapy appointment — a space that was, until now, completely unserved.
                </p>
              </div>
            </RevealSection>
          </div>
        </section>

        {/* Section 2 — Team */}
        <section className="py-20 bg-accent/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <RevealSection>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
                Our Founding Team —
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground leading-[1.1] mb-2" style={{ textWrap: "balance" }}>
                8 people who get it.
              </h2>
              <p className="text-muted-foreground text-base mb-12">
                Coaches, developers, designers, and researchers — building something that matters.
              </p>
            </RevealSection>

            <div className="grid md:grid-cols-2 gap-5">
              {teamMembers.map((member, i) => (
                <RevealSection key={member.name} delay={i * 80}>
                  <div className="bg-card rounded-lg p-6 shadow-soft hover:shadow-medium transition-shadow duration-300 h-full border border-border/60">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                        {member.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground text-base leading-tight">{member.name}</h3>
                        <p className="text-primary text-sm">{member.role}</p>
                      </div>
                    </div>
                    <ul className="space-y-2 mb-4">
                      {member.bullets.map((b, j) => (
                        <li key={j} className="text-sm text-muted-foreground flex gap-2">
                          <span className="text-primary mt-1.5 shrink-0">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <a href={`mailto:${member.email}`} className="text-sm text-primary hover:underline">
                      ✉ {member.email}
                    </a>
                  </div>
                </RevealSection>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3 — Safety as a Value */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <RevealSection>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
                A design philosophy —
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground leading-[1.1] mb-2" style={{ textWrap: "balance" }}>
                Built with safety in mind.
              </h2>
              <p className="text-muted-foreground text-base mb-12 max-w-2xl">
                Every safety feature in DOSE Academy is a design decision, not a legal checkbox. These aren't policies bolted on after launch — they shaped the architecture from day one.
              </p>
            </RevealSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {safetyValues.map((item, i) => (
                <RevealSection key={item.title} delay={i * 80}>
                  <div className="bg-card rounded-lg p-6 shadow-soft hover:shadow-medium transition-shadow duration-300 h-full border border-border/60">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 mb-4">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground text-base mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </RevealSection>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4 — Clinical Foundation */}
        <section className="py-20 bg-accent/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <RevealSection>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
                Evidence-based —
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground leading-[1.1] mb-2" style={{ textWrap: "balance" }}>
                Clinical frameworks, not guesswork.
              </h2>
              <p className="text-muted-foreground text-base mb-12 max-w-2xl">
                Every tool in DOSE Academy is grounded in established ADHD research and clinical practice — referenced by CHADD, ADDitude Magazine, and the ADHD coaching literature.
              </p>
            </RevealSection>

            <div className="grid md:grid-cols-2 gap-5 mb-12">
              {clinicalFrameworks.map((item, i) => (
                <RevealSection key={item.title} delay={i * 80}>
                  <div className="bg-card rounded-lg p-6 shadow-soft hover:shadow-medium transition-shadow duration-300 h-full border border-border/60">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 shrink-0">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground text-base leading-tight">{item.title}</h3>
                        <p className="text-xs text-primary font-medium">{item.tool}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </RevealSection>
              ))}
            </div>

            <RevealSection delay={350}>
              <div className="bg-card rounded-lg p-6 md:p-8 border border-primary/20 shadow-soft max-w-2xl">
                <div className="flex items-start gap-3">
                  <Award className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Seeking Clinical Partners</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      We are actively partnering with licensed psychologists and psychiatrists to validate our tool frameworks. If you are a clinician interested in adolescent ADHD and want to help shape evidence-based digital interventions, we'd love to hear from you at{" "}
                      <a href="mailto:steev@getdose.app" className="text-primary hover:underline">steev@getdose.app</a>.
                    </p>
                  </div>
                </div>
              </div>
            </RevealSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
