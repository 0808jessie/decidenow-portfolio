/**
 * Reflection Section - Personal Transformation & Achievement
 * Design: Two-row layout with left-right arrangement
 * Emphasizes: Journey, growth, and professional evolution
 */

export default function ReflectionSection() {
  const reflections = [
    {
      title: '從基礎到可用的跨越',
      description: '在此專案前，我只有在大學學過最基本的程式基礎。但在這個 AI 時代，透過正確的工具鏈調度與協作，我竟然能在一週內獨立打造出一套完整、可實際投入使用的 AI 引導式決策系統。這種從 0 到 1 的落地過程，帶給我巨大的成就感。',
      icon: '▲',
      color: 'from-orange-50 to-amber-50',
    },
    {
      title: '思維的終極轉型',
      description: '這個專案徹底改變了我對技術的認知。工程師的價值不再受限於程式語法的熟練度，而是體現在「對問題的深度剖析能力、系統架構的整體規劃、以及如何設計 AI 穩定參與人類工作流的代理權限」。',
      icon: '◆',
      color: 'from-slate-50 to-gray-50',
    },
    {
      title: 'AI 協作新範式',
      description: '不是替代，而是協作。我學會了如何讓 AI 成為我的思維延伸，而不是簡單的代碼生成工具。這種協作方式讓我能夠專注於系統設計，而把繁瑣的細節交給 AI。',
      icon: '◆',
      color: 'from-slate-50 to-gray-50',
    },
    {
      title: '持續進化的起點',
      description: '這不是終點，而是起點。每一個決策、每一行代碼、每一次迭代，都是我成長的證明。在 Vibe Coding 時代，我已經找到了屬於自己的工程師身份——不是被工具定義，而是用工具來實現想法。',
      icon: '▲',
      color: 'from-orange-50 to-amber-50',
    },
  ];

  const keyInsights = [
    {
      title: '工具的力量',
      description: '正確的工具鏈不是加速器，而是倍增器。Lovable + GitHub + VS Code + AI 的組合，讓我能以 10 倍的效率交付產品。',
    },
    {
      title: '架構思維',
      description: '從「如何寫代碼」轉變為「如何設計系統」。這個轉變讓我能夠在複雜問題面前保持清晰。',
    },
    {
      title: '快速迭代',
      description: '在 AI 時代，迭代速度決定競爭力。從想法到產品，從原型到上線，都在加速。',
    },
    {
      title: '持續學習',
      description: '技術不斷演進，唯有持續學習才能保持競爭力。每個項目都是一次深度學習的機會。',
    },
  ];

  return (
    <section id="reflection" className="py-24 bg-gradient-to-b from-background to-card relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="section-title">
            自我蛻變
          </h2>
          <p className="section-subtitle">
            從程式基礎到 AI 工作流設計者
          </p>
        </div>

        {/* Two-Row Reflection Layout */}
        <div className="space-y-12 mb-16">
          {/* Row 1: Reflections 1 & 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reflections.slice(0, 2).map((reflection, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${reflection.color} border border-primary/10 rounded-lg p-8 hover:shadow-md hover:bg-opacity-80 transition-all duration-300`}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl font-bold flex-shrink-0 text-primary" style={{fontSize: '30px'}}>{reflection.icon}</div>
                  <h3 className="text-xl font-serif font-bold text-foreground pt-2">
                    {reflection.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {reflection.description}
                </p>
              </div>
            ))}
          </div>

          {/* Row 2: Reflections 3 & 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reflections.slice(2, 4).map((reflection, index) => (
              <div
                key={index + 2}
                className={`bg-gradient-to-br ${reflection.color} border border-primary/10 rounded-lg p-8 hover:shadow-md hover:bg-opacity-80 transition-all duration-300`}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${(index + 2) * 0.1}s both`,
                }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl font-bold flex-shrink-0 text-primary" style={{fontSize: '30px'}}>{reflection.icon}</div>
                  <h3 className="text-xl font-serif font-bold text-foreground pt-2">
                    {reflection.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {reflection.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Insights Grid */}
        <div className="mb-16">
          <h3 className="text-xl font-serif font-bold text-foreground mb-8">
            核心洞察
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyInsights.map((insight, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-4 hover:bg-primary/5 transition-colors duration-200"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${0.6 + index * 0.1}s both`,
                }}
              >
                <h4 className="font-serif font-bold text-foreground text-sm mb-2" style={{fontSize: '18px'}}>
                  {insight.title}
                </h4>
                <p className="text-xs leading-relaxed text-muted-foreground" style={{fontSize: '16px'}}>
                  {insight.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center space-y-6 p-8 bg-gradient-to-r from-primary/8 to-primary/12 border border-primary/20 rounded-lg">
          <p className="text-lg font-serif font-semibold text-foreground leading-relaxed max-w-2xl mx-auto">
            「這是我在 Vibe Coding 時代交出的第一份完美答卷——不是完美無缺，而是完美地詮釋了現代工程師應該具備的素質。」
          </p>
          <a
            href="https://0808jessie.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-serif font-semibold rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
          >
            開始探索
            <span>→</span>
          </a>
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
      `}</style>
    </section>
  );
}
