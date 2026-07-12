/**
 * Product Gallery Section - Product Pages Showcase
 * Design: 2x2 grid layout for all product pages
 * Emphasizes: Product design & user interface quality
 */

export default function ProductGallerySection() {
  const productPages = [
    {
      id: '首',
      title: '首頁',
      description: '決策系統的入口，展示核心功能與價值主張。用戶可在此輸入決策問題，系統將引導完成四階決策流程。',
      image: '/manus-storage/decidenow-homepage_c5a73155.png',
      alt: 'DecideNow Homepage',
    },
    {
      id: '2',
      title: '決策矩陣',
      description: '四階決策流程的可視化界面，引導用戶逐步分析',
      image: '/manus-storage/decidenow-matrix_f48ab5fe.png',
      alt: 'DecideNow Decision Matrix',
    },
    {
      id: '3',
      title: '結果展示',
      description: 'AI 生成的決策建議與詳細分析報告',
      image: '/manus-storage/decidenow-results_3d272a1a.png',
      alt: 'DecideNow Results Display',
    },
    {
      id: '4',
      title: '歷史記錄',
      description: '決策歷史日誌與覆盤機制，支持對比與回顧',
      image: null,
      alt: 'DecideNow History Records',
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
                <div className="aspect-video bg-gradient-to-br from-primary/8 to-primary/12 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="text-center space-y-2 relative z-10">
                    <p className="text-sm font-medium text-muted-foreground">{page.title}頁面</p>
                    <p className="text-xs text-muted-foreground">產品頁面截圖</p>
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-sm font-serif font-bold text-primary" style={{fontSize: '20px'}}>{page.id}</span>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-foreground">
                    {page.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {page.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Info */}
        <div className="p-8 bg-gradient-to-r from-primary/5 to-primary/8 border border-primary/20 rounded-lg text-center space-y-3">
          <p className="text-sm font-medium text-foreground">
            完整的用戶旅程
          </p>
          <p className="text-xs text-muted-foreground max-w-2xl mx-auto">
            從初次接觸到決策完成，DecideNow 提供直觀的界面設計與流暢的用戶體驗，讓複雜的決策過程變得簡單易懂。
          </p>
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
