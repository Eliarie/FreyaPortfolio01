<script lang="ts">
  type Section = {
    id: string;
    title: string;
    content: string;
    info?: Record<string, string>;
    parts?: { title: string; images: { src?: string; desc: string; class?: string; link?: string }[] }[];
  };
  const title = "教育本源力";
  const sections: Section[] = [
    {
      id: "concept",
      title: "理念阐述",
      content: "教育本源力强调回归教育的本质，关注学生的全面发展。我们相信，教育的根本目的是培养具有独立思考能力、创新精神和人文关怀的完整人格。"
    },
    {
      id: "case",
      title: "实践案例",
      content: "通过项目式学习、探究式教学等方法，我们帮助学生建立知识体系，培养批判性思维，激发学习兴趣。"
    },
    {
      id: "result",
      title: "实践成果",
      content: "学生在学习过程中展现出更强的自主学习能力，对知识的理解更加深入，学习态度更加积极。"
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
    <p class="subtitle">回归教育的本质，探索教育的真谛</p>
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
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background-color: #f8f9fa;
  color: #3498db;
  text-decoration: none;
  border-radius: 0.5rem;
  transition: background-color 0.3s ease;
}

.back-link:hover {
  background-color: #e9ecef;
}

.top-left-nav {
  position: absolute;
  left: 32px;
  top: 32px;
  z-index: 10;
}
</style> 