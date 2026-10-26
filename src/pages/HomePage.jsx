import React, { useState } from 'react';

export default function HomePage({ onOpenScoping, onOpenDiagnostic, onShowToast }) {
  const [activeStackCategory, setActiveStackCategory] = useState('all');
  const [quickEmail, setQuickEmail] = useState('');
  const [quickNeed, setQuickNeed] = useState('High-Throughput Web Scraping & Data Pipeline');
  const [quickConstraints, setQuickConstraints] = useState('');
  const [quickSubmitted, setQuickSubmitted] = useState(false);

  const techStack = [
    {
      id: 'python',
      title: 'Python 3.12+',
      subtitle: 'FastAPI, AsyncIO, PyTorch, LangChain agents.',
      abbr: 'Py',
      tag: 'Primary',
      categories: ['ai-data', 'backend-cloud'],
      tagColor: 'bg-primary-fixed text-on-primary-fixed',
    },
    {
      id: 'pyspark',
      title: 'Apache PySpark',
      subtitle: 'Distributed ETL, cluster parallelism, Parquet sinks.',
      abbr: 'Spk',
      tag: 'Big Data',
      categories: ['ai-data'],
      tagColor: 'bg-secondary-fixed text-on-secondary-fixed',
    },
    {
      id: 'java',
      title: 'Java 21 / Spring',
      subtitle: 'Microservices, low-latency queues, high-IOPS backend.',
      abbr: 'Jv',
      tag: 'Enterprise',
      categories: ['backend-cloud'],
      tagColor: 'bg-surface-container text-on-surface',
    },
    {
      id: 'react-next',
      title: 'Next.js & React',
      subtitle: 'Server Components, Edge rendering, dynamic programmatic SEO.',
      abbr: 'Nxt',
      tag: 'Frontend',
      categories: ['automation'],
      tagColor: 'bg-primary-fixed text-on-primary-fixed',
    },
    {
      id: 'laravel',
      title: 'PHP / Laravel 11',
      subtitle: 'Horizon queue scaling, robust administrative portals.',
      abbr: 'Php',
      tag: 'Rapid API',
      categories: ['backend-cloud'],
      tagColor: 'bg-surface-container text-on-surface',
    },
    {
      id: 'aws',
      title: 'AWS Cloud',
      subtitle: 'ECS Fargate, Lambda, SQS, S3 data lakes, RDS Aurora.',
      abbr: 'Aws',
      tag: 'Cloud',
      categories: ['backend-cloud'],
      tagColor: 'bg-primary-fixed text-on-primary-fixed',
    },
    {
      id: 'azure',
      title: 'Azure Data Factory',
      subtitle: 'Enterprise data factory flows, Synapse, Blob integration.',
      abbr: 'Adf',
      tag: 'Pipelines',
      categories: ['ai-data', 'backend-cloud'],
      tagColor: 'bg-primary-fixed text-on-primary-fixed',
    },
    {
      id: 'docker',
      title: 'Docker & K8s',
      subtitle: 'Containerized scrapers, repeatable CI/CD deployment rigs.',
      abbr: 'Dck',
      tag: 'DevOps',
      categories: ['backend-cloud', 'automation'],
      tagColor: 'bg-surface-container text-on-surface',
    },
    {
      id: 'streamlit',
      title: 'Streamlit Dashboards',
      subtitle: 'Live model inspection consoles and client data visualizers.',
      abbr: 'St',
      tag: 'Internal Ops',
      categories: ['automation', 'ai-data'],
      tagColor: 'bg-primary-fixed text-on-primary-fixed',
    },
    {
      id: 'n8n',
      title: 'n8n & Make.com',
      subtitle: 'Self-hosted workflow automations and instant CRM webhooks.',
      abbr: 'n8n',
      tag: 'No-Code / Low-Code',
      categories: ['automation'],
      tagColor: 'bg-secondary-fixed text-on-secondary-fixed',
    },
  ];

  const filteredTech = techStack.filter((tech) => {
    if (activeStackCategory === 'all') return true;
    return tech.categories.includes(activeStackCategory);
  });

  const handleQuickScopeSubmit = (e) => {
    e.preventDefault();
    setQuickSubmitted(true);
    if (onShowToast) {
      onShowToast({
        title: 'Technical Request Registered',
        message: 'Direct Principal Architect assigned. Target response SLA: under 15 minutes.',
        type: 'success',
      });
    }
  };

  return (
    <div className="w-full">
      {/* Top Ambient Glow Aura */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-gradient-to-b from-primary-fixed/60 via-secondary-fixed/40 to-transparent blur-3xl pointer-events-none opacity-60"></div>

        {/* Hero Section */}
        <section className="relative max-w-7xl mx-auto px-4 sm:px-8 pt-8 sm:pt-12 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
            {/* Left Column: Copy & Executive Actions */}
            <div className="lg:col-span-7 flex flex-col gap-space-md">
              {/* System Status Badge */}
              <div className="inline-flex items-center gap-space-xs self-start px-3.5 py-1.5 rounded-full bg-surface-container-high shadow-sm border border-surface-container">
                <span className="w-2.5 h-2.5 rounded-full bg-primary animate-ping"></span>
                <span className="font-code-sm text-code-sm text-primary font-semibold tracking-wider uppercase">
                  ACTIVE PIPELINES
                </span>
                <span className="text-outline-variant font-code-sm text-code-sm">•</span>
                <span className="font-code-sm text-code-sm text-on-surface-variant uppercase">
                  YW CLOUD 3.2
                </span>
                <span className="text-outline-variant font-code-sm text-code-sm">•</span>
                <span className="px-2 py-0.5 rounded-full bg-surface-container-lowest font-label-sm text-label-sm text-secondary font-bold">
                  ENTERPRISE READY
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-display text-display text-on-surface tracking-tight leading-[1.08] font-extrabold">
                Engineering Data,{' '}
                <span className="bg-gradient-to-r from-primary via-primary-container to-secondary bg-clip-text text-transparent">
                  AI &amp; Automated
                </span>{' '}
                Growth for Modern Enterprises.
              </h1>

              {/* Tagline & Context Subhead */}
              <div className="flex flex-col gap-space-xs">
                <div className="flex items-center gap-space-sm">
                  <span className="font-label-sm text-label-sm tracking-[0.25em] text-primary font-bold uppercase">
                    IDEAS
                  </span>
                  <span className="text-outline-variant text-label-sm">|</span>
                  <span className="font-label-sm text-label-sm tracking-[0.25em] text-secondary font-bold uppercase">
                    INTELLIGENCE
                  </span>
                  <span className="text-outline-variant text-label-sm">|</span>
                  <span className="font-label-sm text-label-sm tracking-[0.25em] text-tertiary font-bold uppercase">
                    IMPACT
                  </span>
                </div>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                  Powered by <strong className="text-on-surface font-semibold">Yottabyte Technological Services</strong>. High-throughput distributed pipelines, production AI reasoning swarms, and custom automated growth machinery built directly by principal architects—eliminating agency bloat and bureaucratic friction.
                </p>
              </div>

              {/* CTAs */}
              <div className="pt-space-sm flex flex-wrap items-center gap-space-md">
                <button
                  onClick={() => onOpenScoping('General Enterprise Scoping')}
                  className="inline-flex items-center gap-space-xs px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-on-primary font-label-md text-label-md shadow-md hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all font-semibold"
                >
                  <span>Start Project Scoping</span>
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </button>

                <a
                  href="https://wa.me/message"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-space-xs px-5 py-3.5 rounded-xl bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm hover:bg-surface-container-low hover:text-primary transition-all border border-surface-container"
                >
                  <span className="material-symbols-outlined text-green-600" style={{ fontVariationSettings: "'FILL' 1" }}>
                    chat
                  </span>
                  <span>Direct WhatsApp Chat</span>
                </a>

                <button
                  onClick={onOpenDiagnostic}
                  className="inline-flex items-center gap-space-xs px-4 py-3.5 rounded-xl bg-surface-container text-primary font-label-md text-label-md hover:bg-surface-container-high transition-all font-medium"
                >
                  <span className="material-symbols-outlined text-base">verified_user</span>
                  <span>Book Consultation</span>
                </button>
              </div>

              {/* Architecture SLA Footnote */}
              <div className="flex flex-wrap items-center gap-space-md pt-space-xs text-on-surface-variant font-body-sm text-body-sm">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-primary text-base">lock</span>
                  <span>Strict Mutual NDA Executed First</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-secondary text-base">speed</span>
                  <span>&lt;24h Feasibility Matrix</span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Brand Card with Interactive Telemetry Preview */}
            <div className="lg:col-span-5 relative mt-8 lg:mt-0">
              <div className="relative rounded-2xl bg-surface-container-lowest p-6 shadow-xl border border-surface-container overflow-hidden">
                {/* Header of Visual Card */}
                <div className="flex items-center justify-between pb-4 border-b border-surface-container/60">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-error/80"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-400"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                    <span className="ml-2 font-code-sm text-code-sm text-on-surface-variant font-mono">
                      yw-core-cluster-01.internal
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-code-sm text-code-sm font-semibold">
                    99.98% UP
                  </span>
                </div>

                {/* Branded Visual Asset */}
                <div className="relative w-full rounded-xl overflow-hidden bg-surface-container-low p-3 flex flex-col items-center justify-center my-3">
                  <img
                    alt="YottabyteWorks Official Architectural Identity and Service Stack"
                    className="w-full h-auto object-contain rounded-lg shadow-sm hover:scale-[1.02] transition-transform duration-300"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAth06dPri1RVAabvZnRj6zSiEqD_OtxlGA1LrUIoxXPIsbHy-D-BCVOnUCH2jbcSIUOup5Ffszpn7WTrsp5Yu5hzwPFpbIcv5wLfo6Gwaglm2rhamk6Y5QxmjonrHhFDIvHztb0XLK2FCyXvAqpd5O8ICz8oL-XO5zylg8FKfABl3fTHqpqxI8rJMsOJ54jiljnL9tC2WW1ga_IXDM9i2iiufGyKeoFoySy_RFFUG7Zev5RgPj2egQadpxGsyBuy5Jw"
                  />
                </div>

                {/* Real-Time Ingestion Micro-Telemetry Widget */}
                <div className="mt-4 pt-4 bg-surface-container-low/60 rounded-xl p-4 flex flex-col gap-space-xs border border-surface-container">
                  <div className="flex items-center justify-between font-label-sm text-label-sm">
                    <span className="text-on-surface-variant font-medium">Headless Scraping Pipeline Flux</span>
                    <span className="text-primary font-code-sm font-bold">14,280 docs/sec</span>
                  </div>
                  {/* Progress Spark Indicator */}
                  <div className="w-full h-2 rounded-full bg-surface-container overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse" style={{ width: '82%' }}></div>
                  </div>
                  <div className="flex items-center justify-between font-code-sm text-code-sm text-on-surface-variant pt-1 font-mono">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span> 
                      24 Nodes Synced
                    </span>
                    <span>Latency: 42ms avg</span>
                  </div>
                </div>
              </div>

              {/* Decorative Floating Indicator Pin */}
              <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 p-3.5 rounded-xl bg-surface-container-lowest shadow-lg border border-surface-container">
                <div className="w-10 h-10 rounded-lg bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed">
                  <span className="material-symbols-outlined text-xl">hub</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">
                    Mesh Proxy Pool
                  </span>
                  <span className="font-title-md text-title-md text-on-surface font-bold">
                    2.4M Residential IPs
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Enterprise Trust & Pedigree Banner */}
      <section className="w-full bg-surface-container-low py-12 border-y border-surface-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md pb-8 border-b border-surface-container">
            <div className="flex items-center gap-space-sm">
              <span className="material-symbols-outlined text-primary text-2xl">workspace_premium</span>
              <p className="font-headline-sm text-headline-sm text-on-surface font-semibold tracking-tight">
                Led by Architects with 13+ Collective YOE at TCS • Accenture • Electronic Arts
              </p>
            </div>
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest font-bold">
              Verified Production History
            </span>
          </div>

          {/* 4-Column Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between border border-surface-container">
              <div className="flex items-center justify-between">
                <span className="font-code-sm text-code-sm text-primary uppercase font-semibold">Reliability SLA</span>
                <span className="material-symbols-outlined text-primary">verified</span>
              </div>
              <div className="my-4">
                <div className="font-display text-display text-on-surface tracking-tight font-extrabold">99.8%</div>
                <div className="font-body-sm text-body-sm text-on-surface-variant mt-1">Data pipeline uptime guaranteed via automated fault-tolerant restart queues.</div>
              </div>
              <span className="font-label-sm text-label-sm text-secondary font-medium">Production Tested</span>
            </div>

            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between border border-surface-container">
              <div className="flex items-center justify-between">
                <span className="font-code-sm text-code-sm text-primary uppercase font-semibold">Data Ingestion</span>
                <span className="material-symbols-outlined text-primary">dynamic_feed</span>
              </div>
              <div className="my-4">
                <div className="font-display text-display text-on-surface tracking-tight font-extrabold">15x</div>
                <div className="font-body-sm text-body-sm text-on-surface-variant mt-1">Faster web extraction throughput with zero-detection fingerprint rotating mesh.</div>
              </div>
              <span className="font-label-sm text-label-sm text-secondary font-medium">Sub-second Parsing</span>
            </div>

            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between border border-surface-container">
              <div className="flex items-center justify-between">
                <span className="font-code-sm text-code-sm text-secondary uppercase font-semibold">Cognitive Systems</span>
                <span className="material-symbols-outlined text-secondary">smart_toy</span>
              </div>
              <div className="my-4">
                <div className="font-display text-display text-on-surface tracking-tight font-extrabold">40+</div>
                <div className="font-body-sm text-body-sm text-on-surface-variant mt-1">Autonomous reasoning AI agents actively running multi-step production jobs.</div>
              </div>
              <span className="font-label-sm text-label-sm text-primary font-medium">LangChain &amp; Vector RAG</span>
            </div>

            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between border border-surface-container">
              <div className="flex items-center justify-between">
                <span className="font-code-sm text-code-sm text-on-surface uppercase font-semibold">Executive Efficiency</span>
                <span className="material-symbols-outlined text-on-surface">handshake</span>
              </div>
              <div className="my-4">
                <div className="font-display text-display text-on-surface tracking-tight font-extrabold">0</div>
                <div className="font-body-sm text-body-sm text-on-surface-variant mt-1">Management overhead. Clients speak directly to hands-on principal architects.</div>
              </div>
              <span className="font-label-sm text-label-sm text-secondary font-medium">No Account Rep Friction</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Architectural Pillars Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-20 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-space-md">
          <div className="flex flex-col gap-space-xs">
            <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-widest">
              Specialized Competencies
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">
              3 Core Architectural Pillars
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
              Constructed with engineering discipline rather than marketing hyperbole. Designed to integrate natively into high-compliance enterprise infrastructures.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-code-sm text-code-sm">
              ISO 27001 Protocol
            </span>
            <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-code-sm text-code-sm">
              Zero-Trust Ready
            </span>
          </div>
        </div>

        {/* 3-Column Pillar Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Pillar 01 */}
          <div className="bg-surface-container-lowest rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between border border-surface-container">
            <div className="flex flex-col gap-space-md">
              <div className="flex items-center justify-between">
                <span className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary font-headline-sm font-bold">
                  01
                </span>
                <span className="px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm uppercase font-semibold">
                  Autonomous Core
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                Enterprise AI &amp; Autonomous Agents
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Deployment of multi-agent cognitive loops capable of document parsing, synthetic knowledge graph generation, self-correcting code, and enterprise RAG query resolution.
              </p>

              {/* Rich Visual Graphic: Agent Flow Diagram */}
              <div className="bg-surface-container-low rounded-xl p-4 my-2 border border-surface-container">
                <div className="flex items-center justify-between text-xs text-on-surface-variant mb-2 font-mono">
                  <span>PROMPT_EMBEDDING</span>
                  <span>COSINE_SEARCH</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <div className="px-3 py-2 bg-surface-container-lowest rounded-lg text-primary text-xs font-semibold shadow-xs">Vector Store</div>
                  <span className="material-symbols-outlined text-sm text-outline-variant">trending_flat</span>
                  <div className="px-3 py-2 bg-primary text-on-primary rounded-lg text-xs font-semibold shadow-xs">LLM Orchestrator</div>
                  <span className="material-symbols-outlined text-sm text-outline-variant">trending_flat</span>
                  <div className="px-3 py-2 bg-surface-container-lowest rounded-lg text-secondary text-xs font-semibold shadow-xs">Action Agent</div>
                </div>
              </div>

              <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                  <span>LangChain &amp; LlamaIndex Enterprise Workflows</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                  <span>Pinecone, Qdrant &amp; pgvector High-Density Indexes</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                  <span>Air-gapped Self-Hosted LLMs with Zero Data Leakage</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 mt-6 bg-surface-container-low/50 -mx-8 -mb-8 p-8 rounded-b-2xl flex items-center justify-between border-t border-surface-container">
              <span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider">Production Latency: &lt;180ms</span>
              <span className="material-symbols-outlined text-primary text-lg">memory</span>
            </div>
          </div>

          {/* Pillar 02 */}
          <div className="bg-surface-container-lowest rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between border border-surface-container">
            <div className="flex flex-col gap-space-md">
              <div className="flex items-center justify-between">
                <span className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-secondary font-headline-sm font-bold">
                  02
                </span>
                <span className="px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm uppercase font-semibold">
                  High Throughput
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                Scalable Data &amp; High-Volume Ingestion
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Bulletproof distributed extraction architectures that harvest massive public feeds, structured documents, and live dynamic feeds with stealth proxy rotation and strict validation schemas.
              </p>

              {/* Rich Visual Graphic: Sparkline Chart */}
              <div className="bg-surface-container-low rounded-xl p-4 my-2 border border-surface-container">
                <div className="flex items-center justify-between text-xs text-on-surface-variant mb-1 font-mono">
                  <span>EXTRACTION_SCALE (GB/HR)</span>
                  <span className="text-secondary font-bold">+340%</span>
                </div>
                <svg className="w-full h-12 text-secondary" fill="none" preserveAspectRatio="none" viewBox="0 0 300 60">
                  <path d="M0,50 Q40,45 80,30 T160,25 T220,10 T300,5 L300,60 L0,60 Z" fill="currentColor" fillOpacity="0.12"></path>
                  <path d="M0,50 Q40,45 80,30 T160,25 T220,10 T300,5" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5"></path>
                </svg>
              </div>

              <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-base">check_circle</span>
                  <span>PySpark, Celery &amp; Apache Kafka Streaming</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-base">check_circle</span>
                  <span>Cloud Data Warehousing (BigQuery, Snowflake, Redshift)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-base">check_circle</span>
                  <span>Self-Healing Playwright &amp; Headless Chromium Swarms</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 mt-6 bg-surface-container-low/50 -mx-8 -mb-8 p-8 rounded-b-2xl flex items-center justify-between border-t border-surface-container">
              <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">Zero CAPTCHA Fail Rate</span>
              <span className="material-symbols-outlined text-secondary text-lg">dataset</span>
            </div>
          </div>

          {/* Pillar 03 */}
          <div className="bg-surface-container-lowest rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between border border-surface-container">
            <div className="flex flex-col gap-space-md">
              <div className="flex items-center justify-between">
                <span className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary font-headline-sm font-bold">
                  03
                </span>
                <span className="px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm uppercase font-semibold">
                  Algorithmic Conversion
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                Algorithmic Marketing &amp; Yield Optimization
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Data-backed traffic acquisition engineered for modern search paradigms: Answer Engine Optimization (AEO), AI Overviews (AIO), programmatic web creation, and ad yield scaling.
              </p>

              {/* Rich Visual Graphic: Conversion Bars */}
              <div className="bg-surface-container-low rounded-xl p-4 my-2 flex flex-col gap-2 border border-surface-container">
                <div className="flex justify-between text-xs text-on-surface-variant font-mono">
                  <span>AEO_SEARCH_VISIBILITY</span>
                  <span className="font-bold text-primary">94.2%</span>
                </div>
                <div className="w-full bg-surface-container rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '94%' }}></div>
                </div>
                <div className="flex justify-between text-xs text-on-surface-variant font-mono mt-1">
                  <span>CPM_YIELD_UPLIFT</span>
                  <span className="font-bold text-secondary">+68.4%</span>
                </div>
                <div className="w-full bg-surface-container rounded-full h-2">
                  <div className="bg-secondary h-2 rounded-full" style={{ width: '68%' }}></div>
                </div>
              </div>

              <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                  <span>Programmatic Next.js High-Authority Landing Engines</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                  <span>Advanced AdSense Placement Yield Arbitrage</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                  <span>Semantic Vector Search Indexing for AI Engines (Perplexity, ChatGPT)</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 mt-6 bg-surface-container-low/50 -mx-8 -mb-8 p-8 rounded-b-2xl flex items-center justify-between border-t border-surface-container">
              <span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider">AEO Citation Guaranteed</span>
              <span className="material-symbols-outlined text-primary text-lg">trending_up</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tested Production Tech Stack Interactive Matrix */}
      <section className="w-full bg-surface-container-lowest py-20 border-y border-surface-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-space-md">
            <div>
              <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-widest">
                Enterprise Arsenal
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">
                Tested Production Tech Stack
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Battle-tested tools and frameworks deployed across high-concurrency client clusters.
              </p>
            </div>

            {/* Filter Tab Buttons */}
            <div className="flex items-center bg-surface-container-low p-1.5 rounded-xl gap-1 border border-surface-container">
              <button
                onClick={() => setActiveStackCategory('all')}
                className={`px-4 py-2 rounded-lg font-label-md text-label-md transition-all ${
                  activeStackCategory === 'all'
                    ? 'bg-surface-container-lowest text-primary font-semibold shadow-xs'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                All (10)
              </button>
              <button
                onClick={() => setActiveStackCategory('ai-data')}
                className={`px-4 py-2 rounded-lg font-label-md text-label-md transition-all ${
                  activeStackCategory === 'ai-data'
                    ? 'bg-surface-container-lowest text-primary font-semibold shadow-xs'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                AI &amp; Data
              </button>
              <button
                onClick={() => setActiveStackCategory('backend-cloud')}
                className={`px-4 py-2 rounded-lg font-label-md text-label-md transition-all ${
                  activeStackCategory === 'backend-cloud'
                    ? 'bg-surface-container-lowest text-primary font-semibold shadow-xs'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                Backend &amp; Cloud
              </button>
              <button
                onClick={() => setActiveStackCategory('automation')}
                className={`px-4 py-2 rounded-lg font-label-md text-label-md transition-all ${
                  activeStackCategory === 'automation'
                    ? 'bg-surface-container-lowest text-primary font-semibold shadow-xs'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                Automation &amp; UI
              </button>
            </div>
          </div>

          {/* 10 Tech Stack Tiles */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {filteredTech.map((tech) => (
              <div
                key={tech.id}
                className="bg-surface-container-low p-5 rounded-xl hover:bg-surface-container transition-all flex flex-col justify-between border border-surface-container hover:shadow-md cursor-pointer group"
                onClick={() => onOpenScoping(`Tech Stack Deployment: ${tech.title}`)}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center font-bold text-primary font-code-sm shadow-xs group-hover:scale-105 transition-transform">
                    {tech.abbr}
                  </span>
                  <span className={`px-2 py-0.5 rounded-full font-label-sm text-label-sm font-semibold ${tech.tagColor}`}>
                    {tech.tag}
                  </span>
                </div>
                <div>
                  <h4 className="font-title-md text-title-md text-on-surface font-semibold">{tech.title}</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">{tech.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speed to Implementation Roadmap */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-20 w-full">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-widest">
            RAPID EXECUTION VELOCITY
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-1 font-bold">
            Speed to Production Implementation
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            We do not spend months drafting slideshows. Our engineering rhythm is tuned to ship functioning data and AI pipelines in days.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 01 */}
          <div className="relative bg-surface-container-low rounded-2xl p-8 flex flex-col justify-between border border-surface-container shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full bg-primary text-on-primary font-code-sm text-code-sm font-semibold">
                  STAGE 01
                </span>
                <span className="font-code-sm text-code-sm text-primary font-bold">Hours 0 – 24</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3 font-bold">Architecture Audit</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Direct deep-dive audit with a principal engineer. We inspect your schema, target APIs, anti-bot countermeasures, and infrastructure limits. You receive a concrete technical diagram and delivery scope.
              </p>
            </div>
            <div className="pt-6 mt-6 flex items-center gap-2 text-on-surface-variant font-body-sm border-t border-surface-container">
              <span className="material-symbols-outlined text-primary text-base">fact_check</span>
              <span className="font-medium">Deliverable: Formal Blueprint + NDA</span>
            </div>
          </div>

          {/* Step 02 */}
          <div className="relative bg-surface-container-low rounded-2xl p-8 flex flex-col justify-between border border-surface-container shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full bg-secondary text-on-secondary font-code-sm text-code-sm font-semibold">
                  STAGE 02
                </span>
                <span className="font-code-sm text-code-sm text-secondary font-bold">Hours 24 – 48</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3 font-bold">Prototype Ingestion</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                We spin up an isolated staging crawler or initial vector chunking pipeline. Live test records begin populating your designated target schema or webhook endpoint for immediate inspection.
              </p>
            </div>
            <div className="pt-6 mt-6 flex items-center gap-2 text-on-surface-variant font-body-sm border-t border-surface-container">
              <span className="material-symbols-outlined text-secondary text-base">cloud_done</span>
              <span className="font-medium">Deliverable: Live Functional Sandbox</span>
            </div>
          </div>

          {/* Step 03 */}
          <div className="relative bg-surface-container-low rounded-2xl p-8 flex flex-col justify-between border border-surface-container shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full bg-tertiary text-on-tertiary font-code-sm text-code-sm font-semibold">
                  STAGE 03
                </span>
                <span className="font-code-sm text-code-sm text-tertiary font-bold">Sprint Day 10</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3 font-bold">Production Deploy</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Full enterprise rollout to high-availability infrastructure with CloudWatch/Prometheus telemetry alerts, automated error fallbacks, scheduled rotations, and client dashboard access.
              </p>
            </div>
            <div className="pt-6 mt-6 flex items-center gap-2 text-on-surface-variant font-body-sm border-t border-surface-container">
              <span className="material-symbols-outlined text-tertiary text-base">rocket_launch</span>
              <span className="font-medium">Deliverable: Guaranteed 99.8% SLA</span>
            </div>
          </div>
        </div>
      </section>

      {/* Rapid Scaling Conversion CTA Section */}
      <section className="w-full bg-surface-container-low py-16 border-t border-surface-container" id="quick-scope">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="bg-surface-container-lowest rounded-3xl p-8 lg:p-14 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border border-surface-container">
            {/* Left: Pitch */}
            <div className="lg:col-span-7 flex flex-col gap-space-md">
              <span className="px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-code-sm text-code-sm font-semibold self-start uppercase">
                DIRECT ENGAGEMENT CHANNEL
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">
                Have an urgent architectural bottleneck or automation goal?
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Speak directly with the principal architects behind Yottabyte Technological Services. We skip pitch decks, diagnostic fees, and multi-tier account reps.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary material-symbols-outlined text-sm">schedule</span>
                  <span className="font-body-sm text-body-sm text-on-surface font-medium">&lt;15 Minute WhatsApp Response</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary material-symbols-outlined text-sm">lock_reset</span>
                  <span className="font-body-sm text-body-sm text-on-surface font-medium">Bilateral NDA Executed Same-Day</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-secondary material-symbols-outlined text-sm">terminal</span>
                  <span className="font-body-sm text-body-sm text-on-surface font-medium">Principal Engineer Scoping</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-secondary material-symbols-outlined text-sm">price_check</span>
                  <span className="font-body-sm text-body-sm text-on-surface font-medium">Transparent Milestones &amp; SLAs</span>
                </div>
              </div>
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 text-white font-label-md text-label-md hover:bg-emerald-700 shadow-md transition-all font-semibold"
                  href="https://wa.me/message"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
                  <span>Open Direct WhatsApp Channel</span>
                </a>
                <button
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-surface-container text-primary font-label-md text-label-md hover:bg-surface-container-high transition-all font-semibold"
                  onClick={onOpenDiagnostic}
                >
                  <span className="material-symbols-outlined text-xl">calendar_today</span>
                  <span>Schedule Architecture Audit</span>
                </button>
              </div>
            </div>

            {/* Right: Fast Project Scoping Card Form */}
            <div className="lg:col-span-5 bg-surface-container-low rounded-2xl p-6 shadow-sm border border-surface-container">
              {quickSubmitted ? (
                <div className="p-8 flex flex-col items-center text-center gap-3 bg-surface-container-lowest rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-2xl">check_circle</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Dossier Transmitted</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Principal Systems Architect assigned. Target response SLA: under 15 minutes.
                  </p>
                  <button
                    onClick={() => setQuickSubmitted(false)}
                    className="mt-2 text-primary font-label-md text-label-md hover:underline"
                  >
                    Send another scoping request
                  </button>
                </div>
              ) : (
                <form className="flex flex-col gap-4" onSubmit={handleQuickScopeSubmit}>
                  <div className="flex items-center justify-between pb-2">
                    <h3 className="font-title-md text-title-md text-on-surface font-bold">Fast Technical Scoping</h3>
                    <span className="font-label-sm text-label-sm text-primary font-semibold">Priority Queue</span>
                  </div>
                  <div>
                    <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">Work Email</label>
                    <input
                      className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-lowest text-on-surface text-body-sm focus:outline-none focus:ring-2 focus:ring-primary border border-surface-container"
                      placeholder="alex@enterprise.com"
                      required
                      type="email"
                      value={quickEmail}
                      onChange={(e) => setQuickEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">Primary Need</label>
                    <select
                      className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-lowest text-on-surface text-body-sm focus:outline-none focus:ring-2 focus:ring-primary border border-surface-container"
                      value={quickNeed}
                      onChange={(e) => setQuickNeed(e.target.value)}
                    >
                      <option>High-Throughput Web Scraping &amp; Data Pipeline</option>
                      <option>Custom Autonomous AI Agent / RAG Architecture</option>
                      <option>Full-Stack Web / Mobile Platform Engineering</option>
                      <option>Algorithmic Growth &amp; AEO / SEO Optimization</option>
                      <option>Cloud Infrastructure Migration &amp; FinOps</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">Brief Constraints or Scale (Optional)</label>
                    <textarea
                      className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-lowest text-on-surface text-body-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none border border-surface-container"
                      placeholder="e.g. 5M records daily from dynamic React SPAs, need parity within BigQuery..."
                      rows={3}
                      value={quickConstraints}
                      onChange={(e) => setQuickConstraints(e.target.value)}
                    />
                  </div>
                  <button
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-on-primary font-label-md text-label-md font-semibold hover:opacity-95 shadow-md transition-all flex items-center justify-center gap-2"
                    type="submit"
                  >
                    <span>Transmit Technical Request</span>
                    <span className="material-symbols-outlined text-base">send</span>
                  </button>
                  <p className="text-center font-code-sm text-code-sm text-on-surface-variant pt-1 font-mono text-xs">
                    Protected by 256-bit AES Mutual Confidentiality
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
