import React from 'react';
import Logo from './Logo.jsx';

export default function Footer({ navigate }) {
  return (
    <footer className="w-full bg-surface-container-lowest text-on-surface py-space-xl border-t border-surface-container">
      <div className="w-full px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-xl pb-space-xl">
          {/* Brand & Certifications */}
          <div className="lg:col-span-2 flex flex-col gap-space-md">
            <div 
              onClick={() => navigate && navigate('home')}
              className="flex items-center gap-space-md cursor-pointer group"
            >
              <Logo size="sm" />
              <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                YottabyteWorks
              </span>
            </div>
            <p className="font-label-md text-label-md tracking-widest text-primary font-bold">
              IDEAS | INTELLIGENCE | IMPACT
            </p>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md leading-relaxed">
              Engineering enterprise scale data platforms, high-throughput cloud infrastructure, and mission-critical intelligence pipelines. Powered by Yottabyte Technological Services for tier-1 institutions globally.
            </p>
            <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
              <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                SOC-2 Type II Certified
              </span>
              <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                ISO 27001 Compliant
              </span>
              <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                99.999% SLA Guaranteed
              </span>
            </div>
          </div>

          {/* Core Capabilities */}
          <div className="flex flex-col gap-space-sm">
            <span className="font-title-md text-title-md text-on-surface font-bold mb-space-xs">
              Core Capabilities
            </span>
            <button onClick={() => navigate && navigate('services')} className="text-left font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">Hyperscale Data Engineering</button>
            <button onClick={() => navigate && navigate('services')} className="text-left font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">Distributed Cloud Systems</button>
            <button onClick={() => navigate && navigate('services')} className="text-left font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">Enterprise AI & MLOps</button>
            <button onClick={() => navigate && navigate('services')} className="text-left font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">High-Throughput Streaming</button>
            <button onClick={() => navigate && navigate('services')} className="text-left font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">Cyber Resilience & Zero Trust</button>
            <button onClick={() => navigate && navigate('services')} className="text-left font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">Cloud Cost & FinOps</button>
            <button onClick={() => navigate && navigate('services')} className="text-left font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">Kubernetes Orchestration</button>
            <button onClick={() => navigate && navigate('services')} className="text-left font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">Legacy Platform Migration</button>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-space-sm">
            <span className="font-title-md text-title-md text-on-surface font-bold mb-space-xs">
              Navigation
            </span>
            <button onClick={() => navigate && navigate('home')} className="text-left font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">Home</button>
            <button onClick={() => navigate && navigate('services')} className="text-left font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">Services</button>
            <button onClick={() => navigate && navigate('about-leadership')} className="text-left font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">About Us</button>
            <button onClick={() => navigate && navigate('technical-insights')} className="text-left font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">Blog</button>
            <button onClick={() => navigate && navigate('admin-portal')} className="text-left font-body-sm text-body-sm text-primary hover:underline font-semibold">Admin Intelligence Portal</button>
          </div>

          {/* Trust & Governance */}
          <div className="flex flex-col gap-space-sm">
            <span className="font-title-md text-title-md text-on-surface font-bold mb-space-xs">
              Trust & Governance
            </span>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Strict mutual NDA execution before initial technical architecture audits.
            </p>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Guaranteed 15-minute response SLA under active Enterprise Advisory Retainers.
            </p>
            <a 
              href="#security-dossier" 
              onClick={(e) => { e.preventDefault(); alert("Security Dossier (SOC-2 / ISO-27001 summary package) requested. Please connect with our Principal Architect."); }}
              className="font-body-sm text-body-sm text-primary hover:underline pt-space-xs inline-flex items-center gap-1 font-semibold"
            >
              <span className="material-symbols-outlined text-sm">download</span>
              Download Security Dossier
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-space-lg border-t border-surface-container flex flex-col md:flex-row items-center justify-between gap-space-md text-on-surface-variant font-body-sm text-body-sm">
          <p>© 2025 Yottabyte Technological Services Private Limited. YottabyteWorks is a registered consultancy brand. All rights reserved.</p>
          <div className="flex items-center gap-space-lg">
            <button onClick={() => alert("Security Policy: All customer pipelines operate within dedicated VPC boundaries with strict TLS encryption and RBAC isolation.")} className="hover:text-on-surface transition-colors">Security Policy</button>
            <button onClick={() => alert("Mutual NDA: Bilateral mutual non-disclosure agreement is digitally executed prior to repository audits.")} className="hover:text-on-surface transition-colors">Mutual NDA Terms</button>
            <button onClick={() => alert("Privacy Architecture: Zero client data leakage guarantee with air-gapped self-hosted inference clusters.")} className="hover:text-on-surface transition-colors">Privacy Architecture</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
