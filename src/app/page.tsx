"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Copy,
  Check,
  Award,
  GraduationCap,
  Briefcase,
  Mic,
  ShieldCheck,
  TrendingUp,
  FileText,
  Globe,
  Sparkles,
  Building,
  Download,
  Maximize2,
  Cpu,
  Layers,
  Terminal,
  Sliders,
  X,
  Command,
  Code,
  Zap,
} from "lucide-react";

// Inline LinkedIn Icon
const LinkedinIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function PressKitPage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (process.env.NODE_ENV === "production" ? "/press-kit" : "");
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [activeBioTab, setActiveBioTab] = useState<"short50" | "standard150" | "comprehensive500">("standard150");

  // Easter Eggs State
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalLogs, setTerminalLogs] = useState<Array<{ cmd: string; output: React.ReactNode }>>([
    {
      cmd: "init",
      output: (
        <div className="space-y-1 text-zinc-400">
          <p className="text-zinc-200 font-semibold">Vinay Jain Architecture Terminal [v2.6.9-prod]</p>
          <p>Unattended Agentic Operating System · Deterministic Capital Leverage</p>
          <p className="text-xs text-zinc-500 pt-1">
            Type <span className="text-white font-mono font-semibold">help</span> or click suggestions below to inspect systems &amp; blueprints.
          </p>
        </div>
      ),
    },
  ]);
  const [unicornMode, setUnicornMode] = useState(false);
  const [vjTapCount, setVjTapCount] = useState(0);
  const [tokenInput, setTokenInput] = useState(5000000);

  // Easter Egg: Keyboard Shortcuts (Cmd+K / Ctrl+K and Konami Code)
  useEffect(() => {
    const konamiSequence = [
      "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
      "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
      "b", "a"
    ];
    let konamiIndex = 0;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd+K or Ctrl+K opens Terminal
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
        return;
      }

      // Escape closes Terminal
      if (e.key === "Escape") {
        setIsTerminalOpen(false);
      }

      // Konami Code sequence tracker
      if (e.key.toLowerCase() === konamiSequence[konamiIndex].toLowerCase()) {
        konamiIndex++;
        if (konamiIndex === konamiSequence.length) {
          setUnicornMode(true);
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleVjClick = () => {
    setVjTapCount((c) => {
      const next = c + 1;
      if (next >= 5) {
        setUnicornMode((prev) => !prev);
        return 0;
      }
      return next;
    });
  };

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const executeCommand = (cmd: string) => {
    let output: React.ReactNode = null;
    switch (cmd) {
      case "help":
        output = (
          <div className="space-y-1.5 text-xs font-mono text-zinc-300">
            <p className="text-white font-semibold">Available Directives:</p>
            <p><span className="text-zinc-100 font-bold">whoami</span> — Executive institutional profile &amp; mandate</p>
            <p><span className="text-zinc-100 font-bold">unicorn</span> — Architectural blueprint for One-Person AI Unicorn</p>
            <p><span className="text-zinc-100 font-bold">anand-mahindra</span> — Keynote commendation &amp; citation record</p>
            <p><span className="text-zinc-100 font-bold">metrics</span> — Audited production metrics &amp; pipeline benchmarks</p>
            <p><span className="text-zinc-100 font-bold">quant</span> — Actuarial IAI distinction proof &amp; stochastic equations</p>
            <p><span className="text-zinc-100 font-bold">contact</span> — Instant executive communication channels</p>
            <p><span className="text-zinc-100 font-bold">unicorn-mode</span> — Toggle ambient Unicorn Core HUD</p>
            <p><span className="text-zinc-100 font-bold">clear</span> — Reset terminal output</p>
          </div>
        );
        break;
      case "whoami":
        output = (
          <div className="text-xs font-mono text-zinc-300 space-y-1">
            <p className="text-white font-bold">VINAY JAIN</p>
            <p>Title: Systems Architect &amp; Technology Executive</p>
            <p>Mandate: Building autonomous AI infrastructure for the world&apos;s first One Person AI Unicorn.</p>
            <p>Accreditation: TEDx Keynote Speaker, Actuarial Science Topper (IAI), IRM UK National Winner, IIT Roorkee Macromolecular Engineer, IBS Programme Director.</p>
          </div>
        );
        break;
      case "unicorn":
        output = (
          <div className="text-xs font-mono text-zinc-300 space-y-1">
            <p className="text-white font-bold">ONE-PERSON AI UNICORN INFRASTRUCTURE BLUEPRINT:</p>
            <p>1. Deterministic State Machines: Event-driven Fastify webhooks + Redis queues.</p>
            <p>2. Semantic Context Pruning: Smark Connect compression (-95% token footprint).</p>
            <p>3. Zero-Hallucination Boundaries: Cryptographic schema validation &amp; transactional CRM sync.</p>
            <p>4. Stochastic Risk Control: Actuarial vega/gamma balancing applied to micro-capital allocation.</p>
          </div>
        );
        break;
      case "anand-mahindra":
        output = (
          <div className="text-xs font-mono text-zinc-300 space-y-1">
            <p className="text-white font-bold">ANAND MAHINDRA RECOGNITION:</p>
            <p>Formally commended by Anand Mahindra for curating international thought leaders and presiding over frontier intellectual discourse at the intersection of AI and academic systems.</p>
          </div>
        );
        break;
      case "metrics":
        output = (
          <div className="text-xs font-mono text-zinc-300 space-y-1">
            <p className="text-white font-bold">AUDITED PRODUCTION METRICS:</p>
            <p>· Enterprise Pipeline Generated: $850,000+ in 24 hours (Jedy Apps)</p>
            <p>· LLM Token Overhead Slashing: 95% (3.8M tokens saved / cycle)</p>
            <p>· Delegates Addressed: 8,000+ at JITO Global Trade Summit</p>
            <p>· Academic Residency: 450+ MBAs &amp; 30+ Professors (IBS AIMS50x)</p>
            <p>· Mathematical Standing: AIR 1 / Top 1% (IAI ACET distinction)</p>
          </div>
        );
        break;
      case "quant":
        output = (
          <div className="text-xs font-mono text-zinc-300 space-y-1">
            <p className="text-white font-bold">QUANTITATIVE RIGOR &amp; ACTUARIAL DISCIPLINE:</p>
            <p>Institute of Actuaries of India (IAI) — ACET Cleared with Distinction (1st attempt).</p>
            <p>Formula: dS_t = mu * S_t * dt + sigma * S_t * dW_t</p>
            <p>Token Optimization Loss: argmin sum L(context_i) subject to Zero-Information-Loss</p>
          </div>
        );
        break;
      case "contact":
        output = (
          <div className="text-xs font-mono text-zinc-300 space-y-1">
            <p className="text-white font-bold">DIRECT CHANNELS:</p>
            <p>Email: rvinayjain@icloud.com</p>
            <p>Phone: +91 8096933000 (Telangana, India)</p>
            <p>LinkedIn: https://www.linkedin.com/in/rvinayjain07/</p>
          </div>
        );
        break;
      case "unicorn-mode":
      case "matrix":
        setUnicornMode((prev) => !prev);
        output = (
          <p className="text-xs font-mono text-white">
            Unicorn Core HUD toggled: {!unicornMode ? "ACTIVE" : "STANDBY"}
          </p>
        );
        break;
      case "clear":
        setTerminalLogs([]);
        return;
      default:
        output = (
          <p className="text-xs font-mono text-zinc-400">
            Unknown directive: &quot;{cmd}&quot;. Type <span className="text-white font-bold">help</span> to view available commands.
          </p>
        );
    }
    setTerminalLogs((prev) => [...prev, { cmd, output }]);
  };

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;
    executeCommand(cmd);
    setTerminalInput("");
  };

  const pressKitLinks = {
    portfolio: "https://vinayjain-portfolio.framer.website",
    pressKitPdf:
      "https://mahindraecolecentrale-my.sharepoint.com/:b:/g/personal/sm23ubef008_mahindrauniversity_edu_in/EWjrt_PYOHhOkYi5Nm87QfcBqTd_wUVp6dsfjBKP5gTa-A?e=sn5FBj",
    linkedin: "https://www.linkedin.com/in/rvinayjain07/",
    email: "rvinayjain@icloud.com",
    phone: "8096933000",
    location: "Telangana, India",
  };

  const proofPoints = [
    {
      value: "$850,000+",
      label: "Client Pipeline Delivered",
      detail: "Generated in 24 hours via autonomous conversational voice agents & targeted CRM outreach.",
    },
    {
      value: "8,000+",
      label: "Delegates Addressed",
      detail: "Keynote speaker at JITO Global Trade Summit on deterministic AI automation in business.",
    },
    {
      value: "95% / 3.8M",
      label: "Tokens Overhead Saved",
      detail: "Smark Connect context compression (slashed prompt footprint from 4M to ~200k tokens).",
    },
    {
      value: "450+ / 30+",
      label: "MBAs & Faculty Trained",
      detail: "Programme Director for AIMS50x 3-month residency at ICFAI Business School (IBS).",
    },
    {
      value: "230+",
      label: "Enterprise Leads Captured",
      detail: "Nasscom Future Forge & DevSparks summit capture funnels, engaging 21 Tier-1 logos.",
    },
    {
      value: "AIR 1 & Top 1%",
      label: "Mathematical Standing",
      detail: "Actuarial Science Distinction (IAI - CM1, CS1, CB1, CB2), IRM UK Champion, Valedictorian.",
    },
  ];

  // Official Institutional & Enterprise Logos Data
  const institutionalLogos = [
    { name: "TEDx", role: "Keynote Speaker 2025", src: `${basePath}/logos/tedx.svg`, isDarkPng: false },
    { name: "IIT Roorkee", role: "Macromolecular Engineering", src: `${basePath}/logos/iit-roorkee.svg`, isDarkPng: false },
    { name: "IBS Hyderabad", role: "Programme Director & Guest Faculty", src: `${basePath}/logos/ibs-hyderabad.png`, isDarkPng: true },
    { name: "Bloomberg", role: "Market Concepts Certified", src: `${basePath}/logos/bloomberg.svg`, isDarkPng: false },
    { name: "NASSCOM", role: "Future Forge Delegate", src: `${basePath}/logos/nasscom.svg`, isDarkPng: false },
    { name: "Institute of Actuaries of India", role: "ACET Distinction Topper", src: `${basePath}/logos/actuaries-india.png`, isDarkPng: true },
    { name: "IRM UK", role: "National Winner Enterprise Risk", src: `${basePath}/logos/irm-uk.svg`, isDarkPng: false },
    { name: "JITO", role: "Keynote (8,000+ Delegates)", src: `${basePath}/logos/jito.png`, isDarkPng: true },
    { name: "The Times of India", role: "Featured Education Times", src: `${basePath}/logos/times-of-india.svg`, isDarkPng: false },
    { name: "VinAI Technologies", role: "Founder & CEO", src: `${basePath}/logos/vinai.svg`, isDarkPng: false },
    { name: "Classess.com", role: "GMO", src: `${basePath}/logos/classess.svg`, isDarkPng: false },
    { name: "Dexset AI", role: "Partner in Growth", src: `${basePath}/logos/dexset.svg`, isDarkPng: false },
    { name: "FinTrada", role: "Quantitative Systems", src: `${basePath}/logos/fintrada.svg`, isDarkPng: false },
    { name: "Smark Connect", role: "Token Compression Engine", src: `${basePath}/logos/smark.svg`, isDarkPng: false },
    { name: "Jedy Apps", role: "Autonomous Voice Outreach", src: `${basePath}/logos/jedy.svg`, isDarkPng: false },
  ];

  // Detailed, long-form Ventures & Systems Architecture data (NOT cards)
  const ventures = [
    {
      number: "01",
      name: "VinAI Technologies",
      role: "Founder & Chief Executive Officer",
      logoSrc: `${basePath}/logos/vinai.svg`,
      tagline: "Deterministic Enterprise Infrastructure & Autonomous Growth Engines",
      status: "Active Production Scale",
      strategicMandate:
        "Directing the research, architectural engineering, and enterprise deployment of autonomous revenue generation pipelines. VinAI Technologies develops production-grade agentic frameworks that eliminate operational latency, automate high-touch outreach, and guarantee zero-hallucination compliance across multi-channel B2B environments.",
      structuralProblem:
        "Traditional enterprise AI implementations suffer from severe fragility: non-deterministic output, soaring API token burn rates, and brittle proof-of-concept scripts that fail when subjected to asynchronous multi-tenant production load. Most organizations are trapped in superficial conversational chatbots that cannot reliably update transactional CRMs, qualify enterprise intent, or execute compliance-critical workflows without human oversight.",
      architectureAndExecution:
        "Engineered an event-driven, unattended agentic operating system combining high-throughput Fastify webhook microservices, containerized multi-step n8n pipelines, and real-time conversational voice agents. Outbound pipelines synthesize real-time firmographic intent data, execute dynamic telephone qualification logic, and stream bi-directional updates directly into enterprise CRMs with sub-second synchronization latency. Generative Engine Optimization (GEO) protocols ensure enterprise visibility across both traditional SERPs and frontier AI synthesis engines (ChatGPT Search, Perplexity, Gemini).",
      commercialImpact:
        "Directly generated $850,000 in qualified enterprise pipeline within a single 24-hour cycle for international clients (such as Jedy Apps, Tel Aviv) via 54 autonomous calls and 14 hyper-personalized sequences. Automated the programmatic production of 300+ brand assets, saving 25+ design hours per sprint while maintaining 100% operational uptime.",
      techStack: ["Python", "Fastify Webhooks", "Docker Containers", "n8n Automation", "Retell / Vapi Voice Agents", "PostgreSQL", "Claude 3.5 Sonnet API", "Codex"],
    },
    {
      number: "02",
      name: "Dexset AI",
      role: "Partner in Growth & Strategic AI Architect",
      logoSrc: `${basePath}/logos/dexset.svg`,
      tagline: "End-to-End Enterprise Operations Automation & Cognitive Orchestration",
      status: "Active Commercial Scaling",
      strategicMandate:
        "Architecting enterprise-scale operational automations for B2B brands, managing multi-tier agentic workflows, and driving Generative Engine Optimization (GEO) across modern AI retrieval ecosystems.",
      structuralProblem:
        "Knowledge-work enterprises bleed significant margins through repetitive, multi-system manual coordination—copying data between unstructured emails, disparate project management platforms, and legacy accounting software. Crucially, as enterprise buyer discovery shifts from search engines to answer engines, conventional SEO frameworks have become fundamentally obsolete.",
      architectureAndExecution:
        "Designed decoupled operational runtimes utilizing Make and custom REST integrations that automate multi-departmental workflows end-to-end. Formulated proprietary GEO semantic indexing protocols that restructure enterprise public web knowledge bases into high-signal citation graphs, guaranteeing inclusion in frontier LLM search responses and citation indexes.",
      commercialImpact:
        "Reduced manual executive coordination overhead across partner enterprise operations by over 60%. Positioned enterprise clients as definitive authoritative citations within major conversational AI search indices.",
      techStack: ["Make Enterprise Runtime", "REST APIs", "Vector Database Indexing", "Semantic Graph Optimization", "GEO Frameworks", "OpenAI Embeddings"],
    },
    {
      number: "03",
      name: "Classess.com",
      role: "Global Marketing Officer (GMO) & Founding Architect",
      logoSrc: `${basePath}/logos/classess.svg`,
      tagline: "Cognitive University ERP & Agentic Educational Operating System",
      status: "Active Institutional Deployment",
      strategicMandate:
        "Heading global marketing architecture, enterprise brand positioning, and go-to-market systems for an autonomous higher-education ERP that automates administration, learning workflows, and institutional governance.",
      structuralProblem:
        "Universities and higher-education institutions remain shackled to legacy, siloed ERP architectures that require hundreds of administrative staff to process timetables, grade distributions, and student inquiries, creating massive operational overhead and fragmented institutional intelligence.",
      architectureAndExecution:
        "Architected an agentic educational platform incorporating automated curriculum scheduling, predictive student performance models, and zero-touch administrative intelligence. Spearheaded the enterprise go-to-market strategy, positioning the platform before university chancellor boards and enterprise education trusts.",
      commercialImpact:
        "Delivered unified institutional governance across target campuses, eliminating administrative processing delays while providing university executive leadership with real-time operational telemetry.",
      techStack: ["Enterprise ERP Architecture", "Full-Funnel GTM Systems", "Predictive Academic Analytics", "Multi-Tenant Cloud", "Next.js / Node.js"],
    },
    {
      number: "04",
      name: "FinTrada Quant Trading Platform",
      role: "Lead Quantitative Architect & Mathematical Researcher",
      logoSrc: `${basePath}/logos/fintrada.svg`,
      tagline: "Dynamic Predictability State-Space Modeling & Explainable Algorithmic Finance",
      status: "Institutional Quantitative Systems (Black Thorne Capital Management)",
      strategicMandate:
        "Collaborating with William Doughlas and Peter Layton (Black Thorne Capital Management) to engineer state-of-the-art quantitative trading frameworks, predictive state-space filters, and market microstructure risk models.",
      structuralProblem:
        "Conventional econometric linear models systematically collapse during structural volatility shocks and dynamic liquidity regime shifts because they assume parameter stationarity and Gaussian return distributions—leading to catastrophic tail-risk underestimation.",
      architectureAndExecution:
        "Built upon advanced stochastic calculus and actuarial probability frameworks, FinTrada combines dynamic state-space predictability modeling with synthetic market microstructure simulations. The platform incorporates explainable AI (XAI) layers that provide deterministic audit trails for automated order execution, order book imbalance detection, and volatility regime transition forecasting under non-stationary parameters.",
      commercialImpact:
        "Translates institutional portfolio allocation theory and actuarial stochastic modeling into deterministic algorithmic trading systems, achieving consistent decile-1 risk-adjusted performance benchmarks (reflected in Bloomberg Trading Challenge Top 5% global standing).",
      techStack: ["Python", "R Econometrics", "Stochastic Calculus", "State-Space Filters (Kalman / Particle)", "Time Series ML", "Pandas / NumPy / SciPy", "Bloomberg Terminal Data APIs"],
    },
    {
      number: "05",
      name: "VinAI Eduverse",
      role: "Founder & Master Facilitator",
      logoSrc: `${basePath}/logos/vinai.svg`,
      tagline: "Democratizing Frontier AI Systems Literacy & Enterprise Orchestration",
      status: "Scaled Institutional Enablement",
      strategicMandate:
        "Designing and delivering immersive, hands-on masterclasses and university residencies that transform business executives, MBA candidates, and engineering faculties into autonomous systems operators.",
      structuralProblem:
        "A profound chasm exists between superficial prompt engineering and the multi-agent production orchestration required to build reliable, scalable business automation. Business schools and corporate training pipelines fail to teach the architectural mechanics of APIs, webhooks, and token cost governance.",
      architectureAndExecution:
        "Created an end-to-end curriculum focused on Persuasion Architecture, neuro-computational marketing, and multi-tier agentic systems. Modules cover live webhook integrations, n8n visual runtime workflows, context window compression, and enterprise compute cost governance.",
      commercialImpact:
        "Trained over 1,000+ working professionals, founders, and post-graduate cohorts. Designed and directed the flagship 3-month AIMS50x program at ICFAI Business School (IBS), mentoring 450+ MBA students and 30+ senior faculty members across 51 intensive hands-on sessions.",
      techStack: ["Systems Curriculum Design", "n8n Virtual Sandboxes", "Webhook Simulation Runtimes", "Make Infrastructure", "OpenAI / Anthropic SDKs"],
    },
    {
      number: "06",
      name: "Navkar Poly Print",
      role: "Creative Director",
      logoSrc: `${basePath}/logos/classess.svg`,
      tagline: "International Brand Systems & Digital Operations for Global Packaging Manufacturing",
      status: "Active Multinational Manufacturing",
      strategicMandate:
        "Directing international brand positioning, technical digital presence, and high-volume corporate communication for a major global polymer packaging manufacturer.",
      structuralProblem:
        "Traditional heavy manufacturing and industrial packaging companies struggle with fragmented international client communication, slow asset iteration cycles, and disjointed digital sales collateral across multinational trade expos.",
      architectureAndExecution:
        "Architected a unified digital asset and technical presentation framework for advanced polymer packaging products. Integrated modern CAD visualization pipelines, streamlined global client inquiry routing, and positioned Navkar's technical manufacturing capabilities at premier international industrial summits.",
      commercialImpact:
        "Elevated global enterprise presence across major international exhibitions including Plast India (2023-2026), AAHAR (Delhi), and IICI (Bangalore), engaging multinational FMCG and industrial buyers.",
      techStack: ["Global Brand Architecture", "Digital Operations Pipelines", "Industrial Packaging CAD", "Supply Chain Communications"],
    },
    {
      number: "07",
      name: "Frontier Autonomous Protocol",
      role: "Principal Systems Architect",
      logoSrc: `${basePath}/logos/smark.svg`,
      tagline: "Next-Generation Autonomous Capital Allocation & Unattended State Machines",
      status: "Stealth R&D (Confidential Protocol)",
      strategicMandate:
        "Pioneering an autonomous protocol layer that unifies quantitative actuarial risk controls with multi-agent economic execution—allowing enterprises to allocate compute, budget, and operational resources in real time without human latency.",
      structuralProblem:
        "Modern enterprises operate with severe decision latency between market signals, capital reallocation, and operational execution, creating massive deadweight operational drag.",
      architectureAndExecution:
        "Designing unattended multi-agent state machines with mathematical invariant checking, formal risk boundaries, and cryptographic proof-of-execution logs. The protocol automates micro-capital reallocation based on real-time conversion propensity and risk budgets.",
      commercialImpact:
        "Confidential research and deployment horizon scheduled for late 2026 / 2027.",
      techStack: ["Distributed State Machines", "Actuarial Risk Gates", "Rust Runtimes", "Zero-Knowledge Invariants", "Multi-Agent Swarms"],
    },
  ];

  const caseStudies = [
    {
      client: "Jedy Apps (Tel Aviv)",
      subtitle: "Autonomous Voice Outreach & Rapid Pipeline Acceleration",
      category: "Agentic AI",
      metrics: "$845,000 Pipeline in 24h · 54 Calls · 14 Sequences",
      details:
        "Engineered autonomous conversational voice agents with low-latency Fastify webhooks, real-time qualification logic, and immediate CRM synchronization. Client formally retained engagement for full-scale rollout.",
      stack: ["AI Voice Agents", "Fastify Webhooks", "Retell / Vapi", "HubSpot CRM"],
    },
    {
      client: "Praeemineo",
      subtitle: "Full-Funnel GTM Architecture & 200-Asset Content Engine",
      category: "RevOps & Growth",
      metrics: "200 URLs Mapped · 300 Social Assets · 25+ Design Hours Saved",
      details:
        "Architected comprehensive full-funnel go-to-market infrastructure across North America, India, MEA, and SEA. Implemented 200-asset semantic SEO topic clusters and custom GA4/GTM behavioral triggers.",
      stack: ["HubSpot Partner Admin", "GA4 & GTM", "WordPress", "Conversational AI"],
    },
    {
      client: "Smark Connect Platform",
      subtitle: "Enterprise Compute Governance & 95% Token Optimization",
      category: "Tokenomics & Infra",
      metrics: "95% Token Efficiency Gain · 3.8M Tokens Saved / Cycle",
      details:
        "Engineered containerized runtime environments with dynamic semantic compression algorithms and scheduled token quotas, compressing multi-account context loads from 4,000,000 to ~200,000 tokens.",
      stack: ["Claude 3.5 Sonnet", "Codex", "Docker Containers", "n8n Runtime", "Redis"],
    },
    {
      client: "Enterprise ABM & Summit Funnels",
      subtitle: "High-Velocity Event Capture & Tier-1 Account Mobilization",
      category: "Summit Capture",
      metrics: "230 Leads Captured · 21 Tier-1 Logos Engaged",
      details:
        "Captured and routed 230 qualified enterprise leads (176 from Nasscom Future Forge, 54 from DevSparks); engaged 21 Tier-1 accounts including Standard Bots, Ameriflex, and Endless Commerce.",
      stack: ["Apollo", "ZoomInfo", "HubSpot Sequences", "Intent Frameworks"],
    },
  ];

  const experience = [
    {
      title: "Programme Director – AIMS50x",
      org: "ICFAI Business School (IBS), Hyderabad",
      logo: `${basePath}/logos/ibs-hyderabad.png`,
      isDarkPng: true,
      description:
        "Designed and led a flagship 3-month program teaching AI in Marketing systems to 450+ MBA students and 30+ Professors across 51 intensive, hands-on sessions.",
      tag: "Academic Leadership",
    },
    {
      title: "Keynote Speaker",
      org: "JITO International Trade Organisation",
      logo: `${basePath}/logos/jito.png`,
      isDarkPng: true,
      description:
        "Addressed 8,000+ individuals on AI Automation in business at a premier global trade and industry conference.",
      tag: "Global Keynote",
    },
    {
      title: "TEDx Keynote Speaker 2025",
      org: "TEDx",
      logo: `${basePath}/logos/tedx.svg`,
      isDarkPng: false,
      description:
        "Delivered keynote on 'AI in Academics'; curated frontier thought leadership and international speakers recognized by Anand Mahindra.",
      tag: "Keynote 2025",
    },
    {
      title: "Guest Lecturer",
      org: "ICFAI School of Business",
      logo: `${basePath}/logos/ibs-hyderabad.png`,
      isDarkPng: true,
      description:
        "Delivered lectures on the real-life applications of AI in marketing, neuroscience, and deterministic business operations (2025).",
      tag: "Guest Faculty",
    },
    {
      title: "Industry Presence",
      org: "30+ Global Business Conferences",
      logo: `${basePath}/logos/nasscom.svg`,
      isDarkPng: false,
      description:
        "Attended 30+ conferences including AAHAR 2025 (Delhi), Plast India (2023-26), IICI (Bangalore), Nasscom Future Forge, DevSparks, and more.",
      tag: "Executive Presence",
    },
  ];

  const pressBios = {
    short50:
      "Vinay Jain is an enterprise systems architect and technology executive building autonomous AI infrastructure for the world's first one-person AI unicorn. Recognised by Anand Mahindra, Vinay is a TEDx Keynote Speaker, Actuarial Science distinction topper (IAI), IRM UK risk champion, and IIT Roorkee certified Macromolecular Engineer. He speaks globally and advises institutional enterprises on autonomous operations.",
    standard150:
      "Vinay Jain is an enterprise systems architect and technology executive building autonomous AI infrastructure for the world's first one-person AI unicorn. Recognised by Anand Mahindra for curating frontier thought leadership, Vinay is a TEDx Keynote Speaker on applied AI in academics, an Actuarial Science distinction topper (Institute of Actuaries of India – IAI), a national champion in Enterprise Risk Management (Institute of Risk Management – IRM UK), and a certified Macromolecular Engineer from IIT Roorkee.\n\nOperating at the intersection of stochastic mathematical discipline and frontier agentic systems, Vinay serves as Guest Lecturer and Programme Director at ICFAI School of Business—leading the flagship AIMS50x program for 450+ MBA candidates and 30+ professors. Through VinAI Technologies and associated ventures, he architects autonomous revenue engines that have generated over $850,000 in pipeline for global clients while drastically slashing LLM compute token overhead.",
    comprehensive500:
      "Vinay Jain is an enterprise systems architect, venture builder, and quantitative strategist building autonomous AI infrastructure for the world's first one-person AI unicorn. Recognised by Anand Mahindra for curating international thought leaders, Vinay operates at the frontier of autonomous agentic systems, academic operating infrastructure, and quantitative econometric modeling.\n\nHis technical execution bridges software architecture with commercial delivery—from deploying autonomous voice agents that generated $850,000 in qualified enterprise pipeline in 24 hours for Jedy Apps, to engineering token-optimized architectures on Smark Connect that reduced LLM context overhead by 95% (saving 3.8M tokens per execution cycle).\n\nUnderpinning his systems is rigorous quantitative authority. Vinay is an Economics & Finance Valedictorian (CGPA 9.51), cleared the Actuarial Common Entrance Test (ACET) with distinction on the first attempt (Institute of Actuaries of India), and was named National Winner in Enterprise Risk Modeling by the Institute of Risk Management (IRM UK). A certified Macromolecular Engineer from IIT Roorkee, SEBI-registered Equity Research Analyst, and Bloomberg Market Concepts certified practitioner, he combines stochastic calculus and microstructure modeling to develop explainable algorithmic systems through FinTrada.\n\nAs a global keynote speaker and academic leader, Vinay addressed 8,000+ delegates at the JITO Global Trade Summit, delivered a TEDx keynote on 'AI in Academics', and directed the AIMS50x initiative for 450+ MBA candidates and 30+ faculty members at ICFAI Business School. He advises institutional boards, founders, and private equity operating partners on building autonomous enterprise systems with deterministic capital leverage.",
  };

  return (
    <main className="w-full min-h-screen bg-black text-zinc-100 flex flex-col items-center selection:bg-zinc-800 selection:text-white antialiased overflow-x-hidden">
      {/* Full Screen Desktop Width with Apple-like Spacing */}
      <div className="w-full max-w-7xl px-4 sm:px-8 lg:px-12 py-8 sm:py-16 space-y-16 lg:space-y-20">
        
        {/* Floating Apple-like Top Bar */}
        <header className="sticky top-6 z-40 backdrop-blur-xl bg-zinc-950/80 border border-zinc-800/80 rounded-full px-4 sm:px-7 py-3 flex items-center justify-between shadow-2xl shadow-black/80 transition-all duration-300">
          <div className="flex items-center gap-3">
            <button
              onClick={handleVjClick}
              title="Vinay Jain · Tap 5 times for Unicorn Mode"
              className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700/80 flex items-center justify-center font-mono font-bold text-xs text-zinc-100 hover:scale-105 active:scale-95 transition-all cursor-pointer select-none"
            >
              VJ
            </button>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold tracking-tight text-white">Vinay Jain</span>
              <span className="hidden sm:inline-block text-[11px] font-mono text-zinc-500 uppercase">
                · Executive Press Kit
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Terminal CLI Trigger (Easter Egg 1) */}
            <button
              onClick={() => setIsTerminalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-all duration-200 cursor-pointer"
              title="Open Executive CLI (Cmd+K)"
            >
              <Terminal className="w-3.5 h-3.5 text-zinc-400" />
              <span className="hidden md:inline">CLI</span>
              <kbd className="hidden lg:inline px-1.5 py-0.5 text-[9px] bg-black border border-zinc-800 rounded text-zinc-400">⌘K</kbd>
            </button>

            <a
              href="#ventures-architecture"
              className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-zinc-400 hover:text-white transition-colors"
            >
              <span>Architecture</span>
            </a>
            <a
              href="#media-feature"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-zinc-400 hover:text-white transition-colors"
            >
              <span>Press</span>
            </a>
            <a
              href={pressKitLinks.portfolio}
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-all duration-200"
            >
              <span>Portfolio</span>
              <ExternalLink className="w-3 h-3 text-zinc-400" />
            </a>
            <a
              href={pressKitLinks.pressKitPdf}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-semibold bg-white hover:bg-zinc-200 text-black transition-all duration-200 shadow-sm"
            >
              <span>Press Kit PDF</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </header>

        {/* UNICORN MODE AMBIENT HUD BANNER (Easter Egg 2) */}
        {unicornMode && (
          <div className="w-full p-3.5 rounded-2xl bg-zinc-950 border border-zinc-700/80 text-xs font-mono flex items-center justify-between gap-4 shadow-2xl transition-all">
            <div className="flex items-center gap-3 overflow-hidden">
              <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_#ffffff] shrink-0" />
              <span className="text-white font-bold tracking-wider truncate">
                [SYSTEM: UNICORN CORE ACTIVE]
              </span>
              <span className="hidden sm:inline text-zinc-400 truncate">
                · -95% CONTEXT PRUNING · ZERO-HALLUCINATION GATES · $850K PIPELINE/24H
              </span>
            </div>
            <button
              onClick={() => setUnicornMode(false)}
              className="text-zinc-500 hover:text-white text-[11px] font-mono underline shrink-0 cursor-pointer"
            >
              Deactivate HUD
            </button>
          </div>
        )}

        {/* Hero Section */}
        <section className="space-y-8 pt-2">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-zinc-200 shadow-[0_0_6px_rgba(255,255,255,0.4)]" />
            <span className="tracking-wide uppercase text-[11px]">Official Institutional Dossier &amp; Press Kit</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
              Vinay Jain
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-zinc-300 font-medium tracking-tight max-w-4xl leading-snug">
              Building AI Infrastructure for World&apos;s First One Person AI Unicorn.
            </p>
          </div>

          {/* TEDx BANNER IMAGE - FIXED: FOCUSING TOP PART (objectPosition: "center 0%") */}
          <div className="relative rounded-3xl overflow-hidden border border-zinc-800/80 bg-zinc-950 shadow-2xl group">
            <div className="w-full h-[320px] sm:h-[440px] md:h-[540px] lg:h-[640px] overflow-hidden relative">
              <img
                src={`${basePath}/images/tedx-banner.jpeg`}
                alt="Vinay Jain TEDx Keynote Speaker Stage"
                className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-700 ease-out"
                style={{ objectPosition: "center 0%" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none" />
            </div>

            <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4 pointer-events-auto">
              <div className="space-y-1.5 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-750 text-zinc-200 text-xs font-mono inline-flex items-center gap-1.5 backdrop-blur-md">
                    <Mic className="w-3.5 h-3.5 text-zinc-300" />
                    <span>TEDx Keynote Speaker · 2025</span>
                  </span>
                </div>
                <h3 className="text-lg sm:text-2xl font-bold text-white tracking-tight drop-shadow-md">
                  &ldquo;AI in Academics&rdquo;
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 font-normal drop-shadow-md max-w-xl">
                  Curating frontier idea architecture &amp; addressing international thought leaders (Recognised by Anand Mahindra).
                </p>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-auto">
                <a
                  href={`${basePath}/images/tedx-banner.jpeg`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-1.5 rounded-full bg-black/70 hover:bg-black/90 backdrop-blur-md border border-white/20 text-white text-xs font-mono transition-colors flex items-center gap-1.5"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>View Stage</span>
                </a>
              </div>
            </div>
          </div>

          {/* TWO-COLUMN EXECUTIVE HERO: Impact Paragraph + Downloadable Portrait */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-4">
            
            {/* Left 8 Cols: Introductory Impact Paragraph & Direct Contacts */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* REQUIRED INTRODUCTORY IMPACT PARAGRAPH */}
              <div className="p-6 sm:p-8 rounded-3xl bg-zinc-950/90 border border-zinc-800/80 space-y-4 shadow-xl">
                <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-zinc-300" />
                    <span>Executive Introduction &amp; Institutional Profile</span>
                  </span>
                  <span className="text-[11px] font-mono text-zinc-300 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified Institutional Standing</span>
                  </span>
                </div>

                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                  Vinay Jain is an enterprise systems architect and technology executive building autonomous AI infrastructure for the world&apos;s first one-person AI unicorn. Recognised by <strong className="text-white font-semibold">Anand Mahindra</strong> for curating frontier thought leadership, Vinay is a <strong className="text-white font-semibold">TEDx Keynote Speaker</strong> on applied AI in academics, an <strong className="text-white font-semibold">Actuarial Science distinction topper (Institute of Actuaries of India – IAI)</strong>, a national champion in Enterprise Risk Management (<strong className="text-white font-semibold">Institute of Risk Management – IRM UK</strong>), and a certified <strong className="text-white font-semibold">Macromolecular Engineer from IIT Roorkee</strong>. Operating at the frontier of stochastic risk modeling and unattended agentic systems, he serves as <strong className="text-white font-semibold">Guest Lecturer</strong> and <strong className="text-white font-semibold">Programme Director</strong> at ICFAI School of Business—directing flagship programs for 450+ MBA candidates and 30+ professors—while architecting autonomous enterprise pipelines that have delivered over <strong className="text-white font-semibold">$850,000 in pipeline</strong> for global clients.
                </p>

                {/* Direct Executive Contact Matrix */}
                <div className="pt-4 border-t border-zinc-900/80 flex flex-wrap items-center gap-3 text-xs font-mono">
                  <button
                    onClick={() => handleCopy(pressKitLinks.email, "email")}
                    className="px-3.5 py-1.5 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    <Mail className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{pressKitLinks.email}</span>
                    {copiedField === "email" ? (
                      <Check className="w-3.5 h-3.5 text-zinc-200 ml-1" />
                    ) : (
                      <Copy className="w-3 h-3 text-zinc-500 ml-1" />
                    )}
                  </button>

                  <button
                    onClick={() => handleCopy(pressKitLinks.phone, "phone")}
                    className="px-3.5 py-1.5 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    <Phone className="w-3.5 h-3.5 text-zinc-400" />
                    <span>+91 {pressKitLinks.phone}</span>
                    {copiedField === "phone" ? (
                      <Check className="w-3.5 h-3.5 text-zinc-200 ml-1" />
                    ) : (
                      <Copy className="w-3 h-3 text-zinc-500 ml-1" />
                    )}
                  </button>

                  <a
                    href={pressKitLinks.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-1.5 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white transition-colors inline-flex items-center gap-1.5"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5 text-zinc-400" />
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                  </a>

                  <span className="px-3.5 py-1.5 rounded-full bg-zinc-900/60 border border-zinc-850 text-zinc-400 text-xs inline-flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{pressKitLinks.location}</span>
                  </span>
                </div>
              </div>

              {/* Verified Press Bios Switcher */}
              <div className="p-6 rounded-3xl bg-zinc-950/70 border border-zinc-800/80 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-900 pb-3">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                      Standard Press Bios
                    </span>
                    <span className="text-xs text-zinc-500 block">
                      Approved copy for speaker introductions, conference brochures &amp; media
                    </span>
                  </div>

                  {/* Tabs */}
                  <div className="flex items-center gap-1 bg-zinc-900 p-1 rounded-2xl border border-zinc-800">
                    <button
                      onClick={() => setActiveBioTab("short50")}
                      className={`px-3 py-1 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                        activeBioTab === "short50"
                          ? "bg-white text-black font-semibold shadow-sm"
                          : "text-zinc-400 hover:text-zinc-200"
                      }`}
                    >
                      50 Words
                    </button>
                    <button
                      onClick={() => setActiveBioTab("standard150")}
                      className={`px-3 py-1 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                        activeBioTab === "standard150"
                          ? "bg-white text-black font-semibold shadow-sm"
                          : "text-zinc-400 hover:text-zinc-200"
                      }`}
                    >
                      150 Words
                    </button>
                    <button
                      onClick={() => setActiveBioTab("comprehensive500")}
                      className={`px-3 py-1 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                        activeBioTab === "comprehensive500"
                          ? "bg-white text-black font-semibold shadow-sm"
                          : "text-zinc-400 hover:text-zinc-200"
                      }`}
                    >
                      500 Words
                    </button>
                  </div>
                </div>

                <div className="relative">
                  <div className="text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed whitespace-pre-line bg-zinc-900/40 p-4 rounded-2xl border border-zinc-850">
                    {pressBios[activeBioTab]}
                  </div>
                  <button
                    onClick={() => handleCopy(pressBios[activeBioTab], `bio-${activeBioTab}`)}
                    className="mt-3 px-3 py-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-750 text-zinc-300 hover:text-white text-xs font-mono transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    {copiedField === `bio-${activeBioTab}` ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-zinc-200" />
                        <span>Copied Bio</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-zinc-400" />
                        <span>Copy Active Bio</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Right 4 Cols: DOWNLOADABLE EXECUTIVE PORTRAIT */}
            <div className="lg:col-span-4 p-4 rounded-3xl bg-zinc-950 border border-zinc-800/80 shadow-2xl space-y-4">
              <div className="flex items-center justify-between px-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                  Official Executive Portrait
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-300">
                  Print &amp; Digital
                </span>
              </div>

              {/* Portrait Frame */}
              <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden bg-black border border-zinc-800 relative group">
                <img
                  src={`${basePath}/images/vinay-jain-portrait.jpeg`}
                  alt="Vinay Jain Official Executive Portrait"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-xs text-white font-mono">Formal Black Suit Portrait</span>
                </div>
              </div>

              {/* Prominent Download Button */}
              <a
                href={`${basePath}/images/vinay-jain-portrait.jpeg`}
                download="Vinay_Jain_Executive_Portrait.jpeg"
                className="w-full py-2.5 px-4 rounded-2xl bg-white hover:bg-zinc-200 text-black text-xs font-semibold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Portrait (JPEG)</span>
              </a>

              <div className="text-[10px] font-mono text-zinc-500 text-center">
                High-Resolution · Approved for Conference Programs &amp; Media
              </div>
            </div>
          </div>
        </section>

        {/* Quantified Executive Impact Strip (Apple-style 6-Card Grid) */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500">
              Audited Production Benchmarks
            </span>
            <span className="text-[11px] font-mono text-zinc-500">Contemporaneously Verified</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {proofPoints.map((item, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-3xl bg-zinc-950 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-white tracking-tight">
                    {item.value}
                  </div>
                  <div className="text-xs font-semibold text-zinc-300 mt-1 mb-2">
                    {item.label}
                  </div>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed pt-2 border-t border-zinc-900">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* INSTITUTIONAL AFFILIATIONS & GLOBAL ENTERPRISE DEPLOYMENTS */}
        <section className="space-y-6 pt-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-900 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
                <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400">
                  Institutional Affiliations &amp; Enterprise Deployments
                </span>
              </div>
              <p className="text-xs text-zinc-400 mt-1">
                Academic Residencies, Global Keynotes, Certified Quantitative Bodies &amp; Enterprise AI Systems
              </p>
            </div>
            <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest shrink-0">
              Verified Logos
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
            {institutionalLogos.map((item, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-zinc-950/70 border border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/40 transition-all duration-200 flex flex-col items-center justify-between gap-3 text-center group min-h-[110px]"
              >
                <div className="flex-1 flex items-center justify-center w-full px-2">
                  <img
                    src={item.src}
                    alt={`${item.name} logo`}
                    className={`${item.isDarkPng ? "logo-mono-dark" : "logo-mono"} max-h-8 max-w-[110px] object-contain transition-all`}
                  />
                </div>
                <div className="space-y-0.5 w-full">
                  <div className="text-[11px] font-semibold text-zinc-300 group-hover:text-white transition-colors truncate">
                    {item.name}
                  </div>
                  <div className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider line-clamp-1">
                    {item.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* INTERACTIVE QUANT EASTER EGG: TOKEN OPTIMIZATION SIMULATOR */}
        <section className="p-6 sm:p-8 rounded-3xl bg-zinc-950/80 border border-zinc-800/80 space-y-6 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-900 pb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Sliders className="w-3.5 h-3.5 text-zinc-400" />
                <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400">
                  Interactive Architecture Benchmark · Smark Connect
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Simulate Enterprise Context Window Compression
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-300">
                -95% Token Slashing Model
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-zinc-400">Monthly Enterprise Token Volume:</span>
                <span className="text-white font-bold text-sm">{(tokenInput / 1000000).toFixed(1)}M Tokens</span>
              </div>
              <input
                type="range"
                min="500000"
                max="20000000"
                step="500000"
                value={tokenInput}
                onChange={(e) => setTokenInput(Number(e.target.value))}
                className="w-full accent-white bg-zinc-900 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-zinc-600">
                <span>0.5M Tokens (Seed)</span>
                <span>10.0M Tokens (Growth)</span>
                <span>20.0M Tokens (Enterprise)</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed pt-1">
                Based on production algorithms deployed on Smark Connect: multi-account prompt loads are pruned from massive context windows down to high-signal vectors, eliminating token deadweight without losing transactional state.
              </p>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-3 p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800/80">
              <div className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800/60">
                <span className="text-[10px] font-mono uppercase text-zinc-500 block mb-1">Compressed Footprint</span>
                <span className="text-lg font-mono font-bold text-white">{((tokenInput * 0.05) / 1000).toLocaleString()}k</span>
                <span className="text-[9px] font-mono text-zinc-400 block mt-0.5">-95.0% Context</span>
              </div>
              <div className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800/60">
                <span className="text-[10px] font-mono uppercase text-zinc-500 block mb-1">Tokens Saved</span>
                <span className="text-lg font-mono font-bold text-white">{((tokenInput * 0.95) / 1000000).toFixed(2)}M</span>
                <span className="text-[9px] font-mono text-zinc-400 block mt-0.5">Per Execution Cycle</span>
              </div>
              <div className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800/60">
                <span className="text-[10px] font-mono uppercase text-zinc-500 block mb-1">Est. Compute Savings</span>
                <span className="text-lg font-mono font-bold text-white">${(((tokenInput * 0.95) / 1000000) * 15).toFixed(0)}</span>
                <span className="text-[9px] font-mono text-zinc-400 block mt-0.5">Blended API Rates</span>
              </div>
              <div className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800/60">
                <span className="text-[10px] font-mono uppercase text-zinc-500 block mb-1">Deterministic Audit</span>
                <span className="text-lg font-mono font-bold text-white">100.0%</span>
                <span className="text-[9px] font-mono text-zinc-400 block mt-0.5">Zero Hallucinations</span>
              </div>
            </div>
          </div>
        </section>

        {/* VENTURES AND SYSTEMS ARCHITECTURE - HIGHLY DESCRIPTIVE EDITORIAL PROSPECTUS (NOT CARDS FORMATTING) */}
        <section id="ventures-architecture" className="space-y-12 scroll-mt-24 pt-4">
          <div className="border-b border-zinc-900 pb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-zinc-400" />
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                Architectural Monograph &amp; Executive Leadership
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Ventures &amp; Systems Architecture
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 max-w-3xl mt-3 leading-relaxed">
              In-depth architectural blueprints of production operating systems, cognitive university infrastructure, 
              token-governed revenue engines, and quantitative state-space models engineered by Vinay Jain.
            </p>
          </div>

          {/* Sequential Descriptive Monograph Entries */}
          <div className="space-y-16 lg:space-y-24">
            {ventures.map((v, i) => (
              <article
                key={i}
                className="p-6 sm:p-10 lg:p-12 rounded-3xl bg-zinc-950 border border-zinc-800/80 space-y-8 shadow-2xl relative"
              >
                {/* Header: Venture Identity with Official Monochrome Logo */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-900 pb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-center p-2.5 shrink-0">
                      <img
                        src={v.logoSrc}
                        alt={`${v.name} Logo`}
                        className="logo-mono w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2.5 mb-1">
                        <span className="font-mono text-xs text-zinc-500 font-bold tracking-widest">
                          {v.number}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider uppercase bg-zinc-900 border border-zinc-800 text-zinc-300">
                          {v.role}
                        </span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                        {v.name}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-zinc-300">
                      {v.status}
                    </span>
                  </div>
                </div>

                <div className="text-base sm:text-lg font-medium text-zinc-200 italic border-l-2 border-zinc-700 pl-4 py-1">
                  &ldquo;{v.tagline}&rdquo;
                </div>

                {/* Deep Descriptive Prospectus Blocks */}
                <div className="space-y-8 text-sm sm:text-base leading-relaxed text-zinc-300">
                  
                  {/* Strategic Mandate */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                      I. Strategic Mandate &amp; Executive Thesis
                    </h4>
                    <p className="text-zinc-300 font-normal">
                      {v.strategicMandate}
                    </p>
                  </div>

                  {/* Structural Problem */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                      II. Structural Inefficiency &amp; Market Vulnerability
                    </h4>
                    <p className="text-zinc-400 font-normal">
                      {v.structuralProblem}
                    </p>
                  </div>

                  {/* Systems Architecture & Technical Blueprint */}
                  <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 space-y-3">
                    <div className="flex items-center gap-2 text-zinc-300">
                      <Cpu className="w-4 h-4 text-zinc-400" />
                      <span className="text-xs font-mono uppercase tracking-widest font-semibold text-white">
                        III. Technical Blueprint &amp; System Execution
                      </span>
                    </div>
                    <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                      {v.architectureAndExecution}
                    </p>
                  </div>

                  {/* Quantified Commercial Impact */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-300 mb-1 flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-zinc-400" />
                      <span>IV. Audited Production Deliverables &amp; Capital Leverage</span>
                    </h4>
                    <p className="text-zinc-300 font-normal">
                      {v.commercialImpact}
                    </p>
                  </div>
                </div>

                {/* Production Technology Stack */}
                <div className="pt-6 border-t border-zinc-900 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-zinc-500 mr-2 flex items-center gap-1">
                    <Layers className="w-3 h-3 text-zinc-500" />
                    <span>Stack:</span>
                  </span>
                  {v.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-full text-xs font-mono bg-zinc-900/80 border border-zinc-800 text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Quantified Production Case Studies */}
        <section className="space-y-8">
          <div className="border-b border-zinc-900 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                Audited Client Engagements
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
                Quantitative Case Studies
              </h2>
            </div>
            <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700/80 text-zinc-200 text-xs font-mono">
              Live Production Records
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((cs, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-zinc-950 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-300 space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                      {cs.category}
                    </span>
                    <div className="text-xs font-mono font-bold text-white">
                      Verified Impact
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white">{cs.client}</h3>
                    <p className="text-xs text-zinc-400 mt-1 font-medium">{cs.subtitle}</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-zinc-900/60 border border-zinc-800 text-xs font-mono text-zinc-200 font-semibold">
                    {cs.metrics}
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {cs.details}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-900">
                  {cs.stack.map((item, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded-full text-[11px] font-mono bg-zinc-900 text-zinc-400 border border-zinc-800"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Academic Excellence & Education (Institution Name Kept Purely Minimal) */}
        <section className="p-6 sm:p-10 rounded-3xl bg-zinc-950 border border-zinc-800/80 space-y-8 shadow-2xl">
          <div className="border-b border-zinc-900 pb-5">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
              Institutional Authority &amp; Quantitative Standing
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
              Academic Excellence &amp; Mathematical Rigor
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Underpinning high-throughput AI infrastructure with actuarial calculus, stochastic modeling, and quantitative finance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Degree & Valedictorian Standing */}
            <div className="lg:col-span-6 space-y-4">
              <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-mono bg-zinc-900 border border-zinc-800 text-zinc-300">
                    <Award className="w-3.5 h-3.5 text-zinc-300" />
                    <span>Valedictorian Candidate</span>
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white">
                    B.A. (Hons.) Economics &amp; Finance
                  </h3>
                  <div className="flex items-center gap-3 mt-1.5">
                    <span className="text-2xl font-mono font-bold text-white">CGPA 9.51</span>
                    <span className="text-xs font-mono text-zinc-400">Class Rank: 1 / 80</span>
                  </div>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  Stochastic calculus, econometric time series, and computational microstructure models. Awarded Dean&apos;s List Honor Roll across all academic semesters.
                </p>
              </div>
            </div>

            {/* Actuarial & Risk Certifications */}
            <div className="lg:col-span-6 space-y-3">
              <div className="p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800 flex items-start gap-3.5">
                <img
                  src={`${basePath}/logos/actuaries-india.png`}
                  alt="IAI Logo"
                  className="logo-mono-dark h-8 w-8 object-contain shrink-0 mt-0.5"
                />
                <div>
                  <div className="text-xs font-mono font-semibold text-white">
                    Institute of Actuaries of India (IAI)
                  </div>
                  <div className="text-xs text-zinc-400 mt-0.5">
                    Actuarial Common Entrance Test (ACET) — <strong className="text-zinc-200">Cleared with Distinction (AIR 1 Topper, 1st Attempt)</strong>. Mathematical modeling across CM1, CS1, CB1, CB2.
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800 flex items-start gap-3.5">
                <img
                  src={`${basePath}/logos/irm-uk.svg`}
                  alt="IRM UK Logo"
                  className="logo-mono h-8 w-8 object-contain shrink-0 mt-0.5"
                />
                <div>
                  <div className="text-xs font-mono font-semibold text-white">
                    Institute of Risk Management (IRM UK)
                  </div>
                  <div className="text-xs text-zinc-400 mt-0.5">
                    <strong className="text-zinc-200">National Winner</strong> in Enterprise Risk Management (ERM). Actuarial risk modeling &amp; corporate capital allocation.
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800 flex items-start gap-3.5">
                <img
                  src={`${basePath}/logos/iit-roorkee.svg`}
                  alt="IIT Roorkee Logo"
                  className="logo-mono h-8 w-8 object-contain shrink-0 mt-0.5"
                />
                <div>
                  <div className="text-xs font-mono font-semibold text-white">
                    Indian Institute of Technology (IIT) Roorkee
                  </div>
                  <div className="text-xs text-zinc-400 mt-0.5">
                    Certified <strong className="text-zinc-200">Macromolecular Engineer</strong>. Polymer structures, industrial chemical synthesis &amp; materials engineering.
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800 flex items-start gap-3.5">
                <img
                  src={`${basePath}/logos/bloomberg.svg`}
                  alt="Bloomberg Logo"
                  className="logo-mono h-6 w-16 object-contain shrink-0 mt-1"
                />
                <div>
                  <div className="text-xs font-mono font-semibold text-white">
                    Bloomberg &amp; Capital Market Credentials
                  </div>
                  <div className="text-xs text-zinc-400 mt-0.5">
                    Bloomberg Market Concepts (BMC) Certified · SEBI-Registered Equity Research Analyst · NISM Series XV Certified.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Keynote Lectures, Academic Positions & Global Presence */}
        <section className="space-y-6">
          <div className="border-b border-zinc-900 pb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
              Global Engagements
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
              Keynote Lectures &amp; Academic Positions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {experience.map((exp, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-zinc-950 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-200 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider uppercase bg-zinc-900 border border-zinc-800 text-zinc-300">
                      {exp.tag}
                    </span>
                    <img
                      src={exp.logo}
                      alt={`${exp.org} Logo`}
                      className={`${exp.isDarkPng ? "logo-mono-dark" : "logo-mono"} h-5 max-w-[70px] object-contain`}
                    />
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white">{exp.title}</h3>
                    <div className="text-xs font-mono text-zinc-400 mt-0.5">{exp.org}</div>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Press Coverage Section: Education Times Clipping */}
        <section id="media-feature" className="p-6 sm:p-10 rounded-3xl bg-zinc-950 border border-zinc-800/80 space-y-6 scroll-mt-24 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-900 pb-5">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider uppercase bg-zinc-900 border border-zinc-700 text-zinc-200">
                  Featured Press Coverage · Education Times
                </span>
                <span className="text-xs font-mono text-zinc-500">03 February 2026</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                &ldquo;Young Prodigy Redefines AI Marketing at IBS&rdquo;
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                Vinay Jain, 20-Year-Old Polymath, Bridges Neuroscience and AI Systems for MBA Students.
              </p>
            </div>

            <a
              href={`${basePath}/images/education-times-clipping.jpeg`}
              download="Education_Times_Vinay_Jain_Feature.jpeg"
              className="self-start sm:self-auto px-4 py-2 rounded-2xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white text-xs font-mono uppercase tracking-wider transition-colors inline-flex items-center gap-2 shrink-0 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Clipping</span>
            </a>
          </div>

          {/* Newspaper Clipping Display */}
          <div className="w-full rounded-2xl overflow-hidden border border-zinc-800 bg-black p-2 sm:p-3 relative group">
            <img
              src={`${basePath}/images/education-times-clipping.jpeg`}
              alt="Education Times Feature: Young Prodigy Redefines AI Marketing at IBS"
              className="w-full h-auto rounded-xl object-contain object-top group-hover:scale-[1.01] transition-transform duration-300"
            />
          </div>

          <div className="p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800/60 text-xs text-zinc-400 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <p className="italic">
              &ldquo;The industry&apos;s need for growing marketing expertise is no longer about just &apos;ads&apos;; it&apos;s about systems.&rdquo;
            </p>
            <span className="text-[11px] font-mono text-zinc-500 shrink-0">
              Education Times Archival Record
            </span>
          </div>
        </section>

        {/* Official Press Kit Resource Links & Direct Contact Footer */}
        <footer className="p-6 sm:p-10 rounded-3xl bg-zinc-950 border border-zinc-800/80 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-900 pb-6">
            <div>
              <h2 className="text-xl font-semibold text-white">Press Kit &amp; Verified Institutional Links</h2>
              <p className="text-xs text-zinc-400 mt-1">
                Direct endpoints for conference coordinators, journalists, and institutional partners.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-zinc-200" />
              <span className="text-xs font-mono text-zinc-400">Available for 2026/2027 Keynotes</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <a
              href={pressKitLinks.portfolio}
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-2xl bg-zinc-900 hover:bg-zinc-800/90 border border-zinc-800 transition-all duration-200 flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between mb-4">
                <Globe className="w-5 h-5 text-zinc-400" />
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-zinc-500 uppercase block mb-1">Interactive Showcase</span>
                <span className="text-sm font-semibold text-white">Full Digital Portfolio</span>
              </div>
            </a>

            <a
              href={pressKitLinks.pressKitPdf}
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-2xl bg-zinc-900 hover:bg-zinc-800/90 border border-zinc-800 transition-all duration-200 flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between mb-4">
                <FileText className="w-5 h-5 text-zinc-400" />
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-zinc-500 uppercase block mb-1">Official Document</span>
                <span className="text-sm font-semibold text-white">Download Press Kit (PDF)</span>
              </div>
            </a>

            <a
              href={pressKitLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-2xl bg-zinc-900 hover:bg-zinc-800/90 border border-zinc-800 transition-all duration-200 flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between mb-4">
                <LinkedinIcon className="w-5 h-5 text-zinc-400" />
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-zinc-500 uppercase block mb-1">LinkedIn Profile</span>
                <span className="text-sm font-semibold text-white">rvinayjain07</span>
              </div>
            </a>
          </div>

          <div className="pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-zinc-300">rvinayjain@icloud.com</span>
              <span>·</span>
              <span className="text-zinc-300">+91 8096933000</span>
              <span>·</span>
              <span>Telangana, India</span>
            </div>
            <div>
              &copy; 2026 Vinay Jain. All rights reserved.
            </div>
          </div>
        </footer>

      </div>

      {/* EASTER EGG TERMINAL MODAL (Triggered by Cmd+K, CLI button, or typing vj) */}
      {isTerminalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="w-full max-w-2xl bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh]">
            
            {/* Terminal Window Header */}
            <div className="px-5 py-3.5 bg-zinc-900/60 border-b border-zinc-800/80 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full bg-zinc-700 hover:bg-red-500/80 transition-colors cursor-pointer"
                  onClick={() => setIsTerminalOpen(false)}
                  title="Close Terminal"
                />
                <div className="w-3 h-3 rounded-full bg-zinc-700 hover:bg-yellow-500/80 transition-colors cursor-pointer" />
                <div className="w-3 h-3 rounded-full bg-zinc-700 hover:bg-green-500/80 transition-colors cursor-pointer" />
                <span className="text-xs font-mono text-zinc-400 ml-2">vinay-jain — zsh — 80x24</span>
              </div>
              <button
                onClick={() => setIsTerminalOpen(false)}
                className="p-1 rounded-lg text-zinc-500 hover:text-white hover:bg-zinc-800/60 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Suggestion Directives */}
            <div className="px-5 py-2.5 bg-zinc-900/30 border-b border-zinc-800/60 flex items-center gap-2 overflow-x-auto text-[11px] font-mono">
              <span className="text-zinc-500 uppercase text-[10px] tracking-wider shrink-0">Directives:</span>
              {["whoami", "unicorn", "metrics", "anand-mahindra", "quant", "contact", "unicorn-mode", "clear"].map((c) => (
                <button
                  key={c}
                  onClick={() => executeCommand(c)}
                  className="px-2.5 py-0.5 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white transition-colors shrink-0 cursor-pointer"
                >
                  {c}
                </button>
              ))}
            </div>

            {/* Terminal Output Log */}
            <div className="p-5 flex-1 overflow-y-auto font-mono text-xs space-y-4">
              {terminalLogs.map((log, index) => (
                <div key={index} className="space-y-1.5">
                  {log.cmd !== "init" && (
                    <div className="flex items-center gap-2 text-zinc-500">
                      <span className="text-zinc-300">vinay@unicorn-os:~$</span>
                      <span className="text-white font-semibold">{log.cmd}</span>
                    </div>
                  )}
                  <div className="pl-4 border-l border-zinc-800">{log.output}</div>
                </div>
              ))}
            </div>

            {/* Terminal Input Form */}
            <form onSubmit={handleTerminalSubmit} className="p-3 bg-zinc-900/50 border-t border-zinc-800 flex items-center gap-2">
              <span className="text-xs font-mono text-zinc-400 pl-2">vinay@unicorn-os:~$</span>
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder="type directive (e.g. whoami, unicorn, metrics)..."
                className="flex-1 bg-transparent text-xs font-mono text-white focus:outline-none placeholder:text-zinc-600"
                autoFocus
              />
              <button
                type="submit"
                className="px-3 py-1 rounded-xl bg-white text-black text-xs font-mono font-medium hover:bg-zinc-200 transition-colors cursor-pointer"
              >
                Run
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
