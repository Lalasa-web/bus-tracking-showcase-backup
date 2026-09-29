import { AnimatedSection } from '../ui/AnimatedSection';
import { Card } from '../ui/Card';
import { LayoutDashboard, Smartphone, Globe, UserCheck } from 'lucide-react';

export function About() {
  const points = [
    { icon: <LayoutDashboard className="text-primary-400" size={24} />, title: 'Inventory Management System', desc: 'Managing college bus assets and operations.' },
    { icon: <Smartphone className="text-green-400" size={24} />, title: 'Android GPS Application', desc: 'Real-time GPS tracking/broadcasting.' },
    { icon: <Globe className="text-purple-400" size={24} />, title: 'Web Tracking Application', desc: 'Browser-based bus tracking and monitoring. Intended to support users who prefer web/iOS access.' },
    { icon: <UserCheck className="text-orange-400" size={24} />, title: 'Bus-to-Class Attendance Verification System', desc: 'Currently in progress. Connects transportation attendance with first-period classroom attendance.' },
  ];

  return (
    <AnimatedSection id="about" className="bg-surface/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">About the Platform</h2>
          <p className="text-text-secondary text-lg max-w-4xl mx-auto leading-relaxed">
            A complete solution for smarter college transportation and attendance management, developed through four focused components. The project includes a centralized Inventory Management System for managing college bus assets and operations, an Android application for real-time GPS tracking, a web-based application for browser-based bus tracking and monitoring, and an in-progress Bus-to-Class Attendance Verification System that connects transportation attendance with first-period classroom attendance. Together, these components provide a structured approach to bus inventory management, intelligent transportation tracking, and attendance verification.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {points.map((point, index) => (
            <Card key={index} className="flex flex-col gap-4 p-8">
              <div className="w-14 h-14 rounded-2xl bg-surfaceHighlight flex items-center justify-center border border-white/10 shadow-lg">
                {point.icon}
              </div>
              <h3 className="text-2xl font-semibold">{point.title}</h3>
              <p className="text-text-secondary">{point.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
