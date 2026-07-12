/**
 * Development Section - Vibe Coding Workflow
 * Design: Linear timeline with development stages
 * Emphasizes: Modern development paradigm & tool orchestration
 */

const developmentStages = [
  {
    id: 1,
    title: 'Lovable 原型設計',
    description: '在開發初期，完全使用 Lovable 平台，以自然語言快速提煉並驗證初版的 UI/UX 畫面與基礎動態。',
    tools: ['Lovable', 'Natural Language'],
  },
  {
    id: 2,
    title: 'GitHub 雙向鏈接',
    description: '原型確認後，直接將 Lovable 專案連接至 GitHub 儲存庫，並克隆至本機端開發環境。',
    tools: ['GitHub', 'Git Clone'],
  },
  {
    id: 3,
    title: 'VS Code Vibe Coding',
    description: '在本機端使用 VS Code 實踐 Vibe Coding 的最高指導原則——將精力專注於系統架構與邏輯拆解，把編碼細節交給 AI。',
    tools: ['VS Code', 'Vibe Coding'],
  },
  {
    id: 4,
    title: '雙模型協作',
    description: '在遇到複雜邏輯或排版異常時，動態調度 Gemini 與 Claude 3.5 雙模型進行品質把關。',
    tools: ['Gemini', 'Claude 3.5'],
  },
];

export default function DevelopmentSection() {
  return (
    <section id="development" className="py-24 bg-card">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="section-title">
            從點子到落地
          </h2>
          <p className="section-subtitle">
            現代開發範式實踐 (Modern Development Paradigm)
          </p>
        </div>

        {/* Development Timeline */}
        <div className="space-y-8">
          {developmentStages.map((stage, index) => (
            <div
              key={stage.id}
              className="flex gap-8 items-start"
              style={{
                animation: `slideInLeft 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Timeline Marker */}
              <div className="flex flex-col items-center gap-4 flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif font-bold text-lg shadow-sm">
                  {stage.id}
                </div>
                {index < developmentStages.length - 1 && (
                  <div className="w-1 h-16 bg-gradient-to-b from-primary to-primary/30" />
                )}
              </div>

              {/* Content Card */}
              <div className="flex-1 pt-2">
                <div className="card-minimal">
                  <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                    {stage.title}
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground mb-4">
                    {stage.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {stage.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 bg-background border border-border rounded-md text-xs font-mono text-foreground"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Principle */}
        <div className="mt-16 bg-background border-2 border-primary/20 rounded-lg p-8">
          <p className="text-center text-lg font-serif font-semibold text-foreground leading-relaxed">
            「將精力專注於系統架構與邏輯拆解，把編碼細節與邊界除錯交給 AI」
          </p>
          <p className="text-center text-sm text-muted-foreground mt-4">
            Vibe Coding 的核心指導原則
          </p>
        </div>

        {/* Tool Orchestration Benefits */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              className="text-center space-y-3 p-4 rounded-lg hover:bg-card transition-colors"
              style={{
                animation: `fadeInUp 0.6s ease-out ${0.8 + index * 0.1}s both`,
              }}
            >
              <div className="text-3xl">{benefit.icon}</div>
              <h4 className="font-serif font-semibold text-foreground">{benefit.title}</h4>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
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
