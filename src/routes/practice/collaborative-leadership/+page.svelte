<script>
  const title = "协同领导力";
  const sections = [
    {
      title: "理念阐述",
      content: "协同领导力强调团队协作和共同成长。我们相信，教育是一个需要多方协作的系统工程。通过建立有效的团队协作机制，促进教师、学生、家长和社区的共同参与，实现教育资源的优化配置和协同发展。"
    },
    {
      title: "实践案例",
      content: "在实践过程中，我们建立了教师协作共同体，定期开展教研活动和经验分享。同时，我们积极组织家校合作活动，邀请家长参与教育过程。此外，我们还与社区资源建立联系，为学生提供更丰富的学习机会。"
    },
    {
      title: "实践成果",
      content: "通过协同领导力的实践，教师团队的专业能力得到提升，教学效果显著改善。家校关系更加融洽，家长参与度提高。学生的综合素质得到全面发展，社区资源得到充分利用。整个教育生态系统更加和谐有序。"
    }
  ];
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div class="practice-detail">
  <div class="header">
    <h1>{title}</h1>
    <p class="subtitle">建立团队协作，促进共同成长</p>
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