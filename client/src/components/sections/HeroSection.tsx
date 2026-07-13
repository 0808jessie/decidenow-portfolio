/**
 * Hero Section - Project Overview
 * Design: Japanese Minimalism with modern gradient background
 * Layout: Two-column - left brand identity, right core tagline with tech stack
 */

export default function HeroSection() {
  return (
    <section className="relative py-16 md:py-24 bg-background overflow-hidden">
      {/* Modern gradient background with enhanced design */}
      <div className="absolute inset-0">
        {/* Base background image */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'url(/manus-storage/decidenow-hero-bg_f308d93e.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        {/* Modern gradient overlay with depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-accent/8" />
        
        {/* Animated gradient glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/15 to-transparent rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent/15 to-transparent rounded-full blur-3xl opacity-30" />
        
        {/* Modern grid lines */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `
              linear-gradient(90deg, transparent 48%, rgba(255,255,255,0.08) 49%, rgba(255,255,255,0.08) 51%, transparent 52%),
              linear-gradient(0deg, transparent 48%, rgba(255,255,255,0.08) 49%, rgba(255,255,255,0.08) 51%, transparent 52%)
            `,
            backgroundSize: '80px 80px',
          }}
        />
        
        {/* Diagonal accent lines */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(45deg, transparent 48%, rgba(100,150,200,0.1) 49%, rgba(100,150,200,0.1) 51%, transparent 52%),
              linear-gradient(-45deg, transparent 48%, rgba(100,150,200,0.1) 49%, rgba(100,150,200,0.1) 51%, transparent 52%)
            `,
            backgroundSize: '120px 120px',
          }}
        />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: Brand & Message */}
          <div className="flex flex-col justify-start space-y-6">
            <div className="space-y-4">
              <img
                src="/manus-storage/decidenow-logo_bf3e599f.png"
                alt="DecideNow Logo"
                className="w-16 h-16"
              />
              <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight text-foreground">
                DecideNow
              </h1>
              <p className="text-xl text-muted-foreground font-serif font-light">
                AI 代理工作流與引導式決策矩陣工具
              </p>
            </div>

            <div className="space-y-4 max-w-lg">
              <p className="text-lg leading-relaxed text-foreground">
                設計 AI 參與人類決策的工作流
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                從模糊直覺到步驟化科學量化
              </p>
            </div>
          </div>

          {/* Right: Core Tagline + Tech Stack - Aligned with left text */}
          <div className="flex items-start pt-16">
            <div className="w-full space-y-6">
              {/* Core Tagline - Aligned with left subtitle */}
              <div className="bg-card border border-border rounded-lg p-6 w-full hover:shadow-md transition-shadow duration-300">
                <p className="text-sm text-muted-foreground uppercase tracking-wide mb-3">
                  核心理念
                </p>
                <p className="text-lg font-serif font-semibold text-foreground leading-relaxed">
                  「我不只是在使用 AI，我是在設計 AI 參與人類決策的工作流。」
                </p>
              </div>

              {/* Tech Stack Tags - Below Core Tagline */}
              <div className="flex flex-wrap gap-3">
                {['React', 'TypeScript', 'TailwindCSS', 'Gemini API', 'Lovable'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-card border border-border rounded-md text-sm font-mono text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce opacity-60 hover:opacity-100 transition-opacity">
        <svg
          className="w-6 h-6 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
