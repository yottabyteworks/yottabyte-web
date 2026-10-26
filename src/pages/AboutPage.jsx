import React, { useState } from 'react';

export default function AboutPage({ onOpenDiagnostic, onShowToast }) {
  const [openFaq, setOpenFaq] = useState([0]); // Open first FAQ by default
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    countryCode: '+91',
    phone: '',
    domains: ['Generative AI', 'Backend'],
    budget: 'modular',
    specs: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const toggleFaq = (index) => {
    if (openFaq.includes(index)) {
      setOpenFaq(openFaq.filter((i) => i !== index));
    } else {
      setOpenFaq([...openFaq, index]);
    }
  };

  const handleDomainToggle = (domain) => {
    if (formData.domains.includes(domain)) {
      setFormData({
        ...formData,
        domains: formData.domains.filter((d) => d !== domain),
      });
    } else {
      setFormData({
        ...formData,
        domains: [...formData.domains, domain],
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (onShowToast) {
      onShowToast({
        title: 'Scoping Dossier Registered',
        message: 'Principal lead review initiated under 12-hour SLA guarantee.',
        type: 'success',
      });
    }
  };

  const domainOptions = [
    { id: 'Generative AI', label: 'Generative AI & LLMs' },
    { id: 'Big Data', label: 'Big Data & Spark' },
    { id: 'Web Scraping', label: 'Cluster Scraping' },
    { id: 'BI Analytics', label: 'BI & Telemetry' },
    { id: 'Backend', label: 'Backend / Distributed' },
    { id: 'Mobile', label: 'Mobile (Android/iOS)' },
    { id: 'Automations', label: 'Workflow Automations' },
    { id: 'AEO Growth', label: 'AEO / AIO Discovery' },
  ];

  const faqs = [
    {
      q: 'What is included in the 12-hour turnaround deliverable?',
      a: 'You receive a concrete System Blueprint PDF containing recommended cloud service topology, pipeline architecture, projected database schema, risk matrices, and fixed milestone cost breakdowns for our 2-week agile sprints.',
    },
    {
      q: 'How are NDAs handled prior to code inspections?',
      a: 'We provide a standardized bilateral mutual NDA covering intellectual property, algorithmic trade secrets, and access control tokens. Once countersigned digitally, you may securely provide repository read-access.',
    },
    {
      q: 'How does milestone invoicing operate?',
      a: 'Projects are decomposed into two-week sprints. Payments are triggered strictly upon staging server verification and passing automated test suites in continuous integration, backed by verifiable commit logs.',
    },
    {
      q: 'Can we transition to retained advisory post-launch?',
      a: 'Yes. We offer fractional CTO and Principal Architect retainers that guarantee monthly technical hours, zero-downtime architecture audits, and rapid SLA escalation channels for production infrastructure.',
    },
  ];

  return (
    <div className="w-full">
      {/* Top Visual Accent / Breadcrumb Header */}
      <section className="w-full px-4 sm:px-8 pt-8 pb-12 bg-surface-container-lowest border-b border-surface-container">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-space-sm font-code-sm text-code-sm text-outline font-mono">
              <span>ROOT</span>
              <span>/</span>
              <span className="text-primary font-medium">ABOUT US &amp; ARCHITECTURAL SCOPING</span>
              <span>/</span>
              <span className="px-2 py-0.5 rounded-full bg-surface-variant text-on-surface-variant text-label-sm font-label-sm">
                v2.4 STABLE
              </span>
            </div>
            <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant">
              <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
              <span className="font-semibold">SYSTEM METRIC: DIRECT ENGAGEMENT PROTOCOL</span>
            </div>
          </div>

          {/* Executive Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-end pt-space-md">
            <div className="lg:col-span-8 flex flex-col gap-space-md">
              <div className="inline-flex items-center gap-space-xs px-3 py-1 rounded-full bg-surface-container text-primary font-label-sm text-label-sm w-fit font-semibold">
                <span className="material-symbols-outlined text-base">bolt</span>
                <span>ENGINEERING SOVEREIGNTY</span>
              </div>
              <h1 className="font-display text-display text-on-surface tracking-tight leading-tight font-extrabold">
                Zero Bureaucracy. <br />
                <span className="text-primary">Direct Architectural Velocity.</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                We eliminate account managers, junior proxies, and redundant overhead. Speak directly to senior enterprise engineers with 13+ collective YOE across Tata Consultancy Services, Accenture Enterprise Labs, and Electronic Arts.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-space-sm bg-surface-container-low p-space-lg rounded-xl border border-surface-container">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider font-semibold">
                  Velocity Benchmark
                </span>
                <span className="font-code-sm text-code-sm text-primary font-bold font-mono">0% MIDDLE LAYERS</span>
              </div>
              <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                <div className="bg-primary h-full w-[94%]"></div>
              </div>
              <div className="grid grid-cols-3 gap-2 pt-2 text-center">
                <div className="bg-surface-container-lowest p-2 rounded-lg border border-surface-container">
                  <span className="block font-headline-sm text-headline-sm text-on-surface font-bold">&lt; 15m</span>
                  <span className="font-label-sm text-label-sm text-outline">Lead SLA</span>
                </div>
                <div className="bg-surface-container-lowest p-2 rounded-lg border border-surface-container">
                  <span className="block font-headline-sm text-headline-sm text-on-surface font-bold">100%</span>
                  <span className="font-label-sm text-label-sm text-outline">Code Leads</span>
                </div>
                <div className="bg-surface-container-lowest p-2 rounded-lg border border-surface-container">
                  <span className="block font-headline-sm text-headline-sm text-on-surface font-bold">2 Wk</span>
                  <span className="font-label-sm text-label-sm text-outline">Cadence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: 3 Core Value Cards */}
      <section className="w-full px-4 sm:px-8 py-16 bg-surface">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
          <div className="flex flex-col gap-space-xs">
            <span className="font-label-sm text-label-sm text-primary tracking-widest uppercase font-semibold">
              CORE OPERATIONAL TENETS
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">
              Structured For High Computational Integrity
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
            {/* Tenet 1 */}
            <div className="group relative flex flex-col justify-between p-space-lg rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-xl transition-all duration-300 border border-surface-container">
              <div className="flex flex-col gap-space-md">
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined text-2xl">terminal</span>
                </div>
                <div className="flex flex-col gap-space-xs">
                  <span className="font-code-sm text-code-sm text-outline font-mono">TENET // 01</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Direct Architect Access</h3>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Every sprint sync and technical architecture audit is conducted exclusively with principal tech leads who actively write, review, and ship production code to your repos.
                </p>
              </div>
              <div className="pt-space-lg mt-space-md bg-surface-container-low rounded-lg p-3 flex items-center justify-between border border-surface-container">
                <span className="font-label-sm text-label-sm text-on-surface font-medium">No Sales Intermediaries</span>
                <span className="material-symbols-outlined text-primary text-sm">verified</span>
              </div>
            </div>

            {/* Tenet 2 */}
            <div className="group relative flex flex-col justify-between p-space-lg rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-xl transition-all duration-300 border border-surface-container">
              <div className="flex flex-col gap-space-md">
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                  <span className="material-symbols-outlined text-2xl">memory</span>
                </div>
                <div className="flex flex-col gap-space-xs">
                  <span className="font-code-sm text-code-sm text-outline font-mono">TENET // 02</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Petabyte-Scale Engineering</h3>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Engineered with zero tolerance for unbounded memory leaks, erratic state mutation, or single points of failure. High-concurrency systems guaranteed for tier-1 throughput.
                </p>
              </div>
              <div className="pt-space-lg mt-space-md bg-surface-container-low rounded-lg p-3 flex items-center justify-between border border-surface-container">
                <span className="font-label-sm text-label-sm text-on-surface font-medium">Fault-Tolerant Pipelines</span>
                <span className="material-symbols-outlined text-secondary text-sm">storage</span>
              </div>
            </div>

            {/* Tenet 3 */}
            <div className="group relative flex flex-col justify-between p-space-lg rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-xl transition-all duration-300 border border-surface-container">
              <div className="flex flex-col gap-space-md">
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-tertiary group-hover:bg-tertiary group-hover:text-on-tertiary transition-colors">
                  <span className="material-symbols-outlined text-2xl">receipt_long</span>
                </div>
                <div className="flex flex-col gap-space-xs">
                  <span className="font-code-sm text-code-sm text-outline font-mono">TENET // 03</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Milestone Transparency</h3>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Auditable Git repositories, immutable CI/CD deployment logs, and structured 2-week deliverable sprints. Invoiced strictly against concrete, verified acceptance criteria.
                </p>
              </div>
              <div className="pt-space-lg mt-space-md bg-surface-container-low rounded-lg p-3 flex items-center justify-between border border-surface-container">
                <span className="font-label-sm text-label-sm text-on-surface font-medium">Zero Hidden Overhead</span>
                <span className="material-symbols-outlined text-tertiary text-sm">fact_check</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Principal Leadership Pedigree */}
      <section className="w-full px-4 sm:px-8 py-16 bg-surface-container-low border-y border-surface-container">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div className="flex flex-col gap-space-xs">
              <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase tracking-widest">
                PEDIGREE &amp; CREDENTIALS
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">
                Principal Technical Leadership
              </h2>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
              Direct responsibility for end-to-end architecture, computational efficiency, and production SLAs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-xl">
            {/* Principal 1 */}
            <div className="flex flex-col bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow border border-surface-container">
              <div className="flex items-start gap-space-md">
                <img
                  className="w-20 h-20 rounded-xl object-cover flex-shrink-0 border border-outline-variant"
                  alt="Principal Architect portrait"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfuLlfOIsd41JbcaZasdG9SiWcobBg2Ab36MwK_wD0j8xL-cTRwiiA8gzamtE-ddH1U-rG8CKabCLGdQxUK97IGfnPt63fwfqb4weGUQnYpe_p_rTItidBR7XI6AXICnZbKuOFzczURuFmWZnIaLQY0omNZti79GibmMzBWCR1q-4nHReLe3FwV7Wxo4cOzG0DrVxhccSQ1vo4kk5ydKOczuSf2daT6ZZI7oFdM573FRoSNheMOG0K"
                />
                <div className="flex flex-col gap-space-xs">
                  <div className="flex items-center gap-space-xs">
                    <span className="font-headline-sm text-headline-sm text-on-surface font-bold">Principal Architect</span>
                    <span className="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm font-semibold">
                      8+ YOE
                    </span>
                  </div>
                  <p className="font-label-md text-label-md text-primary font-medium">Senior AI/ML &amp; Data Infrastructure Architect</p>
                  <div className="flex flex-wrap items-center gap-2 text-outline font-label-sm text-label-sm">
                    <span className="flex items-center gap-1 font-medium">
                      <span className="material-symbols-outlined text-sm">domain</span> Ex-TCS Enterprise Labs
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 font-medium">
                      <span className="material-symbols-outlined text-sm">verified_user</span> Ex-Accenture Advanced Data
                    </span>
                  </div>
                </div>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mt-space-md leading-relaxed">
                Specializes in fault-tolerant distributed LLM deployments, petabyte-scale extraction clusters, and low-latency vector embedding pipelines. Orchestrates deep neural inferencing nodes with zero packet drop guarantees under high enterprise load.
              </p>
              <div className="flex flex-col gap-space-xs mt-space-md pt-space-md bg-surface-container-low p-3 rounded-lg border border-surface-container">
                <span className="font-label-sm text-label-sm text-outline font-semibold uppercase tracking-wider">
                  Primary Stack Core:
                </span>
                <div className="flex flex-wrap gap-2">
                  {['PyTorch', 'Apache Spark', 'LangGraph', 'FastAPI', 'Milvus Vector DB'].map((st, i) => (
                    <span key={i} className="px-2.5 py-1 rounded bg-surface-container-lowest font-code-sm text-code-sm text-on-surface font-mono shadow-xs">
                      {st}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Principal 2 */}
            <div className="flex flex-col bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow border border-surface-container">
              <div className="flex items-start gap-space-md">
                <img
                  className="w-20 h-20 rounded-xl object-cover flex-shrink-0 border border-outline-variant"
                  alt="Systems & Growth Lead portrait"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzyBQO37-bDHvkHxIRid4IZR8BBU-QiuBPzaY_XDwiaereMCH0ocVyL_7heQDXVd_oLzduT1yt5kBYP3Hx8-ALcxUsQMvGvV_oOHZ750eEiyDU0byaP-4zwIk9tA7G38v8_6DceHVNSdNxXApDBDDDca56jiwkT1Iri_ETnXIvA1EVhSCI9rDfCD20mnoUjFDjfjgYxuTe6wH17eNM3U6e9y0qyEZenfuaIWEhx4es6Wi0YU2GxZXo"
                />
                <div className="flex flex-col gap-space-xs">
                  <div className="flex items-center gap-space-xs">
                    <span className="font-headline-sm text-headline-sm text-on-surface font-bold">Systems &amp; Growth Lead</span>
                    <span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-label-sm font-semibold">
                      5+ YOE
                    </span>
                  </div>
                  <p className="font-label-md text-label-md text-secondary font-medium">Distributed Systems &amp; Automation Strategist</p>
                  <div className="flex flex-wrap items-center gap-2 text-outline font-label-sm text-label-sm">
                    <span className="flex items-center gap-1 font-medium">
                      <span className="material-symbols-outlined text-sm">sports_esports</span> Ex-Electronic Arts (EA)
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 font-medium">
                      <span className="material-symbols-outlined text-sm">rocket_launch</span> Scaled SaaS Platforms
                    </span>
                  </div>
                </div>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mt-space-md leading-relaxed">
                Specializes in programmatic content engines, event-driven streaming pipelines, and AI Engine Optimization (AEO/AIO) discoverability structures. Architected game telemetry and global web apps delivering sub-second updates at massive concurrency.
              </p>
              <div className="flex flex-col gap-space-xs mt-space-md pt-space-md bg-surface-container-low p-3 rounded-lg border border-surface-container">
                <span className="font-label-sm text-label-sm text-outline font-semibold uppercase tracking-wider">
                  Primary Stack Core:
                </span>
                <div className="flex flex-wrap gap-2">
                  {['AIO Engines', 'n8n / Kafka', 'Next.js 15', 'Docker', 'PostgreSQL'].map((st, i) => (
                    <span key={i} className="px-2.5 py-1 rounded bg-surface-container-lowest font-code-sm text-code-sm text-on-surface font-mono shadow-xs">
                      {st}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Interactive Scoping Engine & Form */}
      <section className="w-full px-4 sm:px-8 py-20 bg-surface-container-lowest" id="scoping-form">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
          <div className="flex flex-col gap-space-xs">
            <span className="font-label-sm text-label-sm text-primary tracking-widest uppercase font-semibold">
              DIRECT SYSTEM SPECIFICATION
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">
              Interactive Technical Scoping Engine
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Specify your requirements to engage directly with our principal engineering leads.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
            {/* Left Column: Guarantees & Active Load */}
            <div className="lg:col-span-5 flex flex-col gap-space-lg">
              <div className="bg-surface-container-low rounded-xl p-space-lg flex flex-col gap-space-md shadow-sm border border-surface-container">
                <div className="flex items-center gap-space-sm text-primary">
                  <span className="material-symbols-outlined text-2xl">timer</span>
                  <span className="font-title-md text-title-md font-bold">12-Hour Turnaround SLA</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Every scoping request submitted via this engine is examined by our principals. You will receive a bespoke technical feasibility breakdown and timeline within 12 standard business hours.
                </p>
                <div className="flex flex-col gap-space-xs pt-space-xs">
                  <span className="font-label-sm text-label-sm text-outline font-semibold uppercase">
                    What Your Audit Package Contains:
                  </span>
                  <div className="flex items-start gap-space-sm">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">schema</span>
                    <span className="font-body-sm text-body-sm text-on-surface">System Topology &amp; Architectural Flowchart</span>
                  </div>
                  <div className="flex items-start gap-space-sm">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">layers</span>
                    <span className="font-body-sm text-body-sm text-on-surface">Recommended Production Tech Stack &amp; Scalability Guardrails</span>
                  </div>
                  <div className="flex items-start gap-space-sm">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">price_check</span>
                    <span className="font-body-sm text-body-sm text-on-surface">Fixed-Milestone Budget &amp; Bi-Weekly Sprint Deliverables</span>
                  </div>
                </div>
              </div>

              {/* NDA Protection */}
              <div className="bg-surface-container rounded-xl p-space-lg flex flex-col gap-space-sm border border-surface-container-high">
                <div className="flex items-center gap-space-sm text-on-surface">
                  <span className="material-symbols-outlined text-secondary text-2xl">shield_lock</span>
                  <span className="font-title-md text-title-md font-bold">Institutional NDA Protection</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Proprietary IP and data pipeline specs are safeguarded by default under our mutual non-disclosure framework prior to repository code audits.
                </p>
                <div className="pt-2">
                  <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-secondary font-semibold">
                    <span className="material-symbols-outlined text-sm">lock</span>
                    SOC-2 Type II Certified Process
                  </span>
                </div>
              </div>

              {/* Active Load Widget */}
              <div className="p-space-lg rounded-xl bg-surface-container-high flex flex-col gap-space-sm border border-surface-container">
                <span className="font-label-sm text-label-sm text-outline uppercase font-semibold">
                  Active Engineering Load
                </span>
                <div className="flex items-center justify-between">
                  <span className="font-body-sm text-body-sm text-on-surface font-medium">Quarterly Sprint Slots Allocated</span>
                  <span className="font-code-sm text-code-sm text-primary font-bold font-mono">4 of 6</span>
                </div>
                <div className="w-full bg-surface-container-lowest h-2 rounded-full overflow-hidden">
                  <div className="bg-secondary h-full w-[66%]"></div>
                </div>
                <span className="font-label-sm text-label-sm text-on-surface-variant italic">
                  2 enterprise migration slots remaining for current sprint cycle.
                </span>
              </div>
            </div>

            {/* Right Column: Live Form */}
            <div className="lg:col-span-7 bg-surface-container-low rounded-xl p-6 sm:p-space-lg shadow-md flex flex-col gap-space-lg border border-surface-container">
              {submitted ? (
                <div className="p-10 flex flex-col items-center text-center gap-4 bg-surface-container-lowest rounded-xl">
                  <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-3xl">check_circle</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                    Scoping Telemetry Captured
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                    Direct Principal Lead review initiated. You will receive a technical feasibility blueprint and NDA within 12 standard business hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 px-6 py-2.5 rounded-xl bg-primary text-on-primary font-label-md font-semibold hover:bg-primary-container"
                  >
                    Submit Another Scope
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-space-md">
                  {/* 01 // Name & Org */}
                  <div className="flex flex-col gap-space-xs">
                    <label className="font-label-sm text-label-sm text-on-surface font-semibold tracking-wide">
                      01 // FULL NAME &amp; ORGANIZATION <span className="text-error">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                      <input
                        className="w-full h-11 px-3.5 rounded-lg bg-surface-container-lowest text-on-surface placeholder:text-outline text-body-sm outline-none focus:ring-2 focus:ring-primary border border-surface-container"
                        placeholder="e.g., Alex Vance"
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                      <input
                        className="w-full h-11 px-3.5 rounded-lg bg-surface-container-lowest text-on-surface placeholder:text-outline text-body-sm outline-none focus:ring-2 focus:ring-primary border border-surface-container"
                        placeholder="Company / Institution"
                        required
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* 02 // Work Email */}
                  <div className="flex flex-col gap-space-xs">
                    <label className="font-label-sm text-label-sm text-on-surface font-semibold tracking-wide">
                      02 // ENTERPRISE WORK EMAIL <span className="text-error">*</span>
                    </label>
                    <input
                      className="w-full h-11 px-3.5 rounded-lg bg-surface-container-lowest text-on-surface placeholder:text-outline text-body-sm outline-none focus:ring-2 focus:ring-primary border border-surface-container"
                      placeholder="architect@yourdomain.com"
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  {/* 03 // WhatsApp / Phone */}
                  <div className="flex flex-col gap-space-xs">
                    <label className="font-label-sm text-label-sm text-on-surface font-semibold tracking-wide">
                      03 // DIRECT PHONE / WHATSAPP CHANNEL
                    </label>
                    <div className="flex gap-space-sm">
                      <select
                        className="h-11 px-3 rounded-lg bg-surface-container-lowest text-on-surface text-body-sm outline-none focus:ring-2 focus:ring-primary border border-surface-container"
                        value={formData.countryCode}
                        onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                      >
                        <option value="+1">US (+1)</option>
                        <option value="+44">UK (+44)</option>
                        <option value="+91">IN (+91)</option>
                        <option value="+49">DE (+49)</option>
                        <option value="+65">SG (+65)</option>
                        <option value="+971">UAE (+971)</option>
                      </select>
                      <input
                        className="flex-1 h-11 px-3.5 rounded-lg bg-surface-container-lowest text-on-surface placeholder:text-outline text-body-sm outline-none focus:ring-2 focus:ring-primary border border-surface-container"
                        placeholder="98765 43210"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* 04 // Target Architecture */}
                  <div className="flex flex-col gap-space-xs">
                    <label className="font-label-sm text-label-sm text-on-surface font-semibold tracking-wide">
                      04 // TARGET ARCHITECTURE (SELECT CORE DOMAINS)
                    </label>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {domainOptions.map((opt) => {
                        const checked = formData.domains.includes(opt.id);
                        return (
                          <button
                            type="button"
                            key={opt.id}
                            onClick={() => handleDomainToggle(opt.id)}
                            className={`px-3 py-1.5 rounded-full text-body-sm transition-all border ${
                              checked
                                ? 'bg-primary text-on-primary border-primary shadow-xs font-medium'
                                : 'bg-surface-container-lowest text-on-surface border-surface-container hover:bg-surface-container'
                            }`}
                          >
                            {opt.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 05 // Budget */}
                  <div className="flex flex-col gap-space-xs">
                    <label className="font-label-sm text-label-sm text-on-surface font-semibold tracking-wide">
                      05 // ESTIMATED BUDGET SCOPE
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { id: 'mvp', range: '< $2k', title: 'Sprint MVP' },
                        { id: 'modular', range: '$2k - $5k', title: 'Modular Scope' },
                        { id: 'scale', range: '$5k - $15k', title: 'Scale Deploy' },
                        { id: 'enterprise', range: '$15k+', title: 'Enterprise Tier' },
                      ].map((b) => (
                        <div
                          key={b.id}
                          onClick={() => setFormData({ ...formData, budget: b.id })}
                          className={`p-2.5 rounded-lg text-center cursor-pointer transition-all border ${
                            formData.budget === b.id
                              ? 'bg-secondary text-on-secondary border-secondary shadow-xs'
                              : 'bg-surface-container-lowest text-on-surface border-surface-container hover:bg-surface-container'
                          }`}
                        >
                          <span className="block font-code-sm text-code-sm font-semibold font-mono">{b.range}</span>
                          <span className="text-label-sm font-label-sm opacity-80">{b.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 06 // Specs Textarea */}
                  <div className="flex flex-col gap-space-xs">
                    <div className="flex items-center justify-between">
                      <label className="font-label-sm text-label-sm text-on-surface font-semibold tracking-wide">
                        06 // SYSTEM SPECIFICATIONS &amp; OBJECTIVES
                      </label>
                      <span className="font-code-sm text-code-sm text-outline font-mono text-xs">Markdown Supported</span>
                    </div>
                    <textarea
                      className="w-full p-3.5 rounded-lg bg-surface-container-lowest text-on-surface placeholder:text-outline text-body-sm outline-none focus:ring-2 focus:ring-primary border border-surface-container resize-none"
                      placeholder="Describe throughput targets, current platform bottlenecks, database engines, cloud providers, and timeline urgency..."
                      rows={4}
                      value={formData.specs}
                      onChange={(e) => setFormData({ ...formData, specs: e.target.value })}
                    />
                  </div>

                  {/* Submit buttons */}
                  <div className="flex flex-col sm:flex-row items-center gap-space-sm pt-space-xs">
                    <button
                      className="w-full sm:flex-1 h-12 rounded-xl bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md flex items-center justify-center gap-space-xs shadow-md transition-all font-semibold"
                      type="submit"
                    >
                      <span className="material-symbols-outlined text-xl">send</span>
                      <span>Submit Scoping Request</span>
                    </button>
                    <a
                      className="w-full sm:w-auto h-12 px-6 rounded-xl bg-surface-container-lowest hover:bg-surface-container-high text-primary font-label-md text-label-md flex items-center justify-center gap-space-xs transition-colors border border-surface-container font-semibold"
                      href="https://wa.me/message"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
                      <span>Instant WhatsApp Scoping</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: FAQ Accordion */}
      <section className="w-full px-4 sm:px-8 py-16 bg-surface border-t border-surface-container">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
          <div className="flex flex-col gap-space-xs text-center items-center">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest font-semibold">
              TRANSPARENCY MANIFESTO
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">
              Technical Scoping &amp; Engagement FAQ
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
              Direct engineering terms with no ambiguities, vendor lock-in, or obscured rate calculators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq.includes(idx);
              return (
                <div
                  key={idx}
                  onClick={() => toggleFaq(idx)}
                  className="bg-surface-container-lowest rounded-xl p-space-lg flex flex-col gap-space-sm shadow-sm cursor-pointer border border-surface-container hover:border-primary/40 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-title-md text-title-md text-on-surface font-semibold pr-3">
                      {faq.q}
                    </h4>
                    <span className={`material-symbols-outlined text-primary text-xl transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                      expand_more
                    </span>
                  </div>
                  {isOpen && (
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed animate-fade-in">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 6: Bottom CTA Banner */}
      <section className="w-full px-4 sm:px-8 py-16 bg-surface-container-lowest border-t border-surface-container">
        <div className="max-w-7xl mx-auto rounded-2xl bg-gradient-to-r from-primary to-secondary p-space-xl text-on-primary flex flex-col lg:flex-row items-center justify-between gap-space-lg shadow-xl">
          <div className="flex flex-col gap-space-sm max-w-xl">
            <div className="flex items-center gap-space-xs font-code-sm text-code-sm text-primary-fixed font-mono font-semibold">
              <span className="material-symbols-outlined text-base">terminal</span>
              <span>READY TO SCALE CLOUD PIPELINES?</span>
            </div>
            <h3 className="font-headline-lg text-headline-lg tracking-tight font-bold">
              Bypass The Bureaucracy. Deploy In 14 Days.
            </h3>
            <p className="font-body-md text-body-md text-primary-fixed leading-relaxed">
              Speak with principal engineers right now to evaluate data pipelines, LLM fine-tuning clusters, or enterprise scrapers.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-space-sm w-full lg:w-auto">
            <a
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-surface-container-lowest text-primary font-label-md text-label-md font-semibold hover:bg-surface-container-low transition-colors text-center shadow-md"
              href="#scoping-form"
            >
              Initialize Live Scoping
            </a>
            <button
              onClick={onOpenDiagnostic}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-primary-fixed text-on-primary-fixed-variant font-label-md text-label-md font-semibold hover:bg-primary-fixed-dim transition-colors text-center flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-lg">calendar_today</span>
              <span>Book Consultation</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
