<script lang="ts">
  // 类型声明，消除 link 可选属性报错
  type ImageItem = {
    src?: string;
    desc: string;
    class?: string;
    link?: string;
  };

  const title = "教学创生力 — 模仿建构期";
  const sections = [
    {
      id: "concept",
      title: "项目1：广西传统文化与数模式",
      content: "幼儿活动强调在具体教学实践中教师的生成创新能力，教师需要根据不同年龄特点的幼儿进行个性化辅导，设置有难度梯度的任务，以适应不同幼儿的发展。以下成果展示主要分为三个部分内容：教案和课件设计——活动执行——教师反思。",
      info: {
        "角色": "幼儿教师",       
        "成果": "实际开展16次活动，教案设计和听课反思6份，个案观察4份，产出1篇《PISA绘本与大班幼儿阅读素养的关系分析》论文，荣获'优秀实习生'荣誉称号",
        "时间": "2024年9月-2024年11月",
        "地点": "广西幼师实验幼儿园",
        "概述内容": "本项目将数模式与广西传统文化和园所特点相结合，提高幼儿的数学思维和规律认识。"
      },
      image: "",
      parts: [
        {
          title: "第一部分：教案和课件设计，突出数模式与民族文化的结合。",
          images: [
            { src: "/src/assets/P1P1.png", desc: "课件展示：传统文化与数模式", class: "img-p1p1", link: "/src/assets/P1P1.pdf" },
            { src: "/src/assets/P1P2.png", desc: "教案展示：传统文化与数模式", class: "img-p1p2", link: "/src/assets/P1P2.pdf" }
          ]
        },
        {
          title: "第二部分：活动执行，幼儿在游戏中体验数模式，教师个性化辅导。",
          images: [
            { src: "/src/assets/P1L1.png", desc: "活动照片：传统文化与数模式", class: "img-p2p1" }
          ]
        },
        {
          title: "第三部分：教师反思，活动内容效果，积累经验。",
          images: [ { desc: "反思记录：幼儿课堂具有很大的灵活性和可实践性，该阶段儿童思维活泼，教师需要充分了解教学目标前提下，根据幼儿的兴趣和年龄特点灵活应变才能达到好的课堂效果，这个过程往往体现了教师生成能力。" } ]
        }
      ]
    },
    {
      id: "case",
      title: "项目2：电影下乡美育活动",
      content: "支教团核心成员主要负责调研，课程设计和开展，家访，从前期了解—活动实施—后期反馈三个环节，需要成员依据当地资源和学生的兴趣设计跨学科活动。",
      info: {
        "角色": "支教团核心成员",  
        "成果": "二等奖",
        "时间": "2022年6月-2023年9月 ",
        "地点": "在贵州遵义苟坝红军小学、河北阜平马兰小学、广西大化瑶族自治县高级中学和实验小学、青海省西宁市青海师大附中和青海兴海县",
        "概述内容": "本项目采用 \"全程直播乡村支教活动 + 全程实录公益纪录片\" 相结合的方式给经济欠发达的地区打造\"行走的电影美育思政课\"，以美化人，全面提升乡村青少年的艺术感知力和人文素养。"
      },
      image: "",
      parts: [
        {
          title: "第一部分：前期了解",
          images: [
            { src: "/src/assets/P2P1.jpg", desc: "学生兴趣调查", class: "img-P2P1"},
            { src: "/src/assets/P2P2.jpg", desc: "当地党员访谈", class: "img-P2P2" }
            ]
        },
        {
          title: "第二部分：活动实施",
          images: [
            { src: "/src/assets/P2P3.jpg", desc: "电影+绘画艺术课堂", class: "img-P2P3"},
            { src: "/src/assets/P2P4.jpg", desc: "教师与学生欣赏电影", class: "img-P2P4" }
            ]
        },
      ]
    },
  ];

  let expanded = false;

  function scrollToSection(id: string) {
    // 先移除所有section的高亮class
    document.querySelectorAll('.section.section-scrolled').forEach(el => {
      el.classList.remove('section-scrolled');
    });
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      el.classList.add('section-scrolled');
    }
    expanded = false; // 自动收起
  }
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
      <nav class="sidebar-nav-float">
        {#each sections as section}
          <button class="sidebar-link-float" on:click={() => scrollToSection(section.id)}>
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
      教学创生力是教师在不确定中敏锐觉察、灵活回应并生成有意义学习过程的能力，这种能力始于现有案例，通过不断优化与现场实践，逐步形成属于自己的课堂逻辑。
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
                            {#if 'link' in img && img.link}
                              <a href={img.link} target="_blank" class="image-link">
                                <img src={img.src} alt="部分图片" class={img.class} />
                              </a>
                            {:else}
                              <img src={img.src} alt="部分图片" class={img.class} />
                            {/if}
                            {#if img.desc}
                              <div class="img-desc">{img.desc}</div>
                            {/if}
                          </div>
                        {:else}
                          {#if img.desc}
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
          {#if section.id === 'case'}
            <div class="project-contact">
              <h3>了解该项目</h3>
              <div class="contact-qr-row">
                <div class="contact-qr-item">
                  <div class="contact-qr-label">微信公众号</div>
                  <img src="/src/assets/wechat_qr.jpg" alt="官方微信公众号" class="contact-qr-img" />
                </div>
                <div class="contact-qr-item">
                  <div class="contact-qr-label">官方微博</div>
                  <img src="/src/assets/weibo_qr.jpg" alt="官方微博" class="contact-qr-img" />
                </div>
                <div class="contact-qr-item">
                  <div class="contact-qr-label">官方抖音</div>
                  <img src="/src/assets/douyin_qr.jpg" alt="官方抖音" class="contact-qr-img" />
                </div>
              </div>
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
  --sidebar-bg: rgba(255,255,255,0.18);
  --sidebar-border: rgba(255,255,255,0.35);
  --sidebar-shadow: 0 4px 32px 0 rgba(31, 38, 135, 0.18);
  --sidebar-blur: 18px;
  --sidebar-accent: #eb4603;
  --sidebar-link-hover: #f4d35e;
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
  background: var(--sidebar-bg);
  border: 1.5px solid var(--sidebar-border);
  border-radius: 50%;
  color: var(--sidebar-accent);
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
  background: var(--sidebar-accent);
  border-radius: 2px;
}

.sidebar-arrow:hover {
  background: rgba(235,70,3,0.12);
  color: var(--sidebar-accent);
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
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.sidebar-link-float {
  background: none;
  border: none;
  color: var(--sidebar-text);
  text-align: left;
  padding: 0.7rem 1.2rem;
  font-size: 1rem;
  border-radius: 1rem;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  outline: none;
  font-weight: 500;
  letter-spacing: 1px;
  width: 100%;
}
.sidebar-link-float:hover, .sidebar-link-float:focus {
  background: rgba(235,70,3,0.12);
  color: var(--sidebar-accent);
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
  color: #eb4603;
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
  border: 1.5px solid #eb4603;
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
  color: #eb4603;
  border-color: #eb4603;
  box-shadow: 0 6px 18px rgba(235,70,3,0.18);
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
  background: #eb4503b8;
  border-radius: 0.7rem;
  padding: 1.1rem 1.3rem;
  margin: 0rem 0 0rem 0;
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
  color: #eb4603;
}
.part-images-row {
  display: block;
  width: 100%;
  margin-bottom: 0.5rem;
}

/* === AI调整：图片容器和图片样式优化 === */
.part-image-block {
  display: flex;
  align-items: flex-end; /* 保证底部对齐 */
  gap: 10px;
  margin-bottom: 30px;
}

.part-image-block img {
  display: block;
  margin: 0;
  padding: 0;
  max-width: 700px;
  max-height: 400px;
  object-fit: contain;
  object-position: center;
  box-shadow: 0 2px 8px #0001;
  border-radius: 0px;
  flex-shrink: 0;
}

.img-desc {
  display: flex;
  align-items: center;      /* 垂直居中 */
  justify-content: flex-start;
  text-align: left;
  line-height: 1;           /* 让字体基线居中 */
  font-size: 0.98rem;
  color: #666;
  max-width: auto;
  word-break: break-all;
  font-weight: 500;
  padding: 8px;
  background: rgba(255,255,255,0.9);
  border-radius: 6px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.1);
  border-left: 3px solid #eb4603;
  margin: 0;
  margin-bottom: 0;
  padding-bottom: 6px;
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
  border: 0px solid #eb4603;
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
  box-shadow: 0 4px 16px #eb460355;
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
  box-shadow: 0 4px 16px rgba(235,70,3,0.2);
}

/* 为可点击图片添加点击提示 - 修改为针对链接容器 */
.image-link::after {
  content: "点击查看原文档";
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(235,70,3,0.9);
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
  box-shadow: 0 4px 16px rgba(235,70,3,0.2);
}

/* 为可点击图片添加点击提示 - 针对直接图片 */
.img-p1p1::after, .img-p1p2::after {
  content: "点击查看原文档";
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(235,70,3,0.9);
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
  box-shadow: 1px 1px 8px rgba(235,70,3,0.2);
  max-width: 900px;
  text-align: center;
}
.project-contact h3 {
  color: #eb4603;
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
  box-shadow: 0 4px 16px #eb460355;
  border-color: #eb4603;
}
@media (max-width: 700px) {
  .contact-qr-row {
    flex-direction: column;
    gap: 2rem;
  }
}

.section.section-scrolled {
  /* margin-top: 80px !important; */
  /* transition: margin-top 0.4s cubic-bezier(.4,2,.6,1); */
}
</style> 