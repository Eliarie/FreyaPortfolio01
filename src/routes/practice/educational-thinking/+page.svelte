<script>
  const title = "教育思想力";
  const sections = [
    {
      title: "理念阐述",
      content: "教育思想力强调培养学生的独立思考能力和创新思维。我们相信，教育的核心不仅是知识的传授，更是思维方式的培养。通过引导学生进行批判性思考、创造性思维和系统性分析，帮助他们建立自己的知识体系和价值观念。"
    },
    {
      title: "实践案例",
      content: "在课堂教学中，我们采用苏格拉底式提问法，引导学生主动思考和探索。通过项目式学习，让学生在实践中发现问题、分析问题并解决问题。同时，我们鼓励学生进行跨学科思考，培养他们的综合思维能力。"
    },
    {
      title: "实践成果",
      content: "通过教育思想力的培养，学生展现出更强的独立思考能力，能够自主分析和解决问题。他们在面对复杂问题时，能够从多角度思考，提出创新性的解决方案。同时，学生的批判性思维能力得到显著提升，能够理性分析和评估信息。"
    }
  ];
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div class="practice-detail">
  <div class="header">
    <h1>{title}</h1>
    <p class="subtitle">培养独立思考，激发创新思维</p>
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