<script>
  const title = "联系我";
  let formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  function handleSubmit() {
    // 这里可以添加表单提交逻辑
    console.log('Form submitted:', formData);
    alert('感谢您的留言！我会尽快回复。');
    formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div class="contact-container">
  <h1>{title}</h1>
  
  <div class="contact-content">
    <div class="contact-info">
      <h2>联系方式</h2>
      <div class="info-item">
        <span class="icon">📧</span>
        <p>邮箱：example@email.com</p>
      </div>
      <div class="info-item">
        <span class="icon">📱</span>
        <p>微信：WeChatID</p>
      </div>
      <div class="info-item">
        <span class="icon">📍</span>
        <p>地址：中国</p>
      </div>
    </div>

    <form on:submit|preventDefault={handleSubmit} class="contact-form">
      <h2>给我留言</h2>
      
      <div class="form-group">
        <label for="name">姓名</label>
        <input
          type="text"
          id="name"
          bind:value={formData.name}
          required
          placeholder="请输入您的姓名"
        />
      </div>

      <div class="form-group">
        <label for="email">邮箱</label>
        <input
          type="email"
          id="email"
          bind:value={formData.email}
          required
          placeholder="请输入您的邮箱"
        />
      </div>

      <div class="form-group">
        <label for="subject">主题</label>
        <input
          type="text"
          id="subject"
          bind:value={formData.subject}
          required
          placeholder="请输入留言主题"
        />
      </div>

      <div class="form-group">
        <label for="message">留言内容</label>
        <textarea
          id="message"
          bind:value={formData.message}
          required
          placeholder="请输入您的留言内容"
          rows="5"
        ></textarea>
      </div>

      <button type="submit" class="submit-button">发送留言</button>
    </form>
  </div>
</div>

<style>
  .contact-container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 2rem;
  }

  h1 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 3rem;
  }

  .contact-content {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 3rem;
  }

  .contact-info {
    background: #f8f9fa;
    padding: 2rem;
    border-radius: 1rem;
  }

  .info-item {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
  }

  .icon {
    font-size: 1.5rem;
    margin-right: 1rem;
  }

  .contact-form {
    background: white;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }

  h2 {
    color: #2c3e50;
    margin-top: 0;
    margin-bottom: 2rem;
  }

  .form-group {
    margin-bottom: 1.5rem;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #555;
  }

  input, textarea {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 0.5rem;
    font-size: 1rem;
  }

  input:focus, textarea:focus {
    outline: none;
    border-color: #3498db;
  }

  .submit-button {
    background-color: #3498db;
    color: white;
    padding: 1rem 2rem;
    border: none;
    border-radius: 0.5rem;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .submit-button:hover {
    background-color: #2980b9;
  }

  @media (max-width: 768px) {
    .contact-content {
      grid-template-columns: 1fr;
    }
  }
</style> 