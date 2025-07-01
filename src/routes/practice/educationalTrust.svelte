<script lang="ts">
  type ImageItem = {
    src?: string;
    desc: string;
    class?: string;
    link?: string;
  };
  const title = "教育共信力";
  const sections = [
    {
      id: "concept",
      title: "项目1：家校共信机制建设",
      content: "教育共信力强调建立教育共同体中的互信关系。我们相信，教育是一个需要多方信任和支持的过程。通过建立透明、开放的教育环境，促进教师、学生、家长之间的相互理解和信任，形成良性的教育生态。以下成果展示主要分为三个部分内容：沟通机制建设——家校活动实践——信任反馈与反思。",
      info: {
        "角色": "教师、家长、学生",
        "成果": "建立家校沟通平台，定期家长会与开放日，信任度显著提升",
        "时间": "2023年9月-2024年1月",
        "地点": "广州市某小学",
        "概述内容": "通过多元沟通与合作，增强家校互信。"
      },
      parts: [
        {
          title: "第一部分：沟通机制建设",
          images: [
            { src: "/src/assets/P1P1.png", desc: "家校沟通平台界面", class: "img-p1p1" },
            { src: "/src/assets/P1P2.png", desc: "家长会现场照片", class: "img-p1p2" }
          ]
        },
        {
          title: "第二部分：家校活动实践",
          images: [
            { src: "/src/assets/P1L1.png", desc: "家校共建活动合影", class: "img-p2p1" }
          ]
        },
        {
          title: "第三部分：信任反馈与反思",
          images: [
            { desc: "通过问卷与访谈收集家长和教师的信任反馈，持续优化沟通机制。" }
          ]
        }
      ]
    },
    {
      id: "case",
      title: "项目2：开放课堂与评价公正",
      content: "通过开放课堂、家长会等形式，增进各方对教育过程的理解。同时，注重建立科学的评价体系，确保教育评价的公平公正。",
      info: {
        "角色": "教师、家长、学生",
        "成果": "家长参与度提升，学生获得感增强",
        "时间": "2024年3月-2024年6月",
        "地点": "广州市某小学",
        "概述内容": "开放透明，促进信任。"
      },
      parts: [
        {
          title: "第一部分：开放课堂",
          images: [
            { src: "/src/assets/P1P1.png", desc: "家长观摩课堂", class: "img-p1p1" }
          ]
        },
        {
          title: "第二部分：评价体系建设",
          images: [
            { desc: "建立多元评价体系，确保评价公平公正。" }
          ]
        }
      ]
    },
    {
      id: "result",
      title: "实践成果",
      content: "通过教育共信力的实践，教育共同体成员之间的信任度显著提升。家校关系更加和谐，教育合作更加顺畅。学生的成长得到更多关注和支持，教育效果得到广泛认可。整个教育环境更加开放、透明。",
      info: {
        "成果": "信任度提升，家校合作典范",
        "时间": "2024年6月",
        "地点": "广州",
        "概述内容": "共信共育，成效显著。"
      },
      parts: [
        {
          title: "成果展示",
          images: [
            { desc: "家校共信力项目成果展示与典型案例分享。" }
          ]
        }
      ]
    }
  ];
  let expanded = false;
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
    <p class="subtitle">建立互信关系，促进教育发展</p>
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

.practice-detail {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.header {
  text-align: center;
  margin-bottom: 3rem;
}

h1 {
  color: #2c3e50;
  margin: 0;
}

.subtitle {
  color: #666;
  font-size: 1.2rem;
  margin-top: 0.5rem;
}

.section {
  margin-bottom: 3rem;
  padding: 2rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

h2 {
  color: #3498db;
  margin-top: 0;
  margin-bottom: 1rem;
}

p {
  line-height: 1.6;
  color: #555;
  margin: 0;
}

.navigation {
  margin-top: 3rem;
  text-align: center;
}

.back-link {
  display: inline-flex;
  align-items: center;
  padding: 0.8rem 1.5rem;
  background-color: #f8f9fa;
  color: #3498db;
  text-decoration: none;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  font-weight: 500;
}

.back-link:hover {
  background-color: #e9ecef;
  transform: translateX(-5px);
}

.arrow {
  margin-right: 0.5rem;
  font-size: 1.2rem;
}

.text {
  font-size: 1rem;
}

.top-left-nav {
  position: absolute;
  left: -68px;
  top: -48px;
  z-index: 10;
}
</style> 