<script>
  const title = "数智创新力";
  const sections = [
    {
      title: "理念阐述",
      content: "数智创新力强调运用数字技术和智能工具推动教育创新。我们相信，在数字化时代，教育需要与时俱进，充分利用技术手段提升教学效果。通过整合数字资源和智能工具，为学生提供个性化、高效的学习体验。"
    },
    {
      title: "实践案例",
      content: "在教学中，我们运用智能教学平台进行个性化学习指导，利用数据分析优化教学策略。通过虚拟现实、增强现实等技术，创造沉浸式学习体验。同时，我们注重培养学生的数字素养，帮助他们适应数字化时代的需求。"
    },
    {
      title: "实践成果",
      content: "通过数智创新力的实践，教学效率显著提升，学习效果得到改善。学生的数字素养和创新能力得到培养，能够熟练运用数字工具解决问题。同时，教师的信息化教学能力得到提升，教育资源的利用更加高效。"
    }
  ];
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div class="practice-detail">
  <div class="header">
    <h1>{title}</h1>
    <p class="subtitle">融合数字技术，推动教育创新</p>
  </div>

  <div class="content">
    {#each sections as section}
      <section class="section">
        <h2>{section.title}</h2>
        <p>{section.content}</p>
      </section>
    {/each}
  </div>

  <div class="navigation">
    <a href="/practice" class="back-link">
      <span class="arrow">←</span>
      <span class="text">返回教育实践</span>
    </a>
  </div>
</div>

<style>
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
</style> 