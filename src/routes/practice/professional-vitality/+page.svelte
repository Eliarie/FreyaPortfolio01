<script>
  const title = "职业生命力";
  const sections = [
    {
      title: "理念阐述",
      content: "职业生命力强调教师的专业发展和持续成长。我们相信，教育工作者需要不断学习和提升，保持职业活力和创新精神。通过建立完善的教师发展体系，促进教师的专业成长和职业发展。"
    },
    {
      title: "实践案例",
      content: "在实践过程中，我们建立了教师专业发展计划，定期组织培训和研讨活动。通过建立导师制，促进教师之间的经验分享和指导。同时，我们鼓励教师参与教育研究和创新实践，不断提升专业能力。"
    },
    {
      title: "实践成果",
      content: "通过职业生命力的实践，教师的专业素养得到显著提升，教学能力不断增强。教师队伍更加稳定，职业满意度提高。同时，教师的创新意识和研究能力得到培养，为教育发展注入新的活力。"
    }
  ];
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div class="practice-detail">
  <div class="header">
    <h1>{title}</h1>
    <p class="subtitle">促进专业发展，保持职业活力</p>
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