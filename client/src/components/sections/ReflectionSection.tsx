/**
 * Reflection Section - Personal Transformation & Achievement
 * Design: Warm beige background with narrative tone
 * Emphasizes: Journey, growth, and professional evolution
 */

export default function ReflectionSection() {
  return (
    <section id="reflection" className="py-24 bg-gradient-to-b from-background to-card">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="section-title">
            自我蛻變
          </h2>
          <p className="section-subtitle">
            從程式基礎到 AI 工作流設計者
          </p>
        </div>

        {/* Main Reflection Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Narrative */}
          <div className="space-y-8">
            {/* First Reflection */}
            <div
              className="space-y-4"
              style={{
                animation: `fadeInLeft 0.6s ease-out 0s both`,
              }}
            >
              <h3 className="text-2xl font-serif font-bold text-foreground">
                從基礎到可用的跨越
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  在此專案前，我只有在大學學過最基本的程式基礎。但在這個 AI 時代，透過正確的工具鏈調度與協作，我竟然能在一週內獨立打造出一套完整、可實際投入使用的 AI 引導式決策系統。
                </p>
                <p>
                  這種從 0 到 1 的落地過程，帶給我巨大的成就感。不是因為代碼有多複雜，而是因為我學會了如何設計系統、如何與 AI 協作、如何將抽象的想法轉化為具體的產品。
                </p>
              </div>
            </div>

            {/* Second Reflection */}
            <div
              className="space-y-4"
              style={{
                animation: `fadeInLeft 0.6s ease-out 0.2s both`,
              }}
            >
              <h3 className="text-2xl font-serif font-bold text-foreground">
                思維的終極轉型
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  這個專案徹底改變了我對技術的認知。工程師的價值不再受限於程式語法的熟練度，而是體現在「對問題的深度剖析能力、系統架構的整體規劃、以及如何設計 AI 穩定參與人類工作流的代理權限」。
                </p>
                <p>
                  這是我在 Vibe Coding 時代交出的第一份完美答卷——不是完美無缺，而是完美地詮釋了現代工程師應該具備的素質：與 AI 協作、系統思維、快速迭代、持續學習。
                </p>
              </div>
            </div>
          </div>

          {/* Right: Key Insights */}
          <div className="space-y-6">
            {[
              {
                title: '工具的力量',
                description: '正確的工具鏈不是加速器，而是倍增器。Lovable + GitHub + VS Code + AI 的組合，讓我能以 10 倍的效率交付產品。',
                icon: '⚙️',
              },
              {
                title: '架構思維',
                description: '從「如何寫代碼」轉變為「如何設計系統」。這個轉變讓我能夠在複雜問題面前保持清晰，而不是被細節淹沒。',
                icon: '🏗️',
              },
              {
                title: 'AI 協作',
                description: '不是替代，而是協作。我學會了如何讓 AI 成為我的思維延伸，而不是簡單的代碼生成工具。',
                icon: '🤝',
              },
              {
                title: '持續進化',
                description: '這不是終點，而是起點。每一個決策、每一行代碼、每一次迭代，都是我成長的證明。',
                icon: '🚀',
              },
            ].map((insight, index) => (
              <div
                key={index}
                className="card-minimal"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${0.3 + index * 0.1}s both`,
                }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">{insight.icon}</span>
                  <div className="flex-1">
                    <h4 className="font-serif font-bold text-foreground mb-2">
                      {insight.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {insight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-primary text-primary-foreground rounded-lg p-12 text-center space-y-6">
          <h3 className="text-3xl font-serif font-bold">
            開始您的 AI 工作流設計之旅
          </h3>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto">
            DecideNow 不只是一個工具，而是一個設計 AI 參與人類決策的完整框架。無論您是在做個人決策、團隊協作，還是企業戰略規劃，這套系統都能幫助您從模糊直覺轉化為科學量化的決策過程。
          </p>
          <button className="inline-block px-8 py-4 bg-primary-foreground text-primary font-serif font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 active:scale-95">
            開始探索
          </button>
        </div>

        {/* Final Message */}
        <div className="mt-16 text-center space-y-4">
          <p className="text-lg font-serif font-semibold text-foreground">
            「設計 AI 參與人類決策的工作流」
          </p>
          <p className="text-muted-foreground">
            這不只是一句口號，而是我在這個 AI 時代的職業宣言。
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeInLeft {
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
