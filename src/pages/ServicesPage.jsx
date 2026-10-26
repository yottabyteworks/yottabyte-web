import React, { useState } from 'react';

export default function ServicesPage({ onOpenScoping, onOpenDiagnostic, onShowToast }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedBlueprint, setSelectedBlueprint] = useState(null);

  const vectors = [
    {
      id: 'vector-1',
      vectorNum: 'VECTOR 01 // INTELLIGENCE',
      badge: 'High Concurrency',
      category: 'ai-ml',
      icon: 'psychology',
      iconBg: 'bg-secondary-fixed text-on-secondary-fixed',
      title: 'Generative AI & Agentic Workflows',
      description: 'Production-grade multi-agent autonomous graphs orchestrating complex business decisioning with deterministic fallback protocols and strict ground-truth verification.',
      telemetryTitle: 'State Graph Evaluation',
      telemetryStat: '99.4% F1 Precision',
      telemetryProgress: '94%',
      telemetryColor: 'bg-secondary',
      features: [
        'Deterministic multi-agent state graphs with LangGraph & CrewAI checkpointing',
        'Self-hosted LLM clusters via vLLM, TensorRT-LLM, & local Ollama fallbacks',
        'Hybrid RAG pipelines with Cohere re-ranking and pgvector contextual embeddings',
      ],
      tags: ['LangGraph', 'CrewAI', 'vLLM', 'Qdrant', 'Llama-3-70B'],
      blueprintDetails: 'Architecture Blueprint: Multi-tier agentic routing network utilizing cyclic directed graphs. Context window preservation via pgvector embeddings with zero cold-start delay.',
    },
    {
      id: 'vector-2',
      vectorNum: 'VECTOR 02 // DATA PLATFORM',
      badge: 'Petabyte Scale',
      category: 'data-scraping',
      icon: 'storage',
      iconBg: 'bg-primary-fixed text-on-primary-fixed-variant',
      title: 'Big Data & ETL Pipelines',
      description: 'Unified lakehouse topologies capable of processing billions of events with real-time stream ingestion, zero data loss deduplication, and low-cost cold storage tiering.',
      telemetryTitle: 'Stream Ingestion Throughput',
      telemetryStat: '340k Events/sec Peak',
      telemetryProgress: '88%',
      telemetryColor: 'bg-primary',
      features: [
        'Distributed batch and streaming pipelines via PySpark, Databricks & Apache Iceberg',
        'Ultra-low latency pub-sub message buses using Redpanda & Apache Kafka',
        'Optimized schema warehousing on Snowflake & Google BigQuery with automated dbt models',
      ],
      tags: ['PySpark', 'Databricks', 'Snowflake', 'Kafka', 'dbt'],
      blueprintDetails: 'Lakehouse Blueprint: Zero-drop delta ingestion layer running partitioned writes to Parquet buckets. Auto-compacting data vacuuming routines maintain sub-second scan times.',
    },
    {
      id: 'vector-3',
      vectorNum: 'VECTOR 03 // EXTRACTION',
      badge: 'Anti-Bot Bypass',
      category: 'data-scraping',
      icon: 'travel_explore',
      iconBg: 'bg-surface-variant text-on-primary-fixed-variant',
      title: 'Resilient Web Scraping & Data Ingestion',
      description: 'Zero-drop automated gathering engines designed to harvest millions of records daily past aggressive bot mitigation, Cloudflare turnstiles, and canvas fingerprint checks.',
      telemetryTitle: 'Residential Mesh Success Rate',
      telemetryStat: '99.87% First Attempt',
      telemetryProgress: '99.8%',
      telemetryColor: 'bg-primary',
      features: [
        'Custom TLS stack mimicry & JA3/JA4 TCP fingerprint rotation mechanisms',
        'Distributed headless Playwright & Scrapy workers on autoscaling k8s clusters',
        'Automated schema change detection with self-healing parser LLM heuristics',
      ],
      tags: ['Playwright', 'Scrapy', 'JA4 Bypass', 'ISP Proxies', 'Redis Queue'],
      blueprintDetails: 'Extraction Blueprint: Dynamic node swarm rotating through 2.4M residential peer IP gateways. Headless browser pool injects randomized mouse and GPU canvas entropy.',
    },
    {
      id: 'vector-4',
      vectorNum: 'VECTOR 04 // DECISIONING',
      badge: 'Executive Focus',
      category: 'data-scraping',
      icon: 'query_stats',
      iconBg: 'bg-tertiary-fixed text-on-tertiary-fixed',
      title: 'Business Intelligence & Analytics',
      description: 'Transforming disconnected operational silos into millisecond-responsive executive telemetry dashboards, powered by in-memory analytical engines and real-time semantic layers.',
      telemetryTitle: 'Query Execution Speed (DuckDB)',
      telemetryStat: '42ms on 50M Rows',
      telemetryProgress: '96%',
      telemetryColor: 'bg-tertiary',
      features: [
        'Embedded high-speed analytical dashboards using Streamlit, Plotly & DuckDB',
        'Power BI & Tableau semantic layer modeling with row-level security enforcement',
        'Automated executive alert triggers via Slack, MS Teams, & PagerDuty hooks',
      ],
      tags: ['Streamlit', 'Power BI', 'DuckDB', 'ClickHouse', 'Cube.js'],
      blueprintDetails: 'Analytics Blueprint: In-memory columnar storage caches analytical queries at the edge. Live websocket channels push instant variance alarms directly into executive communication channels.',
    },
    {
      id: 'vector-5',
      vectorNum: 'VECTOR 05 // INFRASTRUCTURE',
      badge: '>50K QPS',
      category: 'core-engineering',
      icon: 'hub',
      iconBg: 'bg-secondary-fixed text-on-secondary-fixed',
      title: 'Enterprise Backend & Web Systems',
      description: 'Resilient, microservice and modular-monolith architectures designed for extreme concurrency, deterministic response SLAs, and clean horizontal cloud autoscaling.',
      telemetryTitle: 'P99 API Latency Boundary',
      telemetryStat: '18ms Sustained',
      telemetryProgress: '95%',
      telemetryColor: 'bg-secondary',
      features: [
        'Asynchronous high-throughput services with FastAPI, Spring Boot, & Go modules',
        'Modern frontends via Next.js with edge SSR caching & strict web vitals optimization',
        'PostgreSQL partitioning, Citus distributed sharding, and Redis caching topology',
      ],
      tags: ['FastAPI', 'Next.js 15', 'Spring Boot', 'Postgres Citus', 'Docker'],
      blueprintDetails: 'Backend Blueprint: Microservice fabric wrapped in Envoy proxy mesh with mutual TLS. Continuous database failover clusters guarantee five-nines operational availability.',
    },
    {
      id: 'vector-6',
      vectorNum: 'VECTOR 06 // CLIENT EDGE',
      badge: 'iOS & Android',
      category: 'core-engineering',
      icon: 'devices',
      iconBg: 'bg-primary-fixed text-on-primary-fixed-variant',
      title: 'Mobile App Development',
      description: 'Secure, performant native client applications engineered with offline-first local synchronization, biometric enclave hardware integration, and unified shared codebases.',
      telemetryTitle: 'Frame Render Rate Stability',
      telemetryStat: '120 FPS Native Target',
      telemetryProgress: '98%',
      telemetryColor: 'bg-primary',
      features: [
        'Production cross-platform engineering with Flutter & React Native architectures',
        'Deterministic offline-first synchronization using local encrypted SQLite & PowerSync',
        'Hardware Secure Enclave / KeyStore biometrics and zero-trust certificate pinning',
      ],
      tags: ['Flutter', 'React Native', 'SQLite', 'WebSockets', 'Kotlin / Swift'],
      blueprintDetails: 'Client Blueprint: Bidirectional differential delta sync with conflict-free replicated data types (CRDTs). Enclave encryption safeguards local client keys.',
    },
    {
      id: 'vector-7',
      vectorNum: 'VECTOR 07 // AUTOMATION',
      badge: 'Self-Hosted / Air-Gapped',
      category: 'growth-automation',
      icon: 'precision_manufacturing',
      iconBg: 'bg-surface-variant text-on-primary-fixed-variant',
      title: 'Business Workflow Automations',
      description: 'Zero-maintenance workflow execution fabrics eliminating human manual cycles across ERP, CRM, billing, and transactional fulfillment systems.',
      telemetryTitle: 'Automated Task Success SLA',
      telemetryStat: '99.99% Execution',
      telemetryProgress: '99.9%',
      telemetryColor: 'bg-primary',
      features: [
        'Self-hosted enterprise n8n clusters deployed on private k8s with strict RBAC',
        'Custom asynchronous Python background daemons for heavy ETL & webhook processing',
        'Resilient bidirectional syncing across HubSpot, Salesforce, Stripe, and SAP',
      ],
      tags: ['n8n Cluster', 'Celery', 'Temporal.io', 'Make API', 'FastAPI'],
      blueprintDetails: 'Automation Blueprint: Highly available queue orchestrator backed by Redis Sentinel. Automated exponential backoff and replay dead-letter queues resolve transient external API outages.',
    },
    {
      id: 'vector-8',
      vectorNum: 'VECTOR 08 // ALGORITHMIC REACH',
      badge: 'AEO / SearchGPT',
      category: 'growth-automation',
      icon: 'rocket_launch',
      iconBg: 'bg-secondary-fixed text-on-secondary-fixed',
      title: 'Digital Growth & SEO / AEO / AIO',
      description: 'Algorithmic surface discovery engineered for Answer Engines (Perplexity, SearchGPT, Gemini) paired with programmatic SEO clusters and Google AdSense monetization yield tuning.',
      telemetryTitle: 'Answer Engine Citation Share',
      telemetryStat: '+280% Index Velocity',
      telemetryProgress: '91%',
      telemetryColor: 'bg-secondary',
      features: [
        'Answer Engine Optimization (AEO) structured JSON-LD & semantic grounding',
        'Programmatic page engine generating 10k+ deterministic, high-authority index landing pages',
        'AdSense and programmatic ad yield optimization via lazy viewability injection',
      ],
      tags: ['Perplexity SEO', 'SearchGPT', 'JSON-LD', 'Next.js Edge', 'AdSense Core'],
      blueprintDetails: 'Growth Blueprint: Semantic knowledge graphs and RDF triple statements dynamically injected at the edge. Programmatic prerendering ensures instantaneous indexation by neural crawlers.',
    },
  ];

  const filteredVectors = vectors.filter((vec) => {
    if (activeFilter === 'all') return true;
    return vec.category === activeFilter;
  });

  const handleOpenBlueprint = (vec) => {
    setSelectedBlueprint(vec);
  };

  return (
    <div className="w-full">
      {/* Hero & Vector Page Header */}
      <section className="w-full px-4 sm:px-8 py-12 bg-gradient-to-b from-surface-container-low via-surface-bright to-background border-b border-surface-container">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          {/* Breadcrumb & Top Label */}
          <div className="flex items-center gap-2 text-on-surface-variant font-label-md text-label-md">
            <span className="hover:text-primary transition-colors cursor-pointer">Home</span>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="text-primary font-semibold">Services &amp; Architecture Vectors</span>
            <span className="ml-3 px-2.5 py-0.5 rounded-full bg-surface-variant text-on-secondary-fixed-variant font-code-sm text-code-sm font-semibold">
              v4.8 Enterprise
            </span>
          </div>

          {/* Main Headline & Subheadline Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm w-fit font-semibold">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                ENTERPRISE ARCHITECTURE MATRIX
              </div>
              <h1 className="font-display text-display text-on-surface tracking-tight font-extrabold">
                8 Production-Grade{' '}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Architectural Vectors
                </span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
                From petabyte-scale residential scraping topologies to deterministic generative AI agent loops with state verification. Built, deployed, and maintained directly by senior systems architects.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-end items-start lg:items-end gap-3">
              <div className="p-4 rounded-xl bg-surface-container-lowest shadow-sm flex items-center gap-4 w-full border border-surface-container">
                <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-2xl">terminal</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-code-sm text-code-sm text-on-surface-variant font-mono">INFRA_HEALTH_CHECK</span>
                  <span className="font-title-md text-title-md text-on-surface font-bold">All Nodes Operational</span>
                </div>
                <span className="ml-auto w-3 h-3 rounded-full bg-primary animate-ping"></span>
              </div>
            </div>
          </div>

          {/* SLA Metrics Strip (4 columns) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
            <div className="p-5 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-1 hover:shadow-md transition-shadow border border-surface-container">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Reliability SLA</span>
                <span className="material-symbols-outlined text-primary text-lg">shield</span>
              </div>
              <span className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-extrabold">99.98%</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">Engineered runtime uptime guarantee</span>
            </div>

            <div className="p-5 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-1 hover:shadow-md transition-shadow border border-surface-container">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Agent Latency</span>
                <span className="material-symbols-outlined text-secondary text-lg">bolt</span>
              </div>
              <span className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-extrabold">&lt;140ms</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">P95 multi-agent state transition speed</span>
            </div>

            <div className="p-5 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-1 hover:shadow-md transition-shadow border border-surface-container">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Daily Throughput</span>
                <span className="material-symbols-outlined text-tertiary text-lg">database</span>
              </div>
              <span className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-extrabold">100M+</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">Telemetry &amp; lakehouse records ingested</span>
            </div>

            <div className="p-5 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-1 hover:shadow-md transition-shadow border border-surface-container">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Diagnostic Turnaround</span>
                <span className="material-symbols-outlined text-primary-container text-lg">timer</span>
              </div>
              <span className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-extrabold">12-Hour</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">Full architectural blueprint &amp; budget estimation</span>
            </div>
          </div>

          {/* Vector Filter Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-surface-container">
            <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-xl bg-surface-container shadow-inner">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-4 py-2 rounded-lg font-label-md text-label-md transition-all ${
                  activeFilter === 'all'
                    ? 'bg-surface-container-lowest text-primary shadow-sm font-semibold'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                All Vectors (8)
              </button>
              <button
                onClick={() => setActiveFilter('ai-ml')}
                className={`px-4 py-2 rounded-lg font-label-md text-label-md transition-all ${
                  activeFilter === 'ai-ml'
                    ? 'bg-surface-container-lowest text-primary shadow-sm font-semibold'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                AI &amp; ML
              </button>
              <button
                onClick={() => setActiveFilter('data-scraping')}
                className={`px-4 py-2 rounded-lg font-label-md text-label-md transition-all ${
                  activeFilter === 'data-scraping'
                    ? 'bg-surface-container-lowest text-primary shadow-sm font-semibold'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                Data &amp; Scraping
              </button>
              <button
                onClick={() => setActiveFilter('core-engineering')}
                className={`px-4 py-2 rounded-lg font-label-md text-label-md transition-all ${
                  activeFilter === 'core-engineering'
                    ? 'bg-surface-container-lowest text-primary shadow-sm font-semibold'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                Core Engineering
              </button>
              <button
                onClick={() => setActiveFilter('growth-automation')}
                className={`px-4 py-2 rounded-lg font-label-md text-label-md transition-all ${
                  activeFilter === 'growth-automation'
                    ? 'bg-surface-container-lowest text-primary shadow-sm font-semibold'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                Growth &amp; Automation
              </button>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-label-sm text-label-sm text-on-surface-variant">Sorted by: Production Readiness</span>
              <div className="flex items-center gap-1 text-primary">
                <span className="material-symbols-outlined text-sm">tune</span>
                <span className="font-label-sm text-label-sm font-semibold">Tier-1 Validated</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Capabilities Grid Section */}
      <section className="w-full px-4 sm:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredVectors.map((vec) => (
              <div
                key={vec.id}
                className="service-card flex flex-col justify-between p-8 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-xl transition-all duration-300 group border border-surface-container"
              >
                <div className="flex flex-col gap-6">
                  {/* Card Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl ${vec.iconBg} flex items-center justify-center font-headline-md text-headline-md`}>
                        <span className="material-symbols-outlined text-2xl">{vec.icon}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-label-sm text-label-sm text-secondary font-semibold">
                          {vec.vectorNum}
                        </span>
                        <span className="font-code-sm text-code-sm text-on-surface-variant font-mono">
                          TIER-1 ARCHITECTURE
                        </span>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold">
                      {vec.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h2 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors font-bold">
                      {vec.title}
                    </h2>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
                      {vec.description}
                    </p>
                  </div>

                  {/* Micro Telemetry Widget */}
                  <div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-2 border border-surface-container">
                    <div className="flex items-center justify-between text-on-surface font-label-sm text-label-sm">
                      <span className="flex items-center gap-1.5 font-medium">
                        <span className={`w-2 h-2 rounded-full ${vec.telemetryColor}`}></span>
                        {vec.telemetryTitle}
                      </span>
                      <span className="font-code-sm text-code-sm text-primary font-bold font-mono">
                        {vec.telemetryStat}
                      </span>
                    </div>
                    <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                      <div
                        className={`${vec.telemetryColor} h-full rounded-full transition-all duration-1000`}
                        style={{ width: vec.telemetryProgress }}
                      ></div>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="flex flex-col gap-2.5">
                    {vec.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 font-body-sm text-body-sm text-on-surface">
                        <span className="material-symbols-outlined text-primary text-base mt-0.5">check_circle</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {vec.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-surface-container text-on-surface font-code-sm text-code-sm font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="flex items-center gap-3 pt-8 mt-6 border-t border-surface-container">
                  <button
                    onClick={() => onOpenScoping(vec.title)}
                    className="flex-1 py-2.5 rounded-xl bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container shadow-sm hover:shadow transition-all flex items-center justify-center gap-1.5 font-semibold"
                  >
                    <span>Scope This Service</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                  <button
                    onClick={() => handleOpenBlueprint(vec)}
                    className="px-4 py-2.5 rounded-xl bg-surface-container text-on-surface hover:bg-surface-container-high font-label-md text-label-md transition-colors font-medium"
                  >
                    Explore Blueprint
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blueprint Detail Modal */}
      {selectedBlueprint && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            onClick={() => setSelectedBlueprint(null)}
            className="absolute inset-0 bg-on-surface/40 backdrop-blur-sm"
          />
          <div className="relative bg-surface-container-lowest rounded-2xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-surface-container z-10 animate-scale-in">
            <div className="flex items-center justify-between pb-4 border-b border-surface-container">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-2xl">schema</span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  {selectedBlueprint.title}
                </h3>
              </div>
              <button 
                onClick={() => setSelectedBlueprint(null)}
                className="p-1 rounded-lg hover:bg-surface-container text-on-surface-variant"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="py-5 flex flex-col gap-4">
              <div className="p-4 rounded-xl bg-surface-container-low font-body-sm text-on-surface leading-relaxed border border-surface-container">
                {selectedBlueprint.blueprintDetails}
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-label-sm text-label-sm text-outline font-semibold uppercase">Active Modules</span>
                <div className="flex flex-wrap gap-2">
                  {selectedBlueprint.tags.map((t, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded bg-surface-container font-code-sm text-code-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="pt-3 border-t border-surface-container flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedBlueprint(null)}
                className="px-4 py-2 rounded-xl text-on-surface-variant font-label-md hover:bg-surface-container"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const title = selectedBlueprint.title;
                  setSelectedBlueprint(null);
                  onOpenScoping(title);
                }}
                className="px-5 py-2.5 rounded-xl bg-primary text-on-primary font-label-md font-semibold hover:bg-primary-container"
              >
                Request Custom Spec
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Multi-Vector Stack Interactive Architecture Preview Section */}
      <section className="w-full px-4 sm:px-8 py-16 bg-surface-container-low border-y border-surface-container">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col gap-2 max-w-2xl">
              <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase tracking-widest">
                Cross-Vector Integration
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
                The Unified Yottabyte Pipeline Matrix
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Production systems rarely exist in isolation. Our core engagement model binds automated data ingestion directly into AI evaluation loops and distributed high-QPS backends.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1.5 rounded-lg bg-surface-container-lowest font-code-sm text-code-sm text-primary shadow-sm border border-surface-container font-mono">
                PIPELINE STATUS: DETERMINISTIC
              </span>
            </div>
          </div>

          {/* Architectural Dataflow Schematic Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-8 border border-surface-container">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
              {/* Step 1 */}
              <div className="p-5 rounded-xl bg-surface-container-low flex flex-col gap-3 border border-surface-container hover:shadow-sm transition-shadow">
                <div className="flex items-center justify-between">
                  <span className="font-code-sm text-code-sm font-bold text-primary font-mono">01 / EXTRACTION</span>
                  <span className="material-symbols-outlined text-primary text-sm">hub</span>
                </div>
                <h4 className="font-title-md text-title-md text-on-surface font-bold">Stealth Web Mesh</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Residential proxies gather raw HTML &amp; JSON with JA4 evasion.</p>
                <div className="mt-auto pt-2 flex items-center gap-1 font-label-sm text-label-sm text-primary font-semibold">
                  <span className="material-symbols-outlined text-xs">sync_alt</span>
                  <span>100M+ Items/day</span>
                </div>
              </div>

              {/* Step 2 */}
              <div className="p-5 rounded-xl bg-surface-container-low flex flex-col gap-3 border border-surface-container hover:shadow-sm transition-shadow">
                <div className="flex items-center justify-between">
                  <span className="font-code-sm text-code-sm font-bold text-secondary font-mono">02 / INGESTION</span>
                  <span className="material-symbols-outlined text-secondary text-sm">stream</span>
                </div>
                <h4 className="font-title-md text-title-md text-on-surface font-bold">Kafka &amp; Spark Lakehouse</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Real-time schema sanitation, delta deduplication, and Iceberg tiering.</p>
                <div className="mt-auto pt-2 flex items-center gap-1 font-label-sm text-label-sm text-secondary font-semibold">
                  <span className="material-symbols-outlined text-xs">speed</span>
                  <span>&lt;200ms Latency</span>
                </div>
              </div>

              {/* Step 3 */}
              <div className="p-5 rounded-xl bg-surface-container-low flex flex-col gap-3 border border-surface-container hover:shadow-sm transition-shadow">
                <div className="flex items-center justify-between">
                  <span className="font-code-sm text-code-sm font-bold text-tertiary font-mono">03 / INFERENCE</span>
                  <span className="material-symbols-outlined text-tertiary text-sm">psychology</span>
                </div>
                <h4 className="font-title-md text-title-md text-on-surface font-bold">Multi-Agent State Graph</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">LangGraph nodes parse entities and evaluate confidence scores.</p>
                <div className="mt-auto pt-2 flex items-center gap-1 font-label-sm text-label-sm text-tertiary font-semibold">
                  <span className="material-symbols-outlined text-xs">verified</span>
                  <span>Strict Ground Truth</span>
                </div>
              </div>

              {/* Step 4 */}
              <div className="p-5 rounded-xl bg-surface-container-low flex flex-col gap-3 border border-surface-container hover:shadow-sm transition-shadow">
                <div className="flex items-center justify-between">
                  <span className="font-code-sm text-code-sm font-bold text-primary font-mono">04 / DISPATCH</span>
                  <span className="material-symbols-outlined text-primary text-sm">terminal</span>
                </div>
                <h4 className="font-title-md text-title-md text-on-surface font-bold">Client Edge &amp; Telemetry</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Delivered to mobile app, executive BI, and automated webhook triggers.</p>
                <div className="mt-auto pt-2 flex items-center gap-1 font-label-sm text-label-sm text-primary font-semibold">
                  <span className="material-symbols-outlined text-xs">done_all</span>
                  <span>Real-Time Push</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-4 border border-surface-container">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">account_tree</span>
                <span className="font-title-md text-title-md text-on-surface font-semibold">Need custom interconnects across multiple vectors?</span>
              </div>
              <button
                onClick={() => onOpenScoping('Multi-Vector Enterprise Stack')}
                className="px-5 py-2.5 rounded-xl bg-secondary text-on-secondary font-label-md text-label-md hover:bg-secondary-container transition-colors shadow-sm font-semibold"
              >
                Assemble Custom Multi-Vector Stack
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Vector Solutions Dedicated Call To Action */}
      <section className="w-full px-4 sm:px-8 py-20 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-secondary p-8 sm:p-12 text-on-primary shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Ambient decorative background polygon */}
            <div className="absolute -right-20 -bottom-20 w-96 h-96 opacity-10 pointer-events-none">
              <svg fill="currentColor" viewBox="0 0 200 200">
                <polygon points="100,10 190,90 150,190 50,190 10,90"></polygon>
              </svg>
            </div>

            <div className="flex flex-col gap-4 max-w-2xl relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-lowest/20 backdrop-blur-md text-on-primary font-label-sm text-label-sm w-fit font-semibold">
                <span className="material-symbols-outlined text-xs">rocket</span>
                <span>ENTERPRISE ACCELERATOR ENGAGEMENT</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-primary tracking-tight font-bold">
                Need a Combined Multi-Vector Stack?
              </h2>
              <p className="font-body-lg text-body-lg text-on-primary/90 leading-relaxed">
                Skip bureaucratic hand-offs. Connect directly with a Principal Cloud &amp; AI Architect to map out your infrastructure blueprint, timeline, and SLA requirements in under 30 minutes.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-4 text-on-primary/80 font-label-sm text-label-sm">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-base">lock</span>
                  <span>Mutual Non-Disclosure Guaranteed</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-base">speed</span>
                  <span>12-Hour Formal Scoping Return</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-base">support_agent</span>
                  <span>Architect-Level Direct Access</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 w-full sm:w-auto flex-shrink-0 relative z-10">
              <button
                onClick={onOpenDiagnostic}
                className="px-8 py-4 rounded-xl bg-surface-container-lowest text-primary font-title-md text-title-md shadow-xl hover:bg-surface-container-low transition-all flex items-center justify-center gap-2 font-bold"
              >
                <span className="material-symbols-outlined text-lg">calendar_month</span>
                <span>Book Consultation</span>
              </button>
              <a
                className="px-8 py-4 rounded-xl bg-surface-container-lowest/15 hover:bg-surface-container-lowest/25 backdrop-blur-md text-on-primary font-title-md text-title-md transition-all flex items-center justify-center gap-2 font-semibold"
                href="https://wa.me/message"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-lg">chat</span>
                <span>WhatsApp Architect Chat</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
