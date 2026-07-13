/**
 * Product Gallery Section - Product Pages Showcase
 * Design: 2x2 grid layout for all product pages
 * Emphasizes: Product design & user interface quality
 */

export default function ProductGallerySection() {
  const productPages = [
    {
      id: '1',
      title: '首頁',
      description: '決策系統的入口，展示核心功能與價值主張。用戶可在此輸入決策問題，系統將引導完成四階決策流程。',
      image: '/manus-storage/decidenow-homepage_c5a73155.png',
      alt: 'DecideNow Homepage',
    },
    {
      id: '2',
      title: '指標加權與標籤池',
      description: '系統透過 useState 管理即時狀態，將 AI 提取的利弊標籤與手動因子轉化為加權滑桿，讓使用者能直覺校準不同維度對最終決策的影響力。',
      image: '/manus-storage/decidenow-matrix_f48ab5fe.png',
      alt: 'DecideNow Decision Matrix',
    },
    {
      id: '3',
      title: 'AI 決策反饋面板',
      description: '核心引擎調度 Gemini API 進行交叉比對，主動扮演「反方挑戰者」揭露人類當局者迷的專案風險，並透過 90% 的信心指數給出具體且符合邏輯的行動替代方案。',
      image: '/manus-storage/decidenow-results_3d272a1a.png',
      alt: 'DecideNow Results Display',
    },
    {
      id: '4',
      title: 'ICE 決策沙盒',
      description: '引入敏捷開發標準的 ICE 模型，利用 useMemo 即時運算綜合決策分數，並自動生成最高風險警示與 Plan B 應變計畫，將定性直覺收斂為立體的科學實踐方案。',
      image: '/manus-storage/Snipaste_2026-07-13_02-53-11_5c0c103e.png',
      alt: 'DecideNow ICE Decision Sandbox',
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-background relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="section-title">
            產品頁面展示
          </h2>
          <p className="section-subtitle">
            DecideNow 決策系統的完整用戶界面
          </p>
        </div>

        {/* Product Gallery - 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {productPages.map((page, index) => (
            <div
              key={page.id}
              className="group rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-md transition-all duration-300 bg-card"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {page.image ? (
                // Real Screenshot
                <img
                  src={page.image}
                  alt={page.alt}
                  className="w-full h-auto"
                />
              ) : (
                // Placeholder
                <div className="aspect-video bg-gradient-to-br from-primary/8 to-primary/12 flex items-center justify-center relative overflow-hidden" style={{height: '324px', width: '719px'}}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{height: '324px', width: '718px'}} />
                  <div className="text-center space-y-2 relative z-10">
                    <p className="text-sm font-medium text-muted-foreground">{page.title}頁面</p>
                    <p className="text-xs text-muted-foreground">產品頁面截圖</p>
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-4">
                  <div className="text-primary font-bold flex-shrink-0" style={{fontSize: '30px', paddingTop: '5px', height: '28px', display: 'flex', alignItems: 'center'}}>
                    {page.id}
                  </div>
                  <h3 className="font-serif font-bold text-foreground" style={{fontSize: '18px'}}>
                    {page.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground" style={{fontSize: '16px'}}>
                  {page.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Info with CTA */}
        <div className="p-8 bg-gradient-to-r from-primary/5 to-primary/8 border border-primary/20 rounded-lg text-center space-y-6">
          <div className="space-y-3">
            <p className="text-sm font-medium text-foreground" style={{fontSize: '18px', fontWeight: '600'}}>
              完整的用戶旅程
            </p>
            <p className="text-xs text-muted-foreground max-w-2xl mx-auto" style={{fontSize: '16px'}}>
              從初次接觸到決策完成，DecideNow 提供直觀的界面設計與流暢的用戶體驗，讓複雜的決策過程變得簡單易懂。
            </p>
          </div>
          <a
            href="https://0808jessie.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground font-serif font-bold rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            style={{fontSize: '16px'}}
          >
            立即體驗
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
      `}</style>
    </section>
  );
}
