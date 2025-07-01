<script>
  // 关于我页面的脚本

  const skills = [
    '课程设计', '玩教具设计','Office','SPSS', 'STATA', '库乐队','剪映',
    'VS Code', 'Cursor', '用户研究','Sketch'
  ];

  const education = [
    {
      icon: '🎓', // Placeholder icon
      degree: '本科学前教育专业',
      institution: '北京师范大学',
      year: '2025',
      details: 'GPA: 3.5 / 4.0, 已获得普通话二级甲等证书、通过CET-4',
    }
  ];
</script>

<main>
    <div class="profile-header">
        <img src="/src/resources/liscense.jpg" alt="Avatar" class="avatar">
        <h1>傅 她</h1>
        <p class="title">幼儿教育工作者</p>
    </div>

    <section class="about-me">
        <h3>关于我</h3>
        <p>
        我是一名幼儿教育实践者，立足于真实场域，以教育本源为根基，创新驱动探索多元形态的教育方式。
        </p>
        <p>
            我一直在寻找新的挑战和成长机会。
        </p>
        
    </section>

    <section class="skills">
        <h3>技能</h3>
        <div class="skills-list">
            {#each skills as skill}
                <span class="skill-tag">{skill}</span>
            {/each}
        </div>
    </section>

    <section class="education">
        <h3>教育背景</h3>
        <div class="timeline">
            {#each education as item}
                <div class="timeline-item">
                     <div class="timeline-icon">{item.icon}</div>
                    <div class="timeline-content">
                        <h4>{item.degree}</h4>
                         {#if item.institution}
                             <p class="institution">{item.institution}, {item.year}</p>
                         {:else}
                              <p class="year">{item.year}</p>
                         {/if}
                        <p>{item.details}</p>
                    </div>
                </div>
            {/each}
        </div>
    </section>

</main>

<style>
  /* 现有样式 */
  main {
    padding: 20px; /* 整体内边距 */
    max-width: 820px; /* 设置最大宽度 */
    margin: 20px auto; /* 居中显示，上下外边距20px */
    text-align: left; /* 文字左对齐 */
    line-height: 1.6; /* 增加行高 */
    font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif; /* 设置字体 */

  }
  h1 { /* 个人姓名的样式 */
    text-align: center; /* 居中 */
    color: #333;
    margin-bottom: 10px;
    font-size: 2em;
  }

   /* 职位样式 */
  .title {
      text-align: center; /* 居中 */
      color: #293241;
      margin-top: -8px;
      font-size: 1.2em; /* 调整字体大小 */
  }


  /* 头像容器 */
  .profile-header {
      text-align: center; /* 使内部元素（头像、姓名等）居中 */
      margin-bottom:70px;
  }

  /* 头像图片 */
  .avatar {
      width: 200px;
      height: 200px;
      border-radius: 50%; /* 使图片变为圆形 */
      object-fit: cover; /* 确保图片不变形 */
      object-position: center 10%; /* 调整图片在圆形框内的位置，第一个值控制水平位置，第二个值控制垂直位置 */
      margin-bottom: 0px;
  }

  h3 { /* 各个部分的标题样式 */
    color: #293241; /* 使用一个主题色 */
    margin-top: 50px; /* 从40px增加到60px，使标题向下移动 */
    margin-bottom: 20px;
    border-bottom: 2px solid #eee; /* 添加底线 */
    padding-bottom: 5px;
    font-size: 1.5em;
    text-align: left; /* 确保标题左对齐 */
  }
   /* 关于我段落 */
   .about-me p {
       max-width: 1000px; /* 限制段落宽度 */
       margin:10px 0px 10px ; /* 居中 */
       text-align: left; /* 左对齐 */
       font-size: 1.1em;
   }

  /* 技能标签列表容器 */
  .skills-list {
      display: flex; /* 使用 Flexbox 布局 */
      flex-wrap: wrap; /* 允许换行 */
      gap: 18px; /* 从10px增加到15px，增加标签之间的间距 */
      margin-top: 20px;
      justify-content: flex-start; /* 标签靠左对齐 */
  }
  /* 单个技能标签样式 */
  .skill-tag {
      background-color: white; /* 背景颜色 */
      border-radius: 20px; /* 圆角，形成胶囊形状 */
      padding: 5px 20px; /* 内边距 */
      font-size: 1em;
      color: black;
      white-space: nowrap; /* 防止标签文字换行 */
  }

  /* 经历容器 */
  .timeline {
      position: relative; /* 为垂直线设置相对定位 */
      padding-left: 30px; /* 为垂直线留出空间 */
  }
  /* 垂直线样式 */
   .timeline::before {
      content: '';
      position: absolute;
      top: 0;
      left: 10px; /* 垂直线的位置 */
      width: 2px;
      height: 100%;
      background-color: #eee; /* 垂直线颜色 */
   }
  /* 时间线项目样式 */
  .timeline-item {
      margin-bottom: 40px;
      position: relative; /* 为图标设置相对定位 */
  }
  /* 时间线图标样式 */
  .timeline-icon {
      position: absolute;
      left: -25px; /* 图标位置，使其位于垂直线上 */
      top: 0;
      width: 20px;
      height: 20px;
      background-color: white; /* 图标背景色 */
      border: 1px solid #eee; /* 边框 */
      border-radius: 50%; /* 圆形 */
      text-align: center;
      line-height: 20px; /* 使图标垂直居中 */
      font-size: 0.8em;
      z-index: 1; /* 确保图标在垂直线上方 */
      display: flex; /* 使用Flexbox */
      justify-content: center; /* 水平居中 */
      align-items: center; /* 垂直居中 */
   }
  /* 时间线内容样式 */
  .timeline-content {
      margin-left: 10px; /* 与图标和垂直线对齐 */
  }
  /* 时间线项目标题样式 */
  .timeline-content h4 {
      margin-top: 0;
      margin-bottom: 5px;
      font-size: 1.1em;
      color: #333;
  }
  /* 经历年份样式 */
   .timeline-content .years,
   .timeline-content .year {
       font-size: 1em;
       color: black;
       margin-bottom: 10px;
   }
    /* 教育机构样式 */
   .timeline-content .institution {
       font-size:1em;
       color: black;
       margin-bottom: 10px;
   }
   /* 时间线项目描述样式 */
  .timeline-content p {
      font-size: 1em;
      color: black;
      line-height: 1.5;
      margin-top: 5px; /* 调整描述顶部外边距 */
  }

</style> 