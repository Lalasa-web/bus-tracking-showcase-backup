import type { ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface DeviceMockupProps {
  type: 'laptop' | 'phone';
  children: ReactNode;
  className?: string;
}

export function DeviceMockup({ type, children, className }: DeviceMockupProps) {
  if (type === 'laptop') {
    return (
      <div className={cn("relative mx-auto w-full max-w-[800px]", className)}>
        {/* Laptop Frame */}
        <div className="relative rounded-t-xl bg-surface border-4 border-[#333] pt-4 pb-2 px-2 shadow-2xl">
          {/* Camera dot */}
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-black"></div>
          
          {/* Screen Content */}
          <div className="relative overflow-hidden rounded-sm bg-background aspect-video border border-white/5">
            {children}
          </div>
        </div>
        {/* Laptop Base */}
        <div className="relative h-4 bg-[#444] rounded-b-2xl mx-[-1rem] flex justify-center shadow-2xl">
          <div className="w-24 h-1.5 bg-[#222] rounded-b-md"></div>
        </div>
      </div>
    );
  }

  // Phone Mockup
  return (
    <div className={cn("relative mx-auto w-full max-w-[300px]", className)}>
      <div className="relative rounded-[2rem] bg-surface border-[6px] border-[#333] shadow-2xl overflow-hidden aspect-[9/19.5]">
        {/* Notch */}
        <div className="absolute top-0 inset-x-0 h-6 bg-[#333] rounded-b-xl w-32 mx-auto z-20"></div>
        
        {/* Screen Content */}
        <div className="relative h-full w-full bg-background pt-8 pb-4">
          {children}
        </div>
      </div>
    </div>
  );
}
