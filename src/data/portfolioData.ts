export interface Venture {
  id: string;
  name: string;
  role: string;
  domain: string;
  tagline: string;
  badge: string;
  structuralProblem: string;
  solutionArchitecture: string;
  capabilities: string[];
  commercialImpact: string;
  techStack: string[];
  status: string;
  image: string;
  href?: string;
  metricHighlight: {
    value: string;
    label: string;
  };
}

export interface CaseStudy {
  id: string;
  client: string;
  subtitle: string;
  category: string;
  period: string;
  deployedStack: string[];
  technicalScope: string;
  auditedOutcome: string;
  keyMetrics: { label: string; value: string }[];
  breakdown: string[];
}

export interface Keynote {
  id: string;
  title: string;
  subtitle: string;
  targetAudience: string;
  duration: string;
  abstract: string;
  takeaways: string[];
}

export interface QuantitativeCredential {
  category: "Actuarial Science" | "Academic Honors" | "Accreditations" | "Competitions" | "Research";
  title: string;
  institution: string;
  description: string;
  badge?: string;
  year?: string;
}

export const PORTFOLIO_DATA = {
  executive: {
    name: "Vinay Jain",
    monogram: "VJ",
    title: "Systems Architect & Technology Executive",
    statusBadge: "Available for Select Institutional Advisory & Keynotes",
    headline: "Engineering Autonomous Systems, Quantitative Intelligence, and Enterprise Scale.",
    subheadline:
      "Enterprise systems architect and executive operating at the convergence of frontier agentic workflows, academic operating systems, and dynamic quantitative models. Proven execution delivering multi-million-dollar pipelines and enterprise-grade compute governance.",
    directiveQuote:
      "Most technology strategies stop at conversational interfaces and incremental productivity tweaks. I architect end-to-end, unattended operating infrastructure designed for compounding commercial leverage.",
    currentRoles: [
      { role: "Global Marketing Officer", company: "Classess.com", type: "Academic OS" },
      { role: "Founder & CEO", company: "VinAI Technologies", type: "Agentic AI Infrastructure" },
      { role: "System Architect", company: "Smark Connect", type: "Enterprise ABM & Tokenomics" },
      { role: "Strategic AI Architect", company: "Dexset AI", type: "Data Orchestration" },
      { role: "Lead Quantitative Architect", company: "FinTrada", type: "Quantitative Finance" },
    ],
    contact: {
      email: "rvinayjain@icloud.com",
      phone: "+91 8096933000",
      location: "Hyderabad, India (Global Operating Cadence)",
      website: "itsvinay.me",
      linkedin: "https://linkedin.com/in/vinayjain-07",
    },
    fastFacts: [
      { label: "Base of Operations", value: "Hyderabad, India (Global Advisory)" },
      { label: "Direct Executive Line", value: "+91 8096933000" },
      { label: "Direct Inquiries", value: "rvinayjain@icloud.com" },
      { label: "Academic Standing", value: "Valedictorian (CGPA 9.51)" },
      { label: "Quantitative Rigor", value: "Actuarial Science (IAI Distinction)" },
      { label: "Regulatory Status", value: "SEBI Registered Equity Analyst" },
    ],
  },

  proofPoints: [
    {
      value: "$845,000+",
      label: "Qualified Pipeline in 24h",
      detail:
        "Delivered in a single day via zero-touch autonomous voice calling agents and personalized outreach sequences for Jedy Apps.",
      provenance: "Contemporaneous Executive Delivery Log (13 Aug 2026)",
    },
    {
      value: "95%",
      label: "Token Overhead Reduction",
      detail:
        "Architected token-efficient enterprise ABM workflows on Smark Connect, slashing prompt footprints from 4,000,000 to ~200,000 tokens (3.8M tokens saved per cycle).",
      provenance: "Smark Connect Infrastructure Benchmark",
    },
    {
      value: "8,000+",
      label: "Global Delegates Addressed",
      detail:
        "Keynote speaker at JITO Global Trade Summit on deterministic AI operations; directed the 3-month AIMS50x initiative for 450+ MBA candidates and 30+ faculty at ICFAI Business School.",
      provenance: "JITO Summit & ICFAI Academic Records",
    },
    {
      value: "230+",
      label: "Tier-1 Enterprise Leads Mobilized",
      detail:
        "Engineered real-time digital capture and routing funnels across Nasscom Future Forge (176) and DevSparks (54), engaging 21 Tier-1 enterprise accounts.",
      provenance: "Audited Summit Campaign Reports",
    },
    {
      value: "Top 1%",
      label: "Mathematical & Risk Rigor",
      detail:
        "Actuarial Science Distinction (IAI - CM1, CS1, CB1, CB2), National Champion in Enterprise Risk (IRM UK), and Economics & Finance Valedictorian (CGPA 9.51).",
      provenance: "Institutional Registries (IAI, IRM UK, MU)",
    },
  ],

  ventures: [
    {
      id: "classess",
      name: "Classess.com",
      role: "Global Marketing Officer (GMO) & Strategic Architect",
      domain: "Academic Operating Systems & AI Infrastructure",
      tagline: "The World's First Fully AI-Native Academic Operating System",
      badge: "Flagship Venture",
      structuralProblem:
        "Higher education institutions globally operate on fragmented, decades-old LMS and ERP architectures. This structural obsolescence causes massive administrative friction, high attrition rates, broken student-institution feedback loops, and hundreds of thousands of lost administrative hours.",
      solutionArchitecture:
        "Classess.com rebuilds the university technology stack from first principles. It introduces an AI-native cognitive infrastructure layer that synchronizes institutional administrative workflows, orchestrates dynamic curriculum pathways, and automates high-touch student lifecycle interactions.",
      capabilities: [
        "Worldwide market distribution and institutional enterprise positioning",
        "International academic partnership frameworks and government liaisons",
        "Integration of cognitive AI models into core university administration",
        "Deterministic student lifecycle tracking and attrition mitigation pipelines",
      ],
      commercialImpact:
        "Directing international go-to-market rollout and institutional partnerships across tier-1 university ecosystems globally.",
      techStack: ["Next.js", "Frontier LLM Orchestration", "Fastify", "Enterprise ERP Connectors", "Distributed Databases"],
      status: "Active Production",
      image: "https://images.unsplash.com/photo-1517976487502-570a2a611116?auto=format&fit=crop&w=1200&q=80",
      href: "https://classess.com",
      metricHighlight: {
        value: "Global",
        label: "Worldwide Higher Ed Deployment",
      },
    },
    {
      id: "vinai-technologies",
      name: "VinAI Technologies",
      role: "Founder & Chief Executive Officer",
      domain: "Frontier Agentic Systems & Autonomous RevOps",
      tagline: "Deterministic Enterprise Infrastructure for the Autonomous Economy",
      badge: "Core Enterprise",
      structuralProblem:
        "Enterprise AI adoption is severely constrained by non-deterministic hallucination, soaring compute and token costs, and brittle prototype architectures that break when exposed to real-world operational load.",
      solutionArchitecture:
        "Architecting multi-tier autonomous agentic frameworks, event-driven webhook middleware, and deterministic CRM synchronizations that eliminate operational friction and human latency.",
      capabilities: [
        "Autonomous conversational voice calling agents for cold prospecting & qualification",
        "Generative Engine Optimization (GEO) for SERPs and AI search synthesis (Perplexity, ChatGPT, Gemini)",
        "Zero-touch CRM data enrichment and multi-stage pipeline dispatch",
        "Automated programmatic generation of hundreds of multi-format brand assets",
      ],
      commercialImpact:
        "Generated $845,000 in qualified enterprise pipeline in a single 24-hour run; dispatched 1,000+ AI-composed sequences with zero operational failure.",
      techStack: ["Python", "Fastify", "Docker", "n8n", "Retell/Vapi", "PostgreSQL", "Claude API", "Codex"],
      status: "Active Production",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
      metricHighlight: {
        value: "$845K",
        label: "Pipeline Delivered in 24h",
      },
    },
    {
      id: "dexset-ai",
      name: "Dexset AI",
      role: "Strategic AI Architect & Venture Lead",
      domain: "Enterprise Data Intelligence & Contextual Workflows",
      tagline: "High-Precision Data Orchestration & Contextual AI Infrastructure",
      badge: "Venture Lead",
      structuralProblem:
        "Enterprise datasets remain locked in unstructured silos, preventing foundation models from executing deterministic workflows with verified data lineage, privacy, and governance.",
      solutionArchitecture:
        "Dexset AI provides an intelligent data orchestration layer that extracts, synthesizes, and routes contextual enterprise knowledge to autonomous agents with verified execution traces.",
      capabilities: [
        "Context-aware pipeline routing for complex enterprise B2B environments",
        "Deterministic integration across modern data warehouses and multi-agent systems",
        "Strict enterprise data isolation and air-gapped synthesis protocols",
        "Zero-hallucination semantic search and knowledge graph construction",
      ],
      commercialImpact:
        "Enables tier-1 enterprise organizations to deploy autonomous agents against proprietary data without data leakage or compliance risk.",
      techStack: ["TypeScript", "Vector Embeddings", "RAG Pipelines", "FastAPI", "PostgreSQL", "Chroma/Pinecone"],
      status: "Active Production",
      image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80",
      metricHighlight: {
        value: "0-Hallucination",
        label: "Deterministic Data Linchpin",
      },
    },
    {
      id: "smark-connect",
      name: "Smark Connect Platform",
      role: "System Architect & Infrastructure Lead",
      domain: "Tokenomic Optimization & Enterprise Account-Based Marketing",
      tagline: "The 95% Token-Efficient Enterprise Revenue Acceleration Engine",
      badge: "Infra Benchmark",
      structuralProblem:
        "Large-scale ABM multi-agent campaigns rapidly exhaust LLM context budgets, causing catastrophic token depletion (millions of tokens per run) and unsustainable operating expenditure.",
      solutionArchitecture:
        "Engineered containerized runtime environments with dynamic semantic compression algorithms and scheduled token quotas, reducing context overhead by 95% while maintaining messaging fidelity.",
      capabilities: [
        "Dynamic semantic prompt compression (4,000,000 tokens to under 200,000 tokens)",
        "Automated quota scheduling to prevent out-of-band budget exhaustion",
        "Containerized parallel execution across Docker, n8n, Codex, and Claude runtimes",
        "Automated intent scoring and founder-level multi-touch sequence dispatch",
      ],
      commercialImpact:
        "Saved 3.8M tokens per multi-account execution cycle, directly powering multi-touch penetration campaigns across tier-1 accounts.",
      techStack: ["Docker", "n8n Containers", "Claude 3.5 Sonnet", "Codex", "REST API Middleware", "Redis"],
      status: "Scaled",
      image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80",
      metricHighlight: {
        value: "3.8M",
        label: "Tokens Saved Per Cycle",
      },
    },
    {
      id: "fintrada",
      name: "FinTrada (TRADA Framework)",
      role: "Lead Quantitative Researcher & System Architect",
      domain: "Quantitative Finance & Market Microstructure",
      tagline: "Dynamic Predictability State-Space Models & Explainable Financial AI",
      badge: "Quantitative R&D",
      structuralProblem:
        "Conventional econometric linear models collapse during structural volatility shocks and dynamic liquidity regime shifts because they assume parameter stationarity.",
      solutionArchitecture:
        "Combines dynamic state-space predictability modeling, synthetic market microstructure simulations, and explainable AI (XAI) layers to forecast structural liquidity imbalances and systemic tail risks.",
      capabilities: [
        "Dynamic state-space predictability modeling under non-stationary parameters",
        "Market microstructure simulation and order book liquidity imbalance detection",
        "Actuarial probability distributions and stochastic calculus risk bounds",
        "Explainable AI (XAI) layers for algorithmic risk compliance and audit trails",
      ],
      commercialImpact:
        "Translates institutional portfolio allocation theory and actuarial stochastic modeling into deterministic algorithmic trading architectures.",
      techStack: ["Python", "R Econometrics", "Stochastic Calculus", "State-Space Filters", "Pandas/NumPy", "Time Series ML"],
      status: "Academic / Institutional",
      image: "https://images.unsplash.com/photo-1604076913837-52ab5629fba9?auto=format&fit=crop&w=1200&q=80",
      metricHighlight: {
        value: "Top 5%",
        label: "Bloomberg Trading Challenge",
      },
    },
    {
      id: "vinai-eduverse",
      name: "VinAI Eduverse",
      role: "Founder & Master Facilitator",
      domain: "Human Capital & Enterprise AI Enablement",
      tagline: "Democratizing Frontier AI Literacy for Next-Generation Enterprise Operators",
      badge: "Education & Impact",
      structuralProblem:
        "A critical chasm exists between casual prompt engineering and the production orchestration skills required to build reliable, enterprise-grade automated systems.",
      solutionArchitecture:
        "Delivers rigorous, hands-on masterclasses covering multi-agent orchestration, API middleware, token governance, and programmatic automation for executives, MBA candidates, and founders.",
      capabilities: [
        "Architectural masterclasses on n8n, API integrations, and webhook pipelines",
        "Executive AI literacy modules for business school faculty and C-suite leaders",
        "Tokenomics cost containment and prompt optimization workshops",
        "Direct delivery of the AIMS50x flagship program for 450+ MBA candidates and 30+ faculty at ICFAI Business School",
      ],
      commercialImpact:
        "Trained over 1,000+ working professionals, founders, and business school cohorts across India and internationally.",
      techStack: ["Curriculum Architecture", "n8n Labs", "Webhook Simulation", "Make", "OpenAI/Claude SDKs"],
      status: "Scaled",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
      metricHighlight: {
        value: "1,000+",
        label: "Professionals & MBAs Trained",
      },
    },
    {
      id: "stealth-lab",
      name: "Frontier Autonomous Protocol",
      role: "Principal Systems Architect",
      domain: "Autonomous Capital Allocation & Unattended State Machines",
      tagline: "Next-Generation Autonomous Enterprise Coordination Protocol",
      badge: "Stealth Lab",
      structuralProblem:
        "Modern enterprises operate with severe decision latency between market signals, capital reallocation, and operational execution.",
      solutionArchitecture:
        "Pioneering an autonomous protocol layer that unifies quantitative actuarial risk controls with multi-agent economic execution—allowing enterprises to allocate compute, budget, and operational resources in real time without human latency.",
      capabilities: [
        "Unattended multi-agent state machines with mathematical invariant checking",
        "Real-time micro-capital reallocation based on live conversion propensity",
        "Formal risk boundaries and cryptographic proof-of-execution logs",
      ],
      commercialImpact:
        "Confidential research and deployment horizon scheduled for 2026-2027.",
      techStack: ["Distributed State Machines", "Actuarial Risk Gates", "Rust", "Zero-Knowledge Proofs", "Agent Swarms"],
      status: "Stealth / R&D",
      image: "https://images.unsplash.com/photo-1507499739999-097706ad8914?auto=format&fit=crop&w=1200&q=80",
      metricHighlight: {
        value: "Stealth",
        label: "Scheduled Late 2026/2027",
      },
    },
  ],

  caseStudies: [
    {
      id: "jedy-apps",
      client: "Jedy Apps",
      subtitle: "Autonomous Voice Outreach & Rapid Pipeline Acceleration",
      category: "Agentic AI",
      period: "July - August 2026",
      deployedStack: ["AI Voice Agents", "Fastify Webhooks", "Retell / Vapi", "HubSpot CRM", "Custom Audit Tooling"],
      technicalScope:
        "End-to-end design and deployment of an autonomous outbound prospecting engine. Integrated conversational voice agents with low-latency Fastify webhooks, real-time prospect qualification logic, and immediate CRM synchronization.",
      auditedOutcome:
        "$845,000 in qualified enterprise pipeline generated in a single 24-hour cycle via 54 autonomous voice calls and 14 hyper-personalized outreach sequences. Formally retained for full-scale rollout.",
      keyMetrics: [
        { label: "Pipeline Generated", value: "$845,000" },
        { label: "Execution Window", value: "24 Hours" },
        { label: "Autonomous Calls", value: "54 Calls" },
        { label: "Outreach Sequences", value: "14 Sequences" },
      ],
      breakdown: [
        "Delivered technical audit and keyword cluster architecture",
        "Engineered autonomous conversational voice agent for cold prospecting",
        "Connected Fastify webhooks for instant CRM contact creation and deal stage progression",
        "Client formally retained engagement for subsequent enterprise expansion",
      ],
    },
    {
      id: "praeemineo",
      client: "Praeemineo",
      subtitle: "Full-Funnel GTM Architecture & 200-Asset Content Engine",
      category: "RevOps & Growth",
      period: "July - September 2026",
      deployedStack: ["HubSpot Partner Admin", "GA4 & GTM", "WordPress", "Conversational AI Chatbots", "Python Automation"],
      technicalScope:
        "Architected comprehensive full-funnel go-to-market infrastructure across North America, India, MEA, and SEA. Implemented 200-asset semantic SEO topic clusters, custom GA4 event tracking, and programmatically generated brand creatives.",
      auditedOutcome:
        "Shipped 200-asset semantic content architecture; programmatically generated 300 social visual assets (saving 25+ design hours); eliminated client measurement gaps with custom GA4/GTM behavioral triggers.",
      keyMetrics: [
        { label: "Content Assets Mapped", value: "200 Assets" },
        { label: "Programmatic Assets", value: "300 Creatives" },
        { label: "Design Hours Saved", value: "25+ Hours" },
        { label: "Global Regions", value: "4 Continents" },
      ],
      breakdown: [
        "Provisioned HubSpot Partner Admin infrastructure and revenue operations tracking",
        "Defined semantic topic clusters across 200 URLs for organic search domination",
        "Deployed live tracking scripts and interactive conversational AI chatbot",
        "Adopted Value Prism and Bridge frameworks for geographic rollout",
      ],
    },
    {
      id: "smark-connect-infra",
      client: "Smark Connect Platform",
      subtitle: "Enterprise Compute Governance & 95% Token Optimization",
      category: "Tokenomics & Infra",
      period: "June - September 2026",
      deployedStack: ["Claude 3.5 Sonnet", "Codex", "Docker Containers", "n8n Runtime", "REST API Middleware"],
      technicalScope:
        "Designed and deployed enterprise ABM infrastructure featuring strict scheduled token consumption quotas, semantic prompt compression, and containerized runtime isolation.",
      auditedOutcome:
        "Achieved a 95% token efficiency gain, slashing context overhead from 4,000,000 tokens to ~200,000 tokens per multi-account execution cycle, saving 3.8M tokens per run.",
      keyMetrics: [
        { label: "Compute Cost Cut", value: "95%" },
        { label: "Tokens Saved / Cycle", value: "3.8 Million" },
        { label: "Context Compression", value: "40L → 2L" },
        { label: "Runtime Isolation", value: "Docker/n8n" },
      ],
      breakdown: [
        "Configured 6-tool autonomous runtime container stack (Codex, Claude, Docker, Apollo, ZoomInfo, n8n)",
        "Engineered first production multi-step unattended agentic workflow",
        "Instituted team-wide scheduling and cost controls after quota bottlenecks",
        "Delivered automated ABM execution with scheduled token governance",
      ],
    },
    {
      id: "enterprise-summits",
      client: "Enterprise ABM & Summit Funnels",
      subtitle: "High-Velocity Event Capture & Tier-1 Account Mobilization",
      category: "Summit Capture",
      period: "August 2026",
      deployedStack: ["Apollo", "ZoomInfo", "HubSpot Sequences", "Intent Frameworks", "Fast Data Enrichment"],
      technicalScope:
        "Engineered multi-touch digital capture and rapid routing funnels for Tier-1 technology summits, combining backlink extraction, automated intent scoring, and founder-level outreach sequences.",
      auditedOutcome:
        "Captured and routed 230 qualified enterprise leads (176 from Nasscom Future Forge, 54 from DevSparks); engaged 21 Tier-1 enterprise logos including Standard Bots, Ameriflex, and Endless Commerce.",
      keyMetrics: [
        { label: "Total Leads Captured", value: "230 Leads" },
        { label: "Nasscom Future Forge", value: "176 Leads" },
        { label: "DevSparks Leads", value: "54 Leads" },
        { label: "Tier-1 Logos Engaged", value: "21 Accounts" },
      ],
      breakdown: [
        "Executed real-time digital capture and routing funnels across major summits",
        "Conducted founder-level outreach to top accounts (Data-squared, All In Tech, Ameriflex, Standard Bots)",
        "Deployed 16-account enterprise campaign positioning HubSpot Platinum capabilities",
        "100% clean data hygiene and verified pipeline routing into client CRMs",
      ],
    },
  ],

  operationalDiscipline: {
    totalEvents: 401,
    totalHours: 284.8,
    substantiveHours: 201.8,
    focusRatio: "71%",
    oneOnOneSessions: 71,
    groupSessions: 166,
    avgMeetingMinutes: 51.1,
    weeklyCadence: [
      { day: "Monday", meetings: 61, hours: 54.2, focus: "Weekly KPI Review & Sprint Architecture" },
      { day: "Tuesday", meetings: 90, hours: 71.5, focus: "Heaviest Collaboration & Strategic Client Syncs" },
      { day: "Wednesday", meetings: 37, hours: 36.2, focus: "Mid-Week Technical Alignment & Code Reviews" },
      { day: "Thursday", meetings: 29, hours: 22.2, focus: "Protected Engineering & Systems Building" },
      { day: "Friday", meetings: 19, hours: 16.5, focus: "Deep Focus & Hands-on Production Deployments" },
      { day: "Saturday", meetings: 1, hours: 1.0, focus: "Exception Coverage & System Handover" },
    ],
    stakeholderNetwork: [
      { name: "Sri Krishna", title: "Managing Director", meetings: 63, hours: 56.2 },
      { name: "Enoch Pakanti", title: "Chief Executive Officer", meetings: 62, hours: 49.0 },
      { name: "Scott", title: "Co-Founder, Praeemineo", meetings: 41, hours: 40.0 },
      { name: "Vijay", title: "Co-Founder, Praeemineo", meetings: 40, hours: 38.8 },
      { name: "Rohit Sharma", title: "Engineering & Architecture", meetings: 21, hours: 16.0 },
      { name: "Craig Ne", title: "monday.com Partner Ecosystem", meetings: 3, hours: 6.0 },
    ],
    handoverMilestone:
      "Comprehensive portfolio handover executed on 21 Sep 2026: 100% credential transfer, transition tracker sign-off, and Git repositories delivered across all 4 client engagements with zero technical debt.",
  },

  keynotes: [
    {
      id: "autonomous-enterprise",
      title: "Architecting the Autonomous Enterprise",
      subtitle: "Moving Past Conversational Interfaces to Unattended, Deterministic Revenue Engines",
      targetAudience: "C-Suite Executives, Enterprise Architects, Private Equity Operating Partners",
      duration: "45-60 Minutes",
      abstract:
        "Conversational chatbots represent only the top 5% of AI's economic surface area. This keynote dissects the blueprint for building unattended operating infrastructure—combining event-driven webhooks, agentic orchestration layers, and deterministic CRM synchronizations to create compounding operational leverage.",
      takeaways: [
        "The shift from prompt engineering to deterministic agentic systems architecture",
        "Dissecting the blueprint of a $845K/day zero-touch autonomous outbound engine",
        "Risk boundaries, human-in-the-loop triggers, and fail-safe exception routing",
        "Economic ROI modeling for multi-agent enterprise infrastructure",
      ],
    },
    {
      id: "tokenomics-governance",
      title: "Tokenomics & Enterprise AI Compute Governance",
      subtitle: "Slashing LLM Context Overhead by 95% at Institutional Scale",
      targetAudience: "CTOs, VP of Engineering, Tech Leads, Financial Controllers",
      duration: "45-60 Minutes",
      abstract:
        "As enterprises scale LLM deployments, token depletion and API costs become primary bottlenecks. Drawing from production deployments saving millions of tokens on Smark Connect, this session provides a deep architectural dive into context compression, semantic routing, and containerized runtime optimization.",
      takeaways: [
        "Compressing 4,000,000 tokens into ~200,000 without loss of message fidelity",
        "Implementing hard quota scheduling and cost governance across engineering teams",
        "Containerized open-weights orchestration vs. proprietary frontier APIs",
        "Financial modeling of token cost amortizations across enterprise workflows",
      ],
    },
    {
      id: "academic-tech-stack",
      title: "Rebuilding the Academic Tech Stack",
      subtitle: "Why Higher Education Needs an AI-Native Cognitive Operating System",
      targetAudience: "University Chancellors, Provosts, EdTech Founders, Institutional Investors",
      duration: "45-60 Minutes",
      abstract:
        "An analytical dissection of higher education's broken operational plumbing. Explores how an AI-native cognitive layer unites student lifecycle tracking, dynamic curriculum adaptation, and administrative automation from first principles.",
      takeaways: [
        "Identifying root causes of LMS/ERP friction across modern universities",
        "Architecture of Classess.com: cognitive data layers in higher education",
        "Bridging student engagement, attrition mitigation, and administrative efficiency",
        "The roadmap for universities transitioning into autonomous campuses",
      ],
    },
  ],

  speakingRecords: [
    {
      forum: "JITO International Trade Organisation Global Summit",
      topic: "AI Automation and Deterministic Business Operations",
      audience: "8,000+ International Delegates, Industrialists & Founders",
      role: "Keynote Speaker",
    },
    {
      forum: "ICFAI Business School (IBS), Hyderabad",
      topic: "AIMS50x Initiative: Applied AI Architectures & Marketing Systems",
      audience: "450+ MBA Candidates & 30+ Faculty Members (3-Month Residency)",
      role: "Programme Director & Visiting Faculty",
    },
    {
      forum: "TEDxMahindraUniversity",
      topic: "Curating Frontier Thinkers & High-Impact Idea Architecture",
      audience: "Institutional Audience & Global Thought Leaders",
      role: "Founding Member & Talent Scouting Lead (Recognized by Anand Mahindra)",
    },
  ],

  credentials: [
    {
      category: "Actuarial Science",
      title: "Actuarial Science Distinction (Topper)",
      institution: "Institute of Actuaries of India (IAI)",
      description:
        "Cleared Actuarial Common Entrance Test (ACET) with distinction in the first attempt. Cleared core mathematical and statistical papers: CM1 (Actuarial Mathematics: Life Contingencies, Cash Flow Discounting), CS1 (Actuarial Statistics: Probability Distributions, Stochastic Processes), CB1 (Business Finance), and CB2 (Business Economics).",
      badge: "National Distinction",
    },
    {
      category: "Actuarial Science",
      title: "National Winner — Game of Enterprise Risk (GOER 2025)",
      institution: "Institute of Risk Management (IRM), UK",
      description:
        "Achieved 1st place nationally in enterprise risk modeling, evaluating systemic financial vulnerabilities, operational shock absorption, and institutional risk management frameworks.",
      badge: "National Winner",
      year: "2025",
    },
    {
      category: "Academic Honors",
      title: "B.A. Economics & Finance — Valedictorian",
      institution: "Mahindra University",
      description:
        "Graduating Class of 2026. Ranked in the top 10 academic standing for 3 consecutive years with a cumulative GPA of 9.51 / 10.00.",
      badge: "Valedictorian (CGPA 9.51)",
      year: "2023 - 2026",
    },
    {
      category: "Academic Honors",
      title: "High School Valedictorian",
      institution: "Senior Secondary Education",
      description:
        "School Topper & Valedictorian. Scored 97/100 in Accountancy and 99/100 in Business Studies.",
      badge: "School Valedictorian",
    },
    {
      category: "Accreditations",
      title: "SEBI Registered Equity Research Analyst",
      institution: "Securities and Exchange Board of India",
      description:
        "Accredited equity research professional qualified for institutional equity analysis, financial statement forensics, and fundamental valuation.",
      badge: "Certified SEBI Analyst",
    },
    {
      category: "Accreditations",
      title: "Bloomberg Market Concepts (BMC)",
      institution: "Bloomberg LP",
      description:
        "Institutional certification spanning economic indicators, currencies, fixed income, and equities modeling on Bloomberg Terminal.",
      badge: "Bloomberg Certified",
    },
    {
      category: "Accreditations",
      title: "Financial Markets Accreditation",
      institution: "Yale University (via Coursera)",
      description:
        "Comprehensive training in institutional risk management, behavioral finance, and global asset pricing models taught by Prof. Robert Shiller.",
      badge: "Yale University",
    },
    {
      category: "Accreditations",
      title: "Macromolecular Engineering Certification",
      institution: "Indian Institute of Technology (IIT), Roorkee",
      description:
        "Specialized technical certification in advanced material engineering and quantitative physical systems.",
      badge: "IIT Roorkee",
    },
    {
      category: "Competitions",
      title: "Global Top 10% — Marketplace Business Simulation",
      institution: "Global Business Simulation League",
      description: "Ranked in the top decile globally for balanced scorecard, strategic capital allocation, and market share capture.",
      badge: "Global Top 10%",
      year: "2024",
    },
    {
      category: "Competitions",
      title: "Global Top 5% — Bloomberg Trading Challenge",
      institution: "Bloomberg LP",
      description: "Ranked in the top 5% of global teams for risk-adjusted returns and dynamic algorithmic equity rebalancing (2024, 2025).",
      badge: "Global Top 5%",
      year: "2024, 2025",
    },
    {
      category: "Competitions",
      title: "All-India Rank 1 (AIR 1) — Future Economist Challenge",
      institution: "FEC National Economics Forum",
      description: "Ranked 1st nationally in econometric forecasting and macroeconomic policy evaluation.",
      badge: "All-India Rank 1",
    },
    {
      category: "Competitions",
      title: "All-India Rank 1 (AIR 1) — FamPay Money101 Challenge",
      institution: "FamPay Financial Intelligence Challenge",
      description: "First rank nationally in corporate finance modeling and consumer monetary mechanics.",
      badge: "All-India Rank 1",
    },
    {
      category: "Competitions",
      title: "All-India Rank 5 (AIR 5) — M&A Case Competition",
      institution: "Indian Institute of Technology (IIT), Guwahati",
      description: "Top 5 national finalist for leveraged buyout structuring and synergistic valuation modeling.",
      badge: "AIR 5 Finalist",
    },
    {
      category: "Research",
      title: "Featured Contributor — EconShastra",
      institution: "Premier Economics Publication of the IIMs",
      description:
        "Published author in the June 2024 edition, analyzing macroeconomic volatility, systemic monetary transmission, and liquidity regimes in emerging markets.",
      badge: "Published Research",
      year: "2024",
    },
    {
      category: "Research",
      title: "Whitepaper Author: Low-Code Orchestration & Multi-Agent State Machines",
      institution: "VinAI Research Series",
      description:
        "Authored technical blueprints on deterministic multi-agent state machines, tokenomic context compression, and automated revenue architectures.",
      badge: "Technical Whitepaper",
    },
  ],

  pressBios: {
    short50:
      "Vinay Jain is an enterprise systems architect, founder, and quantitative strategist. He serves as Global Marketing Officer at Classess.com (the AI-native academic operating system) and Founder & CEO of VinAI Technologies, deploying deterministic agentic systems that have generated millions in enterprise pipeline. An Actuarial Science distinction holder and Economics Valedictorian, Vinay speaks globally on autonomous infrastructure and quantitative AI.",
    standard150:
      "Vinay Jain is an enterprise systems architect and technology executive operating at the frontier of autonomous agentic infrastructure and quantitative intelligence. He serves as Global Marketing Officer at Classess.com, leading worldwide go-to-market for the world’s first AI-native academic operating system, and Founder & CEO of VinAI Technologies, where he architects zero-touch outbound engines and token-optimized enterprise systems.\n\nWith a quantitative foundation in Economics & Finance (CGPA 9.51, Valedictorian) and professional distinctions from the Institute of Actuaries of India and the Institute of Risk Management (UK), Vinay translates complex stochastic theory and frontier LLM orchestration into deterministic business outcomes. He has addressed over 8,000 international delegates at major global summits, trained 1,000+ professionals through VinAI Eduverse, and serves as visiting faculty and programme director for premier business institutions including ICFAI Business School.",
    comprehensive500:
      "Vinay Jain is a systems architect, venture builder, and quantitative strategist operating at the intersection of enterprise agentic infrastructure, academic operating systems, and quantitative financial modeling. He serves as Global Marketing Officer at Classess.com, leading global distribution for the world’s first fully AI-native academic operating system, and Founder & CEO of VinAI Technologies, where he engineers deterministic, unattended multi-agent systems for high-growth enterprises.\n\nVinay's technical achievements span the entire operational spectrum—from architecting autonomous conversational voice agents that generated $845,000 in qualified enterprise pipeline in a single 24-hour cycle, to engineering token-optimized architectures on the Smark Connect platform that reduced LLM context overhead by 95% (saving 3.8M tokens per execution cycle).\n\nHis engineering philosophy is grounded in quantitative rigor. Vinay holds a Bachelor's in Economics & Finance from Mahindra University (Valedictorian, CGPA 9.51), cleared Actuarial Science ACET with distinction on the first attempt (Institute of Actuaries of India), and was named National Winner in Enterprise Risk Modeling by the Institute of Risk Management (UK). A SEBI-registered Equity Research Analyst and Bloomberg Market Concepts certified practitioner, he combines stochastic calculus and market microstructure analysis to develop explainable quantitative systems through FinTrada.\n\nAs a global keynote speaker and master facilitator, Vinay has addressed over 8,000 delegates at international forums such as the JITO Global Trade Summit and served as Programme Director for 450+ MBA candidates and 30+ faculty members at ICFAI Business School through the AIMS50x initiative. He was also a founding member and talent scouting lead for TEDxMahindraUniversity, curating international speakers recognized by Anand Mahindra. Vinay advises institutional boards, founders, and private equity operating partners on building autonomous enterprise systems with deterministic capital leverage.",
  },

  brandSpecs: {
    name: "Vinay Jain",
    primaryTitle: "Systems Architect & Founder, VinAI Technologies",
    secondaryTitle: "Global Marketing Officer, Classess.com",
    approvedHeadshotFormat: "Studio Portraiture, Monochromatic High-Key / Low-Key, 300 DPI",
    palette: [
      { name: "Obsidian Core", hex: "#000000", class: "bg-black" },
      { name: "Monolith Slate", hex: "#09090B", class: "bg-zinc-950" },
      { name: "Surface Border", hex: "#27272A", class: "border-zinc-800" },
      { name: "Muted Platinum", hex: "#A1A1AA", class: "text-zinc-400" },
      { name: "Pure Signal White", hex: "#FAFAFA", class: "text-zinc-50" },
      { name: "Status Emerald", hex: "#10B981", class: "text-emerald-400" },
    ],
    typography: {
      primary: "Geist Sans / Inter (Clean Swiss Neo-Grotesque)",
      secondary: "Geist Mono / JetBrains Mono (Technical Data & Metrics)",
    },
    pronunciation: "VIN-ay JANE",
  },
};
