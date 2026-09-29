import { AnimatedSection } from '../ui/AnimatedSection';
import { Card } from '../ui/Card';
import { MessageSquareQuote } from 'lucide-react';

export function Reviews() {
  return (
    <AnimatedSection id="reviews" className="bg-surface/30">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">User Reviews</h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Reviews and feedback from users will be added here as the Android and web tracking applications are adopted.
          </p>
        </div>

        <Card className="p-12 border-white/5 bg-background/50 flex flex-col items-center justify-center min-h-[300px]">
          <MessageSquareQuote size={48} className="text-primary-500/20 mb-6" />
          <h3 className="text-2xl font-semibold mb-2 text-text-primary/60">No Reviews Yet</h3>
          <p className="text-text-secondary text-sm">
            Genuine user feedback will be displayed in this section in the future.
          </p>
        </Card>
      </div>
    </AnimatedSection>
  );
}
