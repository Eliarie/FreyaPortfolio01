<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  let isOpen: boolean = false; // 定义开关状态变量
  onMount(() => {
    setTimeout(() => {
      const nav = document.querySelector('.simple-nav');
      if (nav) nav.classList.add('competition-nav');
    }, 0);
  });
  onDestroy(() => {
    setTimeout(() => {
      const nav = document.querySelector('.simple-nav');
      if (nav) nav.classList.remove('competition-nav');
    }, 0);
  });
</script>

<div class="competition-container">

<svg width="250" height="250" viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg" class="switch-panel">
  <defs>
    <filter id="shadow-out" x="-50%" y="-50%" width="200%" height="200%">
      <feDropShadow dx="2" dy="2" stdDeviation="3" flood-color="#555555" flood-opacity="0.5"/>
    </filter>
    <filter id="shadow-in" x="-50%" y="-50%" width="200%" height="200%">
      <feDropShadow dx="0.5" dy="0.5" stdDeviation="1" flood-color="#555555" flood-opacity="0.2"/>
    </filter>
    <filter id="shadow-top-lift" x="-50%" y="-50%" width="200%" height="200%">
      <feDropShadow dx="0" dy="3" stdDeviation="2" flood-color="#555555" flood-opacity="0.5"/>
    </filter>
    <filter id="shadow-bottom-lift" x="-50%" y="-50%" width="200%" height="200%">
      <feDropShadow dx="0" dy="-3" stdDeviation="3" flood-color="#555555" flood-opacity="0.5"/>
    </filter>
    <filter id="shadow-on-left-light" x="-50%" y="-50%" width="200%" height="200%">
      <feDropShadow dx="3" dy="2" stdDeviation="4" flood-color="#404040" flood-opacity="0.3"/>
    </filter>

    <filter id="line-shadow" x="-50%" y="-50%" width="200%" height="200%">
      <feDropShadow dx="0.5" dy="0.5" stdDeviation="1" flood-color="#AAAAAA" flood-opacity="0.8"/>
    </filter>

    <linearGradient id="gradient-top-light" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="100%" stop-color="#E0E0E0"/>
    </linearGradient>
    <linearGradient id="gradient-bottom-light" x1="0%" y1="100%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="100%" stop-color="#E0E0E0"/>
    </linearGradient>
    <linearGradient id="warmYellowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FFFFF0"/>
      <stop offset="100%" stop-color="#FFC600"/>
    </linearGradient>
  </defs>

  <!-- Outer Panel -->
  <rect x="25" y="25" width="100" height="100" rx="10" ry="10" fill="white" stroke="#D0D0D0" stroke-width="2" filter="url(#shadow-out)"/>

  <!-- Inner Switch -->
  <rect
    x="38"
    y= "38"
    width="75"
    height="75"
    rx="10"
    ry="10"
    fill={isOpen ? "url(#gradient-bottom-light)" : "url(#gradient-top-light)"}
    stroke="#B0B0B0"
    stroke-width="1.5"
    filter={isOpen ? "url(#shadow-top-lift)" : "url(#shadow-bottom-lift)"}
    on:click={() => isOpen = !isOpen}
  />
  <!-- Small Indicator Line on Inner Switch -->
  <line x1="63" y1="55" x2="87" y2="55" stroke="green" stroke-width="3" stroke-linecap="round"/>
</svg>

<p class="switch-status-text">{isOpen ? '点击关闭' : '点击开启'}</p>

</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&family=Noto+Serif+SC:wght@400;700;900&family=ZCOOL+KuaiLe&family=ZCOOL+QingKe+HuangYou&display=swap');
  .competition-container {
    background-color: black; /* 黑色背景，仅限本容器 */
    min-height: 100vh;
    display: flex;
    flex-direction: column; /* 让内容垂直排列 */
    justify-content: center;
    align-items: center;
    width: 100%;
    overflow: hidden; /* 隐藏溢出内容 */
  }

  .switch-panel {
    transform: scale(0.9) translateY(100px) translateX(600px); /* Adjust translateX and translateY to move it right and down */
  }
  /* 以下是全局样式，用于调整导航栏的颜色以适应黑色背景 */
  :global(.simple-nav.competition-nav) {
    background-color: rgb(0, 0, 0) !important;
  }
  :global(.simple-nav.competition-nav .nav-inner .logo),
  :global(.simple-nav.competition-nav .nav-inner .nav-links),
  :global(.simple-nav.competition-nav .nav-inner .nav-links a),
  :global(.simple-nav.competition-nav .nav-inner .nav-links a:hover) {
    color: white !important;
  }
  .switch-status-text {
    color: white;
    font-family:'Noto Serif SC', SimSun; /* 使用一个合适的字体 */
    font-size: 18px;
    text-align: center;
    margin-top: -22px;
    margin-left: 995px;
    text-shadow: 
      0 0 2px #FFFACD,    /* 浅黄色，轻微模糊 */
      0 0 3px #FFD700,   /* 暖黄色，中度模糊 */
      0 0 6px #FFA500;  /*  橙色，中度模糊 */
  }
</style>
