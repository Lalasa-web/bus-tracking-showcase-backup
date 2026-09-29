import { AnimatedSection } from '../ui/AnimatedSection';
import { Card } from '../ui/Card';
import { Sparkles, Bell, Users, BarChart3, Droplet, Wrench, CalendarCheck, Map, BrainCircuit, Server } from 'lucide-react';
import { motion } from 'framer-motion';

export function FutureEnhancements() {
  const enhancements = [
    { 
      icon: <BrainCircuit />, 
      title: 'ML-Powered Predictive Bus Tracking', 
      colSpan: 'lg:col-span-2',
      desc: (
        <div className="space-y-4">
          <p>
            Develop an ML-based bus location prediction system to reduce the visible impact of temporary server and network latency during real-time tracking. The model will use recent GPS trajectory information such as latitude, longitude, speed, movement changes, and previous time intervals to predict the bus's next location when an updated GPS position is temporarily unavailable. Once the actual GPS update is received, the system will automatically switch back to the real location.
          </p>
          <div className="bg-black/20 p-3 rounded-lg font-mono text-xs whitespace-pre text-center text-primary-300">
            {`Android GPS App
      ↓
Actual GPS Location
      ↓
Temporary Network/Server Latency
      ↓
ML predicts the next bus location
      ↓
Display predicted location temporarily
      ↓
Actual GPS update arrives
      ↓
Switch back to actual location`}
          </div>
          <p className="text-xs opacity-75">
            Note: A sequence-based ML approach such as LSTM could be explored for this future implementation.
          </p>
        </div>
      ) 
    },
    { 
      icon: <Server />, 
      title: 'Spring Boot Backend Integration', 
      colSpan: 'lg:col-span-2',
      desc: (
        <div className="space-y-4">
          <p>
            Integrate Spring Boot as a unified backend layer across the project components to provide a structured, scalable, and maintainable backend architecture. The integration would support the Inventory Management System, Android GPS tracking application, and Web Tracking Application through centralized backend services and APIs.
          </p>
          <div className="bg-black/20 p-3 rounded-lg font-mono text-[10px] sm:text-xs whitespace-pre overflow-x-auto text-primary-300 flex justify-center">
            {`                Spring Boot Backend
                       │
          ┌────────────┼────────────┐
          ↓            ↓            ↓
     Inventory      Android       Web
     Management     GPS App       Tracking`}
          </div>
        </div>
      ) 
    },
    { icon: <Sparkles />, title: 'AI-based ETA Prediction', desc: 'Machine learning models to predict exact arrival times based on traffic and weather.' },
    { icon: <Bell />, title: 'Push Notifications', desc: 'Real-time alerts for delays, breakdowns, and arrival proximities.' },
    { icon: <Users />, title: 'Parent Tracking Portal', desc: 'Dedicated secure access for parents to track their children.' },
    { icon: <BarChart3 />, title: 'Driver Analytics', desc: 'Evaluating driving patterns, speeding, and route adherence.' },
    { icon: <Droplet />, title: 'Fuel Analytics', desc: 'Optimizing fuel consumption and calculating cost per trip.' },
    { icon: <Wrench />, title: 'Predictive Maintenance', desc: 'Automated servicing schedules based on mileage and wear.' },
    { icon: <CalendarCheck />, title: 'Attendance Integration', desc: 'RFID or barcode scanning for student bus boarding.' },
    { icon: <Map />, title: 'AI Route Optimization', desc: 'Dynamic route adjustments to save time and fuel.' },
  ];

  return (
    <AnimatedSection id="future">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Future Enhancements</h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            We are continuously exploring ways to make our transportation system smarter, safer, and more efficient.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {enhancements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={(item as any).colSpan || ""}
            >
              <Card className="h-full flex flex-col items-start p-6 group hover:bg-primary-500/5 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-surface border border-white/10 flex items-center justify-center text-primary-400 mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <div className="text-sm text-text-secondary w-full">{item.desc}</div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
