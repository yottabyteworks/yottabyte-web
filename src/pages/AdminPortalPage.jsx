import React, { useState, useEffect } from 'react';
import Logo from '../components/Logo.jsx';

export default function AdminPortalPage({ navigate, onShowToast }) {
  const [activeTab, setActiveTab] = useState('inquiries'); // 'inquiries', 'editor', 'telemetry'
  const [activeUnit, setActiveUnit] = useState('overview');
  const [searchLeadQuery, setSearchLeadQuery] = useState('');
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [sessionSeconds, setSessionSeconds] = useState(27720); // 7h 42m
  
  // Blog Editor State
  const [articleTitle, setArticleTitle] = useState('Architecting Multi-Agent LLM Orchestration with Kafka & Rust');
  const [articleSlug, setArticleSlug] = useState('multi-agent-kafka-rust');
  const [articleCategory, setArticleCategory] = useState('AI / ML Architecture');
  const [articleReadTime, setArticleReadTime] = useState('8 min read');
  const [articleTags, setArticleTags] = useState('Kafka, Rust, LLM, High-Throughput, Yottabyte');
  const [markdownContent, setMarkdownContent] = useState(`## High-Throughput Event Sourcing for Autonomous Agents

When transitioning multi-agent reasoning graphs from Python sandbox prototypes into enterprise production clusters, latency degradation frequently bottlenecks client systems at the serialization boundary.

At **YottabyteWorks**, our engineering methodology decouples synchronous RPC triggers by implementing an asynchronous event-driven bus powered by Apache Kafka paired with high-performance Rust consumer actors:

\`\`\`rust
// High-performance consumer actor loop
async fn process_agent_envelope(payload: IngestEnvelope) -> Result<AgentDispatch, Error> {
    let verified_claims = security::verify_jwt(&payload.token)?;
    let embeddings = vector_engine::embed_batch(&payload.raw_chunks).await?;
    telemetry::emit_metric("agent.inference.latency_ms", 18.4);
    Ok(AgentDispatch::RouteToWorker(embeddings))
}
\`\`\`

### Zero Data Loss Architectural Guarantees
- Idempotent event deduplication keys
- Strict partition key hashes matching agent conversation IDs
- Automatic dead-letter fallback queues with Slack escalation hooks`);

  // Selected lead modal state
  const [selectedLead, setSelectedLead] = useState(null);

  // CRM Leads List
  const [leads, setLeads] = useState([
    {
      id: 1,
      client: 'Amina Zaidi',
      company: 'Qatar Logistics Corp',
      email: 'azaidi@qatar-logistics.qa',
      phone: '+974 4412 3456',
      vector: 'Vector 03 // Stealth Ingestion',
      timeline: 'Sprint (<2 Wk)',
      slaCountdown: '14m remaining',
      status: 'Contract Prep',
      statusColor: 'bg-secondary-fixed text-on-secondary-fixed',
      throughput: '25M records/day',
      constraints: 'Need JA4 bypass across dynamic GCC customs portal. Strict SLA under 15m.',
      date: '12m ago',
    },
    {
      id: 2,
      client: 'Klaus Reinhardt',
      company: 'NeoBank Tier-1 Core',
      email: 'k.reinhardt@fintech-frankfurt.de',
      phone: '+49 69 9876 543',
      vector: 'Vector 01 // Multi-Agent RAG',
      timeline: 'Q2 Modernization',
      slaCountdown: '04m remaining',
      status: 'Architecture Audit',
      statusColor: 'bg-primary-fixed text-on-primary-fixed-variant',
      throughput: '100k queries/day',
      constraints: 'Air-gapped on-premise BaFin compliance. Zero public cloud egress.',
      date: '28m ago',
    },
    {
      id: 3,
      client: 'Eleanor Vance',
      company: 'Global Retail Omni Ltd',
      email: 'e.vance@omnistore-uk.co.uk',
      phone: '+44 20 7946 0192',
      vector: 'Vector 08 // AEO & Programmatic',
      timeline: 'Immediate Sprint',
      slaCountdown: 'Completed',
      status: 'Active NDA',
      statusColor: 'bg-surface-container-high text-on-surface',
      throughput: '5M SKU catalog',
      constraints: 'Programmatic Next.js static engine with 25k semantic landing pages.',
      date: '1h 14m ago',
    },
    {
      id: 4,
      client: 'Dr. Marcus Thorne',
      company: 'HealthTech Synthetic Lake',
      email: 'thorne@biogen-lakehouse.org',
      phone: '+1 617 555 0184',
      vector: 'Vector 02 // PySpark Lakehouse',
      timeline: 'Multi-Quarter',
      slaCountdown: 'Completed',
      status: 'Technical Scoping',
      statusColor: 'bg-tertiary-fixed text-on-tertiary-fixed',
      throughput: '10TB initial load',
      constraints: 'HIPAA compliant de-identification pipeline with Apache Iceberg delta sinks.',
      date: '2h 05m ago',
    },
  ]);

  // Session TTL ticker
  useEffect(() => {
    const timer = setInterval(() => {
      setSessionSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatSessionTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}h ${mins.toString().padStart(2, '0')}m ${secs.toString().padStart(2, '0')}s`;
  };

  const handleExportTelemetry = () => {
    const data = {
      exportTime: new Date().toISOString(),
      cluster: 'US-EAST-1',
      kpis: {
        totalLeads: 142,
        pipelineValue: '$485,000 ARR',
        avgResponseSLA: '14m',
        conversionRate: '34%',
        pipelineHealth: '99.98%',
      },
      activeLeads: leads,
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `yw-telemetry-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
    if (onShowToast) {
      onShowToast({
        title: 'Telemetry Exported',
        message: 'JSON dossier generated and downloaded successfully.',
        type: 'success',
      });
    }
  };

  const handleSaveDraft = () => {
    localStorage.setItem('yw_article_draft', JSON.stringify({
      title: articleTitle,
      slug: articleSlug,
      category: articleCategory,
      readTime: articleReadTime,
      tags: articleTags,
      content: markdownContent,
    }));
    if (onShowToast) {
      onShowToast({
        title: 'Draft Persisted',
        message: 'Saved to Edge Browser Storage.',
        type: 'success',
      });
    }
  };

  const handlePublish = () => {
    if (onShowToast) {
      onShowToast({
        title: 'Published to Production',
        message: `Article "${articleTitle}" scheduled for public edge CDN distribution.`,
        type: 'success',
      });
    }
  };

  const appendMarkdown = (prefix, suffix) => {
    setMarkdownContent((prev) => `${prev}\n${prefix}Sample Text${suffix}`);
  };

  const filteredLeads = leads.filter(
    (l) =>
      l.client.toLowerCase().includes(searchLeadQuery.toLowerCase()) ||
      l.company.toLowerCase().includes(searchLeadQuery.toLowerCase()) ||
      l.vector.toLowerCase().includes(searchLeadQuery.toLowerCase()) ||
      l.status.toLowerCase().includes(searchLeadQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background flex text-on-surface">
      {/* Dedicated Admin Sidebar */}
      <aside className="w-72 bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col pt-space-lg pb-space-lg border-r border-surface-container fixed top-0 left-0 bottom-0">
        {/* Brand Header */}
        <div 
          onClick={() => navigate('home')}
          className="px-6 mb-space-lg flex items-center gap-space-md cursor-pointer group"
        >
          <Logo size="md" />
          <div>
            <div className="font-headline-sm text-headline-sm text-on-surface leading-tight font-bold">
              YottabyteWorks
            </div>
            <div className="font-label-sm text-label-sm text-primary font-semibold">
              Admin Intelligence Suite
            </div>
          </div>
        </div>

        <div className="px-6 mb-space-md">
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
            Operational Units
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 flex flex-col gap-1">
          <button
            onClick={() => { setActiveUnit('overview'); setActiveTab('inquiries'); }}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left font-medium ${
              activeUnit === 'overview'
                ? 'bg-primary text-on-primary font-title-md shadow-sm'
                : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
            }`}
          >
            <span className="material-symbols-outlined">dashboard</span>
            Enterprise Overview
          </button>

          <button
            onClick={() => { setActiveUnit('engagements'); setActiveTab('inquiries'); }}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left font-medium ${
              activeUnit === 'engagements'
                ? 'bg-primary text-on-primary font-title-md shadow-sm'
                : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
            }`}
          >
            <span className="material-symbols-outlined">handshake</span>
            Active Engagements
          </button>

          <button
            onClick={() => { setActiveUnit('editor'); setActiveTab('editor'); }}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left font-medium ${
              activeUnit === 'editor'
                ? 'bg-primary text-on-primary font-title-md shadow-sm'
                : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
            }`}
          >
            <span className="material-symbols-outlined">edit_document</span>
            Content Engine
          </button>

          <button
            onClick={() => { setActiveUnit('telemetry'); setActiveTab('telemetry'); }}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left font-medium ${
              activeUnit === 'telemetry'
                ? 'bg-primary text-on-primary font-title-md shadow-sm'
                : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
            }`}
          >
            <span className="material-symbols-outlined">speed</span>
            SLA &amp; Response Telemetry
          </button>

          <button
            onClick={() => { setActiveUnit('security'); }}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left font-medium ${
              activeUnit === 'security'
                ? 'bg-primary text-on-primary font-title-md shadow-sm'
                : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
            }`}
          >
            <span className="material-symbols-outlined">verified_user</span>
            Security &amp; NDA Vault
          </button>
        </nav>

        {/* Security badge at bottom */}
        <div className="px-6 pt-space-md">
          <div className="p-4 rounded-xl bg-surface-container-low flex items-center gap-3 border border-surface-container">
            <span className="material-symbols-outlined text-primary text-xl">shield</span>
            <div>
              <div className="font-label-md text-label-md text-on-surface font-semibold">SOC-2 Active</div>
              <div className="font-body-sm text-body-sm text-on-surface-variant text-xs">Zero Trust Tunnel</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="pl-72 w-full flex flex-col min-h-screen">
        {/* Top Header */}
        <header className="fixed top-0 left-72 right-0 h-20 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-8 border-b border-surface-container">
          <div className="flex items-center gap-space-md">
            <button
              onClick={() => navigate('home')}
              className="inline-flex items-center gap-1.5 font-label-md text-label-md text-primary hover:text-on-surface transition-colors font-semibold"
            >
              <span className="material-symbols-outlined text-base">arrow_back</span>
              Back to Public Site
            </button>
            <span className="px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-mono border border-surface-container-high">
              Production Cluster: US-EAST-1
            </span>
          </div>

          <div className="flex items-center gap-space-md">
            <div className="flex items-center gap-space-xs px-3 py-1.5 rounded-full bg-surface-container-low border border-surface-container">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold">
                Duty Architect: Online
              </span>
            </div>

            {/* Notification button */}
            <div className="relative">
              <button
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className="flex items-center justify-center w-9 h-9 rounded-full bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors relative"
              >
                <span className="material-symbols-outlined text-lg">notifications</span>
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-error"></span>
              </button>

              {notificationsOpen && (
                <div className="absolute right-0 mt-3 w-80 bg-surface-container-lowest rounded-2xl p-4 shadow-2xl border border-surface-container z-50 animate-scale-in">
                  <div className="flex items-center justify-between pb-2 border-b border-surface-container">
                    <span className="font-title-md text-title-md font-bold">System Alerts</span>
                    <span className="font-code-sm text-xs text-primary font-mono">2 NEW</span>
                  </div>
                  <div className="flex flex-col gap-2.5 pt-3">
                    <div className="p-2.5 rounded-lg bg-surface-container-low flex items-start gap-2">
                      <span className="material-symbols-outlined text-emerald-600 text-lg mt-0.5">chat</span>
                      <div className="flex flex-col">
                        <span className="font-label-md text-xs font-semibold">Direct WA Lead Received</span>
                        <span className="font-body-sm text-[11px] text-on-surface-variant">Amina Zaidi (Qatar Logistics)</span>
                      </div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-surface-container-low flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary text-lg mt-0.5">speed</span>
                      <div className="flex flex-col">
                        <span className="font-label-md text-xs font-semibold">Mesh Re-indexing Complete</span>
                        <span className="font-body-sm text-[11px] text-on-surface-variant">2.4M Residential IPs verified</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <img
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover border border-outline-variant"
              src="https://lh3.googleusercontent.com/aida/AEtjO1UAoAovvfQI-X_ahM5KFAFF5_BbLORgAc_Lt5MBbJHTWxgj5-ZQPawpv3_qY0oLDjBtMN-2ZC3GjekD2F3Bw6VDLps5BkehJAQet5cOgUkwnbm86sab1bwWm4EtCsRRZ-D6Oa1-2qDAzTZ1HGEvfsr_yHkJAyYT_EsgIt7deMhA-9NEm3qwZplK601oLrWc1_n_dOejVVwLisQKNr-JO3YaQfMn87t0PniKk6qI0tu2rAHxekpG1eUeEaiea1KIBMD7_PRmkUUc"
            />
          </div>
        </header>

        {/* Main View Port */}
        <main className="relative pt-24 px-8 pb-16 flex-1">
          {/* Top Session Meta Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 py-6 border-b border-surface-container">
            <div>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-2.5 h-2.5 rounded-full bg-primary animate-ping"></span>
                <h1 className="font-headline-md text-headline-md text-on-surface tracking-tight font-bold">
                  YW Engineering Console Node{' '}
                  <span className="font-code-sm text-code-sm text-primary bg-primary-fixed/40 px-2.5 py-0.5 rounded-md ml-1 font-mono font-medium">
                    v2.4.0
                  </span>
                </h1>
              </div>
              <div className="flex flex-wrap items-center gap-3 mt-1.5 font-code-sm text-code-sm text-on-surface-variant font-mono">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm text-secondary">verified_user</span> Authenticated:{' '}
                  <strong className="text-on-surface font-medium">lead@yottabyteWorks.com</strong>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5 text-primary">
                  <span className="material-symbols-outlined text-sm">lock</span> AES-256 GCM Active
                </span>
                <span>•</span>
                <span className="text-outline">Session TTL: {formatSessionTime(sessionSeconds)}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleExportTelemetry}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-container-lowest text-on-surface shadow-sm hover:bg-surface-container hover:shadow transition-all font-label-md text-label-md border border-surface-container font-semibold"
              >
                <span className="material-symbols-outlined text-lg text-primary">download</span>
                Export Telemetry
              </button>
              <button
                onClick={() => {
                  if (confirm('Revoke current executive session and return to public site?')) {
                    navigate('home');
                  }
                }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-error/10 text-error hover:bg-error hover:text-on-error transition-all font-label-md text-label-md font-semibold"
              >
                <span className="material-symbols-outlined text-lg">logout</span>
                Revoke Session
              </button>
            </div>
          </div>

          {/* KPI Metric Cards Grid */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 my-6">
            {/* Card 1 */}
            <div className="relative overflow-hidden p-6 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow group border border-surface-container">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary"></div>
              <div className="flex items-center justify-between text-on-surface-variant mb-3">
                <span className="font-label-md text-label-md uppercase tracking-wider text-outline font-semibold">
                  Total Leads
                </span>
                <span className="p-2 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-xl">group_add</span>
                </span>
              </div>
              <div className="flex items-baseline gap-2.5">
                <span className="font-display text-headline-lg text-on-surface font-extrabold tracking-tight">142</span>
                <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-label-sm font-semibold">
                  <span className="material-symbols-outlined text-xs">trending_up</span> +18% m/m
                </span>
              </div>
              <div className="mt-4 flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
                <span>Active Pipeline Value</span>
                <span className="font-code-sm text-code-sm font-semibold text-on-surface font-mono">$485,000 ARR</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative overflow-hidden p-6 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow group border border-surface-container">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-primary-container"></div>
              <div className="flex items-center justify-between text-on-surface-variant mb-3">
                <span className="font-label-md text-label-md uppercase tracking-wider text-outline font-semibold">
                  Avg Response SLA
                </span>
                <span className="p-2 rounded-lg bg-secondary/10 text-secondary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-xl">speed</span>
                </span>
              </div>
              <div className="flex items-baseline gap-2.5">
                <span className="font-display text-headline-lg text-on-surface font-extrabold tracking-tight">14m</span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm font-semibold">
                  Target: &lt;60m
                </span>
              </div>
              <div className="mt-4 flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
                <span>Fastest Dispatch</span>
                <span className="font-code-sm text-code-sm font-semibold text-primary font-mono">1m 42s (WhatsApp)</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative overflow-hidden p-6 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow group border border-surface-container">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-container to-tertiary"></div>
              <div className="flex items-center justify-between text-on-surface-variant mb-3">
                <span className="font-label-md text-label-md uppercase tracking-wider text-outline font-semibold">
                  Conversion Rate
                </span>
                <span className="p-2 rounded-lg bg-tertiary/10 text-tertiary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-xl">conversion_path</span>
                </span>
              </div>
              <div className="flex items-baseline gap-2.5">
                <span className="font-display text-headline-lg text-on-surface font-extrabold tracking-tight">34%</span>
                <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-semibold">
                  Direct WA leads
                </span>
              </div>
              <div className="mt-4 flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
                <span>High-Intent Leads</span>
                <span className="font-code-sm text-code-sm font-semibold text-on-surface font-mono">48 qualified</span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="relative overflow-hidden p-6 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow group border border-surface-container">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-surface-tint"></div>
              <div className="flex items-center justify-between text-on-surface-variant mb-3">
                <span className="font-label-md text-label-md uppercase tracking-wider text-outline font-semibold">
                  Pipeline Health
                </span>
                <span className="p-2 rounded-lg bg-primary-fixed text-primary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-xl">health_and_safety</span>
                </span>
              </div>
              <div className="flex items-baseline gap-2.5">
                <span className="font-display text-headline-lg text-on-surface font-extrabold tracking-tight">99.98%</span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-semibold">
                  Nominal
                </span>
              </div>
              <div className="mt-4 flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
                <span>Kafka Broker Latency</span>
                <span className="font-code-sm text-code-sm font-semibold text-primary font-mono">2.4ms avg</span>
              </div>
            </div>
          </section>

          {/* Interactive View Switcher Tabs */}
          <div className="flex items-center justify-between border-b border-surface-container mb-6">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('inquiries')}
                className={`relative px-5 py-3 font-title-md text-title-md flex items-center gap-2.5 transition-colors ${
                  activeTab === 'inquiries' ? 'font-semibold text-primary' : 'font-medium text-on-surface-variant hover:text-on-surface'
                }`}
              >
                <span className="material-symbols-outlined text-lg">inbox_customize</span>
                Inbound Inquiries &amp; Leads
                <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary font-code-sm text-xs font-bold font-mono">
                  {leads.length}
                </span>
                {activeTab === 'inquiries' && (
                  <span className="tab-indicator absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-t-full"></span>
                )}
              </button>

              <button
                onClick={() => setActiveTab('editor')}
                className={`relative px-5 py-3 font-title-md text-title-md flex items-center gap-2.5 transition-colors ${
                  activeTab === 'editor' ? 'font-semibold text-primary' : 'font-medium text-on-surface-variant hover:text-on-surface'
                }`}
              >
                <span className="material-symbols-outlined text-lg">edit_document</span>
                Article Markdown Editor
                {activeTab === 'editor' && (
                  <span className="tab-indicator absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-t-full"></span>
                )}
              </button>

              <button
                onClick={() => setActiveTab('telemetry')}
                className={`relative px-5 py-3 font-title-md text-title-md flex items-center gap-2.5 transition-colors ${
                  activeTab === 'telemetry' ? 'font-semibold text-primary' : 'font-medium text-on-surface-variant hover:text-on-surface'
                }`}
              >
                <span className="material-symbols-outlined text-lg">monitoring</span>
                Pipeline Telemetry
                {activeTab === 'telemetry' && (
                  <span className="tab-indicator absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-t-full"></span>
                )}
              </button>
            </div>

            {/* Quick Filter Control */}
            {activeTab === 'inquiries' && (
              <div className="hidden sm:flex items-center gap-2">
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-2.5 text-lg text-outline">search</span>
                  <input
                    type="text"
                    value={searchLeadQuery}
                    onChange={(e) => setSearchLeadQuery(e.target.value)}
                    placeholder="Filter scope, client..."
                    className="pl-9 pr-4 py-1.5 rounded-lg bg-surface-container-lowest font-body-sm text-body-sm text-on-surface placeholder-outline focus:outline-none focus:ring-2 focus:ring-primary/40 shadow-sm w-56 border border-surface-container"
                  />
                </div>
              </div>
            )}
          </div>

          {/* TAB 1: Inbound Lead Inquiries CRM */}
          {activeTab === 'inquiries' && (
            <section className="flex flex-col gap-6 animate-fade-in">
              <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden border border-surface-container">
                {/* Data Table Header Toolbar */}
                <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-surface-container-lowest border-b border-surface-container">
                  <div className="flex items-center gap-3">
                    <span className="font-title-md text-title-md font-bold text-on-surface">Client Leads Queue</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-surface-container font-code-sm text-xs text-on-surface-variant font-mono">
                      SYNC: 30s
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        const newLead = {
                          id: Date.now(),
                          client: 'Enterprise Scoping Lead',
                          company: 'Fintech Corp',
                          email: 'cto@fintechcorp.io',
                          phone: '+1 415 555 9000',
                          vector: 'Vector 05 // High QPS Backend',
                          timeline: 'Immediate (<2 Wk)',
                          slaCountdown: '12m remaining',
                          status: 'New Intake',
                          statusColor: 'bg-emerald-100 text-emerald-800',
                          throughput: '50M req/day',
                          constraints: 'Sub-20ms P99 API latency across AWS US-EAST-1 cluster.',
                          date: 'Just now',
                        };
                        setLeads([newLead, ...leads]);
                        if (onShowToast) {
                          onShowToast({
                            title: 'Simulated Lead Ingested',
                            message: 'New intake record added to CRM queue.',
                            type: 'success',
                          });
                        }
                      }}
                      className="px-3.5 py-1.5 rounded-lg bg-primary text-on-primary font-label-sm text-xs font-semibold hover:bg-primary-container transition-colors flex items-center gap-1.5"
                    >
                      <span className="material-symbols-outlined text-sm">add</span>
                      Add Mock Intake
                    </button>
                  </div>
                </div>

                {/* Table Content */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left font-body-sm text-body-sm">
                    <thead className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider border-b border-surface-container">
                      <tr>
                        <th className="py-3 px-6">Client / Entity</th>
                        <th className="py-3 px-4">Architecture Vector</th>
                        <th className="py-3 px-4">Timeline / Urgency</th>
                        <th className="py-3 px-4">SLA Elapsed</th>
                        <th className="py-3 px-4">Pipeline Status</th>
                        <th className="py-3 px-6 text-right">Quick Dispatch</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-surface-container">
                      {filteredLeads.map((lead) => (
                        <tr key={lead.id} className="hover:bg-surface-container-low/50 transition-colors">
                          <td className="py-4 px-6">
                            <div className="flex flex-col">
                              <span className="font-title-md text-title-md font-bold text-on-surface">
                                {lead.client}
                              </span>
                              <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                                {lead.company}
                              </span>
                              <span className="font-code-sm text-xs text-outline font-mono mt-0.5">
                                {lead.email}
                              </span>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <span className="font-body-sm text-body-sm text-on-surface font-semibold">
                              {lead.vector}
                            </span>
                            <span className="block font-code-sm text-xs text-on-surface-variant font-mono">
                              Scale: {lead.throughput}
                            </span>
                          </td>
                          <td className="py-4 px-4 font-medium text-on-surface">
                            {lead.timeline}
                          </td>
                          <td className="py-4 px-4 font-code-sm text-xs font-mono text-primary font-semibold">
                            {lead.slaCountdown}
                          </td>
                          <td className="py-4 px-4">
                            <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full font-label-sm text-xs font-semibold ${lead.statusColor}`}>
                              {lead.status}
                            </span>
                          </td>
                          <td className="py-4 px-6 text-right">
                            <div className="flex items-center justify-end gap-1.5">
                              <a
                                href={`https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-colors font-label-sm text-xs font-semibold shadow-xs"
                              >
                                <span className="material-symbols-outlined text-sm">chat</span> WhatsApp
                              </a>
                              <a
                                href={`mailto:${lead.email}`}
                                className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors font-label-sm text-xs border border-surface-container"
                              >
                                <span className="material-symbols-outlined text-sm">mail</span>
                              </a>
                              <button
                                onClick={() => setSelectedLead(lead)}
                                className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors font-label-sm text-xs border border-surface-container"
                                title="View Dossier Constraints"
                              >
                                <span className="material-symbols-outlined text-sm">description</span>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Table Footer Pagination */}
                <div className="p-4 bg-surface-container-lowest border-t border-surface-container flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
                  <div className="flex items-center gap-2">
                    <span>
                      Showing <strong className="text-on-surface">1 - {filteredLeads.length}</strong> of{' '}
                      <strong className="text-on-surface">{filteredLeads.length}</strong> inquiries
                    </span>
                    <span className="text-outline">|</span>
                    <span className="font-code-sm text-xs font-mono">Sync Frequency: 30s Poll</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <button className="px-3 py-1 rounded bg-surface-container text-on-surface-variant cursor-not-allowed font-label-sm text-label-sm">
                      Prev
                    </button>
                    <button className="px-3 py-1 rounded bg-primary text-on-primary font-label-sm text-label-sm font-semibold">
                      1
                    </button>
                    <button className="px-3 py-1 rounded bg-surface-container text-on-surface hover:bg-surface-container-high font-label-sm text-label-sm">
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* TAB 2: Live Article Markdown Editor */}
          {activeTab === 'editor' && (
            <section className="flex flex-col gap-6 animate-fade-in">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    YottabyteWorks Technical Content Engine
                  </h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Live dual-pane engineering blog composer with instantaneous AST parsing &amp; frontmatter extraction.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-code-sm text-xs text-outline flex items-center gap-1.5 font-mono">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Autosaved to Edge Storage
                  </span>
                  <button
                    onClick={handleSaveDraft}
                    className="px-4 py-2 rounded-xl bg-surface-container text-on-surface hover:bg-surface-container-high font-label-md text-label-md transition-colors font-medium border border-surface-container"
                  >
                    Save Draft
                  </button>
                  <button
                    onClick={handlePublish}
                    className="px-5 py-2 rounded-xl bg-primary text-on-primary hover:bg-primary-container font-label-md text-label-md shadow-sm transition-all flex items-center gap-2 font-semibold"
                  >
                    <span className="material-symbols-outlined text-lg">publish</span> Publish to Production
                  </button>
                </div>
              </div>

              {/* 2-Column Split Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Left Column: Editor Controls */}
                <div className="lg:col-span-6 flex flex-col gap-5 bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-surface-container">
                  {/* Article Headline */}
                  <div className="flex flex-col gap-2">
                    <label className="font-label-md text-label-md font-semibold text-on-surface">Article Headline (H1)</label>
                    <input
                      type="text"
                      value={articleTitle}
                      onChange={(e) => setArticleTitle(e.target.value)}
                      className="px-4 py-2.5 rounded-lg bg-surface font-title-md text-title-md font-semibold text-on-surface placeholder-outline focus:outline-none focus:ring-2 focus:ring-primary shadow-inner border border-surface-container"
                    />
                  </div>

                  {/* Metadata Row */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-sm text-label-sm text-on-surface-variant font-semibold">Canonical Slug</label>
                      <div className="flex items-center px-3 py-2 rounded-lg bg-surface font-code-sm text-xs text-on-surface border border-surface-container font-mono">
                        <span className="text-outline mr-0.5">/blog/</span>
                        <input
                          type="text"
                          value={articleSlug}
                          onChange={(e) => setArticleSlug(e.target.value)}
                          className="bg-transparent focus:outline-none w-full text-primary font-semibold"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-sm text-label-sm text-on-surface-variant font-semibold">Core Practice Category</label>
                      <select
                        value={articleCategory}
                        onChange={(e) => setArticleCategory(e.target.value)}
                        className="px-3 py-2 rounded-lg bg-surface font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary border border-surface-container"
                      >
                        <option value="AI / ML Architecture">AI / ML Architecture</option>
                        <option value="Data Engineering">Data Engineering</option>
                        <option value="Workflow Automations">Workflow Automations</option>
                        <option value="Web Scraping Engines">Web Scraping Engines</option>
                        <option value="App Development">App Development</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-sm text-label-sm text-on-surface-variant font-semibold">Est. Read Time</label>
                      <input
                        type="text"
                        value={articleReadTime}
                        onChange={(e) => setArticleReadTime(e.target.value)}
                        className="px-3 py-2 rounded-lg bg-surface font-code-sm text-xs text-on-surface focus:outline-none focus:ring-2 focus:ring-primary border border-surface-container font-mono"
                      />
                    </div>
                  </div>

                  {/* Taxonomy Tags */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-sm text-label-sm text-on-surface-variant font-semibold">
                      Taxonomy Tags (Comma separated)
                    </label>
                    <input
                      type="text"
                      value={articleTags}
                      onChange={(e) => setArticleTags(e.target.value)}
                      className="px-3 py-2 rounded-lg bg-surface font-code-sm text-xs text-on-surface focus:outline-none focus:ring-2 focus:ring-primary border border-surface-container font-mono"
                    />
                  </div>

                  {/* Markdown Toolbar */}
                  <div className="flex items-center gap-1.5 p-2 rounded-lg bg-surface-container-low text-on-surface-variant border border-surface-container">
                    <button
                      onClick={() => appendMarkdown('**', '**')}
                      className="p-1.5 rounded hover:bg-surface-container hover:text-on-surface"
                      title="Bold"
                    >
                      <span className="material-symbols-outlined text-base">format_bold</span>
                    </button>
                    <button
                      onClick={() => appendMarkdown('*', '*')}
                      className="p-1.5 rounded hover:bg-surface-container hover:text-on-surface"
                      title="Italic"
                    >
                      <span className="material-symbols-outlined text-base">format_italic</span>
                    </button>
                    <span className="w-px h-4 bg-surface-variant mx-1"></span>
                    <button
                      onClick={() => appendMarkdown('## ', '')}
                      className="p-1.5 rounded hover:bg-surface-container hover:text-on-surface"
                      title="Heading 2"
                    >
                      <span className="material-symbols-outlined text-base">title</span>
                    </button>
                    <button
                      onClick={() => appendMarkdown('```rust\n', '\n```')}
                      className="p-1.5 rounded hover:bg-surface-container hover:text-on-surface"
                      title="Code Block"
                    >
                      <span className="material-symbols-outlined text-base">code</span>
                    </button>
                    <button
                      onClick={() => appendMarkdown('> ', '')}
                      className="p-1.5 rounded hover:bg-surface-container hover:text-on-surface"
                      title="Quote"
                    >
                      <span className="material-symbols-outlined text-base">format_quote</span>
                    </button>
                    <button
                      onClick={() => appendMarkdown('- ', '')}
                      className="p-1.5 rounded hover:bg-surface-container hover:text-on-surface"
                      title="Bullet List"
                    >
                      <span className="material-symbols-outlined text-base">format_list_bulleted</span>
                    </button>
                    <span className="w-px h-4 bg-surface-variant mx-1"></span>
                    <button
                      onClick={() => appendMarkdown('![Diagram](https://...)', '')}
                      className="p-1.5 rounded hover:bg-surface-container hover:text-on-surface"
                      title="Image"
                    >
                      <span className="material-symbols-outlined text-base">image</span>
                    </button>
                    <button
                      onClick={() => appendMarkdown('[Link Text](', ')') }
                      className="p-1.5 rounded hover:bg-surface-container hover:text-on-surface"
                      title="Link"
                    >
                      <span className="material-symbols-outlined text-base">link</span>
                    </button>
                    <span className="ml-auto font-code-sm text-xs text-outline font-mono">
                      {markdownContent.length} chars
                    </span>
                  </div>

                  {/* Textarea */}
                  <textarea
                    rows={16}
                    value={markdownContent}
                    onChange={(e) => setMarkdownContent(e.target.value)}
                    className="w-full p-4 rounded-xl bg-surface font-code-sm text-code-sm text-on-surface leading-relaxed focus:outline-none focus:ring-2 focus:ring-primary shadow-inner resize-y font-mono border border-surface-container"
                  />
                </div>

                {/* Right Column: Live Rendered Preview */}
                <div className="lg:col-span-6 bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-surface-container flex flex-col gap-4">
                  <div className="flex items-center justify-between pb-3 border-b border-surface-container">
                    <span className="font-label-sm text-label-sm uppercase font-bold text-primary tracking-wider">
                      Live Production Preview
                    </span>
                    <span className="font-code-sm text-xs text-outline font-mono">
                      /blog/{articleSlug}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 items-center">
                    <span className="px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm font-semibold">
                      {articleCategory}
                    </span>
                    <span className="text-on-surface-variant font-label-sm text-label-sm">•</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">{articleReadTime}</span>
                  </div>

                  <h1 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight">
                    {articleTitle}
                  </h1>

                  <div className="flex flex-wrap gap-1.5 pb-2">
                    {articleTags.split(',').map((tag, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-surface-container font-code-sm text-xs text-on-surface-variant font-mono">
                        #{tag.trim()}
                      </span>
                    ))}
                  </div>

                  <div className="p-4 rounded-xl bg-surface-container-low font-body-md text-on-surface whitespace-pre-wrap leading-relaxed border border-surface-container font-sans">
                    {markdownContent}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* TAB 3: Telemetry & System Health */}
          {activeTab === 'telemetry' && (
            <section className="flex flex-col gap-6 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-xl bg-surface-container-lowest border border-surface-container shadow-sm flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm uppercase font-semibold text-outline">
                      Kafka Broker Mesh
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  </div>
                  <span className="font-display text-headline-lg font-extrabold text-on-surface font-mono">
                    2.4ms P99
                  </span>
                  <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                    <div className="bg-primary h-full w-[18%]"></div>
                  </div>
                  <span className="font-body-sm text-xs text-on-surface-variant">
                    6 Nodes Synced across US-EAST-1A / 1B / 1C
                  </span>
                </div>

                <div className="p-6 rounded-xl bg-surface-container-lowest border border-surface-container shadow-sm flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm uppercase font-semibold text-outline">
                      Active Ingestion Flux
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
                  </div>
                  <span className="font-display text-headline-lg font-extrabold text-on-surface font-mono">
                    14,280 docs/s
                  </span>
                  <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                    <div className="bg-secondary h-full w-[82%]"></div>
                  </div>
                  <span className="font-body-sm text-xs text-on-surface-variant">
                    Playwright Headless Swarm: 24 Workers
                  </span>
                </div>

                <div className="p-6 rounded-xl bg-surface-container-lowest border border-surface-container shadow-sm flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm uppercase font-semibold text-outline">
                      Proxy Pool Allocation
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  </div>
                  <span className="font-display text-headline-lg font-extrabold text-on-surface font-mono">
                    2,410,290 IPs
                  </span>
                  <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                    <div className="bg-tertiary h-full w-[99%]"></div>
                  </div>
                  <span className="font-body-sm text-xs text-on-surface-variant">
                    JA4 Fingerprint Evasion Health: 99.87%
                  </span>
                </div>
              </div>

              {/* Simulated Live Cluster Logs Stream */}
              <div className="bg-inverse-surface text-inverse-on-surface rounded-xl p-6 shadow-xl border border-surface-container flex flex-col gap-3 font-mono text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-surface-container-high/20">
                  <span className="text-surface-bright font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-primary-fixed">terminal</span>
                    LIVE SYSTEM LOGS STREAM (US-EAST-1 CLUSTER)
                  </span>
                  <span className="text-emerald-400 flex items-center gap-1.5 font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span> STREAM ACTIVE
                  </span>
                </div>
                <div className="flex flex-col gap-1.5 text-surface-container-high/80 overflow-y-auto max-h-60 leading-relaxed">
                  <div className="text-emerald-400">[2026-10-11T04:12:01Z] [DISPATCH_OK] Qatar Logistics custom crawler completed batch 4,200 records in 1.2s.</div>
                  <div className="text-surface-bright">[2026-10-11T04:12:08Z] [KAFKA_BROKER] Topic 'raw-feed-ingest-v3' partition 04 offset committed at 18,409,210.</div>
                  <div className="text-primary-fixed-dim">[2026-10-11T04:12:14Z] [AGENT_ORCH] LangGraph state node 'cosine_similarity_eval' passed ground truth F1=0.994.</div>
                  <div className="text-secondary-fixed">[2026-10-11T04:12:22Z] [TLS_MESH] JA4 fingerprint rotation successful: randomized extension permutation applied.</div>
                  <div className="text-surface-bright">[2026-10-11T04:12:35Z] [HEALTH_CHECK] 24/24 pod replicas healthy across AWS ECS Fargate cluster. P99 latency: 18ms.</div>
                </div>
              </div>
            </section>
          )}

          {/* Dossier Detail Modal */}
          {selectedLead && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <div 
                onClick={() => setSelectedLead(null)}
                className="absolute inset-0 bg-on-surface/40 backdrop-blur-sm"
              />
              <div className="relative bg-surface-container-lowest rounded-2xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-surface-container z-10 animate-scale-in">
                <div className="flex items-center justify-between pb-4 border-b border-surface-container">
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-primary uppercase font-bold">Lead Technical Dossier</span>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">{selectedLead.client}</h3>
                  </div>
                  <button 
                    onClick={() => setSelectedLead(null)}
                    className="p-1 rounded-lg hover:bg-surface-container text-on-surface-variant"
                  >
                    <span className="material-symbols-outlined">close</span>
                  </button>
                </div>
                <div className="py-4 flex flex-col gap-3 text-body-sm">
                  <div className="flex justify-between py-1 border-b border-surface-container">
                    <span className="text-on-surface-variant">Entity / Organization</span>
                    <span className="font-semibold text-on-surface">{selectedLead.company}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-surface-container">
                    <span className="text-on-surface-variant">Direct Email</span>
                    <span className="font-mono text-primary font-medium">{selectedLead.email}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-surface-container">
                    <span className="text-on-surface-variant">Target Architecture Vector</span>
                    <span className="font-semibold text-on-surface">{selectedLead.vector}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-surface-container">
                    <span className="text-on-surface-variant">Throughput Ceiling</span>
                    <span className="font-semibold text-on-surface">{selectedLead.throughput}</span>
                  </div>
                  <div className="flex flex-col gap-1 py-1">
                    <span className="text-on-surface-variant font-semibold">Technical Constraints:</span>
                    <p className="p-3 rounded-lg bg-surface-container-low text-on-surface text-xs leading-relaxed border border-surface-container">
                      {selectedLead.constraints}
                    </p>
                  </div>
                </div>
                <div className="pt-3 border-t border-surface-container flex items-center justify-end gap-3">
                  <a
                    href={`https://wa.me/${selectedLead.phone.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-emerald-600 text-white font-label-md font-semibold flex items-center gap-1.5"
                  >
                    <span className="material-symbols-outlined text-sm">chat</span> WhatsApp Lead
                  </a>
                  <button
                    onClick={() => setSelectedLead(null)}
                    className="px-4 py-2 rounded-xl bg-primary text-on-primary font-label-md font-semibold"
                  >
                    Close Dossier
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
