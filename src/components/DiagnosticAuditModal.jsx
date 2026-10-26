import React, { useState } from 'react';

export default function DiagnosticAuditModal({ isOpen, onClose, onBookingSuccess }) {
  const [selectedFocus, setSelectedFocus] = useState('scraping');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onBookingSuccess) {
      onBookingSuccess({
        name,
        email,
        focus: selectedFocus,
      });
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-on-surface/40 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative rounded-2xl p-0 overflow-hidden shadow-2xl max-w-lg w-full bg-surface-container-lowest z-10 border border-surface-container animate-scale-in">
        {/* Modal Header */}
        <div className="p-6 bg-surface-container-low flex items-center justify-between border-b border-surface-container">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
              Book Consultation
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
          <p className="font-body-md text-body-md text-on-surface-variant">
            Select your technical focus area. A Principal Architect will join the session directly with active sandbox screen sharing.
          </p>

          <div className="flex flex-col gap-2.5">
            <label className={`flex items-start gap-3 p-3.5 rounded-xl cursor-pointer transition-all border ${
              selectedFocus === 'scraping' ? 'bg-surface-container border-primary/30' : 'bg-surface-container-low border-transparent hover:bg-surface-container'
            }`}>
              <input
                type="radio"
                name="focus"
                checked={selectedFocus === 'scraping'}
                onChange={() => setSelectedFocus('scraping')}
                className="text-primary mt-1 focus:ring-0"
              />
              <div className="flex flex-col">
                <span className="font-title-md text-title-md text-on-surface font-semibold">
                  Scraping & Data Pipeline Audit
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Proxy infrastructure, anti-bot mitigation, throughput bottleneck fixes
                </span>
              </div>
            </label>

            <label className={`flex items-start gap-3 p-3.5 rounded-xl cursor-pointer transition-all border ${
              selectedFocus === 'ai' ? 'bg-surface-container border-primary/30' : 'bg-surface-container-low border-transparent hover:bg-surface-container'
            }`}>
              <input
                type="radio"
                name="focus"
                checked={selectedFocus === 'ai'}
                onChange={() => setSelectedFocus('ai')}
                className="text-primary mt-1 focus:ring-0"
              />
              <div className="flex flex-col">
                <span className="font-title-md text-title-md text-on-surface font-semibold">
                  Enterprise AI & LLM Feasibility
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  RAG evaluations, context token optimizations, privacy posture
                </span>
              </div>
            </label>

            <label className={`flex items-start gap-3 p-3.5 rounded-xl cursor-pointer transition-all border ${
              selectedFocus === 'cloud' ? 'bg-surface-container border-primary/30' : 'bg-surface-container-low border-transparent hover:bg-surface-container'
            }`}>
              <input
                type="radio"
                name="focus"
                checked={selectedFocus === 'cloud'}
                onChange={() => setSelectedFocus('cloud')}
                className="text-primary mt-1 focus:ring-0"
              />
              <div className="flex flex-col">
                <span className="font-title-md text-title-md text-on-surface font-semibold">
                  Cloud Scalability & Cost Rationalization
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  AWS/Azure resource right-sizing, latency reduction roadmap
                </span>
              </div>
            </label>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div>
              <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1 font-semibold">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Dr. Jordan Patel"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/40"
              />
            </div>
            <div>
              <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1 font-semibold">
                Work Email <span className="text-error">*</span>
              </label>
              <input
                type="email"
                required
                placeholder="jordan@enterprise.org"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/40"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-3 flex items-center justify-end gap-3 border-t border-surface-container mt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-on-surface-variant font-label-md hover:bg-surface-container transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-primary text-on-primary font-label-md font-semibold shadow-sm hover:bg-primary-container transition-all flex items-center gap-1.5"
            >
              <span>Confirm & Request Link</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
