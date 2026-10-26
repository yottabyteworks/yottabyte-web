import React, { useState, useEffect } from 'react';

export default function ScopingDrawerModal({ isOpen, serviceName, onClose, onSubmitSuccess }) {
  const [vector, setVector] = useState(serviceName || 'Vector Engagement Scope');
  const [email, setEmail] = useState('');
  const [timeline, setTimeline] = useState('Immediate Sprint (< 2 Weeks)');
  const [throughput, setThroughput] = useState('');
  const [constraints, setConstraints] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (serviceName) {
      setVector(serviceName);
    }
  }, [serviceName]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      if (onSubmitSuccess) {
        onSubmitSuccess({
          vector,
          email,
          timeline,
          throughput,
          constraints,
        });
      }
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-inverse-surface/40 backdrop-blur-sm transition-opacity animate-fade-in"
      />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-xl bg-surface-container-lowest h-full shadow-2xl p-6 sm:p-8 flex flex-col justify-between overflow-y-auto z-10 transition-transform duration-300 animate-slide-left">
        <div className="flex flex-col gap-6">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-surface-container">
            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest font-bold">
                Rapid Technical Scoping
              </span>
              <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                {vector || 'Vector Engagement Scope'}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-surface-container-low text-on-surface hover:bg-surface-container transition-colors"
            >
              <span className="material-symbols-outlined text-base">close</span>
            </button>
          </div>

          {/* SLA Assurance Banner */}
          <div className="p-4 rounded-xl bg-surface-container-low flex items-start gap-3 border border-surface-container">
            <span className="material-symbols-outlined text-primary text-xl mt-0.5">verified_user</span>
            <div className="flex flex-col">
              <span className="font-title-md text-title-md text-on-surface font-semibold">
                Direct Principal Engineer Review
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Guaranteed under 12-hour turnaround. Mutual non-disclosure agreement binding prior to architecture review.
              </p>
            </div>
          </div>

          {/* Scoping Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="font-label-md text-label-md text-on-surface font-semibold">
                Target Architecture Vector
              </label>
              <input
                type="text"
                value={vector}
                onChange={(e) => setVector(e.target.value)}
                className="w-full h-11 px-3.5 rounded-lg bg-surface-container text-on-surface font-title-md text-title-md shadow-inner outline-none focus:ring-2 focus:ring-primary font-medium"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="font-label-md text-label-md text-on-surface font-semibold">
                  Enterprise Work Email <span className="text-error">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="arch-lead@organization.com"
                  className="w-full h-11 px-3.5 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md shadow-sm outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/40"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-label-md text-label-md text-on-surface font-semibold">
                  Target Deployment Timeline
                </label>
                <select
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                  className="w-full h-11 px-3 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md shadow-sm outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/40"
                >
                  <option>Immediate Sprint (&lt; 2 Weeks)</option>
                  <option>Q2 Engineering Cycle</option>
                  <option>Multi-Quarter Modernization</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-label-md text-label-md text-on-surface font-semibold">
                Data Volume / System Throughput Ceiling
              </label>
              <input
                type="text"
                value={throughput}
                onChange={(e) => setThroughput(e.target.value)}
                placeholder="e.g. 50M ops/day, 10TB Lakehouse, &lt;100ms P99"
                className="w-full h-11 px-3.5 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md shadow-sm outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/40"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-label-md text-label-md text-on-surface font-semibold">
                Technical Requirements & Constraints
              </label>
              <textarea
                rows={4}
                value={constraints}
                onChange={(e) => setConstraints(e.target.value)}
                placeholder="Detail tech stack constraints, VPC boundaries, compliance flags, or current bottleneck specifications..."
                className="w-full p-3.5 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md shadow-sm outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/40 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-xl bg-primary text-on-primary font-title-md text-title-md hover:bg-primary-container shadow-md transition-all flex items-center justify-center gap-2 mt-2 font-semibold disabled:opacity-50"
            >
              <span>{isSubmitting ? 'Transmitting Scope...' : 'Transmit Scoping Dossier'}</span>
              <span className="material-symbols-outlined text-sm">send</span>
            </button>
          </form>
        </div>

        {/* Drawer Footer Status */}
        <div className="pt-6 border-t border-surface-container flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
          <span>SLA Tracking: YBW-CONFIDENTIAL</span>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            <span>Encrypted Gateway (AES-GCM-256)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
