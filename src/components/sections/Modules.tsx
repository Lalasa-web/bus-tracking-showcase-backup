import { AnimatedSection } from '../ui/AnimatedSection';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Check, Download, Clock } from 'lucide-react';

export function Modules() {
  return (
    <AnimatedSection id="modules" className="bg-surface/30">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Core Modules</h2>
          <p className="text-text-secondary text-lg">Four integrated components working as one intelligent ecosystem.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Module 1 */}
          <Card className="flex flex-col h-full border-t-4 border-t-primary-500">
            <div className="flex-1">
              <div className="text-sm font-bold text-primary-400 mb-2 uppercase tracking-wider">Module 1</div>
              <h3 className="text-2xl font-bold mb-4">Inventory Management System</h3>
              <p className="text-text-secondary mb-6 text-sm">
                A centralized dashboard for managing buses, routes, drivers, maintenance records, transportation operations, and college bus assets.
              </p>
            </div>
          </Card>

          {/* Module 2 */}
          <Card className="flex flex-col h-full border-t-4 border-t-green-500">
            <div className="flex-1">
              <div className="text-sm font-bold text-green-400 mb-2 uppercase tracking-wider">Module 2</div>
              <h3 className="text-2xl font-bold mb-4">Android GPS App</h3>
              <p className="text-text-secondary mb-6 text-sm">
                An Android application that continuously sends live GPS location updates, allowing real-time monitoring of buses.
              </p>
              <ul className="space-y-2 mb-6">
                {['Live GPS', 'Background Location Updates', 'Route Monitoring', 'Real-time Synchronization'].map(feat => (
                  <li key={feat} className="flex items-center gap-2 text-xs text-text-secondary">
                    <Check size={14} className="text-green-400 shrink-0" /> {feat}
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-6 border-t border-white/10 mt-auto">
              <Button 
                variant="secondary" 
                className="w-full gap-2 hover:bg-green-500/20 hover:text-green-400 hover:border-green-500/50" 
                href={"https://drive.google.com/" + "uc?export=download&id=1d5TJN0m71lXQCEGi8qdDC7VSvI3cRELI"}
                download
              >
                <Download size={18} />
                Download APK
              </Button>
            </div>
          </Card>

          {/* Module 3 */}
          <Card className="flex flex-col h-full border-t-4 border-t-purple-500 opacity-90 relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(168,85,247,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]" />
            <div className="relative z-10 flex-1">
              <div className="flex justify-between items-center mb-2">
                <div className="text-sm font-bold text-purple-400 uppercase tracking-wider">Module 3</div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Web Tracking Application</h3>
              <p className="text-text-secondary mb-6 text-sm">
                A responsive browser-based tracking application designed for real-time bus monitoring and users who prefer web-based access.
              </p>
            </div>
          </Card>

          {/* Module 4 */}
          <Card className="flex flex-col h-full border-t-4 border-t-orange-500 opacity-90 relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(249,115,22,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]" />
            <div className="relative z-10 flex-1">
              <div className="flex justify-between items-center mb-2">
                <div className="text-sm font-bold text-orange-400 uppercase tracking-wider">Module 4</div>
                <span className="bg-orange-500/20 text-orange-400 text-[10px] px-2 py-1 rounded-md font-bold flex items-center gap-1">
                  <Clock size={12} /> In Progress
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Bus-to-Class Attendance Verification System</h3>
              <p className="text-text-secondary mb-4 text-sm leading-relaxed">
                An attendance verification system connecting transportation attendance with first-period classroom attendance to identify mismatches.
              </p>
              
              <div className="space-y-3 mt-4">
                <div>
                  <h4 className="text-sm font-bold text-text-primary mb-1">Problem</h4>
                  <p className="text-text-secondary text-sm">
                    Transportation and classroom attendance are separate, making it difficult to verify if a student attended class after taking the bus.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-text-primary mb-1">Solution</h4>
                  <p className="text-text-secondary text-sm">
                    Digitally record students while boarding the bus and cross-check with classroom attendance to automatically flag mismatches.
                  </p>
                </div>
              </div>
            </div>
          </Card>

        </div>
      </div>
    </AnimatedSection>
  );
}
