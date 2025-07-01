<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  // 1. TypeScript 支持声明
  let isOpen: boolean = true; // 变量声明与类型注解
  // 添加点击状态管理
  let activeText: string | null = null;
  let hoveredText: string | null = null;
  let mouseX = 0;
  let mouseY = 0;

  // 处理文字点击
  function handleTextClick(text: string) {
    activeText = activeText === text ? null : text;
  }

  function handleMouseEnter(text: string) {
    hoveredText = text;
  }
  function handleMouseLeave() {
    hoveredText = null;
  }
  function handleMouseMove(event: MouseEvent) {
    mouseX = event.clientX;
    mouseY = event.clientY;
  }


  // 动画序列状态变量
  let phase1_bottomMostLine = false; // 最底部的线条
  let phase2_eduShengYuanLi = false; // 教育生源力文字及连接线
  let phase3_decorativeLine = false; // 灯泡底座上方的装饰线条
  let phase3_lampOutline = false; // 灯泡主体轮廓
  let phase4_lampBodyColor = 'rgba(255,255,255,0)'; // 灯泡填充颜色设为完全透明
  let phase5_eduSiXiangLi = false; // 教育思想力文字
  let phase6_xieTongLingDaoLi = false; // 协同领导力文字
  let phase7_eduGongXinLi = false; // 教育共信力文字
  let phase8_jiaoXueChuangShengLi = false; // 教学创生力文字
  let phase9_eduYingXiangLi = false; // 教育影响力文字
  let phase10_lampGlow = 'none'; // 灯泡发光滤镜
  // 新增动画阶段
  let phaseM_lampFilament = false; // M形灯丝
  let phaseLightningTextBolts = false;  // 三条指向字体的闪电动画
  let phaseThreeForcesText = false; // 三个力文字动画
  let phaseCloudFill = false;      // 云团黄色填充
  let phaseLightningFill = false; // 灯泡体内充满闪电
  let phaseDigitalInnovation = false; // 数智创新力文字

  // 2. 生命周期钩子
  onMount(() => {
    setTimeout(() => {
      const nav = document.querySelector('.simple-nav');
      if (nav) nav.classList.add('competition-nav');
    }, 0);

    // 动画序列
    setTimeout(() => {
      phase1_bottomMostLine = true; // 1. 出现最底部的线条
      setTimeout(() => {
        phase2_eduShengYuanLi = true; // 2. 出现教育本源力及相贴的线条
        setTimeout(() => {
          phase3_decorativeLine = true; // 3. 出现灯泡底座上方的装饰线条
          setTimeout(() => {
            phase3_lampOutline = true; // 4. 出现灯泡轮廓 (上面一个线条)
            setTimeout(() => {
              // 5. 先出现灯泡主体
              setTimeout(() => {
                phaseM_lampFilament = true; // 6. 再出现M形灯丝
                setTimeout(() => {
                  phaseLightningFill = true; // 7. 灯泡体内充满闪电
                  setTimeout(() => {
                    // 闪电消失前，开始出现三个力的闪电和文字
                    phaseLightningTextBolts = true; // 三条指向字体的闪电出现
                    setTimeout(() => {
                      phaseLightningTextBolts = false; // 闪电隐藏
                      phaseThreeForcesText = true; // 三个力文字出现
                      phase8_jiaoXueChuangShengLi = true;
                      phase7_eduGongXinLi = true;
                      phase6_xieTongLingDaoLi = true;
                      phase4_lampBodyColor = 'rgba(255, 255, 0, 0.1)';
                      setTimeout(() => {
                        phase5_eduSiXiangLi = true;
                        phaseDigitalInnovation = true;
                        setTimeout(() => {
                          phase10_lampGlow = 'url(#glow)'; // 灯泡发光
                          setTimeout(() => {
                            phase9_eduYingXiangLi = true; // 教育影响力
                          }, 500);
                        }, 500);
                      }, 500);
                    }, 300); // 闪电显示时长

                    // 同时，内部闪电在稍后消失
                    setTimeout(() => {
                      phaseLightningFill = false; // 闪电消失
                    }, 100); // 让文字出现后200ms再消失
                    
                  }, 300); // 内部闪电持续300ms后，开始后续动画
                }, 300); // M形灯丝延迟
              }, 300); // 主体延迟
            }, 300); // 灯泡轮廓出现后的延迟
          }, 300); // 灯泡底座上方的装饰线条出现后的延迟
        }, 300); // 教育本源力及相贴的线条出现后的延迟
      }, 300); // 最底部的线条出现后的延迟
    }, 300); // 初始延迟
  });
  onDestroy(() => {
    setTimeout(() => {
      const nav = document.querySelector('.simple-nav');
      if (nav) nav.classList.remove('competition-nav');
    }, 0);
  });
</script>

<div class="competition-container">
  <!-- 开关面板 -->
  <svg width="200" height="200" viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg" class="switch-panel">
    <defs>
      <filter id="shadow-out" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="2" dy="2" stdDeviation="3" flood-color="#E0E0E0" flood-opacity="0.5"/>
      </filter>
      <filter id="shadow-in" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0.5" dy="0.5" stdDeviation="1" flood-color="white" flood-opacity="0.2"/>
      </filter>
      <filter id="shadow-top-lift" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="3" stdDeviation="2" flood-color="#E0E0E0" flood-opacity="0.5"/>
      </filter>
      <filter id="shadow-bottom-lift" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="-3" stdDeviation="3" flood-color="#E0E0E0" flood-opacity="0.5"/>
      </filter>
      <linearGradient id="gradient-top-light" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#E0E0E0"/>
        <stop offset="100%" stop-color="#E0E0E0"/>
      </linearGradient>
      <linearGradient id="gradient-bottom-light" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stop-color="#white"/>
        <stop offset="100%" stop-color="#white"/>
      </linearGradient>
      <radialGradient id="lampOuterGlow" cx="50%" cy="50%" r="60%">
        <stop offset="10%" stop-color="#ffe066" stop-opacity="0.7"/>
        <stop offset="35%" stop-color="#ffe066" stop-opacity="0.4"/>
        <stop offset="50%" stop-color="#fffbe0" stop-opacity="0.25"/>
        <stop offset="70%" stop-color="white" stop-opacity="0.1"/>
        <stop offset="80%" stop-color="white" stop-opacity="0.05"/>
        <stop offset="100%" stop-color="white" stop-opacity="0"/>
      </radialGradient>
    </defs>

    <!-- Outer Panel -->
    <rect x="25" y="25" width="100" height="100" rx="10" ry="10" fill="white" stroke="#D0D0D0" stroke-width="2" filter="url(#shadow-out)"/>

    <!-- Inner Switch -->
    <rect
      x="38"
      y="38"
      width="75"
      height="75"
      rx="10"
      ry="10"
      fill={isOpen ? "url(#gradient-bottom-light)" : "url(#gradient-top-light)"}
      stroke="#B0B0B0"
      stroke-width="1.5"
      filter={isOpen ? "url(#shadow-top-lift)" : "url(#shadow-bottom-lift)"}
      on:click={() => isOpen = !isOpen}
    />
    <!-- Small Indicator Line -->
    <line x1="63" y1="55" x2="87" y2="55" stroke= gray stroke-width="3" stroke-linecap="round"/>
  </svg>

  <p class="switch-status-text">{isOpen ? '点击关闭' : '点击开启'}</p>

  <!-- 灯泡SVG -->
  {#if isOpen}
  <svg width="100%" height="100%" viewBox="0 0 1047 828" fill="none" xmlns="http://www.w3.org/2000/svg" class="lamp">
    <g clip-path="url(#clip0_29_103)">
      <rect width="100%" height="100%" fill="transparent"/>
      <defs>
        <filter id="glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="32" result="blur"/>
          <feDropShadow dx="0" dy="0" stdDeviation="48" flood-color="yellow" flood-opacity="0.8"/>
          <feMerge>
            <feMergeNode in="blur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <filter id="text-glow">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" />
          <feComposite in2="SourceGraphic" operator="out" />
          <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
          <feDropShadow dx="0" dy="0" stdDeviation="2" flood-color="#FFFFFF" flood-opacity="0.8" />
        </filter>
        <filter id="cloudBlur">
          <feGaussianBlur stdDeviation="20" />
        </filter>
      </defs>

      
    <!-- 添加文字路径 -->
      <defs>
        <!-- 顶部弧形路径 -->
        <path id="topArcPath" 
          d="M 125,280 Q 525,-100 925,280"
        />
        
        <!-- 数智创新力路径 - 位于教育影响力和灯泡之间 -->
        <path id="digitalInnovationPath" 
          d="M 200,310 Q 525,150 850,320"
        />
        
     <!-- 中间文字的弧形路径 -->
       <!-- d (path data)，定义路径数据；M (Move To)表示"移动到"某个点; Q (Quadratic Bezier Curve)，需要两个点：控制点和终点 -->
        <path id="middleArc1" 
          d="M 375,320 Q 525,290 675,320" 
        />
        <path id="middleArc2" 
          d="M 365,380 Q 525,350 685,380"
        />
        <path id="middleArc3" 
          d="M 355,440 Q 525,410 695,440"
        />
        <path id="middleArc4" 
          d="M 345,500 Q 525,470 705,500"
        />
        
        <!-- 底部斜线路径 -->
       <!-- L (Line To)，表示"画直线到"某个点-->
        <path id="bottomSlopePath" 
          d="M 422,710 L 627,650" 
        />
      </defs>

      <!-- 添加文本 -->
      <g class="text-group" transform="translate(-55, 10)">
        <!-- 教育影响力 - 顶部弧形 -->
        <text 
          class="lamp-text {activeText === '教育影响力' ? 'active' : ''}" 
          on:click={() => handleTextClick('教育影响力')}
          on:mouseenter={() => handleMouseEnter('教育影响力')}
          on:mouseleave={handleMouseLeave}
          on:mousemove={handleMouseMove}
          transform="translate(10, 40)" 
          style="opacity: {phase9_eduYingXiangLi ? 1 : 0}; transition: opacity 0.5s ease;"
        >
          <textPath href="#topArcPath" startOffset="50%" text-anchor="middle" letter-spacing="0.6em">
            <tspan font-family='Noto Serif SC' font-size="33">教育影响力</tspan>
          </textPath>
        </text>

        
        <!-- 数智创新力 - 位于教育影响力和灯泡之间 -->
        <text 
          class="lamp-text lightning-text {activeText === '数智创新力' ? 'active' : ''}" 
          on:click={() => handleTextClick('数智创新力')}
          on:mouseenter={() => handleMouseEnter('数智创新力')}
          on:mouseleave={handleMouseLeave}
          on:mousemove={handleMouseMove}
          transform="translate(0, 10)" 
          style="opacity: {phaseDigitalInnovation ? 1 : 0}; transition: opacity 0.5s ease;"
        >
          <textPath href="#digitalInnovationPath" startOffset="50%" text-anchor="middle" letter-spacing="0.5em">
            <tspan font-family='Noto Serif SC' font-size="31">数智创新力</tspan>
          </textPath>
        </text>
        
        <!-- 中间弧形文字 -->
        <text 
          class="lamp-text lightning-text {activeText === '教育思想力' ? 'active' : ''}" 
          on:click={() => handleTextClick('教育思想力')}
          on:mouseenter={() => handleMouseEnter('教育思想力')}
          on:mouseleave={handleMouseLeave}
          on:mousemove={handleMouseMove}
          transform="translate(0, -10)" 
          style="opacity: {phase5_eduSiXiangLi ? 1 : 0}; transition: opacity 0.5s ease;"
        >

          <textPath href="#middleArc1" startOffset="50%" text-anchor="middle" letter-spacing="0.5em">
            <tspan font-family='Noto Serif SC' font-size="31">教育思想力</tspan>
          </textPath>
        </text>
        
        {#if phaseThreeForcesText}
          <text 
            class="lamp-text {activeText === '协同领导力' ? 'active' : ''} lightning-text" 
            on:click={() => handleTextClick('协同领导力')}
            on:mouseenter={() => handleMouseEnter('协同领导力')}
            on:mouseleave={handleMouseLeave}
            on:mousemove={handleMouseMove}
            style="opacity: {phase6_xieTongLingDaoLi ? 1 : 0}; transition: opacity 0.5s ease;"
          >
            <textPath href="#middleArc2" startOffset="50%" text-anchor="middle" letter-spacing="0.4em">
              <tspan font-family='Noto Serif SC' font-size="30">协同领导力</tspan>
            </textPath>
          </text>
          <text 
            class="lamp-text {activeText === '教育共信力' ? 'active' : ''} lightning-text" 
            on:click={() => handleTextClick('教育共信力')}
            on:mouseenter={() => handleMouseEnter('教育共信力')}
            on:mouseleave={handleMouseLeave}
            on:mousemove={handleMouseMove}
            style="opacity: {phase7_eduGongXinLi ? 1 : 0}; transition: opacity 0.5s ease;"
          >
            <textPath href="#middleArc3" startOffset="50%" text-anchor="middle" letter-spacing="0.4em">
              <tspan font-family='Noto Serif SC' font-size="30">教育共信力</tspan>
            </textPath>
          </text>
          <text 
            class="lamp-text {activeText === '教学创生力' ? 'active' : ''} lightning-text" 
            on:click={() => handleTextClick('教学创生力')}
            on:mouseenter={() => handleMouseEnter('教学创生力')}
            on:mouseleave={handleMouseLeave}
            on:mousemove={handleMouseMove}
            style="opacity: {phase8_jiaoXueChuangShengLi ? 1 : 0}; transition: opacity 0.5s ease;"
          >
            <textPath href="#middleArc4" startOffset="50%" text-anchor="middle" letter-spacing="0.4em">
              <tspan font-family='Noto Serif SC' font-size="30">教学创生力</tspan>
            </textPath>
          </text>
        {/if}
        

        <!-- 教育生源力 - 底部斜线 -->
        <text 
          class="lamp-text {activeText === '教育生源力' ? 'active' : ''}" 
          on:click={() => handleTextClick('教育生源力')}
          on:mouseenter={() => handleMouseEnter('教育生源力')}
          on:mouseleave={handleMouseLeave}
          on:mousemove={handleMouseMove}
          transform="translate(-3, 22)" 
          style="opacity: {phase2_eduShengYuanLi ? 1 : 0}; transition: opacity 0.5s ease;"
        >
          <textPath href="#bottomSlopePath" startOffset="50%" text-anchor="middle" letter-spacing="0.2em" dy="-8">
            <tspan font-family='Noto Serif SC' font-size="28">教育本源力</tspan>
          </textPath>
        </text>
      </g>

      <g transform="scale(1, 1) translate(-60, 35)">
        <!-- 灯泡主体 -->
        <path d="M437.642 610.581C438.936 615.109 443.141 618.02 447.669 618.02H449.933C578.014 582.119 603.889 575.003 609.711 573.386C616.827 571.445 617.473 565.623 618.444 556.891L618.767 555.273C619.414 552.363 620.061 549.128 621.031 545.894C622.648 540.072 624.913 533.927 627.823 526.811C636.233 506.111 648.2 485.087 663.725 464.711C667.283 459.536 671.488 455.008 675.369 450.156C683.131 441.1 690.894 431.397 697.363 420.4C699.627 416.519 701.891 412.638 703.831 408.433C708.036 399.7 711.594 390.967 714.181 382.234C721.944 356.036 723.561 326.28 719.68 293.613C718.063 280.352 716.122 266.767 711.594 254.153C668.577 137.069 558.608 131.247 536.938 131.247H531.763C480.336 131.247 444.111 149.359 443.141 150.006C392.684 172.97 359.37 210.166 344.169 261.269C323.792 330.161 344.169 404.228 355.813 422.017C359.694 427.839 363.898 433.661 368.103 439.482L368.103 439.483C377.159 452.097 386.539 464.711 395.919 477.002L406.916 491.233C410.473 495.761 413.061 501.259 415.648 506.758L417.589 510.963C420.5 516.784 423.088 522.606 425.352 528.752C431.497 544.923 435.378 563.359 436.995 586C437.966 597.32 437.966 601.848 437.966 603.789C437.319 605.73 436.995 608.317 437.642 610.581Z" 
            stroke="white" 
            stroke-width="2" 
            fill="none"
            filter={phase10_lampGlow}
            style="opacity: {phase3_lampOutline ? 1 : 0}; transition: opacity 0.5s ease, fill 0.5s ease;"
      />
      
      <!-- M形灯丝 -->
      <path
        d="M510,603 Q515,570 530,500 Q545,570 560,500 Q560,500 560,589"
        stroke="white"
        stroke-width="2"
        fill="none"
        style="opacity: {phaseM_lampFilament ? 1 : 0}; transition: opacity 0.5s ease;"
      />
      
      <!-- 闪电-->
      {#if phaseLightningFill}
        <g class="lightning-flash-group" transform="translate(375, 168) scale(1.1)" >
          <g filter="url(#filter0_d_44_71)">
            <path class="lightning-flash" d="M142.766 310.778C140.5 302.5 134.728 286.49 134.261 282.613C135.272 273.5 135 268.5 136.25 261.076C134.5 253 104.818 225.486 104.242 223.691C102 216.729 99.9999 204.729 98.1429 199.229C96.4969 196.48 94.4999 193.729 93.463 192.513C98.1429 182.729 98.1429 176.926 98.1429 176.926C90.9211 161.352 90.9211 161.352 90.9211 161.352L112.307 145.741C113.5 138 115.563 120.5 115.563 120.5C117 116 123.086 98.5001 123.086 98.5001L115.563 74.8962C115.563 74.8962 127.447 55.199 131.557 48.6871C133.398 44.4536 134.971 38 134.971 36.0969" stroke="white" stroke-width="3" stroke-linecap="round"/>
          </g>
          <g filter="url(#filter1_d_44_71)">
            <path class="lightning-flash" d="M128.5 249.5C129 249.5 130.681 247.804 131.222 247.102C134 243.5 137 240 137.707 239.217C137.707 239.217 137.707 239.217 140.641 239.21C143 235.912 145.837 232.739 145.837 232.739C145.837 232.739 148.661 234.248 150.781 235.912C152.5 231 155.799 220.696 156.09 219.785C156.181 219.5 156.5 217.5 156.793 216.604C158 216.604 164.675 217.428 165.626 217.661C165.626 217.921 169.033 208.602 169.033 208.602C174.5 202 178 199 185.991 190.121C194.5 185.5 198.5 183.5 198.5 183.5C199 183.5 202.5 175.5 202.5 175.5C202.5 175.5 204 161.5 204 158C205 154.5 209.5 136 213 122.5C216.5 118 223.5 109.5 228.888 103.044C236 96 239 93.5 241.021 91.483C247 90.5 254.5 89 254.5 89C258 84 260.574 81.1378 262.355 77.3454C262.692 76.6272 263.175 75.9352 263.882 75.5747C265.522 75.2142 267.416 74.9809 269.296 74.5108C270.244 74.274 271.177 74.0408 272.138 73.8004" stroke="white" stroke-width="3" stroke-linecap="round"/>
          </g>
          <path class="lightning-flash" d="M95.4186 179.125C92 179 86 178.5 80.9488 177.966C80.5 176 79.5 172.5 78.4676 168.805C74 166.5 71.5 165.5 69.7412 165.232C69.7412 163.5 70.1123 159.5 70.1123 153.243C67 152.5 57.5 150.5 55.2043 150.154C55.0023 150.123 53.5 148 52.2919 146.16C53.5 143.5 56 139 55.2043 139C54 138.5 48.5 136.5 33.1497 132.15L36.5002 108.5C45.0002 111 46.6369 112.205 47.8139 112.209C48.5 110.5 49.5 106.5 50.7651 101.623C51.2397 97.6206 51.3768 92.8122 49.5 87.5C49.1095 86.3946 49.0049 85.8315 48.4182 85.3543C45.5 84.5 39 82 36.6558 81.2474L39.8014 54.8525C45.6897 50.4805 55.2019 43.6616 60.5 40" stroke="white" stroke-linecap="round"/>
          <path class="lightning-flash" d="M55.8333 138.833C56.2998 138.367 58.6396 135.794 62.4037 132.609C65.5 135 72.8249 140.363 74 141C74.2136 141.116 76.7071 141.117 77 141C77.5 140.8 79.853 131.086 82.3341 120.73C83.2876 116.75 84 115 84.3346 114.096C85 114.5 88.1023 116.439 90.6859 117.62C91.5 117.5 94.5 116.5 95.0438 116.227C98.5 110 101.073 105.864 102.597 102.91C103.5 102.5 105 102 106.23 101.609C108.5 101.609 112.5 101.609 116.5 101.609" stroke="white" stroke-linecap="round"/>
          <path class="lightning-flash" d="M115.918 90.7655C115.451 90.7655 113.112 90.7655 109.581 90.1823C107.5 85 106.5 82 104.261 77.3454C102.5 76 100.5 75 99.0835 73.6908C98.9001 73.5213 99 73.5 98 70.5" stroke="white" stroke-linecap="round"/>
          <path class="lightning-flash" d="M127.5 69C128.5 68.5 131 67.5 133.569 66.2722C139 58 139 58 141.475 53.5484C145 51 146 50.5 148.183 49.1799C149.36 49.0597 150.993 49.0597 152.676 49.0597" stroke="white" stroke-linecap="round"/>
          <path class="lightning-flash" d="M105.315 211.642C107.895 209.295 111.662 205.534 115.197 204.103C118.592 202.728 121.559 206.453 126.15 205.757C129.341 202.933 131.229 200.105 132.169 198.225C132.643 197.278 133.109 196.345 133.59 195.384" stroke="white" stroke-linecap="round"/>
          <path class="lightning-flash" d="M101.073 225.779C98.967 226.246 93.7926 227.193 67.0125 232.827C66.1697 232.827 61.3222 232.827 60.2018 232.622C60 232 55.3667 217.325 50.0828 204.156C47 201 46.5 201 43.3957 197.525C30.356 194.825 20 193 14.7495 190.004C7.29896 179.606 5.91022 176.764 4.5 175C3.78959 174.169 2.83149 173.484 2.11047 172.763" stroke="white" stroke-linecap="round"/>
          <path class="lightning-flash" d="M207.105 176.298C211.813 181.239 215.574 185.123 215.574 185.123C222 182.5 230.5 178.5 235.713 175.842C244 167 250.5 161.5 252 160.5C255.845 164.012 268.15 175.503 270.5 177.5" stroke="white" stroke-linecap="round"/>
          <path class="lightning-flash" d="M214.174 122.575C212 118.5 208.5 112.5 205.812 107.158C207 103 208.5 97 210.527 91.6031C205.812 88 201.5 85.5 197 83C195 81 190.5 77 186.726 72.2877C185 63.5 184 58 183.312 51.9013C182.687 50.1117 182.5 49 181.431 46.5962C177.5 45.5 165.951 44.8184 158.352 43.6449C154.372 43.4046 151.036 42.7048 149.389 41.2946C148.675 40.5842 148.208 39.8843 147.727 39.1633" stroke="white" stroke-linecap="round"/>
          <path class="lightning-flash" d="M197.209 160.746C192 158.5 177.5 152.5 170.595 150.15C169 145.5 161 128 157.663 118.814C154 118.814 146.695 118.334 139.245 118.334" stroke="white" stroke-linecap="round"/>
          <path class="lightning-flash" d="M172.468 217.297C177 219 191.313 224.731 191.766 224.723C192.219 224.714 221 207.5 221.695 207.284C228.5 210.5 234.645 213.974 240.661 217.286C243.5 219 244.563 219.884 246.323 220.474C254 216.5 264 210.5 268.469 208.118C269.537 207.408 271.039 206.721 272 206" stroke="white" stroke-linecap="round"/>
          <path class="lightning-flash" d="M134 258.5C133.5 258.5 105.5 261.5 93.7361 262.989C78.5 267.5 67 271.5 63.5171 272.557C63 272 54 248.5 53.4829 245.469C52 243.5 50.5 241.083 49.7188 239.574C49.7188 239.574 41.2716 239.436 31.0537 241.083C25.5011 241.797 19.2029 242.264 14.0921 242.854C8.98139 243.444 5.24908 244.144 0.696777 244.865" stroke="white" stroke-linecap="round"/>
          <path class="lightning-flash" d="M127 44.5C124.5 42.5 120.5 40.5 116.275 37.997C115 35 110.229 28.2205 110.033 27.9805C109.976 27.9107 109.5 26.5 108.969 25.7468C117 17 119 13.6874 122.976 9.72184C123.689 9.0106 124.407 8.24427 124.747 7.83448C123 6 118 2.5 115 0.5" stroke="white" stroke-linecap="round"/>
        </g>
      {/if}
      
      <!-- 线条 -->
      <path d="M446.052 664.919C441.523 664.919 437.642 662.008 436.025 657.48C434.408 651.981 437.642 646.483 443.141 644.866L608.094 598.291C613.592 596.674 619.091 599.908 620.708 605.406C622.325 610.905 619.091 616.403 613.592 618.02L448.639 664.595C447.992 664.919 447.022 664.919 446.052 664.919Z" 
            stroke="white" 
            stroke-width="2"
            fill={phase4_lampBodyColor}
            style="opacity: {phase3_decorativeLine ? 1 : 0}; transition: opacity 0.5s ease, fill 0.5s ease;"
      />
      
      <!-- 教育本源力相贴的线条 -->
      <path d="M439 696 L443 694 C437.642 695.645 434.408 701.144 436.025 706.642 C437.642 711.17 441.523 714.081 446.052 714.081 C447.022 714.081 447.992 713.758 448.639 713.758 L613.592 667.183 C619.091 665.566 622.325 660.067 620.708 654.569 C619.091 649.07 613.592 645.836 608.094 647.453 L600 650" 
            stroke="white" 
            stroke-width="2"
            style="opacity: {phase1_bottomMostLine ? 1 : 0}; transition: opacity 0.5s ease;"
      />
      
      <!-- 最下面的线 -->
      <path d="M534.674 760.656C490.686 760.656 473.220 737.045 472.250 735.752C469.016 731.223 469.986 724.755 474.514 721.520C479.042 718.286 485.511 719.256 488.745 723.784C489.392 724.755 502.006 740.280 534.027 740.280C533.703 740.280 558.284 738.986 573.162 723.137C577.044 718.933 583.512 718.933 587.717 722.814C591.922 726.695 591.922 733.164 588.041 737.369C567.664 759.039 535.967 760.656 534.673 760.656Z" 
            stroke="white" 
            stroke-width="2"
            style="opacity: {phase1_bottomMostLine ? 1 : 0}; transition: opacity 0.5s ease;"
      />

      <!-- 灯泡外部发光渲染，形状与主体线条一致 -->
      {#if phase9_eduYingXiangLi}
        <path
          d="M437.642 610.581C438.936 615.109 443.141 618.02 447.669 618.02H449.933C578.014 582.119 603.889 575.003 609.711 573.386C616.827 571.445 617.473 565.623 618.444 556.891L618.767 555.273C619.414 552.363 620.061 549.128 621.031 545.894C622.648 540.072 624.913 533.927 627.823 526.811C636.233 506.111 648.2 485.087 663.725 464.711C667.283 459.536 671.488 455.008 675.369 450.156C683.131 441.1 690.894 431.397 697.363 420.4C699.627 416.519 701.891 412.638 703.831 408.433C708.036 399.7 711.594 390.967 714.181 382.234C721.944 356.036 723.561 326.28 719.68 293.613C718.063 280.352 716.122 266.767 711.594 254.153C668.577 137.069 558.608 131.247 536.938 131.247H531.763C480.336 131.247 444.111 149.359 443.141 150.006C392.684 172.97 359.37 210.166 344.169 261.269C323.792 330.161 344.169 404.228 355.813 422.017C359.694 427.839 363.898 433.661 368.103 439.482L368.103 439.483C377.159 452.097 386.539 464.711 395.919 477.002L406.916 491.233C410.473 495.761 413.061 501.259 415.648 506.758L417.589 510.963C420.5 516.784 423.088 522.606 425.352 528.752C431.497 544.923 435.378 563.359 436.995 586C437.966 597.32 437.966 601.848 437.966 603.789C437.319 605.73 436.995 608.317 437.642 610.581Z"
          fill="yellow"
          opacity="0.18"
          filter="url(#glow)"
          style="pointer-events:none;"
        />
        <path
          d="M437.642 610.581C438.936 615.109 443.141 618.02 447.669 618.02H449.933C578.014 582.119 603.889 575.003 609.711 573.386C616.827 571.445 617.473 565.623 618.444 556.891L618.767 555.273C619.414 552.363 620.061 549.128 621.031 545.894C622.648 540.072 624.913 533.927 627.823 526.811C636.233 506.111 648.2 485.087 663.725 464.711C667.283 459.536 671.488 455.008 675.369 450.156C683.131 441.1 690.894 431.397 697.363 420.4C699.627 416.519 701.891 412.638 703.831 408.433C708.036 399.7 711.594 390.967 714.181 382.234C721.944 356.036 723.561 326.28 719.68 293.613C718.063 280.352 716.122 266.767 711.594 254.153C668.577 137.069 558.608 131.247 536.938 131.247H531.763C480.336 131.247 444.111 149.359 443.141 150.006C392.684 172.97 359.37 210.166 344.169 261.269C323.792 330.161 344.169 404.228 355.813 422.017C359.694 427.839 363.898 433.661 368.103 439.482L368.103 439.483C377.159 452.097 386.539 464.711 395.919 477.002L406.916 491.233C410.473 495.761 413.061 501.259 415.648 506.758L417.589 510.963C420.5 516.784 423.088 522.606 425.352 528.752C431.497 544.923 435.378 563.359 436.995 586C437.966 597.32 437.966 601.848 437.966 603.789C437.319 605.73 436.995 608.317 437.642 610.581Z"
          fill="yellow"
          opacity="0.08"
          filter="url(#glow)"
          style="pointer-events:none;"
        />
        <ellipse
          cx="525"
          cy="320"
          rx="430"
          ry="430"
          fill="url(#lampOuterGlow)"
          stroke-width="4"
          opacity="0.5"
          filter="url(#glow)"
          style="pointer-events:none;"
        />
      {/if}
    </g>
  </svg>
  {/if}
  
  <!-- 灯泡解释引用段落 -->

  <div class="lamp-explanation-block">
      <!-- 灯泡SVG下方大号引用文段 -->
  <div class="lamp-quote-block lamp-quote-large">
    <div class="lamp-quote-text lamp-quote-large-text">
      当我接收到宇宙之下的信使以来，我在思考，要成为一名具备核心竞争力的教师，我需要积攒什么能量？
    </div>
  </div>

  <!-- 逻辑链条流程式排版 -->
  <div class="lamp-flow-logic">
    <div class="lamp-flow-row lamp-flow-row1">
      由此，我构建了一个从
    </div>
    <div class="lamp-flow-row lamp-flow-row2 lamp-flow-row-inline">
      内在驱动 <span class="lamp-flow-arrow-inline">→</span> 多元专业实践 <span class="lamp-flow-arrow-inline">→</span> 外在扩散 <span class="lamp-flow-chain-text">的逻辑链条</span>
    </div>
    <div class="lamp-flow-row lamp-flow-row6">
      一个内外贯通、动静相生的教育力量模型。
    </div>
  </div>


  <div class="lamp-explanation-section">
    <ul class="lamp-explanation-list">
      <li><span class="highlight">"教育本源力"</span>：教育工作的根基与核心驱动力，代表教育者的价值信念、使命感与专业初心，是一切力量的出发点。</li>
      <li><span class="highlight">"教学创生力"</span>：在具体教学实践中生成创新的课程与活动，教育创新的现场表现。</li>
      <li><span class="highlight">"教育共信力"</span>：建立学生、家长与同事之间的信任关系，是实现有效教学与育人的基础。</li>
      <li><span class="highlight">"协同领导力"</span>：能够整合团队、跨界协作、共同引领教育变革的组织能力。</li>
      <li><span class="highlight">"数智创新力"</span>：运用数字与智能工具推动教学创新，是教育面向未来的能力。</li>
      <li><span class="highlight">"教育思想力"</span>：教育者对教学与育人的深度思考与理念建构，是专业发展的精神核心。</li>
      <li><span class="highlight">"教育影响力"</span>：象征一位教育者对学生、同事，甚至整个教育系统产生的积极正向影响。</li>
    </ul>
  </div>

  </div>
 



{#if hoveredText}
  <div class="hover-tip-fixed" style="left: {mouseX + 18}px; top: {mouseY + 8}px;">
    <div class="hover-tip-box">
      点击了解
    </div>
  </div>
{/if}
</div>

<style>
  /* 1. 导入外部字体 */
  @import url('https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&family=Noto+Serif+SC:wght@400;700;900&family=ZCOOL+KuaiLe&family=ZCOOL+QingKe+HuangYou&display=swap');

  /* 2. 动画定义 */
  @keyframes fadeIn {
    from { 
      opacity: 0;
      transform: translateY(10px);
    }
    to { 
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes textFadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* 新增：闪电淡入动画 */
  @keyframes fadeInLightning {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  /* 暂时注释掉旋转动画 */
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }


  .lamp {
    width: 100vw;
    height: 100vh;
    max-width: 100vw;
    max-height: 300vw;
    pointer-events: none; /* 如需交互可移除 */
    display: block;
    transform: scale(1) translateY(-10px);
    margin-top:-80px

  }

  .lamp-text {
    cursor: pointer;
    transition: all 0.3s ease;
    filter: none;
  }

  .lamp-text:hover {
    filter: brightness(1.3) drop-shadow(0 0 10px rgba(255, 255, 255, 0.9));
  }

  .lamp-text.active {
    font-weight: 500;
    filter: brightness(1.6) drop-shadow(0 0 15px rgba(255, 255, 255, 1));
    animation: textPulse 1.5s ease-in-out infinite;
    z-index: 100;
  }

  @keyframes textPulse {
    0% {
        filter: brightness(1.6) drop-shadow(0 0 15px rgba(255, 255, 255, 1));
    }
    50% {
        filter: brightness(2) drop-shadow(0 0 25px rgba(255, 255, 255, 1));
    }
    100% {
        filter: brightness(1.6) drop-shadow(0 0 15px rgba(255, 255, 255, 1));
    }
  }
  

  /* 修改文字颜色和发光效果 */
  .lamp-text tspan {
    fill: #FFFFFF;
    transition: fill 0.3s, font-weight 0.3s, text-shadow 0.3s;
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
    font-weight: 500;
    pointer-events: auto;
  }

  .lamp-text tspan:hover {
    fill: #FFA500;
    font-weight: bold;
    text-shadow: 0 0 8px rgba(255, 249, 186, 0.2);
    cursor: pointer;
  }

  .lamp-text.active tspan {
    fill: #FFFFFF;
    text-shadow: 0 0 12px rgba(255, 255, 255, 1);
  }

  .rotating-texts {
    /* animation: rotate 0.3s infinite; */ /* 暂时注释掉旋转动画 */
    transform-origin: 525px 350px;
  }

  .switch-panel {
    position: absolute;
    top: 50%;
    right: 100px;
    transform: scale(0.9) translateY(-20px) translateX(11px);
    cursor: pointer;
    /* 暂时注释掉开关面板动画效果 */
    /* transition: transform 0.3s ease; */
  }

  /* 暂时注释掉开关状态文本动画 */
 
  .switch-status-text {
    transition: opacity 0.3s ease;
  }
  
  .switch-status-text {
    color: white;
    font-family: 'Noto Serif SC', SimSun;
    font-size: 18px;
    text-align: center;
    position: absolute;
    margin: 0;
    top: calc(50% + 95px);
    right: 190px;
    text-shadow: 
      0 0 2px #FFFACD,
      0 0 3px #FFD700,
      0 0 6px #FFA500;
    pointer-events: none;
    z-index: 2;
  }

  /* 隐藏圆形路径 */
  #textCirclePath {
    fill: none;
    stroke: none;
  }

  /* 导航栏样式 */
  :global(header),
  :global(.simple-nav),
  :global(.simple-nav.competition-nav),
  :global(.simple-nav *),
  :global(header *),
  :global(.simple-nav.competition-nav *),
  :global(body),
  :global(main),
  :global(#app) {
    border: none !important;
    background: transparent !important;
    box-shadow: none !important;
  }

  .competition-container {
    margin-top: -80px ;
    padding-top: 0 !important;
    border-top: none !important;
    background: black !important;
  }

  .lamp-text.lightning-text {
    animation: lightningFlash 0.2s alternate 3;
    filter: drop-shadow(0 0 10px yellow);
  }
  @keyframes lightningFlash {
    0% { filter: brightness(1) drop-shadow(0 0 10px yellow);}
    50% { filter: brightness(2) drop-shadow(0 0 30px yellow);}
    100% { filter: brightness(1) drop-shadow(0 0 10px yellow);}
  }

  .lightning-bolt {
    filter: drop-shadow(0 0 8px #FFFACD);
    stroke-linejoin: round;
    stroke-linecap: round;
    pointer-events: none;
    /* 先淡入再闪烁 */
    animation: fadeInLightning 0.5s ease, lightningBlink 0.7s steps(2, end) infinite;
  }
  @keyframes lightningBlink {
    0%, 100% { opacity: 0.2; }
    10%, 30%, 50%, 70%, 90% { opacity: 1; }
    20%, 40%, 60%, 80% { opacity: 0.2; }
  }

  /* 新增：灯泡体内闪电动画 */
  .lightning-fill {
    stroke: #FFFBEA;
    stroke-width: 2;
    fill: none;
    filter: drop-shadow(0 0 8px #FFFACD);
    animation: lightningFillBlink 0.7s steps(2, end) infinite;
  }
  @keyframes lightningFillBlink {
    0%, 100% { opacity: 0.3; }
    20%, 60% { opacity: 1; }
    40%, 80% { opacity: 0.5; }
  }

  .lightning-flash {
    filter: drop-shadow(0 0 12px #fffbe0) drop-shadow(0 0 24px #ffe066);
    stroke: #fffbe0;
    animation: lightningGlow 0.7s steps(2, end) infinite;
  }
  @keyframes lightningGlow {
    0%, 100% { opacity: 0.5; filter: drop-shadow(0 0 8px #fffbe0); }
    20%, 60% { opacity: 1; filter: drop-shadow(0 0 24px #ffe066); }
    40%, 80% { opacity: 0.7; filter: drop-shadow(0 0 16px #fffbe0); }
  }

  :global(.simple-nav) {
    position: relative;
    z-index: 1;
  }

  /* 新增：hover-tip 箭头和提示 */
  .hover-tip {
    pointer-events: none;
    opacity: 0.97;
    transition: opacity 0.2s;
  }

  .hover-tip-fixed {
    position: fixed;
    z-index: 99999;
    pointer-events: none;
  }
  .hover-tip-box {
    background: white;
    color: black;
    border-radius: 6px;
    border: 1.5px solid white;
    font-family: 'Noto Serif SC', SimSun;
    font-size: 18px;
    font-weight: bold;
    padding: 2px 16px 2px 16px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    white-space: nowrap;
  }

  :global(.simple-nav.competition-nav) {
    background-color: transparent !important;
    color: white !important;
  }
  :global(.simple-nav.competition-nav .nav-inner .logo),
  :global(.simple-nav.competition-nav .nav-inner .nav-links),
  :global(.simple-nav.competition-nav .nav-inner .nav-links a),
  :global(.simple-nav.competition-nav .nav-inner .nav-links a:hover) {
    color: white !important;
  }

  :global(html),
  :global(body) {
    background: black !important;
  }

  .lamp-quote-block {
    position: relative;
    margin: 100px auto 40px auto;
    max-width: 1200px;
    align-items: center;
    justify-content: center;
    display: flex;
  }


  .lamp-explanation-block {
    margin: 10px auto 20px auto;
    max-width: 1000px;
    color: #fffbe0;
    font-family: 'Noto Serif SC', SimSun;
    text-align: left;
    padding: 0 20px;
    font-size: 20px;
  }
 
  .lamp-quote-large-line {
    width: 2px;
    min-width: 4px;
    height: 10px;
    background: #ffe066;
    border-radius: 2px;
    margin-right: 24px;
    align-self: stretch;
    margin-top: 10px;
  }

  .lamp-quote-large::before {
    content: "";
    position: absolute;
    left: 5px;
    top: 1;
    width: 6px;
    height: 80%;
    background: #ffe066;
    border-radius: 0px;
    z-index: 1;
  }

  .lamp-quote-large-text {
    font-family: 'Noto Serif SC', SimSun;
    font-weight: 400;
    line-height: 1.6;
    margin-left: 35px;
    letter-spacing: 1px;
    font-size: 35px;
    color: #fffbe0;
    text-shadow:
      0 0 12px #ffe066,   /* 主体黄色发光 */
      0 0 24px #fffbe0,   /* 柔和白色外晕 */
      0 2px 4px #00000044; /* 轻微下投影，增加立体感 */
  }

  .lamp-explanation-section {
    margin-left: 10px;
    margin-bottom: 30px;
    color: white;
    font-size: 1.1em;
  }

/*
  .lamp-explanation-text {
    font-size: 1.1em;
    line-height: 1.8;
    color:#ffe066;
    font-weight: bold;
    margin-bottom: 30px;
    margin-left: 40px;
  }
*/

  .lamp-explanation-list {
    margin: -100px 20px 0px 50px;
    padding: 0;
    list-style: disc;
    font-size: 1.18em;
    line-height: 1.8;
    color: #fffbe0;
  }
  .lamp-explanation-list li {
    margin-bottom: 12px;
    margin-top: 0;
    font-size: 1em;
    line-height: 1.8;
    color: #fffbe0;
  }
  .highlight {
    color: #ffe066;
    font-weight: bold;
    font-size: 1em;
    letter-spacing: 1px;
  }

  /* 流程式排版样式 */
  .lamp-flow-logic {
    width: 100%;
    max-width: 1500px;
    margin: 40px auto 0 -100px;
    font-family: 'Noto Serif SC', SimSun;
    color: white;
    font-size: 1.8rem;
    position: relative;
    min-height: 350px;
  }
  .lamp-flow-row {
    text-align:left;
    margin: 0 auto;
    width: fit-content;
    position: relative;
  }
  .lamp-flow-row1 { margin-top: 0; margin-left: 120px;}
  .lamp-flow-row2 { margin-top: 20px; margin-left: 400px;  font-size: 1.8rem; font-weight: 500; color: #ffe066; font-weight: bold;}
  .lamp-flow-row3 { margin-top: 5px; margin-left: 550px;  font-size: 1.8rem; font-weight: 500; color: #ffe066; font-weight: bold;}
  .lamp-flow-row4 { margin-top: 5px;margin-left: 750px;  font-size: 1.8rem; font-weight: 500; color: #ffe066; font-weight: bold;}
  .lamp-flow-row5 { margin-top:10px; margin-left: 855px;  font-size: 1.8rem; margin-bottom: 10px; color: white;}
  .lamp-flow-row6 {  margin-top: 30px; margin-left: 130px; font-size: 1.8rem; margin-bottom:50px; color: white; }
  
  .lamp-flow-arrow1 {
    text-align: center;
    font-size: 2.8rem;
    color: white;
    margin: -10px auto 0 530px;
    width: fit-content;
  }
  .lamp-flow-arrow2 {
    text-align: center;
    font-size: 2.8rem;
    color: white;
    margin: -10px auto 0 730px;
    width: fit-content;
  }
  .lamp-flow-line {
    height: 4px;
    width: 420px;
    background: linear-gradient(90deg, #ffe066 60%, #fffbe0 100%);
    border-radius: 2px;
    margin: 30px 0 20px 120px;
    font-size: 1.8rem;
  }
  .lamp-flow-row-inline {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 18px;
    font-size: 1.8rem;
    font-weight: bold;
    color: #ffe066;
    margin-top: 10px;
    margin-left: 210px;
    margin-bottom: 10px;
  }
  .lamp-flow-arrow-inline {
    font-size: 2.2rem;
    color: white;
    margin: 0 8px;
    font-weight: normal;
  }
  .lamp-flow-chain-text {
    color: white;
    font-size: 1.0em;
    font-weight: normal;
    margin-left: 18px;
  }
</style>

