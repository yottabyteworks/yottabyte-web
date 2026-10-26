import React from 'react';

export default function FloatingActions({ onOpenDiagnostic, onOpenScoping }) {
  return (
    <aside className="fixed right-6 bottom-6 z-40 flex flex-col items-end gap-space-sm">
      {/* Schedule Diagnostic Call */}
      <div className="group relative flex items-center justify-end">
        <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute right-14 whitespace-nowrap bg-inverse-surface text-inverse-on-surface font-label-sm text-label-sm px-3 py-1.5 rounded-lg shadow-md pointer-events-none">
          Schedule Diagnostic Call
        </span>
        <button
          onClick={onOpenDiagnostic}
          aria-label="Schedule Diagnostic Call"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-on-primary shadow-lg hover:bg-primary-container hover:scale-105 active:scale-95 transition-all"
        >
          <span className="material-symbols-outlined">calendar_month</span>
        </button>
      </div>

      {/* Direct WhatsApp Channel */}
      <div className="group relative flex items-center justify-end">
        <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute right-14 whitespace-nowrap bg-inverse-surface text-inverse-on-surface font-label-sm text-label-sm px-3 py-1.5 rounded-lg shadow-md pointer-events-none">
          Direct WhatsApp Channel
        </span>
        <a
          href="https://wa.me/message"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Direct WhatsApp Channel"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-surface-container-lowest text-emerald-600 shadow-lg hover:bg-surface-container hover:scale-105 active:scale-95 transition-all border border-surface-container"
        >
          <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
            chat
          </span>
        </a>
      </div>

      {/* Enterprise Inquiries */}
      <div className="group relative flex items-center justify-end">
        <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute right-14 whitespace-nowrap bg-inverse-surface text-inverse-on-surface font-label-sm text-label-sm px-3 py-1.5 rounded-lg shadow-md pointer-events-none">
          Enterprise Inquiries
        </span>
        <button
          onClick={() => onOpenScoping('General Enterprise Architecture Inquiry')}
          aria-label="Enterprise Inquiries"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-surface-container-lowest text-on-surface shadow-lg hover:bg-surface-container hover:scale-105 active:scale-95 transition-all border border-surface-container"
        >
          <span className="material-symbols-outlined">mail</span>
        </button>
      </div>
    </aside>
  );
}
