/**
 * Hero Section - Project Overview
 * Design: Japanese Minimalism with warm beige background
 * Layout: Two-column - left brand identity, right core tagline
 */

export default function HeroSection() {
  return (
    <section className="relative py-16 md:py-24 bg-background overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'url(/manus-storage/decidenow-hero-bg_f308d93e.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

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

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-3 pt-2" style={{paddingRight: '59px', paddingTop: '19px'}}>
              {['React', 'TypeScript', 'TailwindCSS', 'Gemini API', 'Lovable'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-card border border-border rounded-md text-sm font-mono text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Core Tagline */}
          <div className="flex items-start pt-2">
            <div className="bg-card border border-border rounded-lg p-6 w-full" style={{marginTop: '144px'}}>
              <p className="text-sm text-muted-foreground uppercase tracking-wide mb-3">
                核心理念
              </p>
              <p className="text-lg font-serif font-semibold text-foreground leading-relaxed">
                「我不只是在使用 AI，我是在設計 AI 參與人類決策的工作流。」
              </p>
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
