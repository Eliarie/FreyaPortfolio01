<script>
  const title = "教育共信力";
  const sections = [
    {
      title: "理念阐述",
      content: "教育共信力强调建立教育共同体中的互信关系。我们相信，教育是一个需要多方信任和支持的过程。通过建立透明、开放的教育环境，促进教师、学生、家长之间的相互理解和信任，形成良性的教育生态。"
    },
    {
      title: "实践案例",
      content: "在实践过程中，我们建立了定期沟通机制，及时分享教育进展和成果。通过开放课堂、家长会等形式，增进各方对教育过程的理解。同时，我们注重建立科学的评价体系，确保教育评价的公平公正。"
    },
    {
      title: "实践成果",
      content: "通过教育共信力的实践，教育共同体成员之间的信任度显著提升。家校关系更加和谐，教育合作更加顺畅。学生的成长得到更多关注和支持，教育效果得到广泛认可。整个教育环境更加开放、透明。"
    }
  ];
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div class="practice-detail">
  <div class="header">
    <h1>{title}</h1>
    <p class="subtitle">建立互信关系，促进教育发展</p>
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