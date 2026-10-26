import React, { useState } from 'react';

export default function TechnicalInsightsPage({ onShowToast }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [copiedSnippet, setCopiedSnippet] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [activeArticleModal, setActiveArticleModal] = useState(null);

  const pythonSnippet = `import tls_client
from dataclasses import dataclass

@dataclass
class MeshFingerprint:
    ja3: str = "771,4865-4866-4867,0-23-65281,29-23,0"
    pseudo_h2: bool = True
    ciphers: list = ("GREASE", "ECDHE-ECDSA-AES128-GCM-SHA256")

class ResilientHarvester:
    def __init__(self, isp_mesh_gateway: str):
        self.session = tls_client.Session(
            client_identifier="chrome_120",
            ja3_string=MeshFingerprint.ja3,
            random_tls_extension_order=True
        )
        self.gateway = isp_mesh_gateway

    async def dispatch_stealth(self, target_url: str):
        # Emulate legitimate TLS extension negotiation
        headers = {
            "sec-ch-ua": '"Chromium";v="120", "Google Chrome";v="120"',
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-site": "same-origin",
        }
        res = self.session.get(target_url, headers=headers)
        assert res.status_code == 200, "WAF Trap Detected"
        return res.json()`;

  const articles = [
    {
      id: 'teardown-09',
      number: 'TEARDOWN #09',
      tag: 'DATA ENGINEERING & SCRAPING',
      date: 'Updated Dec 14, 2024',
      title: 'High-Scale Scraping Architecture Without IP Bans: The Zero-Detection Playbook',
      excerpt: 'Bypassing Cloudflare Turnstile, TLS fingerprinting, and JA3/JA4 canvas traps via distributed headless clusters, synthetic TCP stack negotiation, and residential ISP node meshes. We examine real-world telemetry across 45M monthly requests.',
      author: 'Yottabyte Resilience Lab',
      readTime: '8 min read',
      category: 'scraping',
      isFeatured: true,
      fullBody: `When operating web extraction infrastructure across tens of millions of daily queries, default headless instances fail at the initial handshake. Modern anti-bot solutions inspect TLS ClientHello extension ordering, TCP window sizing, and canvas hash entropy.
      
By implementing custom transport-layer hooks via Go/Rust and synchronizing HTTP/2 SETTINGS frames with standard Chrome 120 builds, we achieve 99.87% first-attempt bypass reliability across leading enterprise WAFs.`,
    },
    {
      id: 'teardown-08',
      number: 'TEARDOWN #08',
      tag: 'AI & AGENTS',
      title: 'Deploying Local LLMs & Agentic Workflows for Enterprise Workflows (Ollama + LangGraph)',
      excerpt: 'How we built zero-data-leakage autonomous document audit agents on private Kubernetes clusters using quantized Llama 3.3 models, semantic caching with Qdrant, and cyclic deterministic LangGraph state machines.',
      author: 'Machine Intelligence Team',
      readTime: '12 min read',
      category: 'ai',
      fullBody: `Enterprises handling confidential legal contracts or proprietary financial records cannot transmit tokens through third-party proprietary APIs.
      
Our deployment blueprint utilizes 4-bit quantized Llama-3.3-70B on private A100 GPU clusters managed by Ollama and vLLM. State checkpointing in LangGraph guarantees that if any step in an autonomous cognitive loop fails validation, the state rollbacks to an immutable checkpoint rather than hallucinating forward.`,
    },
    {
      id: 'teardown-07',
      number: 'TEARDOWN #07',
      tag: 'DATA ENGINEERING',
      title: 'From Zero to Millions of Records: PySpark vs DuckDB in Modern ETL Pipelines',
      excerpt: 'A brutally honest infrastructure benchmark. When does a single 64GB RAM DuckDB node outperform a 5-node distributed Apache Spark cluster on parquet aggregations? (Spoiler: Spark is often overkill).',
      author: 'Core Platform Group',
      readTime: '6 min read',
      category: 'data engineering',
      fullBody: `Distributed compute engines incur non-trivial shuffle serialization overhead across JVM boundaries and worker node networking.
      
On analytical workloads under 100GB in raw parquet format, single-node vectorized DuckDB execution engines complete analytical group-bys 4.2x faster than 5-node PySpark clusters while costing 90% less in cloud compute allocation.`,
    },
    {
      id: 'teardown-06',
      number: 'TEARDOWN #06',
      tag: 'GROWTH & AEO',
      title: 'The AEO/AIO Marketing Playbook: How Generative AI Search Engines Rank Your Brand',
      excerpt: 'Reverse engineering citations on Perplexity, SearchGPT, and Google AI Overviews. Structuring semantic entity graphs, authoritative LLM training corpuses, and entity graph vector anchors.',
      author: 'Growth Intelligence Team',
      readTime: '10 min read',
      category: 'growth',
      fullBody: `Answer engines do not prioritize standard backlink quantity. Instead, neural embeddings perform cosine similarity searches against trusted index entity vectors.
      
By formatting digital public assets with granular JSON-LD entity schemas, authoritative Wikipedia-style citation structures, and RDF ontology graphs, enterprise platforms can achieve guaranteed primary citation status in Perplexity and ChatGPT search digests.`,
    },
    {
      id: 'teardown-05',
      number: 'TEARDOWN #05',
      tag: 'ENTERPRISE AUTOMATION',
      title: 'Self-Hosting n8n on Kubernetes: Automating Mission-Critical Enterprise Workflows',
      excerpt: 'Scale n8n horizontally using Redis Queue concurrency, isolated execution workers, HashiCorp Vault secrets injection, and automated blue-green webhook deploys handling 10k webhooks/min.',
      author: 'Platform Reliability Lab',
      readTime: '7 min read',
      category: 'data engineering',
      fullBody: `SaaS no-code platforms introduce severe vendor lock-in, per-execution billing spikes, and compliance hurdles.
      
Deploying n8n in queue mode with Redis Pub/Sub workers on Kubernetes gives organizations total control over webhook volume, unlimited execution concurrency, and direct database access behind air-gapped security boundaries.`,
    },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(pythonSnippet).then(() => {
      setCopiedSnippet(true);
      if (onShowToast) {
        onShowToast({
          title: 'Code Copied',
          message: 'TLS proxy mesh snippet copied to clipboard.',
          type: 'success',
        });
      }
      setTimeout(() => setCopiedSnippet(false), 2000);
    });
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setNewsletterSubscribed(true);
    if (onShowToast) {
      onShowToast({
        title: 'Dispatch Subscribed',
        message: 'Welcome aboard! Dispatch whitepaper transmitted.',
        type: 'success',
      });
    }
  };

  const filteredArticles = articles.filter((art) => {
    const matchesCategory =
      selectedCategory === 'all' || art.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.tag.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full">
      {/* Editorial Top Canvas */}
      <section className="relative w-full px-4 sm:px-8 py-space-xl bg-gradient-to-b from-surface via-surface-container-low/40 to-surface border-b border-surface-container">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
          {/* Top Meta Breadcrumbs */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-space-sm font-code-sm text-code-sm font-mono">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm tracking-wide font-semibold">
                <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                VOLUME 04 / Q4 2024
              </span>
              <span className="text-on-surface-variant tracking-wider hidden sm:inline">
                ENGINEERING_DISPATCH_PUBLIC_INDEX
              </span>
            </div>
            <div className="flex items-center gap-space-md text-on-surface-variant font-label-sm text-label-sm font-medium">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-base text-primary">verified</span> Peer-Reviewed Teardowns
              </span>
              <span className="text-outline-variant">•</span>
              <span>Zero Marketing Fluff</span>
            </div>
          </div>

          {/* Main Headline Display */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg">
            <div className="max-w-3xl flex flex-col gap-space-xs">
              <h1 className="font-display text-display text-on-surface tracking-tight font-extrabold">
                Architectural Insights &amp; Engineering Teardowns
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Deep technical dissections of AI agent orchestration, resilient distributed scraping clusters, low-latency streaming runtimes, and algorithmic brand discovery.
              </p>
            </div>

            {/* Metric Accent Mini-Card */}
            <div className="flex items-center gap-space-lg px-6 py-4 rounded-xl bg-surface-container-lowest shadow-sm border border-surface-container">
              <div className="flex flex-col">
                <span className="font-headline-md text-headline-md text-primary font-bold">124.8M</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">Parsed Records/Day</span>
              </div>
              <div className="w-px h-10 bg-surface-container"></div>
              <div className="flex flex-col">
                <span className="font-headline-md text-headline-md text-secondary font-bold">99.98%</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">Mesh TLS Bypass SLA</span>
              </div>
            </div>
          </div>

          {/* Search Input + Categorization Pills Bar */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-space-md pt-space-sm">
            {/* Search Control */}
            <div className="relative flex-1 max-w-xl group">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px] transition-colors group-focus-within:text-primary">
                search
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search TLS fingerprints, vector pipelines, DuckDB benchmarks..."
                className="w-full h-12 pl-12 pr-24 rounded-xl bg-surface-container-lowest text-on-surface font-body-md text-body-md shadow-sm outline-none placeholder:text-on-surface-variant/60 focus:bg-surface-container-lowest focus:shadow-md border border-surface-container focus:ring-2 focus:ring-primary/40 transition-all"
              />
              <div className="absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center gap-1 px-2 py-0.5 rounded-lg bg-surface-container text-on-surface-variant font-code-sm text-code-sm font-mono text-xs">
                <span>⌘</span><span>K</span>
              </div>
            </div>

            {/* Category Pills Bar */}
            <div className="flex items-center gap-space-xs overflow-x-auto pb-1 lg:pb-0">
              {[
                { id: 'all', label: 'All (5)' },
                { id: 'ai', label: 'AI & Agents' },
                { id: 'data engineering', label: 'Data Engineering' },
                { id: 'scraping', label: 'Web Scraping' },
                { id: 'growth', label: 'Growth & AEO' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`filter-pill px-4 py-2 rounded-xl font-label-md text-label-md transition-all whitespace-nowrap ${
                    selectedCategory === cat.id
                      ? 'bg-primary text-on-primary font-semibold shadow-sm'
                      : 'bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Teardown Hero Card */}
      <section className="w-full px-4 sm:px-8 py-space-lg">
        <div className="max-w-7xl mx-auto">
          <div className="relative w-full rounded-2xl bg-surface-container-lowest shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12 border border-surface-container">
            {/* Left Column */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-12 flex flex-col justify-between gap-space-lg">
              <div className="flex flex-col gap-space-md">
                <div className="flex items-center flex-wrap gap-space-xs">
                  <span className="px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm font-semibold">
                    DATA ENGINEERING &amp; SCRAPING
                  </span>
                  <span className="font-code-sm text-code-sm text-secondary font-semibold font-mono">
                    TEARDOWN #09
                  </span>
                  <span className="text-outline-variant">•</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    Updated Dec 14, 2024
                  </span>
                </div>

                <h2 
                  onClick={() => setActiveArticleModal(articles[0])}
                  className="font-headline-lg text-headline-lg text-on-surface tracking-tight hover:text-primary transition-colors cursor-pointer font-bold leading-snug"
                >
                  High-Scale Scraping Architecture Without IP Bans: The Zero-Detection Playbook
                </h2>

                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  Bypassing Cloudflare Turnstile, TLS fingerprinting, and JA3/JA4 canvas traps via distributed headless clusters, synthetic TCP stack negotiation, and residential ISP node meshes. We examine real-world telemetry across 45M monthly requests.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-2">
                  <div className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">check_circle</span>
                    <span className="font-body-sm text-body-sm text-on-surface">JA4 Client Hello randomized rotation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">check_circle</span>
                    <span className="font-body-sm text-body-sm text-on-surface">Zero-drop ISP session re-routing</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">check_circle</span>
                    <span className="font-body-sm text-body-sm text-on-surface">WebGL canvas noise injection</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">check_circle</span>
                    <span className="font-body-sm text-body-sm text-on-surface">Sub-50ms token harvest cache</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between flex-wrap gap-space-md pt-space-md border-t border-surface-container">
                <div className="flex items-center gap-space-sm">
                  <div className="w-11 h-11 rounded-full bg-surface-container flex items-center justify-center text-primary font-headline-sm">
                    <span className="material-symbols-outlined">terminal</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-title-md text-title-md text-on-surface font-bold">Yottabyte Resilience Lab</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">Lead Data Architect • 8 min read</span>
                  </div>
                </div>
                <button
                  onClick={() => setActiveArticleModal(articles[0])}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-on-primary font-label-md text-label-md shadow-md hover:opacity-95 transition-all font-semibold"
                >
                  <span>Read Full Teardown</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Right Column: Code Sandbox */}
            <div className="lg:col-span-5 bg-inverse-surface text-inverse-on-surface p-6 lg:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-surface-container">
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center justify-between pb-3 border-b border-surface-container-high/20">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-error"></div>
                    <div className="w-3 h-3 rounded-full bg-tertiary-fixed-dim"></div>
                    <div className="w-3 h-3 rounded-full bg-primary-fixed"></div>
                    <span className="ml-2 font-code-sm text-code-sm text-surface-container-high/70 font-mono text-xs">
                      tls_proxy_mesh.py
                    </span>
                  </div>
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-surface-container-high/10 hover:bg-surface-container-high/20 text-inverse-on-surface font-label-sm text-label-sm transition-colors"
                  >
                    <span className="material-symbols-outlined text-[14px]">
                      {copiedSnippet ? 'check' : 'content_copy'}
                    </span>
                    <span>{copiedSnippet ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                <pre className="font-code-sm text-code-sm leading-relaxed overflow-x-auto text-surface-bright/90 select-all p-3 rounded-lg bg-inverse-surface/80 font-mono text-xs max-h-96">
                  <code>{pythonSnippet}</code>
                </pre>
              </div>

              <div className="mt-4 pt-3 flex items-center justify-between text-surface-container-high/60 font-code-sm text-code-sm font-mono border-t border-surface-container-high/20">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-fixed"></span>
                  Bypass Latency: 42ms
                </span>
                <span className="px-2 py-0.5 rounded bg-surface-container-high/10 text-primary-fixed-dim text-xs">
                  Python 3.12+
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Field Reports Grid */}
      <section className="w-full px-4 sm:px-8 py-space-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-space-sm">
            <span className="font-headline-md text-headline-md text-on-surface font-bold">Recent Field Reports</span>
            <span className="px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-semibold">
              {filteredArticles.length} Publications
            </span>
          </div>
        </div>
      </section>

      {/* 4 Cards Grid */}
      <section className="w-full px-4 sm:px-8 pb-space-xl">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-space-lg">
          {/* Card 1: Local LLMs */}
          <article className="group flex flex-col justify-between p-8 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all border border-surface-container">
            <div className="flex flex-col gap-space-md">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-semibold">
                  AI &amp; AGENTS
                </span>
                <span className="font-code-sm text-code-sm text-on-surface-variant font-mono">TEARDOWN #08</span>
              </div>
              <div className="flex flex-col gap-space-xs">
                <h3 
                  onClick={() => setActiveArticleModal(articles[1])}
                  className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors font-bold cursor-pointer"
                >
                  Deploying Local LLMs &amp; Agentic Workflows for Enterprise Workflows (Ollama + LangGraph)
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  How we built zero-data-leakage autonomous document audit agents on private Kubernetes clusters using quantized Llama 3.3 models, semantic caching with Qdrant, and cyclic deterministic LangGraph state machines.
                </p>
              </div>

              {/* Minimal Flow Chart */}
              <div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-2 border border-surface-container">
                <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                  <span className="flex items-center gap-1 font-mono text-primary font-semibold">
                    <span className="material-symbols-outlined text-[16px]">account_tree</span> LangGraph Deterministic Loop
                  </span>
                  <span className="font-mono text-xs">100% On-Premise</span>
                </div>
                <svg className="w-full h-12 text-on-surface-variant" fill="none" viewBox="0 0 460 48" xmlns="http://www.w3.org/2000/svg">
                  <rect fill="currentColor" fillOpacity="0.08" height="32" rx="6" stroke="currentColor" strokeDasharray="2 2" strokeWidth="1.2" width="100" x="2" y="8"></rect>
                  <text fill="currentColor" fontFamily="JetBrains Mono" fontSize="11" fontWeight="600" textAnchor="middle" x="52" y="28">State Init</text>
                  <path d="M103 24H135" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
                  <polygon fill="currentColor" points="135,21 141,24 135,27"></polygon>
                  <rect fill="currentColor" fillOpacity="0.12" height="32" rx="6" stroke="currentColor" strokeWidth="1.5" width="110" x="142" y="8"></rect>
                  <text fill="currentColor" fontFamily="JetBrains Mono" fontSize="11" fontWeight="600" textAnchor="middle" x="197" y="28">Ollama 70B</text>
                  <path d="M253 24H285" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
                  <polygon fill="currentColor" points="285,21 291,24 285,27"></polygon>
                  <rect fill="currentColor" fillOpacity="0.12" height="32" rx="6" stroke="currentColor" strokeWidth="1.5" width="110" x="292" y="8"></rect>
                  <text fill="currentColor" fontFamily="JetBrains Mono" fontSize="11" fontWeight="600" textAnchor="middle" x="347" y="28">Tool Sandbox</text>
                  <path d="M403 24H425" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
                  <polygon fill="currentColor" points="425,21 431,24 425,27"></polygon>
                  <circle cx="442" cy="24" fill="currentColor" fillOpacity="0.2" r="7"></circle>
                  <circle cx="442" cy="24" fill="currentColor" r="3"></circle>
                </svg>
              </div>
            </div>

            <div className="flex items-center justify-between pt-space-lg border-t border-surface-container mt-4">
              <div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
                <span>Machine Intelligence Team</span>
                <span>•</span>
                <span>12 min read</span>
              </div>
              <button
                onClick={() => setActiveArticleModal(articles[1])}
                className="inline-flex items-center gap-1 font-label-md text-label-md text-primary font-semibold group-hover:translate-x-1 transition-transform"
              >
                <span>Read Teardown</span>
                <span className="material-symbols-outlined text-[18px]">chevron_right</span>
              </button>
            </div>
          </article>

          {/* Card 2: PySpark vs DuckDB */}
          <article className="group flex flex-col justify-between p-8 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all border border-surface-container">
            <div className="flex flex-col gap-space-md">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm font-semibold">
                  DATA ENGINEERING
                </span>
                <span className="font-code-sm text-code-sm text-on-surface-variant font-mono">TEARDOWN #07</span>
              </div>
              <div className="flex flex-col gap-space-xs">
                <h3 
                  onClick={() => setActiveArticleModal(articles[2])}
                  className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors font-bold cursor-pointer"
                >
                  From Zero to Millions of Records: PySpark vs DuckDB in Modern ETL Pipelines
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  A brutally honest infrastructure benchmark. When does a single 64GB RAM DuckDB node outperform a 5-node distributed Apache Spark cluster on parquet aggregations? (Spoiler: Spark is often overkill).
                </p>
              </div>

              {/* Benchmark Progress Panel */}
              <div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-2.5 border border-surface-container">
                <div className="flex items-center justify-between font-label-sm text-label-sm">
                  <span className="font-semibold text-on-surface">Aggregation Throughput (50M Rows)</span>
                  <span className="font-code-sm text-code-sm text-primary font-bold font-mono">DuckDB: 4.2x Faster</span>
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="font-code-sm text-[11px] w-16 text-on-surface-variant font-mono">DuckDB</span>
                    <div className="flex-1 h-3 rounded-full bg-surface-container overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: '24%' }}></div>
                    </div>
                    <span className="font-code-sm text-[11px] text-on-surface font-semibold font-mono">1.4s</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-code-sm text-[11px] w-16 text-on-surface-variant font-mono">Spark Cluster</span>
                    <div className="flex-1 h-3 rounded-full bg-surface-container overflow-hidden">
                      <div className="h-full bg-surface-container-highest rounded-full" style={{ width: '82%' }}></div>
                    </div>
                    <span className="font-code-sm text-[11px] text-on-surface-variant font-mono">5.9s</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-space-lg border-t border-surface-container mt-4">
              <div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
                <span>Core Platform Group</span>
                <span>•</span>
                <span>6 min read</span>
              </div>
              <button
                onClick={() => setActiveArticleModal(articles[2])}
                className="inline-flex items-center gap-1 font-label-md text-label-md text-primary font-semibold group-hover:translate-x-1 transition-transform"
              >
                <span>Read Benchmark</span>
                <span className="material-symbols-outlined text-[18px]">chevron_right</span>
              </button>
            </div>
          </article>

          {/* Card 3: AEO/AIO Marketing */}
          <article className="group flex flex-col justify-between p-8 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all border border-surface-container">
            <div className="flex flex-col gap-space-md">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-semibold">
                  GROWTH &amp; AEO
                </span>
                <span className="font-code-sm text-code-sm text-on-surface-variant font-mono">TEARDOWN #06</span>
              </div>
              <div className="flex flex-col gap-space-xs">
                <h3 
                  onClick={() => setActiveArticleModal(articles[3])}
                  className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors font-bold cursor-pointer"
                >
                  The AEO/AIO Marketing Playbook: How Generative AI Search Engines Rank Your Brand
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Reverse engineering citations on Perplexity, SearchGPT, and Google AI Overviews. Structuring semantic entity graphs, authoritative LLM training corpuses, and entity graph vector anchors.
                </p>
              </div>

              {/* Citation Metric Snippet */}
              <div className="p-4 rounded-xl bg-surface-container-low flex items-center justify-between border border-surface-container">
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Entity Grounding Score</span>
                  <span className="font-headline-sm text-headline-sm text-tertiary font-bold">+340% Recall Lift</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest text-on-surface font-label-sm text-label-sm shadow-sm border border-surface-container font-semibold">
                  <span className="material-symbols-outlined text-primary text-base">psychology</span>
                  Perplexity &amp; SearchGPT
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-space-lg border-t border-surface-container mt-4">
              <div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
                <span>Growth Intelligence Team</span>
                <span>•</span>
                <span>10 min read</span>
              </div>
              <button
                onClick={() => setActiveArticleModal(articles[3])}
                className="inline-flex items-center gap-1 font-label-md text-label-md text-primary font-semibold group-hover:translate-x-1 transition-transform"
              >
                <span>Explore Framework</span>
                <span className="material-symbols-outlined text-[18px]">chevron_right</span>
              </button>
            </div>
          </article>

          {/* Card 4: Self-Hosting n8n */}
          <article className="group flex flex-col justify-between p-8 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all border border-surface-container">
            <div className="flex flex-col gap-space-md">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm font-semibold">
                  ENTERPRISE AUTOMATION
                </span>
                <span className="font-code-sm text-code-sm text-on-surface-variant font-mono">TEARDOWN #05</span>
              </div>
              <div className="flex flex-col gap-space-xs">
                <h3 
                  onClick={() => setActiveArticleModal(articles[4])}
                  className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors font-bold cursor-pointer"
                >
                  Self-Hosting n8n on Kubernetes: Automating Mission-Critical Enterprise Workflows
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Scale n8n horizontally using Redis Queue concurrency, isolated execution workers, HashiCorp Vault secrets injection, and automated blue-green webhook deploys handling 10k webhooks/min.
                </p>
              </div>

              {/* Callout Box */}
              <div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-1.5 font-code-sm text-code-sm font-mono border border-surface-container">
                <div className="flex items-center justify-between text-on-surface">
                  <span className="text-primary font-bold">helm upgrade --install n8n-ha</span>
                  <span className="text-primary font-semibold">99.99% Uptime</span>
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant text-[12px]">
                  <span>Workers: 12 Pods</span>
                  <span>•</span>
                  <span>Redis Pub/Sub</span>
                  <span>•</span>
                  <span>PostgreSQL Master/Replica</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-space-lg border-t border-surface-container mt-4">
              <div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
                <span>Platform Reliability Lab</span>
                <span>•</span>
                <span>7 min read</span>
              </div>
              <button
                onClick={() => setActiveArticleModal(articles[4])}
                className="inline-flex items-center gap-1 font-label-md text-label-md text-primary font-semibold group-hover:translate-x-1 transition-transform"
              >
                <span>View Architecture</span>
                <span className="material-symbols-outlined text-[18px]">chevron_right</span>
              </button>
            </div>
          </article>
        </div>
      </section>

      {/* Article Detail Reading Modal */}
      {activeArticleModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            onClick={() => setActiveArticleModal(null)}
            className="absolute inset-0 bg-on-surface/50 backdrop-blur-sm"
          />
          <div className="relative bg-surface-container-lowest rounded-2xl p-6 sm:p-10 max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-surface-container z-10 animate-scale-in">
            <div className="flex items-center justify-between pb-4 border-b border-surface-container">
              <span className="px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm font-semibold">
                {activeArticleModal.number} • {activeArticleModal.tag}
              </span>
              <button 
                onClick={() => setActiveArticleModal(null)}
                className="p-1 rounded-lg hover:bg-surface-container text-on-surface-variant"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold mt-4 leading-tight">
              {activeArticleModal.title}
            </h2>
            <div className="flex items-center gap-3 text-on-surface-variant font-label-sm text-label-sm my-3 pb-3 border-b border-surface-container">
              <span>By {activeArticleModal.author}</span>
              <span>•</span>
              <span>{activeArticleModal.readTime}</span>
            </div>
            <div className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed whitespace-pre-line py-2">
              {activeArticleModal.fullBody}
            </div>
            <div className="pt-6 border-t border-surface-container flex items-center justify-between mt-6">
              <span className="font-code-sm text-code-sm text-outline font-mono text-xs">YBW-PEER-REVIEWED</span>
              <button
                onClick={() => setActiveArticleModal(null)}
                className="px-6 py-2.5 rounded-xl bg-primary text-on-primary font-label-md font-semibold hover:bg-primary-container"
              >
                Done Reading
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Policy Banner */}
      <section className="w-full px-4 sm:px-8 py-space-md">
        <div className="max-w-7xl mx-auto rounded-2xl bg-surface-container-high/40 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-space-lg border border-surface-container">
          <div className="flex items-center gap-space-md">
            <div className="w-12 h-12 rounded-xl bg-primary text-on-primary flex items-center justify-center shrink-0 shadow-sm">
              <span className="material-symbols-outlined text-2xl">code_blocks</span>
            </div>
            <div className="flex flex-col">
              <span className="font-title-md text-title-md text-on-surface font-bold">Our Engineering Publication Policy</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Every code snippet published in YottabyteWorks teardowns has run successfully against live target infrastructure in our testing sandboxes. No theoretical pseudo-code.
              </p>
            </div>
          </div>
          <button
            onClick={() => alert('Review Methodology: Multi-pass code verification, AST sanity checks, and benchmark validation across live AWS/GCP workloads.')}
            className="shrink-0 px-4 py-2.5 rounded-xl bg-surface-container-lowest text-primary font-label-md text-label-md shadow-sm hover:bg-surface border border-surface-container transition-colors font-semibold"
          >
            Read Review Methodology
          </button>
        </div>
      </section>

      {/* Terminal Dispatch Newsletter */}
      <section className="w-full px-4 sm:px-8 py-space-xl">
        <div className="max-w-7xl mx-auto rounded-3xl bg-inverse-surface text-inverse-on-surface p-8 lg:p-14 relative overflow-hidden shadow-xl">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
            {/* Left Value Prop */}
            <div className="lg:col-span-7 flex flex-col gap-space-md">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high/15 text-primary-fixed-dim font-label-sm text-label-sm font-semibold">
                  <span className="w-2 h-2 rounded-full bg-primary-fixed animate-ping"></span>
                  SUBSCRIBE TO DISPATCHES
                </span>
                <span className="font-code-sm text-code-sm text-surface-container-high/60 font-mono">
                  STRICTLY_TECHNICAL
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-surface-bright tracking-tight font-bold">
                The YW Terminal Dispatch: Direct to your inbox. Zero fluff.
              </h2>
              <p className="font-body-lg text-body-lg text-surface-container-high/80 leading-relaxed">
                Bi-weekly unredacted architecture diagrams, production post-mortems, custom Python/Rust scrapers, and agentic orchestration recipes. No promotional spam, ever.
              </p>
              <div className="flex flex-wrap items-center gap-space-lg pt-2 text-surface-container-high/70 font-label-sm text-label-sm">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-primary-fixed-dim text-base">done_all</span>
                  <span>18,400+ Staff Engineers</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-primary-fixed-dim text-base">schedule</span>
                  <span>Alternate Thursdays</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-primary-fixed-dim text-base">lock</span>
                  <span>1-Click Unsubscribe</span>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-5 flex flex-col gap-space-sm p-6 lg:p-8 rounded-2xl bg-surface-container-lowest/5 backdrop-blur-md border border-surface-container-high/20">
              <div className="flex flex-col gap-1">
                <span className="font-title-md text-title-md text-surface-bright font-bold">Join the Engineering Dispatch</span>
                <span className="font-body-sm text-body-sm text-surface-container-high/70">Enter your engineering email address:</span>
              </div>
              {newsletterSubscribed ? (
                <div className="p-4 rounded-xl bg-primary-fixed/20 text-primary-fixed-dim font-label-sm text-label-sm flex items-center gap-2 border border-primary-fixed/30">
                  <span className="material-symbols-outlined text-base">check_circle</span>
                  <span>Welcome aboard. Check your inbox for the JA3 fingerprint bypass whitepaper.</span>
                </div>
              ) : (
                <form className="flex flex-col gap-3 mt-2" onSubmit={handleNewsletterSubmit}>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-surface-container-high/60 text-lg">
                      alternate_email
                    </span>
                    <input
                      type="email"
                      required
                      placeholder="architect@enterprise.corp"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      className="w-full h-12 pl-11 pr-4 rounded-xl bg-inverse-surface text-surface-bright font-code-sm text-code-sm shadow-inner outline-none placeholder:text-surface-container-high/40 focus:ring-2 focus:ring-primary-fixed border border-surface-container-high/20"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full h-12 rounded-xl bg-primary-fixed text-on-primary-fixed font-title-md text-title-md hover:bg-primary-fixed-dim transition-colors shadow-md flex items-center justify-center gap-2 font-bold"
                  >
                    <span>Subscribe to Terminal Dispatch</span>
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </button>
                </form>
              )}
              <p className="font-code-sm text-[11px] text-surface-container-high/50 pt-1 font-mono">
                By subscribing you consent to receive technical bulletins from Yottabyte Technological Services. Read our Data Privacy Charter.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
