export function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Smart College Bus Tracking</h3>
            <p className="text-text-secondary">& Inventory Management System</p>
          </div>
          <div className="flex gap-6 text-sm text-text-secondary">
            <a href="#about" className="hover:text-primary-400 transition-colors">About</a>
            <a href="#features" className="hover:text-primary-400 transition-colors">Features</a>
            <a href="#demo" className="hover:text-primary-400 transition-colors">Live Demo</a>
            <a href="#contact" className="hover:text-primary-400 transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-text-secondary">
          <div className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Team Project Traco. All rights reserved.
          </div>
          <div>
            Developed by <span className="text-white font-medium">Lalasa</span>, <span className="text-white font-medium">Mothi Sri</span>, and <span className="text-white font-medium">Anvesh</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
