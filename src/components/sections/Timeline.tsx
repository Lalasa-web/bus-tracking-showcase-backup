import { AnimatedSection } from '../ui/AnimatedSection';
import { Card } from '../ui/Card';
import { CheckCircle2 } from 'lucide-react';

export function Timeline() {
  const steps = [
    { phase: 'Phase 1', title: 'Planning', desc: 'Project scoping, tech stack selection, and architecture design.' },
    { phase: 'Phase 2', title: 'Requirement Analysis', desc: 'Gathering functional requirements for the inventory and app.' },
    { phase: 'Phase 3', title: 'UI/UX Design', desc: 'Prototyping modern interfaces for the web and mobile apps.' },
    { phase: 'Phase 4', title: 'Backend Development', desc: 'Setting up Node.js APIs, PostgreSQL, and Firebase.' },
    { phase: 'Phase 5', title: 'Android Development', desc: 'Building the native GPS tracking application.' },
    { phase: 'Phase 6', title: 'Testing & Validation', desc: 'GPS accuracy validation, functional testing, performance testing, and system validation.' },
    { phase: 'Phase 7', title: 'System Integration', desc: 'Connecting frontend and backend modules and validating communication between system components.' },
    { phase: 'Phase 8', title: 'Future Enhancements', desc: 'Continuous improvements and iOS support planning.' },
  ];

  return (
    <AnimatedSection id="timeline" className="bg-surface/30">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Development Timeline</h2>
          <p className="text-text-secondary text-lg">The journey of building this intelligent ecosystem.</p>
        </div>

        <div className="relative border-l-2 border-primary-500/30 ml-3 md:ml-0 md:pl-0">
          {steps.map((step, index) => (
            <div key={index} className="mb-10 ml-8 md:ml-0 md:flex items-center justify-between w-full">
              <div className="hidden md:block md:w-5/12"></div>
              
              <div className="absolute left-[-9px] md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-primary-500 border-4 border-background flex items-center justify-center">
                <CheckCircle2 size={12} className="text-background" />
              </div>

              <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-auto md:-translate-x-[calc(100%+3rem)]' : 'md:pl-12'}`}>
                <Card className="p-6 inline-block w-full text-left">
                  <div className="text-xs font-bold text-primary-400 mb-1">{step.phase}</div>
                  <h4 className="text-lg font-bold mb-2">{step.title}</h4>
                  <p className="text-text-secondary text-sm">{step.desc}</p>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
