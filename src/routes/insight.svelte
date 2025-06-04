<script>
  const title = "随笔洞察";
  const articles = [
    {
      id: 1,
      title: "教育的未来：数字化时代的挑战与机遇",
      excerpt: "探讨数字化时代下教育面临的挑战，以及如何利用技术创新推动教育发展...",
      date: "2024-03-15",
      category: "教育创新"
    },
    {
      id: 2,
      title: "如何培养学生的批判性思维",
      excerpt: "分享在教学中培养学生批判性思维的方法和实践经验...",
      date: "2024-03-10",
      category: "教学方法"
    },
    {
      id: 3,
      title: "教育中的情感连接",
      excerpt: "探讨师生情感连接对教育效果的影响，以及如何建立良好的师生关系...",
      date: "2024-03-05",
      category: "教育心理"
    }
  ];
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div class="insights-container">
  <h1>{title}</h1>
  
  <div class="articles-grid">
    {#each articles as article}
      <article class="article-card">
        <div class="article-meta">
          <span class="category">{article.category}</span>
          <span class="date">{article.date}</span>
        </div>
        <h2>{article.title}</h2>
        <p>{article.excerpt}</p>
        <a href="/insights/{article.id}" class="read-more">阅读全文 →</a>
      </article>
    {/each}
  </div>
</div>

<style>
  .insights-container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 2rem;
  }

  h1 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 3rem;
  }

  .articles-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .article-card {
    background: white;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
  }

  .article-card:hover {
    transform: translateY(-5px);
  }

  .article-meta {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  .category {
    background: #e3f2fd;
    color: #1976d2;
    padding: 0.3rem 0.8rem;
    border-radius: 1rem;
    font-size: 0.9rem;
  }

  .date {
    color: #666;
    font-size: 0.9rem;
  }

  h2 {
    color: #2c3e50;
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }

  p {
    color: #666;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .read-more {
    color: #3498db;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
  }

  .read-more:hover {
    color: #2980b9;
  }
</style> 