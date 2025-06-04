<script>
  const title = "教学创生力";
  const sections = [
    {
      title: "理念阐述",
      content: "教学创生力强调创新教学方法和教学内容的生成。我们相信，教育应该与时俱进，不断创新。通过设计富有创意的教学活动，激发学生的学习兴趣，培养他们的创造力和实践能力。"
    },
    {
      title: "实践案例",
      content: "在教学中，我们采用情境教学、游戏化学习等创新方法，让学习变得有趣而有效。通过设计开放性的学习任务，鼓励学生发挥想象力和创造力。同时，我们注重跨学科整合，帮助学生建立知识联系。"
    },
    {
      title: "实践成果",
      content: "通过教学创生力的实践，学生的学习积极性显著提高，课堂参与度增加。他们在创新活动中展现出丰富的想象力和创造力，能够将所学知识灵活运用到实际问题中。同时，学生的团队协作能力和表达能力也得到了提升。"
    }
  ];
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div class="practice-detail">
  <div class="header">
    <h1>{title}</h1>
    <p class="subtitle">创新教学方法，提升学习效果</p>
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