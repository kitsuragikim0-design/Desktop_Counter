# Desktop_Counter

---

一个桌面计数小组件

---

## 🛠️ 技术栈

* **核心框架**: Tauri (Rust 后端)
* **前端构建**: Vite + HTML / CSS / JavaScript

---

## 开箱即用

下载prague-counter.exe，双击即可想念布拉格

## 🚀 快速开始（开发模式）

Tauri文档：https://v2.tauri.app/
根据文档指示，新建一个项目

将index.html下载到项目根目录，覆盖掉原来的index.html（如有）
将main.js下载到项目根目录的/src下


在本地继续开发或调试：

1. **安装依赖**：
确保已安装相关 （参考：Node.js、pnpm 和 Rust） 环境，然后在项目根目录下执行：
```bash
pnpm install

```


2. **启动开发服务器（支持热更新）**：
```bash
pnpm tauri dev

```
修改index.html文件，即可改变组件外观


---

## 📦 打包独立应用

当你完成了修改，想要生成一个双击即可运行的独立 `.exe` 桌面程序时：

1. **执行打包命令**：
```bash
pnpm tauri build

```


2. **获取成品**：
打包完成后，前往 `src-tauri/target/release/` 目录，即可找到编译好的 `.exe` 软件本体。可以独立发送给朋友使用。

---

## 🎨 自定义指南

你可以随时修改前端源码来自定义你的专属小组件外观：

### 1. 修改背景图片

打开 `index.html`，找到 `<style>` 中的 `body` 样式，修改 `background-image`：

```css
body {
    background-image: url('./images/your-background.jpg'); /* 支持本地相对路径或网络图片直链 */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

```

### 2. 调整字体与样式

在 `index.html` 的 `<style>` 中，可以自由调整数字和标题的字体：

* **数字样式**：修改 `.counter-value` 下的 `font-size`（大小）、`font-weight`（粗细）及 `color`（颜色）。
* **毛玻璃卡片**：通过调整 `.widget-card` 的 `background` 透明度（如 `rgba(30, 30, 40, 0.65)`）和 `backdrop-filter: blur(12px)` 来改变毛玻璃的朦胧质感。

### 3. 更换软件专属图标

如果你想为应用换上自己喜欢的图标：

1. 准备一张正方形的 PNG 图片（例如 `icon.png`），放入项目根目录。
2. 在终端运行 Tauri 的图标生成命令：
```bash
pnpm tauri icon ./icon.png

```


3. 重新运行 `pnpm tauri build`，应用本体就会换上新图标。

---

## 💾 数据持久化说明

计数数据通过浏览器底层的 `localStorage` 自动保存在用户的本地系统安全目录中。只要保持 `src-tauri/tauri.conf.json` 中的应用标识符 (`identifier`) 不变，每次发布新版本的 `.exe` 覆盖旧版本时，**历史计数数据会自动无缝衔接，绝不会清零**。
