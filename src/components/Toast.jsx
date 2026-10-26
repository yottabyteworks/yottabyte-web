import React from 'react';

export default function Toast({ toast, onClose }) {
  if (!toast) return null;

  return (
    <div className="fixed top-24 right-8 z-[100] max-w-md bg-surface-container-lowest text-on-surface p-4 rounded-2xl shadow-2xl border border-primary/20 flex items-start gap-3 animate-bounce-in">
      <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 ${
        toast.type === 'error' ? 'bg-error/10 text-error' : 'bg-primary/10 text-primary'
      }`}>
        <span className="material-symbols-outlined text-lg">
          {toast.type === 'error' ? 'error' : 'verified'}
        </span>
      </div>
      <div className="flex-1 pr-2">
        <h5 className="font-title-md text-title-md text-on-surface font-semibold">{toast.title || 'Notification'}</h5>
        <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">{toast.message}</p>
      </div>
      <button 
        onClick={onClose}
        className="w-7 h-7 rounded-lg hover:bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors"
      >
        <span className="material-symbols-outlined text-base">close</span>
      </button>
    </div>
  );
}
