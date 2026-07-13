/**
 * Development Section - Vibe Coding Workflow
 * Design: 2x2 grid layout with screenshots on top, content below
 * Emphasizes: Modern development paradigm & tool orchestration
 */

const developmentStages = [
  {
    id: 1,
    title: 'Lovable 原型設計',
    description: '在開發初期，完全使用 Lovable 平台，以自然語言快速提煉並驗證初版的 UI/UX 畫面與基礎動態。',
    tools: ['Lovable', 'Natural Language'],
    screenshotLabel: 'Lovable 平台界面',
    image: '/manus-storage/Snipaste_2026-07-13_19-46-57_5d840d9c.png',
  },
  {
    id: 2,
    title: 'GitHub 雙向連接',
    description: '原型確認後，直接將 Lovable 專案連接至 GitHub 儲存庫，並克隆至本機端開發環境。',
    tools: ['GitHub', 'Git Clone'],
    screenshotLabel: 'GitHub 儲存庫',
    image: '/manus-storage/Snipaste_2026-07-13_20-19-30_e7deffa3.png',
  },
  {
    id: 3,
    title: 'VS Code Vibe Coding',
    description: '在本機端使用 VS Code 實踐 Vibe Coding 的最高指導原則——將精力專注於系統架構與邏輯拆解，把編碼細節交給 AI。',
    tools: ['VS Code', 'Vibe Coding'],
    screenshotLabel: 'VS Code 開發環境',
    image: '/manus-storage/Snipaste_2026-07-13_19-49-56_0e735afb.png',
  },
  {
    id: 4,
    title: '雙模型協作',
    description: '在遇到複雜邏輯或排版異常時，動態調度 Gemini 與 Claude 3.5 雙模型進行品質把關。',
    tools: ['Gemini', 'Claude 3.5'],
    screenshotLabel: '模型協作流程',
  },
];

export default function DevelopmentSection() {
  return (
    <section id="development" className="py-24 bg-background relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-20">
          <h2 className="section-title">
            從點子到落地
          </h2>
          <p className="section-subtitle">
            現代開發範式實踐 (Modern Development Paradigm)
          </p>
        </div>

        {/* Development Timeline - 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {developmentStages.map((stage, index) => (
            <div
              key={stage.id}
              className="flex flex-col items-stretch"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Screenshot Area - Top */}
              <div className="mb-6 rounded-lg overflow-hidden border border-border shadow-sm bg-card order-first">
                {stage.image ? (
                  <img src={stage.image} alt={stage.screenshotLabel} className="w-full h-auto" />
                ) : (
                  <div className="aspect-video bg-gradient-to-br from-primary/8 to-primary/12 rounded-lg flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <p className="text-sm text-muted-foreground font-medium">{stage.screenshotLabel}</p>
                      <p className="text-xs text-muted-foreground">工具截圖展示</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Content Card - Bottom */}
              <div className="card-minimal">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif font-bold text-xs shadow-sm flex-shrink-0" style={{fontSize: '20px'}}>
                    {stage.id}
                  </div>
                  <h3 className="font-serif font-bold text-foreground" style={{fontSize: '18px'}}>
                    {stage.title}
                  </h3>
                </div>
                <p className="leading-relaxed text-muted-foreground mb-3" style={{fontSize: '16px'}}>
                  {stage.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {stage.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-1 bg-primary/8 border border-primary/30 rounded-md text-xs font-mono text-primary hover:bg-primary/15 transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Principle */}
        <div className="bg-gradient-to-r from-primary/5 to-primary/8 border border-primary/20 rounded-lg p-8 mb-16">
          <p className="text-center text-lg font-serif font-semibold text-foreground leading-relaxed">
            「將精力專注於系統架構與邏輯拆解，把編碼細節與邊界除錯交給 AI」
          </p>
          <p className="text-center text-sm text-muted-foreground mt-4">
            Vibe Coding 的核心指導原則
          </p>
        </div>

        {/* Tool Orchestration Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: '快速驗證',
              icon: '⚡',
              description: 'Lovable 平台快速原型',
            },
            {
              title: '版本管理',
              icon: '📦',
              description: 'GitHub 完整的代碼追蹤',
            },
            {
              title: '本地開發',
              icon: '💻',
              description: 'VS Code 專業開發環境',
            },
            {
              title: '智能協作',
              icon: '🤖',
              description: '多模型聯動品質把關',
            },
          ].map((benefit, index) => (
            <div
              key={index}
              className="space-y-3 p-4 rounded-lg bg-card hover:bg-primary/5 transition-colors"
              style={{
                animation: `fadeInUp 0.6s ease-out ${0.8 + index * 0.1}s both`,
              }}
            >
              <div className="flex items-center gap-2">
                <div className="text-2xl flex-shrink-0">{benefit.icon}</div>
                <h4 className="font-serif font-semibold text-foreground">{benefit.title}</h4>
              </div>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
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
