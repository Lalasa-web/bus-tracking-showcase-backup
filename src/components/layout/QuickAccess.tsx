import { motion } from 'framer-motion';
import { Download, LayoutDashboard, Cpu, MessageSquare } from 'lucide-react';

export function QuickAccess() {
  const items = [
    { icon: <LayoutDashboard size={20} />, label: 'Live Inventory', href: '#demo' },
    { icon: <Download size={20} />, label: 'Android App', href: '#download' },
    { icon: <Cpu size={20} />, label: 'Tech Stack', href: '#tech' },
    { icon: <MessageSquare size={20} />, label: 'Contact', href: '#contact' },
  ];

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
      {items.map((item, i) => (
        <motion.a
          key={item.label}
          href={item.href}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 + i * 0.1 }}
          className="group relative flex items-center"
        >
          <div className="absolute right-14 bg-surfaceHighlight border border-white/10 px-3 py-1.5 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {item.label}
          </div>
          <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-text-secondary hover:text-primary-400 hover:border-primary-500/50 transition-all hover:scale-110 cursor-pointer premium-shadow">
            {item.icon}
          </div>
        </motion.a>
      ))}
    </div>
  );
}
