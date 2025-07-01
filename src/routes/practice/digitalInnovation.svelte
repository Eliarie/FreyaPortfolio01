<script lang="ts">
  import { onMount } from 'svelte';
  // 类型声明，消除 link 可选属性报错
  type ImageItem = {
    src?: string;
    desc: string;
    class?: string;
    link?: string;
  };

  const title = "数智创新力";
  const sections = [
    {
      id: "concept",
      title: "理念阐述",
      content: "数智创新力强调运用数字技术和智能工具推动教育创新。我们相信，在数字化时代，教育需要与时俱进，充分利用技术手段提升教学效果。通过整合数字资源和智能工具，为学生提供个性化、高效的学习体验。",
      info: {
        "关键词": "数字技术、智能工具、教育创新",
        "时间": "2023年-2024年",
        "地点": "广州、线上平台",
        "概述内容": "以技术赋能教育，提升个性化与高效学习体验。"
      },
      parts: [
        {
          title: "智能教学平台应用",
          images: [
            { src: "/src/assets/P1P1.png", desc: "智能平台界面展示", class: "img-p1p1" }
          ]
        },
        {
          title: "数据分析优化教学",
          images: [
            { desc: "通过数据分析，教师能够精准把握学生学习状况，及时调整教学策略。" }
          ]
        }
      ]
    },
    {
      id: "case",
      title: "实践案例",
      content: "在教学中，我们运用智能教学平台进行个性化学习指导，利用数据分析优化教学策略。通过虚拟现实、增强现实等技术，创造沉浸式学习体验。同时，我们注重培养学生的数字素养，帮助他们适应数字化时代的需求。",
      info: {
        "角色": "教师、学生",
        "成果": "提升学习效率，增强数字素养",
        "时间": "2023年-2024年",
        "地点": "广州、线上平台",
        "概述内容": "多元技术融合，创新教学模式。"
      },
      parts: [
        {
          title: "虚拟现实教学体验",
          images: [
            { src: "/src/assets/P1P2.png", desc: "VR课堂场景", class: "img-p1p2" }
          ]
        },
        {
          title: "数字素养培养活动",
          images: [
            { desc: "组织学生参与编程、数据分析等数字素养提升活动。" }
          ]
        }
      ]
    },
    {
      id: "result",
      title: "实践成果",
      content: "通过数智创新力的实践，教学效率显著提升，学习效果得到改善。学生的数字素养和创新能力得到培养，能够熟练运用数字工具解决问题。同时，教师的信息化教学能力得到提升，教育资源的利用更加高效。",
      info: {
        "成果": "学生数字素养提升，教师信息化能力增强",
        "时间": "2024年",
        "地点": "广州、线上平台",
        "概述内容": "数智创新力助力教育高质量发展。"
      },
      parts: [
        {
          title: "成果展示",
          images: [
            { desc: "学生和教师在数智创新力项目中的成长与收获。" }
          ]
        }
      ]
    }
  ];

  let expanded = false;
  let currentSection = sections[0].id;
  let highlightTop = 0;
  let highlightHeight = 0;
  let navRef: HTMLDivElement | null = null;

  function scrollToSection(id: string) {
    document.querySelectorAll('.section.section-scrolled').forEach(el => {
      el.classList.remove('section-scrolled');
    });
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      el.classList.add('section-scrolled');
    }
    expanded = false;
    currentSection = id;
  }

  function moveHighlightToButton(btn: HTMLButtonElement | null) {
    if (btn && navRef) {
      const navRect = navRef.getBoundingClientRect();
      const btnRect = btn.getBoundingClientRect();
      highlightTop = btnRect.top - navRect.top;
      highlightHeight = btnRect.height;
    }
  }

  function handleSidebarMouseLeave() {
    const btn = navRef?.querySelector('.sidebar-link-float.active') as HTMLButtonElement;
    moveHighlightToButton(btn);
  }

  onMount(() => {
    // 初始高亮在选中项
    setTimeout(() => {
      const btn = navRef?.querySelector('.sidebar-link-float.active') as HTMLButtonElement;
      moveHighlightToButton(btn);
    }, 0);
  });
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<!-- 悬浮侧边栏 -->
<div
  class="sidebar-float"
  on:mouseenter={() => expanded = true}
  on:mouseleave={() => expanded = false}
>
  {#if !expanded}
    <button class="sidebar-arrow" aria-label="展开导航">
      <span class="hamburger-icon">
        <span></span>
        <span></span>
        <span></span>
      </span>
    </button>
  {:else}
    <div class="sidebar-crystal-float">
      <nav class="sidebar-nav-float" bind:this={navRef}>
        <div
          class="sidebar-float-highlight"
          style="top: {highlightTop}px; height: {highlightHeight}px;"
        ></div>
        {#each sections as section}
          <button
            class="sidebar-link-float {section.id === currentSection ? 'active' : ''}"
            aria-current={section.id === currentSection ? 'true' : undefined}
            on:click={(e) => { scrollToSection(section.id); moveHighlightToButton(e.currentTarget); }}
            on:mouseenter={(e) => moveHighlightToButton(e.currentTarget)}
            on:mouseleave={handleSidebarMouseLeave}
          >
            {section.title}
          </button>
        {/each}
      </nav>
    </div>
  {/if}
</div>

<!-- 页面主内容 -->
<div class="practice-detail">
  <div class="back-top-nav">
    <a href="/PreEduCoreCompetition?open=1" class="back-link" title="返回上一级">
      <span class="arrow-inner">
        <svg width="28" height="28" viewBox="0 0 28 28" style="display:block" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 6L10 14L18 22" stroke="#222" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
    </a>
  </div>
  <div class="header">
    <h1>{title}</h1>
  </div>
  <div class="simple-quote">
    <span class="simple-quote-text">
      数智创新力是教师和学生在数字时代灵活运用技术、不断创新、提升学习与教学效率的关键能力。
    </span>
  </div>
  <div class="content">
    {#each sections as section}
      <section class="section" id={section.id}>
        <div class="project-info-content">
        <h2>{section.title}</h2>
          <ul class="project-info">
            {#each Object.entries(section.info || {}) as [key, value]}
              <li><strong>{key}：</strong>{value}</li>
            {/each}
          </ul>
          <div class="project-description">
            {section.content}
          </div>
          {#if section.parts}
            <div class="parts-list">
              {#each section.parts as part}
                <div class="part-row">
                  <div class="part-content">
                    <div class="part-title">{part.title}</div>
                    <div class="part-images-row">
                      {#each part.images as img, i}
                        {#if 'src' in img}
                          <div class="part-image-block">
                            {#if 'link' in img && typeof img.link === 'string' && img.link}
                              <a href={img.link} target="_blank" class="image-link">
                                <img src={img.src} alt="部分图片" class={img.class} />
                              </a>
                            {:else}
                              <img src={img.src} alt="部分图片" class={img.class} />
                            {/if}
                            {#if typeof img.desc === 'string'}
                              <div class="img-desc">{img.desc}</div>
                            {/if}
                          </div>
                        {:else}
                          {#if typeof img.desc === 'string'}
                            <div class="img-desc">{img.desc}</div>
                          {/if}
                        {/if}
                      {/each}
                    </div>
                  </div>
                </div>
              {/each}
            </div>
          {/if}
        </div>
      </section>
    {/each}
  </div>
</div>

<style>
:root {
  --sidebar-float-width: 180px;
  --sidebar-float-collapsed: 36px;
  --sidebar-bg: rgba(112,92,199,0.08);
  --sidebar-border: #705cc7;
  --sidebar-shadow: 0 4px 32px 0 rgba(112,92,199,0.18);
  --sidebar-blur: 18px;
  --sidebar-accent: #705cc7;
  --sidebar-link-hover: #b3a1e6;
  --sidebar-text: #232946;
  --practice-max-width: 1000px;
}

.sidebar-float {
  position: fixed;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 200;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  pointer-events: auto;
}

.sidebar-arrow {
  width: var(--sidebar-float-collapsed);
  height: var(--sidebar-float-collapsed);
  background: rgba(112,92,199,0.08) !important;
  border: 1.5px solid #705cc7 !important;
  border-radius: 50%;
  color: #705cc7 !important;
  font-size: 1.3rem;
  box-shadow: var(--sidebar-shadow);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  margin: 0.5rem 0.2rem;
  transition: background 0.2s, color 0.2s;
  backdrop-filter: blur(var(--sidebar-blur));
  -webkit-backdrop-filter: blur(var(--sidebar-blur));
}

.hamburger-icon {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 22px;
  gap: 3px;
}
.hamburger-icon span {
  display: block;
  width: 18px;
  height: 3px;
  background: #705cc7 !important;
  border-radius: 2px;
}

.sidebar-arrow:hover {
  background: rgba(112,92,199,0.12) !important;
  color: #705cc7 !important;
}

.sidebar-crystal-float {
  width: var(--sidebar-float-width);
  min-width: var(--sidebar-float-width);
  background: var(--sidebar-bg);
  border-radius: 1.5rem;
  box-shadow: var(--sidebar-shadow);
  border: 1.5px solid var(--sidebar-border);
  backdrop-filter: blur(var(--sidebar-blur));
  -webkit-backdrop-filter: blur(var(--sidebar-blur));
  color: var(--sidebar-text);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 1.2rem 0.5rem;
  transition: width 0.3s cubic-bezier(.4,2,.6,1);
}

.sidebar-nav-float {
  position: relative;
  padding: 0.5rem 0;
}

.sidebar-float-highlight {
  position: absolute;
  left: 0;
  right: 0;
  border-radius: 1rem;
  background: #edeafd;
  z-index: 0;
  transition: top 0.25s cubic-bezier(.4,2,.6,1), height 0.25s cubic-bezier(.4,2,.6,1);
  pointer-events: none;
}

.sidebar-link-float {
  position: relative;
  z-index: 1;
  background: none;
  border: none;
  color: var(--sidebar-text);
  text-align: left;
  padding: 0.7rem 1.2rem;
  font-size: 1rem;
  border-radius: 1rem;
  cursor: pointer;
  transition: color 0.2s;
  outline: none;
  font-weight: 500;
  letter-spacing: 1px;
  width: 100%;
}
.sidebar-link-float:hover,
.sidebar-link-float:focus {
  color: black !important;
}
.sidebar-link-float.active,
.sidebar-link-float.active:hover,
.sidebar-link-float.active:focus {
  color: #705cc7 !important;
}

  .practice-detail {
  max-width: var(--practice-max-width);
    margin: 0 auto;
    padding: 2rem;
  position: relative;
  /* 不受侧边栏影响 */
  padding-top: 100px; /* 新增：防止被导航栏遮挡 */
  }

  .header {
    text-align: center;
    margin-bottom: 3rem;
  margin-top: 30px;
  }
  h1 {
    color: #2c3e50;
    margin: 0;
  font-size: 2.0rem;
  }
  .subtitle {
  display: none;
  }
  .section {
    margin-bottom: 3rem;
    padding: 2rem;
    background: white;
    border-radius: 1rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  max-width: var(--practice-max-width);
  margin-left: auto;
  margin-right: auto;
  }
  h2 {
  color: #705cc7;
    margin-top: 0;
    margin-bottom: 1rem;
  }
.section p {
    line-height: 1.6;
    color: #555;
    margin: 0;
  font-size: 1.4rem;
}
@media (max-width: 700px) {
  .sidebar-crystal-float {
    width: 90vw;
    min-width: 90vw;
    left: 0;
    border-radius: 0 0 1.5rem 1.5rem;
  }
}

.back-top-nav {
  position: fixed;
  left: 20px;
  top: 20px;
  z-index: 1000;
  margin-bottom: 0;
}
  .back-link {
  font-size: 2.2rem;
  font-weight: bold;
  color: #222;
  background: rgba(255,255,255,0.9);
  border-radius: 50%;
  width: 2.8rem;
  height: 2.8rem;
  display: flex;
    align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 1;
    text-decoration: none;
  box-shadow: 0 2px 8px rgba(44,62,80,0.08);
  border: 1.5px solid #705cc7;
  transition: 
    background 0.2s, 
    color 0.2s, 
    border 0.2s, 
    box-shadow 0.2s, 
    transform 0.18s cubic-bezier(.4,2,.6,1);
  padding: 0;
  cursor: pointer;
  position: static;
}
.arrow-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 0px;
  left: 0px;
}
.back-link:hover {
  background: #fff7f0;
  color: #705cc7;
  border-color: #705cc7;
  box-shadow: 0 6px 18px #b5a9ec;
  transform: scale(1.12) translateY(-1px);
}

.simple-quote {
  display: flex;
  align-items: stretch;
  position: relative;
  max-width: var(--practice-max-width);
  font-size: 1.3rem;
  font-family: 'Noto Serif SC', serif;
  color: #222;
    font-weight: 500;
  line-height: 1.5;
  letter-spacing: 1px;
  background: none;
  margin: 2.0rem auto 50px auto;
  padding-left: 0;
  margin-top: 5px;
}
.simple-quote::before {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: #222;
  border-radius: 3px;
}
.simple-quote-text {
  padding-left: 18px;
  display: block;
}

.project-info-content {
  flex: 1;
}

.project-info {
  list-style: none;
  padding: 0;
  margin: 0 0 1rem 0;
  font-size: 1.1rem;
}
.project-info li {
  margin-bottom: 0.3rem;
}
.project-description {
    font-size: 1.2rem;
  line-height: 1.7;
  color: white;
  background: #705cc7b8;
  border-radius: 0.7rem;
  padding: 1.1rem 1.3rem;
  margin: 1.2rem 0 1.8rem 0;
  box-shadow: 0 1px 4px #eb460305;
}
@media (max-width: 700px) {
  .project-info-content {
    padding: 1rem;
  }
}

.parts-list {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.part-row {
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
}
.part-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}
.part-title {
  font-weight: bold;
  font-size: 1.13rem;
  margin-bottom: 0.6rem;
  color: #705cc7;
}
.part-images-row {
  display: block;
  width: 100%;
  margin-bottom: 0.5rem;
}

/* === AI调整：图片容器和图片样式优化 === */
.part-image-block {
  display: flex;
  align-items: flex-end; /* 底部对齐 */
  gap: 10px; /* 图片和描述之间的间距 */
  width: auto; /* 根据内容自动调整宽度 */
  max-width: none; /* 移除最大宽度限制 */
  margin-bottom: 30px; /* 增加图片块之间的垂直间距 */
}

.part-image-block:last-child {
  margin-bottom: 0; /* 最后一个图片块不需要底部边距 */
}

.part-image-block img {
  width: auto; /* 根据原图尺寸自动调整 */
  height: auto; /* 根据原图尺寸自动调整 */
  max-width: 700px; /* 最大宽度限制，防止过大 */
  max-height: 400px; /* 最大高度限制，防止过大 */
  aspect-ratio: auto; /* 保持原图比例 */
  object-fit: contain; /* 显示完整图片不裁剪 */
  object-position: center; /* 图片内容居中 */
  border-radius: 0px;
  box-shadow: 0 2px 8px #0001;
  display: block;
  flex-shrink: 0; /* 防止图片被压缩 */
  margin: 10px 10px; /* 重置边距 */
}


.img-desc {
  font-size: 0.98rem;
  color: #666;
  text-align: left; /* 左对齐 */
  align-self: flex-end; /* 确保描述与图片底端对齐 */
  max-width: auto; /* 描述最大宽度 */
  word-break: break-all;
  font-weight: 500;
  padding: 8px;
  background: rgba(255,255,255,0.9);
  border-radius: 6px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.1);
  border-left: 3px solid #705cc7;
  margin: 0; /* 重置边距 */
  margin-bottom: 0px; /* 确保底部对齐 */
}

@media (max-width: 900px) {
  .part-images-row {
    flex-direction: column;
    gap: 0.8rem;
  }
  .part-image-block img {
    max-width: 100%;
    height: auto;
  }
}

/* ================== 针对每张图片的自定义样式 ================== */
/* 第一部分第一张图片专属样式 */
.img-p1p1 {
  border: 0px solid #705cc7;
  /* 可自定义更多样式 */
}
/* 第一部分第二张图片专属样式 */
.img-p1p2 {
  width:600px !important;
  /* 移除了 filter: grayscale(1); 让悬停效果颜色一致 */
  /* 可自定义更多样式 */
}
/* 第二部分第一张图片专属样式 */
.img-p2p1 {
  border-radius: 20px;
  /* 可自定义更多样式 */
}
/* 第二部分第二张图片专属样式 */
.img-p2p2 {
  box-shadow: 0 4px 16px#b5a9ec;
  /* 可自定义更多样式 */
}
/* 第三部分第一张图片专属样式 */
.img-p3p1 {
  opacity: 0.9;
  /* 可自定义更多样式 */
}
/* =========================================================== */

/* === 图片链接样式 === */
.image-link {
  display: block;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  flex-shrink: 0; /* 防止图片被压缩 */
  position: relative; /* 为伪元素定位 */
}

.image-link:hover {
  transform: scale(1.0);
}

.image-link img {
  width: auto;
  height: auto;
  max-width: 700px;
  max-height: 400px;
  aspect-ratio: auto;
  object-fit: contain;
  object-position: center;
  border-radius: 0px;
  box-shadow: 0 2px 8px #0001;
  display: block;
  flex-shrink: 0;
  margin: 0;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

/* 为链接内的图片添加悬停效果 */
.image-link:hover img {
  transform: scale(1.02);
  box-shadow: 0 4px 16px #b5a9ec;
}

/* 为可点击图片添加点击提示 - 修改为针对链接容器 */
.image-link::after {
  content: "点击查看原文档";
  position: absolute;
  top: 10px;
  right: 10px;
  background: #705cc7;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
  opacity: 0;
  transition: opacity 0.2s ease;
  pointer-events: none;
  z-index: 10;
}

.image-link:hover::after {
  opacity: 1;
}

/* 为可点击的图片添加视觉提示 - 统一所有有链接的图片样式 */
.img-p1p1, .img-p1p2 {
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  position: relative;
}

.img-p1p1:hover, .img-p1p2:hover {
  transform: scale(1.0);
  box-shadow: 0 4px 16px rgba(112,92,199,0.2);
}

/* 为可点击图片添加点击提示 - 针对直接图片 */
.img-p1p1::after, .img-p1p2::after {
  content: "点击查看原文档";
    position: absolute;
  top: 10px;
  right: 10px;
  background: #705cc7;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
  opacity: 0;
  transition: opacity 0.2s ease;
  pointer-events: none;
    z-index: 10;
  }

.img-p1p1:hover::after, .img-p1p2:hover::after {
  opacity: 1;
}
/* === END 图片链接样式 === */

.project-contact {
  margin: 2rem auto 2rem auto;
  padding: 2rem 1rem;
  background: #fff;
  border-radius: 1rem;
  box-shadow: 1px 1px 8px #b5a9ec;
  max-width: 900px;
  text-align: center;
}
.project-contact h3 {
  color: #705cc7;
  margin-bottom: 2rem;
}
.contact-qr-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
}
.contact-qr-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 120px;
}
.contact-qr-label {
  font-weight: bold;
  margin-bottom: 0.7rem;
  color: #222;
  font-size: 1.08rem;
  letter-spacing: 1px;
}
.contact-qr-img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 1px 4px #0002;
  background: #fafafa;
  margin-bottom: 0.5rem;
  border: 1.5px solid #eee;
  transition: box-shadow 0.2s;
}
.contact-qr-img:hover {
  box-shadow: 0 4px 16px #705cc755;
  border-color: #705cc7;
}
@media (max-width: 700px) {
  .contact-qr-row {
    flex-direction: column;
    gap: 2rem;
  }
}

.section.section-scrolled {
  margin-top: 80px !important;
  transition: margin-top 0.4s cubic-bezier(.4,2,.6,1);
}
</style> 