# Hahow Recruitment Project

## 🚀 Screenshot

[Project demo](https://zen-einstein-4ca07d.netlify.app)
[![](https://i.imgur.com/mzutbFV.png)](https://zen-einstein-4ca07d.netlify.app)

[Storybook demo](https://inspiring-ardinghelli-6c340a.netlify.app)
[![](https://i.imgur.com/izBaQ8Y.png)](https://inspiring-ardinghelli-6c340a.netlify.app)

## 🚀 Quick Start

1. clone this repository first.
2. Under project root, run yarn to install all dependencies.
3. Make sure that localhost:3000 port is available.
4. Run yarn start. It would launch the web app with your default browser.

Run Project

```
cd hahow-recruitment
yarn
yarn start
```

Run storybook

```
cd hahow-recruitment
yarn
yarn storybook
```

## 📚Notes

### 專案的架構、Web 的架構邏輯

專案使用 react-create-app 快速建立，搭配 Storybook 使用 Component Driven Development (CDD) 思維開發，優先由小的獨立或是被完全 controlled 元件開始實作，優先思考 component 之間的介面關係，進而到整合成一個相對再複雜的 component，接著是導入資料層級 hook 成一個 container，最後配置成一個 page，再接上 react-router 成一個 SPA。

- src/commom：零碎可以被共用的邏輯
- src/components：小的、獨立、或完全被 controlled 的元件
- src/containers：將 components 接上資料邏輯 (hook) 成一個可互動的元件
- src/pages：整合 containers + compoents 成和一個頁面邏輯，主要介接 react-router 邏輯
- App.jsx 串接 react-router 的地方

### 你對於所有使用到的第三方 library 的理解，以及他們的功能簡介

第三方 library

- [storybook](https://storybook.js.org/) 一個蠻新的前端生態系套件，可以在產品環境外見一個系統，用來快速針對一個 component 切換各種狀態進行 render ，保留這個測試開發過程就成了一份文件，也可讓跨部分之間同步 component 資訊更加順利，甚至還可串接 visual testing 的神奇功能讓在部署前可以比對有改動的樣式 diff。
- [create-react-app](https://create-react-app.dev/docs/getting-started/) Facebook 自己所開源的 start kit，讓開發者可以不用每次都針對 babel、webpack、eslint、jest、integration test、等等等內容。
- [react-router-dom](https://reactrouter.com/web/guides/quick-start) react 生態系的延伸重點套種之一，用來實作 SPA 的好工具，讓開發者省去直接管理各種 history 這個 web api 狀態的工，用多一層抽象層的 router 直接處理各種換頁 render 需求，也提供 Link、Redirect 等等方式加載。

- [styled-components](https://styled-components.com/) CSS-IN-JS 的解決方法之一，把 CSS Code 變成 Component，直接寫 CSS 在 JSX 的好處第一就是可以直接透過 props 直接對樣式調整，不必再透過 class 跟 css selector 指定狀態跟樣式的變化，且也解決過 class 名稱如果衝突的樣式問題。

補充有想到的 react-create-app 背後相依的 library

- [webpack](https://webpack.js.org/)： JS 模組化解決方案之一，可以使用 import export 方式撰寫 module，也可以整合不同套件的 loader，如 babel-lodaer、cas-loader，或可以合併、壓縮檔案，加 hash 改版號等等功能，是現今蠻流行的打包套件之一。

- [eslint](https://eslint.org/)： 靜態程式碼分析、語法檢測、語法習慣檢驗的工具，可以讓許多錯誤提早在開發流程時就檢測出來，讓後續驗收跟上線更加穩定。

- [jest](https://jestjs.io/) 測試框架，可搭配不同套件來撰寫單元測試(可以獨立或可以加 sinon)、整合測試(@testing-library)、E2E 測試 (puppter)。

### 你在程式碼中寫註解的原則，遇到什麼狀況會寫註解

遇到一個複雜或不直覺的邏輯，通常是 work around 時會加上，但通常我會避免再寫程式中不直接寫「註解」，而是用 testcase 去驗證或 storybook 的 story + mockAPI 去模擬狀態，相較可以會因未即時維護造成的更多註解邏輯錯誤。

### 在這份專案中你遇到的困難、問題，以及解決的方法

1. Ｑ：延伸想做一個 fancy 功能是可以讓能力值視覺化，但完全忘了 SVG 的繪製方法

```
網路上資源零零碎碎的拼湊，或者去翻過吳哲宇老師的在 Hahow 上開的 網頁動畫課程 XDD。
```

2. Ｑ：自己結算下來總共花了大概 8 個小時在實作整個專案，比預期的 4 ~ 6 小時還要久上許多。

```
Ａ：優先歸因於自己針對 component 的狀態有過多的思考，把 Loading、Empty 跟 API Error 狀態都思考了進去，這對實務上如果不是需求來說會是有問題的，同時因為對於 Styled Component 還不夠熟練，又面臨各套件都使用最新版本，如 storybook 升級 6.0、react-router 也用了 4.X 版，所以多了點時間查文件、多看文章確定後才下手。下次要能提早確定需求跟時程，從中取得平衡，包含實作範圍及是否使用新套件，但另一方面因為也不算是有時間壓力的專案所以還是希望從中也能嘗試些新方式 > <。
```

3. Ｑ：測試時遇到 Warning: Can’t perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.

```
Ａ： 一開始針對 side effect 處理的不夠嚴謹，找到這篇 [文章](https://www.debuggr.io/react-update-unmounted-component/)，針對已 unmount 時 side effect 進行取消
```

4. 部署到 netlify 這個 saas 平台建立靜態網頁後，發現除了首頁外指定 pathname 會找不到網站。
```
一看就能想到是沒設定好 .* 都要取用 build/index.html，查了一下文件要在 root 資料夾位置寫一個 _redirects 來設定。
```
