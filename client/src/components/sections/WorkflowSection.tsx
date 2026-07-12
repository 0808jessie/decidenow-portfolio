/**
 * Workflow Section - Four-Stage AI Decision Process
 * Design: Linear timeline with step cards
 * Emphasizes: Define → Generate → Evaluate → Advise
 */

const workflowSteps = [
  {
    id: 1,
    title: '定義問題',
    subtitle: 'Define',
    description: '使用者輸入一句日常糾結，底層應用 PTCF 提示詞框架，精準鎖定決策的核心邊界與上下文背景。',
    icon: '①',
  },
  {
    id: 2,
    title: '生成選項',
    subtitle: 'Generate',
    description: 'AI 自動扮演客觀評判者，跳脫泛泛之談，動態生成切合情境的專屬「優點與風險標籤池」。',
    icon: '②',
  },
  {
    id: 3,
    title: '評估風險',
    subtitle: 'Evaluate',
    description: '引入 ICE 模型量化加權，由 AI 擔任反方挑戰者進行交叉推理，主動揭露人類當局者迷的盲點與隱性風險。',
    icon: '③',
  },
  {
    id: 4,
    title: '給出建議',
    subtitle: 'Advise',
    description: '結合沙盒反饋與最大風險評估，強制輸出具備行動可行性的應變方案，完成複雜決策閉環。',
    icon: '④',
  },
];

export default function WorkflowSection() {
  return (
    <section id="workflow" className="py-24 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="section-title">
            突破傳統問答
          </h2>
          <p className="section-subtitle">
            設計 AI 參與人類決策的四階工作流
          </p>
        </div>

        {/* Workflow Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflowSteps.map((step, index) => (
            <div
              key={step.id}
              className="workflow-step group"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Timeline Dot */}
              <div className="timeline-dot group-hover:scale-110 transition-transform duration-200">
                {step.icon}
              </div>

              {/* Connector Line */}
              {index < workflowSteps.length - 1 && (
                <div className="hidden lg:block absolute left-1/2 top-20 w-0.5 h-12 bg-gradient-to-b from-primary to-primary/20 -translate-x-1/2" />
              )}

              {/* Step Card */}
              <div className="card-minimal w-full text-center">
                <h3 className="text-lg font-serif font-bold text-foreground mb-1">
                  {step.title}
                </h3>
                <p className="text-xs font-mono text-primary mb-4">
                  {step.subtitle}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Workflow Benefits */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: '精準定義',
              description: '從模糊直覺到清晰邊界',
            },
            {
              title: '客觀評估',
              description: '跳脫情緒，量化決策因子',
            },
            {
              title: '風險預警',
              description: '發現隱性風險，完成閉環',
            },
          ].map((benefit, index) => (
            <div
              key={index}
              className="text-center space-y-3"
              style={{
                animation: `fadeInUp 0.6s ease-out ${0.5 + index * 0.1}s both`,
              }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto">
                <span className="text-primary font-serif font-bold">{index + 1}</span>
              </div>
              <h4 className="font-serif font-semibold text-foreground">{benefit.title}</h4>
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
