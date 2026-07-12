# DecideNow | AI 代理工作流與引導式決策矩陣工具

## 專案概述

**DecideNow** 是一個展示 AI 工作流設計、Vibe Coding 開發範式與決策矩陣系統的作品集網頁。本專案詳細闡述如何設計 AI 參與人類決策的完整工作流，從問題定義到風險評估的四階決策過程。

### 核心理念

> 「我不只是在使用 AI，我是在設計 AI 參與人類決策的工作流 (Designing AI-Augmented Workflows)。」

## 設計風格

### 日系極簡主義（Japanese Minimalism）

本專案採用日系極簡風格，強調「侘寂」（Wabi-Sabi）的精神——在簡潔中發現美、在留白中感受呼吸、在細節中體現工藝。

**視覺特徵：**
- **色彩系統**：暖白（Warm Beige）、米色、淡米色、深灰、棕色
- **排版**：Noto Serif JP（標題）、Noto Sans JP（正文）、Fira Code（代碼）
- **佈局**：非中心對稱、高留白度、清晰的線性邏輯
- **細節**：細線邊框、微妙陰影、精緻卡片設計

## 頁面結構

### 1. Hero Section（首屏）
- 品牌標識與主標題
- 核心理念卡片
- 技術棧標籤（React、TypeScript、TailwindCSS、Gemini API、Lovable）
- 視覺裝飾元素

### 2. Workflow Section（工作流區塊）
展示 AI 引導式決策的四階工作流：

| 階段 | 標題 | 描述 |
|------|------|------|
| 1 | 定義問題 | 使用 PTCF 提示詞框架精準鎖定決策邊界 |
| 2 | 生成選項 | AI 動態生成切合情境的優點與風險標籤池 |
| 3 | 評估風險 | 引入 ICE 模型量化加權，揭露隱性風險 |
| 4 | 給出建議 | 輸出具備行動可行性的應變方案 |

### 3. Development Section（開發歷程）
詳細展示 Vibe Coding 工作流的四個階段：

1. **Lovable 原型設計** — 快速驗證 UI/UX
2. **GitHub 雙向鏈接** — 版本管理與本地克隆
3. **VS Code Vibe Coding** — 本機開發與 AI 協作
4. **雙模型協作** — Gemini 與 Claude 3.5 的品質把關

### 4. Tech Highlights Section（技術亮點）
三個核心技術決策的詳細說明：

1. **矩陣即時運算與狀態管理** — React Hooks 與 useMemo 優化
2. **Google AI Studio API 高可用串接** — Gemini API 與 JSON Schema
3. **持久化與覆盤機制** — LocalStorage 與審計日誌

### 5. Reflection Section（結語蛻變）
個人成長敘事與四個關鍵洞察：

- 從基礎到可用的跨越
- 思維的終極轉型
- 工具的力量
- 架構思維與 AI 協作

## 技術棧

| 層級 | 技術 | 說明 |
|------|------|------|
| 框架 | React 19 + TypeScript | 現代化前端開發 |
| 樣式 | TailwindCSS 4 | 原子化 CSS 框架 |
| 字體 | Noto Serif/Sans JP | 日系字體支持 |
| 組件 | shadcn/ui | 高質量 UI 組件庫 |
| 動畫 | Framer Motion + CSS | 流暢的微互動 |
| 路由 | Wouter | 輕量級客戶端路由 |

## 色彩系統

### OKLCH 色彩空間

| 用途 | 色值 | 說明 |
|------|------|------|
| 背景 | `oklch(0.98 0.005 80)` | 暖白 |
| 卡片 | `oklch(0.96 0.008 85)` | 淡米色 |
| 文字 | `oklch(0.25 0.02 65)` | 深灰 |
| 邊框 | `oklch(0.92 0.004 90)` | 細線灰 |
| 強調 | `oklch(0.55 0.08 45)` | 溫暖棕色 |

## 排版層級

| 用途 | 字體 | 大小 | 行高 | 字重 |
|------|------|------|------|------|
| 主標題 | Noto Serif JP | 3.5rem | 1.2 | 700 |
| 副標題 | Noto Serif JP | 2rem | 1.3 | 600 |
| 章節標題 | Noto Sans JP | 1.5rem | 1.4 | 600 |
| 正文 | Noto Sans JP | 1rem | 1.6 | 400 |
| 小文本 | Noto Sans JP | 0.875rem | 1.5 | 400 |
| 標籤 | Fira Code | 0.75rem | 1.5 | 500 |

## 動畫與互動

### 微互動設計

- **按鈕懸停**：背景色變深，過渡時間 150ms
- **卡片懸停**：輕微上浮，陰影增強
- **滾動動畫**：卡片逐個淡入，間隔 100ms
- **焦點狀態**：強調色邊框，無外發光

### 入場動畫

- **淡入 + 上升**：opacity 0→1，translateY 20px→0
- **過渡時間**：150-250ms
- **緩動函數**：`cubic-bezier(0.23, 1, 0.32, 1)`

## 開發工作流

### 本地開發

```bash
# 安裝依賴
pnpm install

# 啟動開發服務器
pnpm dev

# 構建生產版本
pnpm build

# 預覽生產版本
pnpm preview
```

### 代碼結構

```
client/
├── src/
│   ├── pages/
│   │   ├── Home.tsx          # 主頁面
│   │   └── NotFound.tsx      # 404 頁面
│   ├── components/
│   │   ├── sections/         # 頁面區塊
│   │   │   ├── HeroSection.tsx
│   │   │   ├── WorkflowSection.tsx
│   │   │   ├── DevelopmentSection.tsx
│   │   │   ├── TechHighlightsSection.tsx
│   │   │   └── ReflectionSection.tsx
│   │   └── ui/              # shadcn/ui 組件
│   ├── contexts/            # React Context
│   ├── hooks/               # 自定義 Hooks
│   ├── lib/                 # 工具函數
│   ├── App.tsx              # 應用入口
│   ├── main.tsx             # React 入口
│   └── index.css            # 全域樣式
├── public/                  # 靜態資源
└── index.html              # HTML 模板
```

## 視覺資產

### 生成的資產

- **Logo**：四階決策流程的圖形符號（200x200px）
- **Hero 背景**：日系極簡風格的抽象背景
- **工作流插圖**：四個步驟的圖示
- **技術卡片背景**：三種微妙紋理背景

### 資產使用

所有圖片資源通過 `/manus-storage/` 路徑引用，確保快速加載與持久化存儲。

## 性能優化

### 前端優化

- **Lazy Loading**：圖片與組件按需加載
- **CSS-in-JS**：TailwindCSS 原子化樣式，最小化 CSS 體積
- **動畫優化**：僅使用 `transform` 和 `opacity`，避免 layout thrashing
- **字體加載**：Google Fonts 的 `display=swap` 策略

### 響應式設計

- **移動優先**：基礎樣式針對移動設備優化
- **斷點**：sm (640px)、md (768px)、lg (1024px)、xl (1280px)
- **網格系統**：Tailwind 的 12 列網格

## 無障礙設計

- **語義 HTML**：正確使用標籤結構
- **焦點管理**：可見焦點環、鍵盤導航
- **對比度**：文字與背景滿足 WCAG AA 標準
- **動畫尊重**：`prefers-reduced-motion` 媒體查詢支持

## 部署

本專案是靜態網頁，可部署到任何支持靜態資源的平台：

- **Manus WebDev**：內置託管與自動部署
- **Vercel / Netlify**：Git 集成與自動化部署
- **自託管**：使用 `pnpm build` 生成 `dist/` 目錄

## 後續擴展

### 可能的增強方向

1. **互動決策演示**：集成真實的 Gemini API，讓訪客體驗決策工作流
2. **案例研究**：添加真實的決策案例與結果分析
3. **團隊協作**：支持多用戶決策過程與實時協作
4. **數據可視化**：決策歷史的圖表分析與趨勢預測
5. **移動應用**：React Native 版本的移動應用

## 設計決策記錄

### 為什麼選擇日系極簡風格？

1. **文化共鳴**：日系設計的「侘寂」精神與 AI 工作流設計的哲學相符
2. **視覺清晰**：高留白度與清晰的線性邏輯強調決策過程的步驟性
3. **專業感**：暖色調與精緻細節傳達信任與可靠性
4. **獨特性**：避免常見的科技風格，打造記憶點

### 為什麼使用 Noto 字體？

1. **完整支持**：Noto Serif JP 與 Noto Sans JP 提供完整的日文字形
2. **開源免費**：Google Fonts 提供，無許可證限制
3. **專業外觀**：襯線與無襯線的搭配傳達精緻感
4. **性能優化**：Google Fonts 的 CDN 與緩存機制

### 為什麼選擇 OKLCH 色彩空間？

1. **感知均勻**：OKLCH 在人眼感知上更均勻，色彩過渡更自然
2. **易於調整**：相比 HSL，OKLCH 的亮度調整更直觀
3. **現代標準**：CSS Color Module Level 4 的推薦色彩空間
4. **跨平台一致**：OKLCH 色彩在不同設備上的表現更一致

## 貢獻指南

本專案是個人作品集，暫不接受外部貢獻。如有建議或反饋，歡迎通過以下方式聯繫：

- 提交 Issue
- 發送郵件反饋
- 社交媒體私信

## 許可證

MIT License - 詳見 LICENSE 文件

## 致謝

- **設計靈感**：無印良品 (MUJI)、Nendo 設計工作室
- **技術支持**：React、TailwindCSS、shadcn/ui 社區
- **字體資源**：Google Fonts、Noto 字體項目
- **AI 協作**：Gemini、Claude 3.5、Lovable 平台

---

**DecideNow** — 設計 AI 參與人類決策的工作流

*Built with React, TypeScript, TailwindCSS & Gemini API*
