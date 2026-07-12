import { useState, useEffect } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import WorkflowSection from '@/components/sections/WorkflowSection';
import DevelopmentSection from '@/components/sections/DevelopmentSection';
import TechHighlightsSection from '@/components/sections/TechHighlightsSection';
import ReflectionSection from '@/components/sections/ReflectionSection';

/**
 * DecideNow Portfolio - Single Page Application
 * Design Philosophy: Japanese Minimalism with warm beige tones
 * 
 * Layout Structure:
 * - Hero: Brand identity + project overview
 * - Workflow: Four-stage AI decision-making process
 * - Development: Vibe Coding workflow & modern development paradigm
 * - Tech Highlights: Engineering decisions & architecture
 * - Reflection: Personal transformation & achievement
 */
export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-sm border-b border-border shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <nav className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <img
              src="/manus-storage/decidenow-logo_bf3e599f.png"
              alt="DecideNow Logo"
              className="w-8 h-8"
            />
            <span className="font-serif font-bold text-lg">DecideNow</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#workflow" className="text-sm hover:text-primary transition-colors">
              工作流
            </a>
            <a href="#development" className="text-sm hover:text-primary transition-colors">
              開發歷程
            </a>
            <a href="#tech" className="text-sm hover:text-primary transition-colors">
              技術亮點
            </a>
            <a href="#reflection" className="text-sm hover:text-primary transition-colors">
              心路歷程
            </a>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        <HeroSection />
        <WorkflowSection />
        <DevelopmentSection />
        <TechHighlightsSection />
        <ReflectionSection />
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-8">
        <div className="container text-center text-sm text-muted-foreground">
          <p>
            DecideNow © 2026 | Designing AI-Augmented Workflows
          </p>
          <p className="mt-2">
            Built with React, TypeScript, TailwindCSS & Gemini API
          </p>
        </div>
      </footer>
    </div>
  );
}
