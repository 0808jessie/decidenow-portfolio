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
            Vibe Coding 開發流程
          </h2>
          <p className="section-subtitle">
            從想法到產品的完整工作流
          </p>
        </div>

        {/* Flowchart Visualization */}
        <div className="bg-white border border-border rounded-lg p-12 shadow-sm overflow-x-auto">
          <svg
            viewBox="0 0 1200 400"
            className="w-full min-w-max"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Stage 1: Natural Language Brief */}
            <g>
              <rect x="20" y="100" width="140" height="80" rx="8" fill="oklch(0.97 0.005 80)" stroke="oklch(0.52 0.12 35)" strokeWidth="2" />
              <text x="90" y="135" textAnchor="middle" className="font-serif font-bold text-sm" fill="oklch(0.235 0.015 65)">
                自然語言
              </text>
              <text x="90" y="155" textAnchor="middle" className="text-xs" fill="oklch(0.552 0.016 285.938)">
                需求描述
              </text>
            </g>

            {/* Arrow 1 */}
            <path d="M 160 140 L 200 140" stroke="oklch(0.52 0.12 35)" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />

            {/* Stage 2: Lovable Prototype */}
            <g>
              <rect x="200" y="100" width="140" height="80" rx="8" fill="oklch(0.97 0.005 80)" stroke="oklch(0.52 0.12 35)" strokeWidth="2" />
              <text x="270" y="135" textAnchor="middle" className="font-serif font-bold text-sm" fill="oklch(0.235 0.015 65)">
                Lovable
              </text>
              <text x="270" y="155" textAnchor="middle" className="text-xs" fill="oklch(0.552 0.016 285.938)">
                快速原型
              </text>
            </g>

            {/* Arrow 2 */}
            <path d="M 340 140 L 380 140" stroke="oklch(0.52 0.12 35)" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />

            {/* Stage 3: GitHub Repository */}
            <g>
              <rect x="380" y="100" width="140" height="80" rx="8" fill="oklch(0.97 0.005 80)" stroke="oklch(0.52 0.12 35)" strokeWidth="2" />
              <text x="450" y="135" textAnchor="middle" className="font-serif font-bold text-sm" fill="oklch(0.235 0.015 65)">
                GitHub
              </text>
              <text x="450" y="155" textAnchor="middle" className="text-xs" fill="oklch(0.552 0.016 285.938)">
                版本管理
              </text>
            </g>

            {/* Arrow 3 */}
            <path d="M 520 140 L 560 140" stroke="oklch(0.52 0.12 35)" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />

            {/* Stage 4: VS Code Development */}
            <g>
              <rect x="560" y="100" width="140" height="80" rx="8" fill="oklch(0.97 0.005 80)" stroke="oklch(0.52 0.12 35)" strokeWidth="2" />
              <text x="630" y="135" textAnchor="middle" className="font-serif font-bold text-sm" fill="oklch(0.235 0.015 65)">
                VS Code
              </text>
              <text x="630" y="155" textAnchor="middle" className="text-xs" fill="oklch(0.552 0.016 285.938)">
                本地開發
              </text>
            </g>

            {/* Arrow 4 */}
            <path d="M 700 140 L 740 140" stroke="oklch(0.52 0.12 35)" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />

            {/* Stage 5: AI Collaboration */}
            <g>
              <rect x="740" y="100" width="140" height="80" rx="8" fill="oklch(0.97 0.005 80)" stroke="oklch(0.52 0.12 35)" strokeWidth="2" />
              <text x="810" y="135" textAnchor="middle" className="font-serif font-bold text-sm" fill="oklch(0.235 0.015 65)">
                AI 協作
              </text>
              <text x="810" y="155" textAnchor="middle" className="text-xs" fill="oklch(0.552 0.016 285.938)">
                品質把關
              </text>
            </g>

            {/* Arrow 5 */}
            <path d="M 880 140 L 920 140" stroke="oklch(0.52 0.12 35)" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />

            {/* Stage 6: Deployment */}
            <g>
              <rect x="920" y="100" width="140" height="80" rx="8" fill="oklch(0.52 0.12 35)" stroke="oklch(0.52 0.12 35)" strokeWidth="2" />
              <text x="990" y="135" textAnchor="middle" className="font-serif font-bold text-sm" fill="white">
                上線部署
              </text>
              <text x="990" y="155" textAnchor="middle" className="text-xs" fill="white">
                產品交付
              </text>
            </g>

            {/* Feedback Loop */}
            <path
              d="M 990 180 Q 600 280 270 180"
              stroke="oklch(0.52 0.12 35)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5,5"
              markerEnd="url(#arrowhead)"
            />
            <text x="600" y="300" textAnchor="middle" className="text-xs" fill="oklch(0.552 0.016 285.938)">
              迭代反饋
            </text>

            {/* Arrow marker definition */}
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                <polygon points="0 0, 10 3, 0 6" fill="oklch(0.52 0.12 35)" />
              </marker>
            </defs>
          </svg>
        </div>

        {/* Process Description */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            {
              title: '快速迭代',
              description: '從自然語言到可視化原型，在 Lovable 平台快速驗證想法。',
              icon: '⚡',
            },
            {
              title: '版本控制',
              description: '透過 GitHub 完整追蹤代碼變更，確保開發過程透明可控。',
              icon: '📦',
            },
            {
              title: 'AI 增強',
              description: '在本地開發中充分利用 AI 協作，提升代碼品質與開發效率。',
              icon: '🤖',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-card border border-border hover:shadow-sm transition-shadow"
              style={{
                animation: `fadeInUp 0.6s ease-out ${0.6 + index * 0.1}s both`,
              }}
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h4 className="font-serif font-bold text-foreground mb-2">{item.title}</h4>
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
