<script>
  // 页面标题
  const title = "联系我";
  
  // 控制提交成功弹窗显示的状态变量
  let showModal = false;
  
  // 表单数据对象，用于存储用户输入的信息
  let formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  // 处理表单提交的函数
  function handleSubmit() {
    // 这里可以添加表单提交逻辑
    console.log('Form submitted:', formData);
    // 模拟提交成功后显示弹窗
    showModal = true;
    // 提交后重置表单数据
    formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }

  // 关闭弹窗的函数
  function closeModal() {
    showModal = false;
  }
</script>

<!-- 设置页面标题 -->
<svelte:head>
  <title>{title}</title>
</svelte:head>

<!-- 联系页面的主容器 -->
<div class="contact-container">
  <h1>{title}</h1>
  
  <!-- 联系页面的主要内容区域 -->
  <div class="contact-content">
    <!-- 左侧联系信息区域 -->
    <div class="contact-info">
      <h2>联系方式</h2>
      <div class="info-item">
        <span class="icon"><img width="25" height="25" src="https://img.icons8.com/office/50/new-post.png" alt="new-post"/>
        </span>
        <p>邮箱：3035768047@qq.com</p>
      </div>
      <div class="info-item">
        <span class="icon">📍</span>
        <p>地址：中国</p>
      </div>
    </div>

    <!-- 右侧联系表单区域 -->
    <form on:submit|preventDefault={handleSubmit} class="contact-form">
      <h2>给我留言</h2>
      
      <!-- 姓名输入框 -->
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

      <!-- 邮箱输入框 -->
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

      <!-- 主题输入框 -->
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

      <!-- 留言内容文本框 -->
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

      <!-- 提交按钮 -->
      <button type="submit" class="submit-button">发送留言</button>
    </form>
  </div>
</div>

<!-- 提交成功弹窗 -->
{#if showModal}
<div class="modal-overlay" on:click|self={closeModal}>
  <div class="modal-content">
    <h2>提交成功！</h2>
    <p>感谢您的留言，我们会尽快回复您。</p>
    <button on:click={closeModal}>关闭</button>
  </div>
</div>
{/if}

<style>
  /* 主容器样式 */
  .contact-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }

  /* 标题样式 */
  h1 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 3rem;
  }

  /* 内容区域网格布局 */
  .contact-content {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 2em;
  }

  /* 联系信息区域样式 */
  .contact-info {
    background: white;
    padding: 2rem 3rem 3rem 3rem;
    height: 150px;
    border-radius: 1rem;
  }

  /* 联系信息项样式 */
  .info-item {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
  }

  /* 联系信息项中文本样式 */
  .info-item p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 0rem;
    
  }

  /* 邮箱项目（第一个 .info-item）的特定底部外边距 */
  .contact-info .info-item:first-of-type {
    margin-top: 0rem;
    margin-bottom: 0rem;
  }

  /* 图标样式 */
  .icon {
    margin-top: 0rem;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    margin-right: 1rem;
    width: 24px;
    height: 25px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }


  /* 表单区域样式 */
  .contact-form {
    background: white;
    padding: 2rem 4rem 3rem 2.5rem;
    border-radius: 1rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    margin-right:3rem;
    margin-bottom: 1rem;
  }

  /* 表单标题样式 */
  h2 {
    color: #2c3e50;
    margin-top: 0;
    margin-bottom: 2rem;
  }

  /* 表单组样式 */
  .form-group {
    margin-bottom: 1.5rem;
    padding-right: 2rem;
  }

  /* 标签样式 */
  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #555;
  }

  /* 输入框和文本域样式 */
  input, textarea {
    width: 100%;
    padding: 1rem 2rem 1rem 1rem;
    border: 1px solid #ddd;
    border-radius: 0.5rem;
    font-size: 1rem;

  }

  /* 输入框和文本域焦点样式 */
  input:focus, textarea:focus {
    outline: none;
    border-color: #3498db;
  }

  /* 提交按钮样式 */
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

  /* 提交按钮悬停效果 */
  .submit-button:hover {
    background-color: #2980b9;
  }

  /* 响应式布局 - 移动端适配 */
  @media (max-width: 768px) {
    .contact-content {
      grid-template-columns: 1fr;
    }
  }

  /* 弹窗覆盖层样式 */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6); /* 半透明黑色背景 */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  /* 弹窗内容框样式 */
  .modal-content {
    background: white;
    padding: 2rem;
    border-radius: 1rem;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    max-width: 90%;
    width: 400px;
    position: relative; /* 为了定位关闭按钮 */
  }

  .modal-content h2 {
    color: #2c3e50;
    margin-top: 0;
    margin-bottom: 1rem;
  }

  .modal-content p {
    margin-bottom: 1.5rem;
  }

  .modal-content button {
    background-color: #3498db;
    color: white;
    padding: 0.8rem 1.5rem;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .modal-content button:hover {
    background-color: #2980b9;
  }
</style> 