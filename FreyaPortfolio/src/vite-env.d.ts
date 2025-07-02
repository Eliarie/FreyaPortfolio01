/// <reference types="svelte" />
/// <reference types="vite/client" />

declare module '*.svelte' {
  import type { ComponentType } from 'svelte';
  const component: ComponentType;
 export default defineConfig({
  base: '/FreyaPortfolio01/';
})
}
