import { AnimatedSection } from '../ui/AnimatedSection';
import { Card } from '../ui/Card';
import { Globe } from 'lucide-react';

export function LiveDemo() {
  return (
    <AnimatedSection id="demo" className="bg-surface/30">
      <div className="container mx-auto px-6 max-w-4xl">
        <Card className="p-8 md:p-12 border-primary-500/20 text-center relative overflow-hidden">
          {/* Background effect */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary-500/10 rounded-full blur-[50px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-purple-500/10 rounded-full blur-[50px] pointer-events-none" />

          <div className="relative z-10">
            <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Globe size={32} className="text-primary-500" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Experience It Live</h2>
            <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
              Explore the web-based tracking application to monitor college buses in real time from a browser. The web application is currently under development and will be available here once completed.
            </p>

            <div className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-surfaceHighlight border border-white/10 text-text-secondary font-medium">
              Coming Soon
            </div>
          </div>
        </Card>
      </div>
    </AnimatedSection>
  );
}
