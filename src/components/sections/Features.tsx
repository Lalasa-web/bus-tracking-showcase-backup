import { AnimatedSection } from '../ui/AnimatedSection';
import { Card } from '../ui/Card';
import { Map, Zap, Database, Users, Route, Lock, Cloud, Monitor, Smartphone, LayoutTemplate, ShieldCheck, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

export function Features() {
  const features = [
    { icon: <Map />, title: 'Real-Time Bus Tracking', color: 'text-blue-400' },
    { icon: <Zap />, title: 'Live GPS Synchronization', color: 'text-yellow-400' },
    { icon: <Database />, title: 'Inventory Management', color: 'text-purple-400' },
    { icon: <Users />, title: 'Driver Management', color: 'text-green-400' },
    { icon: <Route />, title: 'Route Management', color: 'text-red-400' },
    { icon: <Lock />, title: 'Firebase Authentication', color: 'text-orange-400' },
    { icon: <Cloud />, title: 'Cloud Synchronization', color: 'text-cyan-400' },
    { icon: <Monitor />, title: 'Responsive Web Design', color: 'text-indigo-400' },
    { icon: <Smartphone />, title: 'Android Support', color: 'text-emerald-400' },
    { icon: <LayoutTemplate />, title: 'iOS Support (Web)', color: 'text-pink-400' },
    { icon: <ShieldCheck />, title: 'Secure Login', color: 'text-teal-400' },
    { icon: <Activity />, title: 'Scalable Architecture', color: 'text-rose-400' },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <AnimatedSection id="features">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Comprehensive Features</h2>
          <p className="text-text-secondary text-lg">Everything needed to run a smart college transport fleet.</p>
        </div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={item}>
              <Card className="h-full flex items-center gap-4 p-4 hover:bg-surfaceHighlight/50 cursor-pointer">
                <div className={`p-2 rounded-lg bg-surface ${feature.color}`}>
                  {feature.icon}
                </div>
                <h4 className="font-semibold text-sm leading-tight">{feature.title}</h4>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
