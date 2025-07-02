<script lang="ts">
  import { onMount } from 'svelte';
  // 类型声明，消除 link 可选属性报错
  type PartImage = {
    src?: string;
    desc: string;
    class?: string;
    link?: string;
  };
  type Part = {
    title: string;
    images: PartImage[];
  };
  type Section = {
    id: string;
    title: string;
    content: string;
    info: Record<string, string>;
    parts?: Part[];
  };

  const title = "数智创新力";
  const sections: Section[] = [
    {
      id: "Project1",
      title: "项目1：探究基于数字媒体的PISA绘本与幼儿阅读素养的关系",
      content: "在实习过程中，该幼儿园利用数字媒体拓展幼儿的阅读方式，但数字媒体对幼儿阅读素养的影响尚不明确。本项目旨在探究基于数字媒体的PISA绘本与幼儿阅读素养的关系，为幼儿园提供数字媒体阅读素养的指导。",
      info: {
        "角色": "教育研究者",
        "成果": "研究论文",
        "研究类型": "量化研究",
        "时间": "2024年9月-2024年11月",
        "地点": "广西幼师实验幼儿园"
      },
      parts: [
        {
          title: "Part1：PISA绘本简要介绍",
          images: [
            { src: "/assets/D1P1.png", desc: "PISA绘本是一套基于PISA国际评测标准建立的突破二维空间限制的具有交互性的电子绘本系统或盒子。该阅读活动以图画书为主要读本，教师通过多媒体设备组织幼儿进行听赏故事、自由阅读、亲子共读等活动，其融合了传统纸质绘本和电子绘本的形式。", class: "img-Project1" }
          ]
        },
      
        {
          title: "Part2：研究论文展示",
          images: [
            { src: "/assets/D1P2.png", desc: "《PISA绘本与大班幼儿阅读核心素养关系分析》论文" , class: "img-Project2", link: "/assets/D1F1.pdf" }
          ]
        }
      ]
    },
    {
      id: "Project2",
      title: "项目2：卡通教学代理对幼儿能力的影响",
      content: "本研究采用符合幼儿认知发展的卡通形象设计，并选用表达积极情感的教学代理视频，分析不同类型卡通教学代理（类人 vs 动物）对大班幼儿在视听关联学习和情绪体验方面的潜在差异。",
      info: {
        "角色": "教育研究者",
        "成果": "研究论文",
        "研究类型": "量化研究",
        "时间": "2024年12月-2025年5月",
        "地点": "珠海市某所公立幼儿园"
      },
      parts: [
        {
          title: "论文成果展示",
          images: [
            { src: "/assets/D2P1.png", desc: "《视频学习中类人与动物卡通教学代理对大班幼儿视听关联学习和情绪体验的比较研究》论文", class: "img-Project2", link: "/assets/D2F1.pdf" }
          ]
        },
      ]
    },
    {
      id: "Project3",
      title: "项目3：在线科学探究自适应学习平台构建研究 ",
      content: "根据中小学阶段理化课程的教学目标，整合多媒体平台资源，设计符合学习路径的在线实验活动，构建支持学生自主操作与探究的虚拟实验环境，实现理化实验教学的数字化转型与优化。",
      info: {
        "角色": "课程设计者",
        "成果": "以'物体的运动'单元课程的实验设计",
        "时间": "2023年10月-2024年6月",
        "地点": "线上平台",
        "概述内容": "作为课程设计组成员参与单元课程设计并在小水滴科学探究平台构建课程，并进行了课程测试和数据转换。"
      },
      parts: [
        {
          title: "Part1：课程设计",
          images: [
            { src: "/assets/D3P1.png", desc: "课程设计和实验操作步骤", class: "img-Project3", link: "/assets/D3F1.pdf"  }
          ]
        },
      
        {
          title: "Part2：小水滴平台展示-学生端",
          images: [
            { src: "/assets/D3P2.png", desc: "小水滴平台内容概览" , class: "img-Project3", link: "/assets/D3V1.mp4" }
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
      数智创新力是教师和学生在数字时代灵活运用技术、不断创新、提升学习与教学效率的关键能力，这个模块主要涉及教师整合数字资源和智能工具和课程设计以及检验融入数字技术的教学效果。
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
                            {#if img.src && img.src.endsWith('.mp4')}
                              <video src={img.src} controls class={img.class} style="max-width:700px;max-height:400px;display:block;"></video>
                            {:else if 'link' in img && typeof img.link === 'string' && img.link}
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
  --en-num-font: 'Times New Roman', Times, serif;
}

body, .practice-detail, .section, .img-desc, .project-info, .project-description {
  font-family: inherit;
}

/* 只针对英文和数字字符设置字体 */
*:not(code):not(pre) {
  font-family: inherit;
}

/* 利用 unicode-range 选择器，给所有数字和英文字符设置 Times New Roman 字体 */
@font-face {
  font-family: 'Times New Roman';
  src: local('Times New Roman'), local('Times'), serif;
  unicode-range: U+0030-0039, U+0041-005A, U+0061-007A;
}

/* 选择所有数字和英文字符，强制字体 */
.en-num-font {
  font-family: var(--en-num-font) !important;
}

/* 自动为所有数字和英文加上字体（通过选择器） */
body :not(code):not(pre) {
  font-feature-settings: "lnum";
}

/* 通过伪类选择所有数字和英文字符 */
body :not(code):not(pre) {
  unicode-bidi: isolate;
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
  left: 50px;
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
  gap: 3rem;
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
  display: flex;
  align-items: flex-end;
  width: 100%;
  flex-wrap: wrap;
  box-sizing: border-box;
}

.part-image-block {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-bottom: 30px;
  box-sizing: border-box;
  width: fit-content;
  max-width: 100%;
  gap: 18px;
}

.part-image-block img {
  display: block;
  max-width: 700px;
  height: auto;
  box-shadow: 0 2px 8px #0001;
  border-radius: 0;
  margin: 0;
}

.img-desc {
  align-self: flex-end;
  max-width: 400px;
  word-break: break-all;
  font-size: 0.98rem;
  color: #666;
  text-align: left;
  font-weight: 500;
  padding: 8px;
  background: rgba(255,255,255,0.9);
  border-radius: 6px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.1);
  border-left: 3px solid #705cc7;
  margin: 0;
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
.img-Project1 {
  border: 0px solid #705cc7;
  /* 可自定义更多样式 */
}
/* 第一部分第二张图片专属样式 */
.img-Project2 {
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
.img-Project1, .img-Project2 {
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  position: relative;
}

.img-Project1:hover, .img-Project2:hover {
  transform: scale(1.0);
  box-shadow: 0 4px 16px rgba(112,92,199,0.2);
}

/* 为可点击图片添加点击提示 - 针对直接图片 */
.img-Project1::after, .img-Project2::after {
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

.img-Project1:hover::after, .img-Project2:hover::after {
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