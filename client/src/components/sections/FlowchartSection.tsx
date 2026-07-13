/**
 * Flowchart Section - Vibe Coding Development Process
 * Design: Full-width flowchart visualization
 * Emphasizes: Development workflow & tool orchestration
 */

export default function FlowchartSection() {
  return (
    <section id="flowchart" className="py-24 bg-gradient-to-b from-background to-card relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="section-title">
            DecideNow 系統架構
          </h2>
          <p className="section-subtitle">
            從需求到持久化的完整工作流
          </p>
        </div>

        {/* Flowchart Image */}
        <div className="bg-white border border-border rounded-lg p-4 shadow-sm overflow-hidden">
          <img
            src="/manus-storage/decidenow-flowchart_6fd0fe15.png"
            alt="DecideNow System Architecture Flowchart"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Architecture Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            {
              title: '命題架構',
              description: '使用 PTCF 框架清晰定義複雜命題，為 AI 結構化請求奠定基礎。',
              icon: '🎯',
            },
            {
              title: 'AI 協同推理',
              description: '透過 Gemini API 結構化請求，DecideNow 協同推理核心生成決策建議。',
              icon: '🧠',
            },
            {
              title: '持久化管理',
              description: '完整的本地持久化與覆盤機制，支持歷史日誌、決策追蹤與滿意度評估。',
              icon: '💾',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-card border border-border hover:shadow-sm transition-shadow"
              style={{
                animation: `fadeInUp 0.6s ease-out ${0.6 + index * 0.1}s both`,
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="text-2xl flex-shrink-0">{item.icon}</div>
                <h4 className="font-serif font-bold text-foreground">{item.title}</h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
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
