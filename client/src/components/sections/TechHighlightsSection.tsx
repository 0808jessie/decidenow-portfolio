/**
 * Tech Highlights Section - Engineering Decisions
 * Design: Three minimalist cards with subtle textures
 * Emphasizes: Architecture, API integration, persistence
 */

const techHighlights = [
  {
    id: 1,
    title: '矩陣即時運算與狀態管理',
    description: '在前端利用 useState 結合 useMemo，針對用戶隨時調整的數十個動態加權標籤，進行流暢的即時矩陣運算，保證高頻拖曳滑桿時 UI 響應無延遲。',
    tech: ['React Hooks', 'useMemo', 'Performance'],
    bgImage: '/manus-storage/tech-card-bg-1_50b26e84.png',
  },
  {
    id: 2,
    title: 'Google AI Studio API 高可用串接',
    description: '利用 Google AI Studio 平台串接 Gemini API 進行模型調度。設計嚴格的系統級提示詞限制，強制模型輸出純 JSON 格式，並在前端編寫強健的轉型與正則提取邏輯，徹底預防 AI 幻覺導致的解析崩潰。',
    tech: ['Gemini API', 'JSON Schema', 'Error Handling'],
    bgImage: '/manus-storage/tech-card-bg-2_9132a49b.png',
  },
  {
    id: 3,
    title: '持久化與覆盤機制',
    description: '整合 LocalStorage 實現決策歷史日誌。不僅保留當下的數據，更為團隊建立覆盤機制，以便上線後對比當時 AI 警告的風險是否應驗。',
    tech: ['LocalStorage', 'Data Persistence', 'Audit Log'],
    bgImage: '/manus-storage/tech-card-bg-3_3d39b4e3.png',
  },
];

export default function TechHighlightsSection() {
  return (
    <section id="tech" className="py-24 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="section-title">
            技術亮點與架構實踐
          </h2>
          <p className="section-subtitle">
            工程決策與系統設計的核心亮點
          </p>
        </div>

        {/* Tech Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {techHighlights.map((highlight, index) => (
            <div
              key={highlight.id}
              className="group relative overflow-hidden rounded-lg border border-border transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Background Texture */}
              <div
                className="absolute inset-0 opacity-50"
                style={{
                  backgroundImage: `url(${highlight.bgImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />

              {/* Content Overlay */}
              <div className="relative bg-card/95 backdrop-blur-sm p-8 h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <span className="text-primary font-serif font-bold">{highlight.id}</span>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-foreground leading-tight">
                    {highlight.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {highlight.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                  {highlight.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/5 border border-primary/20 rounded text-xs font-mono text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Architecture Principles */}
        <div className="mt-20 bg-card border border-border rounded-lg p-8">
          <h3 className="text-xl font-serif font-bold text-foreground mb-6">
            架構設計原則
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: '性能優先',
                description: '即時運算與流暢 UI 響應是核心',
              },
              {
                title: '可靠性保障',
                description: '嚴格的錯誤處理與 AI 幻覺預防',
              },
              {
                title: '數據完整性',
                description: '持久化存儲與完整的審計日誌',
              },
            ].map((principle, index) => (
              <div key={index} className="space-y-3">
                <h4 className="font-serif font-semibold text-foreground">
                  {principle.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
