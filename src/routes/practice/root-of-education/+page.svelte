<script>
  const title = "教育本源力";
  const sections = [
    {
      title: "理念阐述",
      content: "教育本源力强调回归教育的本质，关注学生的全面发展。我们相信，教育的根本目的是培养具有独立思考能力、创新精神和人文关怀的完整人格。"
    },
    {
      title: "实践案例",
      content: "通过项目式学习、探究式教学等方法，我们帮助学生建立知识体系，培养批判性思维，激发学习兴趣。"
    },
    {
      title: "实践成果",
      content: "学生在学习过程中展现出更强的自主学习能力，对知识的理解更加深入，学习态度更加积极。"
    }
  ];
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div class="practice-detail">
  <div class="header">
    <h1>{title}</h1>
    <p class="subtitle">回归教育的本质，探索教育的真谛</p>
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
    <a href="/practice" class="back-link">← 返回教育实践</a>
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
</style> 