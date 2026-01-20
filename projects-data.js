window.PROJECTS = [
  {
    id: "autocomply-ai",
    title: "AutoComply AI",
    subtitle: "AI-Driven Regulatory Compliance & License Management Platform",
    role: "Product Owner & System Architect",
    stack: ["FastAPI", "Python", "React", "Vite", "Tailwind", "RAG", "Vector Search", "CI-Ready"],
    summary:
      "Built a full-stack, AI-native compliance platform that automates regulatory intake, verification, and decision workflows for regulated industries, replacing manual, form-heavy, error-prone processes with an intelligent, auditable, scalable operating model.",
    bullets: [
      "Designed end to end compliance workflows simulating enterprise scenarios including license attestations, controlled substance checks, and jurisdiction-specific rules.",
      "Built multi-step submission intake with real-time validation and structured data capture optimized for auditability.",
      "Implemented a Retrieval-Augmented Generation engine grounded on regulatory documents, policies, and statutes.",
      "Developed Reviewer and Verifier Console with work queues, risk prioritization, approve and reject actions, request-clarification flows, and a full audit trail.",
      "Engineered configurable approval workflows supporting submitter, verifier, and admin roles with lifecycle tracking.",
      "Delivered Admin and Operations dashboard with role-based access and system oversight.",
      "Modeled regulatory nuances such as exemptions and jurisdictional variations with defensible traceability.",
      "Owned product vision, roadmap, UX, backend, and AI governance balancing explainability and risk controls."
    ],
    links: [
      {
        label: "Live Demo",
        href: "https://autocomply-ai.vercel.app"
      },
      {
        label: "Repo",
        href: "https://github.com/sourpat/AutoComply-AI-fresh"
      }
    ],
    featured: true
  },
  {
    id: "ai-payment-resolution-assistant",
    title: "AI Payment Resolution Assistant",
    role: "Product Owner & System Designer",
    stack: ["FastAPI", "RAG", "Python", "React", "Vercel"],
    summary:
      "Built a full-stack AI incident triage tool that diagnoses payment, ACH, JDE, budget, and compliance issues using hybrid rules and semantic retrieval for faster resolution.",
    bullets: [
      "Designed the signal intake to rules engine, vector search, and LLM summarization workflow for real-world PSP and ERP troubleshooting.",
      "Delivered a FastAPI backend with retrieval monitoring, rate limiting, and observability hooks.",
      "Shipped a polished React frontend with clear error states, guided triage, and accessible UI patterns."
    ],
    links: [
      {
        label: "Live Demo",
        href: "https://ai-payment-resolution-rag.vercel.app/"
      }
    ],
    featured: true
  },
  {
    id: "predictive-modeling-road-accidents",
    title: "Predictive Modeling of U.S. Road Accident Severity",
    role: "Machine Learning and Data Analytics",
    stack: ["R", "Python", "scikit-learn", "Tableau", "Power BI"],
    summary:
      "Built a severity prediction pipeline on 3M+ U.S. traffic incidents and delivered dashboards for real-time prevention insights and policy recommendations.",
    links: [
      {
        label: "Contact for details",
        href: "/sourabh-portfolio/contact.html"
      }
    ]
  },
  {
    id: "healthcare-claims-fraud-detection",
    title: "Healthcare Claims Fraud Detection Framework",
    role: "Anomaly Detection and Risk Scoring",
    stack: ["R", "SQL", "Excel", "Power Query", "Tableau"],
    summary:
      "Developed statistical and behavioral anomaly detection to identify fraud in real time with automated reporting that reduced audit cycles.",
    links: [
      {
        label: "Contact for details",
        href: "/sourabh-portfolio/contact.html"
      }
    ]
  }
];
