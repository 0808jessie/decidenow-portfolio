/**
 * Tech Highlights Section - Engineering Decisions
 * Design: Three dynamic cards with rich interactions & visual depth
 * Emphasizes: Architecture, API integration, persistence
 */

const techHighlights = [
  {
    id: 1,
    title: '矩陣即時運算與狀態管理',
    description: '在前端利用 useState 結合 useMemo，針對用戶隨時調整的數十個動態加權標籤，進行流暢的即時矩陣運算，保證高頻拖曳滑桿時 UI 響應無延遲。',
    tech: ['React Hooks', 'useMemo', 'Performance'],
    bgImage: '/manus-storage/tech-card-bg-1_50b26e84.png',
    icon: '⚡',
    highlight: '0ms 延遲',
  },
  {
    id: 2,
    title: 'Google AI Studio API 高可用串接',
    description: '利用 Google AI Studio 平台串接 Gemini API 進行模型調度。設計嚴格的系統級提示詞限制，強制模型輸出純 JSON 格式，並在前端編寫強健的轉型與正則提取邏輯，徹底預防 AI 幻覺導致的解析崩潰。',
    tech: ['Gemini API', 'JSON Schema', 'Error Handling'],
    bgImage: '/manus-storage/tech-card-bg-2_9132a49b.png',
    icon: '🤖',
    highlight: '99.9% 可用性',
  },
  {
    id: 3,
    title: '持久化與覆盤機制',
    description: '整合 LocalStorage 實現決策歷史日誌。不僅保留當下的數據，更為團隊建立覆盤機制，以便上線後對比當時 AI 警告的風險是否應驗。',
    tech: ['LocalStorage', 'Data Persistence', 'Audit Log'],
    bgImage: '/manus-storage/tech-card-bg-3_3d39b4e3.png',
    icon: '📊',
    highlight: '完整審計',
  },
];

export default function TechHighlightsSection() {
  return (
    <section id="tech" className="py-24 bg-background relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {techHighlights.map((highlight, index) => (
            <div
              key={highlight.id}
              className="group relative overflow-hidden rounded-lg border border-border transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Background Texture with Overlay */}
              <div
                className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-300"
                style={{
                  backgroundImage: `url(${highlight.bgImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 group-hover:to-primary/10 transition-all duration-300" />

              {/* Content Overlay */}
              <div className="relative bg-card/98 backdrop-blur-md p-8 h-full flex flex-col justify-between">
                {/* Top Section with Icon & Title */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">{highlight.icon}</span>
                    </div>
                    <h3 className="font-serif font-bold text-foreground leading-tight group-hover:text-primary transition-colors duration-300" style={{fontSize: '18px'}}>
                      {highlight.title}
                    </h3>
                  </div>

                  <p className="leading-relaxed text-muted-foreground" style={{fontSize: '16px'}}>
                    {highlight.description}
                  </p>
                </div>


              </div>

              {/* Hover Accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-transparent group-hover:from-primary/3 group-hover:to-primary/8 transition-all duration-300 pointer-events-none" />
            </div>
          ))}
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
