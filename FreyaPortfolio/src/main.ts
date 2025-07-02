// 导入主应用组件 App.svelte
import App from './App.svelte';
// 导入 Svelte 路由相关的组件和功能
import { Router } from 'svelte-routing';

// 获取 HTML 中 id 为 'app' 的 DOM 元素
const target = document.getElementById('app');

// 如果找不到目标元素，抛出错误
if (!target) {
  throw new Error('Could not find app element');
}

// 创建 Svelte 应用实例
const app = new App({
  target: document.getElementById('app') as HTMLElement
});

export default app;