<script lang="ts">
  type Section = {
    id: string;
    title: string;
    content: string;
    info?: Record<string, string>;
    parts?: { title: string; images: { src?: string; desc: string; class?: string; link?: string }[] }[];
  };
  const title = "教育思想力";
  const sections: Section[] = [
    {
      id: "concept",
      title: "理念阐述",
      content: "教育思想力强调培养学生的独立思考能力和创新思维。我们相信，教育的核心不仅是知识的传授，更是思维方式的培养。通过引导学生进行批判性思考、创造性思维和系统性分析，帮助他们建立自己的知识体系和价值观念。"
    },
    {
      id: "case",
      title: "实践案例",
      content: "在课堂教学中，我们采用苏格拉底式提问法，引导学生主动思考和探索。通过项目式学习，让学生在实践中发现问题、分析问题并解决问题。同时，我们鼓励学生进行跨学科思考，培养他们的综合思维能力。"
    },
    {
      id: "result",
      title: "实践成果",
      content: "通过教育思想力的培养，学生展现出更强的独立思考能力，能够自主分析和解决问题。他们在面对复杂问题时，能够从多角度思考，提出创新性的解决方案。同时，学生的批判性思维能力得到显著提升，能够理性分析和评估信息。"
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
    <p class="subtitle">培养独立思考，激发创新思维</p>
  </div>
  <div class="content">
    {#each sections as section}
      <section class="section" id={section.id}>
        <div class="project-info-content">
          <h2>{section.title}</h2>
          <div class="project-description">
            {section.content}
          </div>
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
  left: 18px;
  top: 38px;
  z-index: 10;
}
</style> 