import { motion } from 'framer-motion';
import { ChevronRight, Smartphone, Globe, Compass } from 'lucide-react';
import { Button } from '../ui/Button';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Animated Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary-400/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000" />
      <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 text-sm font-medium text-primary-400 border-primary-500/20"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
          </span>
          Next-Gen Transportation System
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight"
        >
          Smart College Bus Tracking <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-primary-500 to-purple-500">
            & Inventory Management
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          A modern transportation management platform combining real-time GPS tracking, 
          centralized inventory management, and cross-platform accessibility into one 
          intelligent ecosystem.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            variant="primary"
            size="lg"
            className="w-full sm:w-auto gap-2"
            href={"https://drive.google.com/" + "uc?export=download&id=1d5TJN0m71lXQCEGi8qdDC7VSvI3cRELI"}
          >
            <Smartphone size={20} />
            Download Android App
          </Button>
          <Button 
            variant="secondary" 
            size="lg" 
            className="w-full sm:w-auto gap-2" 
            href="https://tracoweb.duckdns.org/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Globe size={20} />
            Web Tracking App
          </Button>
          <Button variant="ghost" size="lg" className="w-full sm:w-auto gap-2" href="#features">
            <Compass size={20} />
            Explore Features
            <ChevronRight size={16} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
