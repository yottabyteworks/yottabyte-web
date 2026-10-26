import React, { useRef } from 'react';

export default function Logo({ size = 'md', variant = 'default', className = '' }) {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleEnded = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  if (variant === 'header') {
    return (
      <div
        onMouseEnter={handleMouseEnter}
        className={`relative h-16 sm:h-20 flex items-center justify-center overflow-hidden bg-transparent group-hover:scale-105 transition-transform flex-shrink-0 cursor-pointer ${className}`}
        title="YottabyteWorks - Hover to replay animation"
      >
        <video
          ref={videoRef}
          src="/logo-animation.mp4"
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={handleEnded}
          className="h-full w-auto object-contain mix-blend-multiply contrast-[1.06] brightness-[1.02]"
        />
      </div>
    );
  }

  const sizeClasses = {
    sm: 'w-8 h-8 rounded-lg',
    md: 'w-10 h-10 rounded-xl',
    lg: 'w-12 h-12 rounded-xl',
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      className={`relative ${sizeClasses[size] || sizeClasses.md} overflow-hidden shadow-xs flex items-center justify-center bg-surface-container-high border border-primary/20 group-hover:scale-105 transition-transform flex-shrink-0 cursor-pointer ${className}`}
      title="YottabyteWorks - Hover to replay animation"
    >
      <video
        ref={videoRef}
        src="/logo-animation.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={handleEnded}
        className="w-full h-full object-cover mix-blend-multiply"
      />
    </div>
  );
}
