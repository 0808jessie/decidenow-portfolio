/**
 * Tech Highlights Section - Engineering Decisions
 * Design: Three dynamic cards with rich interactions & visual depth
 * Emphasizes: Architecture, API integration, persistence
 */

const techHighlights = [
  {
    id: 1,
    title: '即時狀態優化（AI 提示詞導向）',
    description: '為了確保用戶拖曳滑桿時介面不卡頓，我引導 AI 在前端採用 useMemo 來處理數十個動態標籤的即時矩陣運算，成功打造零延遲的流暢互動。',
    tech: ['React Hooks', 'useMemo', 'Performance'],
    bgImage: '/manus-storage/tech-card-bg-1_50b26e84.png',
    icon: '1',
    highlight: '0ms 延遲',
  },
  {
    id: 2,
    title: '結構化資料防錯（雙模型協作）',
    description: '為了解決 AI 幻覺導致網頁解析崩潰的問題，我指揮 Gemini 建立嚴格的 JSON 提示詞，並調用 Claude 3.5 協助編寫前端防錯邏輯，確保系統高容錯率。',
    tech: ['Gemini API', 'JSON Schema', 'Error Handling'],
    bgImage: '/manus-storage/tech-card-bg-2_9132a49b.png',
    icon: '2',
    highlight: '99.9% 可用性',
  },
  {
    id: 3,
    title: '資料持久化（Lovable 原型擴充）',
    description: '我在 Lovable 雛形基礎上，要求 AI 整合 LocalStorage 來儲存決策歷史。這讓用戶能隨時查閱日誌，實現「回頭覆盤 AI 預警」的產品閉環。',
    tech: ['LocalStorage', 'Data Persistence', 'Audit Log'],
    bgImage: '/manus-storage/tech-card-bg-3_3d39b4e3.png',
    icon: '3',
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
                  <div className="flex items-center gap-3">
                    <div className="text-primary font-serif font-bold flex-shrink-0" style={{fontSize: '24px'}}>
                      {highlight.icon}
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
