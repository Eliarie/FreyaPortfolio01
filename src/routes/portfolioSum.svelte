<script>
    // 定义一个 projects 数组，存放精选项目的数据
    const projects = [
        {
            image: 'placeholder-mobile.jpg', // 项目图片路径
            title: '移动应用重新设计', // 项目标题
            description: '对一款热门移动应用进行全面改造，重点关注可用性和美观性。' // 项目描述
        },
        {
            image: 'placeholder-ecommerce.jpg', // 项目图片路径
            title: '电子商务网站', // 项目标题
            description: '一个现代化的时尚品牌电子商务平台，强调视觉叙事。' // 项目描述
        },
        {
            image: 'placeholder-dashboard.jpg', // 项目图片路径
            title: '仪表板设计', // 项目标题
            description: '一个直观的数据分析仪表板，旨在提高清晰度和效率。' // 项目描述
        }
    ];
</script>

<main>
    <!-- 英雄区域：包含个人介绍和行动按钮 -->
    <section class="hero">
        <!-- 英雄区域的内容容器，用于限制宽度和添加背景叠加 -->
        <div class="hero-content">
            <!-- 个人问候标题 -->
            <h1>你好，我是 Sarah，一名产品设计师</h1>
            <!-- 个人简介段落 -->
            <p>
                我设计直观且以用户为中心的数字体验。凭借视觉传达背景和解决问题的热情，我致力于创造既美观又实用的产品。探索我的作品集，了解我如何将创意变为现实。
            </p>
            <!-- 查看项目按钮 -->
            <button>查看项目</button>
        </div>
    </section>

    <!-- 精选项目区域 -->
    <section class="featured-projects">
        <!-- 精选项目区域标题 -->
        <h2>精选项目</h2>
        <!-- 项目卡片网格容器 -->
        <div class="projects-grid">
            <!-- Svelte 循环：遍历 projects 数组，为每个项目创建一个项目卡片 -->
            {#each projects as project}
                <!-- 单个项目卡片 -->
                <div class="project-card">
                    <!-- 项目图片，src 和 alt 属性绑定到 project 对象的数据 -->
                    <img src={project.image} alt={project.title}>
                    <!-- 项目标题，绑定到 project 对象的数据 -->
                    <h3>{project.title}</h3>
                    <!-- 项目描述，绑定到 project 对象的数据 -->
                    <p>{project.description}</p>
                </div>
            {/each}
        </div>
    </section>
</main>

<style>
    /* 主要内容区域样式：设置最大宽度和居中 */
    main {
        font-family: sans-serif; /* 设置字体 */
        max-width: 2500px; /* 设置最大宽度 */
        max-height: fit-content;
        margin: 0 auto; /* 左右自动外边距，实现水平居中 */
        width: 100%; /* 宽度自适应 */
    }

    /* 英雄区域样式：背景图，大小，对齐等 */
    .hero {
        background-image: url('placeholder-hero.jpg'); /* 背景图片 */
        background-size: cover; /* 背景图片覆盖整个区域 */
        background-position: center; /* 背景图片居中 */
        color: white; /* 文字颜色 */
        padding: 150px 0 100px 0; /* 上下内边距 */
        display: flex; /* 使用 Flexbox 布局 */
        justify-content: center; /* Flex items (hero-content) 水平居中 */
        align-items: center; /* Flex items (hero-content) 垂直居中 */
        width: 100%; /* 宽度自适应 */
        margin: 0 auto; /* 左右自动外边距，实现水平居中 */
    }

    /* 英雄区域内容容器样式：背景叠加，内边距，圆角，文本对齐等 */
    .hero-content {
        background-color: rgba(0, 0, 0, 0.5); /* 半透明黑色背景叠加 */
        padding: 80px 70px; /* 内边距，控制内容与容器边缘的距离 */
        border-radius: 10px; /* 圆角 */
        text-align: left; /* 文本左对齐 */
        width: 1000px; 
        height: 500px;
        box-sizing: border-box; /* 内边距和边框包含在元素的总宽度和高度内 */
    }

    /* 英雄区域标题样式 */
    .hero h1 {
        font-size: 2.5em; /* 字体大小 */
        margin-bottom: 20px; /* 底部外边距 */
    }

    /* 英雄区域段落样式 */
    .hero p {
        font-size: 1.2em; /* 字体大小 */
        margin-bottom: 30px; /* 底部外边距 */
        line-height: 1.5; /* 行高 */
    }

    /* 英雄区域按钮样式 */
    .hero button {
        padding: 10px 20px 15px; /* 内边距 */
        font-size: 1.1em; /* 字体大小 */
        color: white; /* 文字颜色 */
        background-color: #3498db; /* 背景颜色 */
        border: none; /* 无边框 */
        border-radius: 5px; /* 圆角 */
        cursor: pointer; /* 鼠标样式 */
        text-align: center; /* 文本居中 */
    }

    /* 精选项目和关于我区域的通用样式 */
    .featured-projects,
    .about-me {
        padding: 5px 20px; /* 添加一致的左右内边距 */
        text-align: left; /* 保持左对齐 */
        width: 1100px; /* 与 .hero 相同的最大宽度，实现左边缘对齐 */
        margin: 0 auto; /* 左右自动外边距，实现水平居中 */
        box-sizing: border-box; /* 内边距和边框包含在元素的总宽度和高度内 */
    }

    /* 精选项目的标题样式 */
    .featured-projects h2,
    .about-me h2 {
        font-size: 2em; /* 字体大小 */
        margin-bottom: 30px; /* 底部外边距 */
        text-align: left; /* 文本左对齐 */
        margin-left: 20px;
    }

    /* 项目网格容器样式：Grid 布局，间距，最大宽度，居中等 */
    .projects-grid {
        display: grid; /* 使用 Grid 布局 */
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* 自动填充列，每列最小宽度250px */
        gap: 30px; /* 网格项之间的间距 */
        margin: 0 20px 0 0; /* 顶部0，左右auto (居中)，底部200px 外边距 */
        padding: 0 20px; /* 添加左右内边距，防止项目卡片贴边 */
        box-sizing: border-box; /* 内边距和边框包含在元素的总宽度和高度内 */
    }

    /* 单个项目卡片样式 */
    .project-card {
        border: 1px solid #ccc; /* 边框 */
        border-radius: 8px; /* 圆角 */
        padding: 20px; /* 内边距 */
        text-align: left; /* 文本左对齐 */
        margin-bottom: 200px;
    }

    /* 项目卡片图片样式 */
    .project-card img {
        width: 100%; /* 宽度占满父容器 */
        height: auto; /* 高度自动 */
        margin-bottom: 15px; /* 底部外边距 */
        border-radius: 4px; /* 圆角 */
    }

    /* 项目卡片标题样式 */
    .project-card h3 {
        font-size: 1.3em; /* 字体大小 */
        margin-bottom: 20px; /* 底部外边距 */
    }

    /* 项目卡片描述样式 */
    .project-card p {
        font-size: 1em; /* 字体大小 */
        color: #555; /* 文字颜色 */
    }

    /* 响应式布局：当屏幕宽度小于或等于 768px 时应用的样式 */
    @media (max-width: 768px) {
        /* 英雄区域在小屏幕下的样式调整 */
        .hero {
            padding: 80px 0; /* 减小上下内边距，移除左右内边距 */
            max-width: 100%; /* 宽度自适应，不限制最大宽度 */
        }

        /* 英雄内容区域在小屏幕下的样式调整 */
        .hero-content {
            padding: 40px 20px; /* 减小内边距 */
        }

        /* 精选项目和关于我区域在小屏幕下的样式调整 */
        .featured-projects,
        .about-me {
             padding: 5px 20px; /* 保留内边距 */
             text-align: left; /* 保持左对齐 */
             max-width: 100%; /* 宽度自适应 */
        }

        /* 项目网格容器在小屏幕下的样式调整 */
        .projects-grid {
            grid-template-columns: 1fr; /* 单列布局，项目卡片垂直堆叠 */
            gap: 15px; /* 减小间距 */
            max-width: 100%; /* 宽度自适应 */
             margin: 0 auto 50px; /* 调整底部外边距 */
             padding: 0 20px; /* 添加左右内边距防止贴边 */
        }

        /* 精选项目和关于我标题在小屏幕下的样式调整（内边距已在父容器设置） */
        .featured-projects h2,
        .about-me h2 {
             /* padding已在父容器中设置，这里不需要 */
        }



        /* 导航列表在小屏幕下的样式调整 */
         nav ul {
            flex-direction: column; /* 垂直排列 */
            align-items: center; /* 垂直居中 */
         }

        /* 导航列表项在小屏幕下的样式调整 */
         nav li {
             margin: 5px 0; /* 调整垂直排列时的间距 */
         }
    }
</style>
