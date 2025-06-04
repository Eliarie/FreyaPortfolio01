<script lang="ts">
  // 只保留首页左侧内容相关逻辑
  // LOGO、导航栏、主内容、按钮
  import { Router, Link, Route } from 'svelte-routing';
  import { onMount, tick } from 'svelte';
  import { fly, scale } from 'svelte/transition';
  import Home from './routes/Home.svelte';
  import About from './routes/about.svelte';
  import Insight from './routes/insight.svelte';
  import Contect from './routes/contect.svelte';

  export let url: string = '';

  const navLinks = [
    { name: '主页', href: '/' },
    { name: '关于我', href: '/about' },
    { name: '作品集', href: '#' },
    { name: '随笔', href: '/insight' },
    { name: '联系我', href: '/contect' }
  ] as const;

  // 掉落动画内容
  const dropLines = [
    '傅她',
    '⽴⾜真实场域，以教育本源为根基，创新驱动探索多元形态的幼⼉教育实践者'
  ];


  // 打字机动画内容
  const typingLines = [
    '傅她',
    '⽴⾜真实场域，以教育本源为根基，创新驱动探索多元形态的幼⼉教育实践者'
  ];
  let typedTexts = ['', '']; // 每一行已打出的内容
  let typingDone = false;    // 动画是否完成
  let currentTypingLine = 0; // 当前打字行

  // 打字机动画逻辑
  async function typeLine(lineIdx: number) {
    currentTypingLine = lineIdx;
    if (lineIdx >= typingLines.length) {
      typingDone = true;
      return;
    }
    const text = typingLines[lineIdx];
    for (let i = 1; i <= text.length; i++) {
      typedTexts[lineIdx] = text.slice(0, i);
      await tick();
      await new Promise(r => setTimeout(r, 70));
    }
    await new Promise(r => setTimeout(r, 400));
    typeLine(lineIdx + 1);
  }

  let showP1 = false;
  let showP2 = false;
  let showP3 = false;
  let showP4 = false;
  let showP5 = false;

  // 处理导航点击事件
  function navigateTo(path: string): void {
    if (path === '#') return;
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  }

  // 更新页面标题的函数
  function updateTitle(path: string) {
    const baseTitle = '傅她的作品集';
    let pageTitle = '';
    
    switch(path) {
      case '/':
        pageTitle = baseTitle;
        break;
      case '/about':
        pageTitle = `${baseTitle} | 关于我`;
        break;
      case '/insight':
        pageTitle = `${baseTitle} | 随笔`;
        break;
      case '/contect':
        pageTitle = `${baseTitle} | 联系我`;
        break;
      default:
        pageTitle = baseTitle;
    }
    
    document.title = pageTitle;
  }

  // 监听路由变化
  $: if (url) {
    updateTitle(url);
  }

  onMount(() => {
    typeLine(0);
    // 依次显示每个短语
    setTimeout(() => showP1 = true, 300);
    setTimeout(() => showP2 = true, 600);
    setTimeout(() => showP3 = true, 900);
    setTimeout(() => showP4 = true, 1200);
    setTimeout(() => showP5 = true, 1500);
    updateTitle(window.location.pathname);
  });
</script>

<Router {url}>
  <nav class="simple-nav">
    <div class="nav-inner">
      <div class="logo">在不确定的时代，⽤思辨与热爱，锚定幼⼉教育的未来</div>
      <div class="nav-links">
        {#each navLinks as link}
          <Link to={link.href}>{link.name}</Link>
        {/each}
      </div>
    </div>
  </nav>

  <main class="homepage-main">
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/insight" component={Insight} />
    <Route path="/contect" component={Contect} />
  </main>
</Router>

<style>
:global(body) {
  margin: 0;
  background: #f5f5f5; /* 整体浅灰色背景 */
  color: #222;          /* 主文字色 */
  font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
}

/* ===================== 左侧容器及字体设置 ===================== */
.left-block {
  flex: 0 0 320px;         /* 左侧容器宽度（可调320px） */
  min-width: 120px;        /* 最小宽度（可调） */
  max-width: 400px;        /* 最大宽度（可调） */
  margin-left: 80px;       /* 增加左侧margin，使文字右移 */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 30px; /* 向下移动 20px */
}
.drop-block {
  min-width: 100px;        /* 掉落动画区最小宽度（可调） */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 16px;      /* 右侧间距（可调） */
}
.drop-line {
  font-size: 1.5rem;       /* 掉落文字大小（可调） */
  font-family: 'Noto Sans SC', 'Microsoft YaHei', sans-serif; /* 掉落文字字体（可调） */
  color: #293241;          /* 掉落文字颜色（可调） */
  margin-bottom: 1.2em;    /* 行间距（可调） */
  min-height: 1.5em;       /* 每行最小高度（可调） */
  letter-spacing: 1px;     /* 字间距（可调） */
}
.drop-char {
  display: inline-block;
  /* 可加阴影、动画等个性化设置 */
}

/* ===================== 右侧容器及内容设置 ===================== */
.right-content {
  flex: 1 2 0;                 /* 右侧自适应剩余空间 */
  display: flex;
  margin-left: 100px;          /* 减小左侧边距 */
  flex-direction: column;
  align-items: flex-start;      /* 保证内容左对齐 */
  margin-top: 10px;            /* 向上移动一点 */
  padding-right: 500px;        /* 减小右侧内边距 */
  min-width: 600px;            /* 添加最小宽度确保内容不会换行 */
}
.subtitle {
  color: #eb4603;              /* 副标题颜色（可调） */
  font-size: 1.2rem;           /* 副标题字体大小（可调） */
  margin-bottom: 0.5rem;         /* 副标题下方间距（可调） */
  margin-left: 9px;
  letter-spacing: 2px;         /* 副标题字母间距（可调） */
  font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif; /* 副标题字体（可调） */
  line-height: 1.8;            /* 副标题行高（可调） */
}
.main-title {
  font-family: 'Georgia', serif; /* 主标题字体（可调） */
  font-size: 3.5rem;            /* 主标题字体大小（可调） */
  font-weight: bold;            /* 主标题加粗 */
  margin: 0 0 2rem 0;           /* 主标题下方间距（可调） */
  line-height: 1.2;             /* 主标题行高（可调） */
  color: #293241;                  /* 主标题颜色（可调） */
  letter-spacing: 3px;         /* 增加字间距 */
}
.main-btn {
  display: inline-block;
  padding: 13px 32px;
  border: 1px solid #e0d9c7;
  border-radius: 4px;
  background: #000;
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  margin-left: 100px;          /* 增加左侧外边距，使按钮右移 */
}
.main-btn:hover {
  background: #eb4603;
  color: #fff;
  border-color: #eb4603;
}

/* ===================== 公共布局设置 ===================== */
.homepage-main {
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.homepage-content {
  margin-top: 250px;            /* 距离顶部的距离（可调） */
  margin-left: 80px;            /* 整体左侧留白（可调） */
  max-width: 1100px;            /* 最大宽度（可调） */
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 64px;                    /* 左右容器间距（可调） */
}

/* ===================== 导航栏设置 ===================== */
.simple-nav {
  width: 100%;
  background: #f5f5f5; /* 导航栏背景色 */
  /* 移除固定定位 */
  /* position: fixed;
  top: 0;
  left: 0;
  z-index: 1000; */
}

.nav-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 30px 0 30px;
}

.logo {
  font-size: 19px;
  font-family: 'Noto Sans SC';
  font-weight: 500;
  letter-spacing: 2px;
  color: #222;
  margin-left: -100px;
}

.nav-links {
  color: #222;
  display: flex;
  gap: 2.5rem;
}

:global(.nav-links a) {
  color: #222;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  font-family: 'Noto Sans SC', 'Inter', 'Helvetica Neue', Arial, sans-serif;
  letter-spacing: 1.5px;
  padding: 1px 0; /* 添加内边距以便显示下划线 */
  border-bottom: 2px solid transparent; /* 默认状态下划线透明 */
  transition: border-color 0.3s ease-in-out; /* 添加过渡动画 */
}

:global(.nav-links a:hover) {
  color: #222;
  text-decoration: none;
  border-bottom-color: #EB4603; /* 悬停时下划线颜色变为 #222 */
}

@media (max-width: 800px) {
  .nav-inner {
    padding: 24px 16px 0 16px;
  }
}

/* ===================== 左侧block文字设置 ===================== */
.creative-block {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 2.5rem;
  min-width: 220px;
  max-width: 400px;
}

.creative-title {
  font-size: 2.8rem;                /* 大标题字号 */
  font-weight: bold;
  color: #EB4603;                   /* 主色突出 */
  letter-spacing: 6px;
  margin-bottom: 0.5em;
  font-family: 'Noto Sans SC', 'Microsoft YaHei', sans-serif;
  transform: rotate(-6deg);         /* 略微旋转，打破板正 */
  background: linear-gradient(90deg, #EB4603 60%, #99C1DA 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}


.creative-phrases {
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  align-items: flex-start;
  margin-top: -10px;
  margin-left: 80px;
}

.phrase {
  display: inline-block;
  font-family: 'Noto Sans SC', 'Inter', 'Helvetica Neue', Arial, sans-serif; /* 统一字体家族 */
  font-weight: 0; /* 统一字重 */
  transition: all 0.3s ease;
  cursor: pointer;
  text-align: center;
  line-height: 1.4;
  letter-spacing: 2px;
  transform-origin: center center;
  position: relative; /* 添加相对定位，使 z-index 生效 */
  z-index: 1; /* 默认层级较高，使其在非悬停时位于顶层 */
}

/* 每个短语不同颜色、大小、错位、旋转 */
.p1 {
  color: #293241;
  font-size: 1.8rem;
  transform: rotate(-7deg) translateY(-40px);
  background: #D1D2D4;
  padding: 12px 24px;
  border-radius: 12px;
  min-width: 200px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
.p2 {
  color: #705cc7;
  font-size: 1.8rem;
  transform:rotate(8deg) translateY(-30px);
  background: #fff;
  padding: 12px 24px;
  border-radius: 12px;
  min-width: 250px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
.p3 {
  color: #EB4603;
  font-size: 1.8rem;
  transform: rotate(-3deg) scale(1.1) translateY(-30px);
  background: #99C1DA;
  padding: 10px 24px;
  border-radius: 10px;
  min-width: 100px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
.p4 {
  color: #293241;
  font-size: 1.8rem;
  transform: rotate(5deg) translateY(-50px);
  background: #D1D2D4;
  padding: 12px 24px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
.p5 {
  color: #fff;
  font-size: 1.8rem;
  background: #EB4603;
  transform: rotate(-5deg) scale(1.05) translateY(-45px) translateX(5px);
  padding: 12px 24px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
.phrase:hover {
  transform: scale(7) rotate(1deg) translateX(50px); /* 悬停时的缩放、旋转和平移 */
  box-shadow: 0 4px 16px rgba(153, 193, 218, 0.4);
  filter: brightness(1.05);
  z-index: 0; /* 悬停时层级较低，使其位于底层 */
}

:global(.main-btn) {
  display: inline-block;
  padding: 13px 32px;
  border: 1px solid #e0d9c7;
  border-radius: 4px;
  background: #000;
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
}

:global(.main-btn:hover) {
  background: #eb4603;
  color: #fff;
}
</style> 