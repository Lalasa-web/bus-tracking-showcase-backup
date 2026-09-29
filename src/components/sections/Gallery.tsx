import { useState } from 'react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { DeviceMockup } from '../ui/DeviceMockup';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function ScreenshotCarousel({ 
  screenshots, 
  altPrefix, 
  deviceType = "phone" 
}: { 
  screenshots: string[], 
  altPrefix: string, 
  deviceType?: "phone" | "laptop" 
}) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <DeviceMockup type={deviceType}>
        <div className="relative w-full h-full bg-[#0a0a0a] group flex flex-col items-center justify-center overflow-hidden">
          <img 
            src={screenshots[currentSlide]} 
            alt={`${altPrefix} ${currentSlide + 1}`}
            className="w-full h-full object-contain"
          />
          
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-primary-500 transition-colors border border-white/20 backdrop-blur-sm shadow-lg z-10"
            aria-label="Previous screenshot"
          >
            <ChevronLeft size={18} />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-primary-500 transition-colors border border-white/20 backdrop-blur-sm shadow-lg z-10"
            aria-label="Next screenshot"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </DeviceMockup>

      {/* Pagination Indicators */}
      <div className="flex flex-col items-center gap-3 mt-6">
        <div className="flex flex-wrap justify-center gap-2">
          {screenshots.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${idx === currentSlide ? 'bg-primary-500' : 'bg-white/20 hover:bg-white/40'}`}
              aria-label={`Go to screenshot ${idx + 1}`}
            />
          ))}
        </div>
        <div className="text-sm font-medium text-text-secondary">
          {currentSlide + 1} / {screenshots.length}
        </div>
      </div>
    </div>
  );
}

export function Gallery() {
  const androidScreenshots = [
    '/screenshots/android/android-1.png',
    '/screenshots/android/android-2.png',
    '/screenshots/android/android-3.png',
    '/screenshots/android/android-4.png',
    '/screenshots/android/android-5.png',
  ];

  const inventoryScreenshots = [
    '/screenshots/inventory/inventory-1.png',
    '/screenshots/inventory/inventory-2.png',
    '/screenshots/inventory/inventory-3.png',
    '/screenshots/inventory/inventory-4.png',
    '/screenshots/inventory/inventory-5.png',
    '/screenshots/inventory/inventory-6.png',
  ];

  const webScreenshots = [
    '/screenshots/web/web-1.png',
    '/screenshots/web/web-2.png',
    '/screenshots/web/web-3.png',
    '/screenshots/web/web-4.png',
    '/screenshots/web/web-5.png',
  ];

  return (
    <AnimatedSection id="gallery">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Project Gallery</h2>
          <p className="text-text-secondary text-lg">A glimpse into the beautifully designed interfaces.</p>
        </div>

        <div className="space-y-32">
          {/* Inventory Dashboard - Laptop */}
          <div className="flex flex-col gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Admin Inventory Dashboard</h3>
              <p className="text-text-secondary">Comprehensive control panel for fleet management.</p>
            </div>
            <ScreenshotCarousel 
              screenshots={inventoryScreenshots}
              altPrefix="Inventory Management System screenshot"
              deviceType="laptop"
            />
          </div>

          {/* Web Tracking App - Laptop */}
          <div className="flex flex-col gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Web Tracking Application</h3>
              <p className="text-text-secondary">Real-time bus tracking and monitoring from any browser.</p>
            </div>
            <ScreenshotCarousel 
              screenshots={webScreenshots}
              altPrefix="Web Tracking Application screenshot"
              deviceType="laptop"
            />
          </div>

          {/* Android App & Tracking - Phones */}
          <div className="flex flex-col gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Android App</h3>
              <p className="text-text-secondary">Live GPS tracking and broadcasting experience.</p>
            </div>
            <ScreenshotCarousel 
              screenshots={androidScreenshots}
              altPrefix="Android GPS tracking application screenshot"
              deviceType="phone"
            />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
