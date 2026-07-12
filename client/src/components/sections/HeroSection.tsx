/**
 * Hero Section - Project Overview
 * Design: Japanese Minimalism with warm beige background
 * Layout: Asymmetric - left brand identity, right product screenshot
 */

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'url(/manus-storage/decidenow-hero-bg_f308d93e.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="container relative z-10 py-20">
        {/* Brand & Core Message */}
        <div className="flex flex-col justify-center space-y-8 max-w-3xl">
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

          {/* Core Tagline - Repositioned */}
          <div className="bg-card border border-border rounded-lg p-6 mt-8">
            <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">
              核心理念
            </p>
            <p className="text-lg font-serif font-semibold text-foreground leading-relaxed">
              「我不只是在使用 AI，我是在設計 AI 參與人類決策的工作流。」
            </p>
          </div>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-3 pt-4">
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


      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-60 hover:opacity-100 transition-opacity">
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
