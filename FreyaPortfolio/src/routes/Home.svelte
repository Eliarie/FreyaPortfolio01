<script lang="ts">
  import { onMount } from 'svelte';
  import { scale } from 'svelte/transition';
  import { Link } from 'svelte-routing';

  let showP1 = false;
  let showP2 = false;
  let showP3 = false;
  let showP4 = false;
  let showP5 = false;

  onMount(() => {
    // 依次显示每个短语
    setTimeout(() => showP1 = true, 300);
    setTimeout(() => showP2 = true, 600);
    setTimeout(() => showP3 = true, 900);
    setTimeout(() => showP4 = true, 1200);
    setTimeout(() => showP5 = true, 1500);
  });
</script>

<div class="homepage-content">
  <!-- 左侧容器 -->
  <div class="left-block">
    <div class="creative-block">
      <div class="creative-phrases">
        {#if showP1}
          <span class="phrase p1" in:scale={{ duration: 400, start: 0.5, opacity: 0 }}>
            ⽴⾜真实场域
          </span>
        {/if}
        {#if showP2}
          <span class="phrase p2" in:scale={{ duration: 400, start: 0.5, opacity: 0 }}>
            教育本源为根基
          </span>
        {/if}
        {#if showP3}
          <span class="phrase p3" in:scale={{ duration: 400, start: 0.5, opacity: 0 }}>
            创新驱动
          </span>
        {/if}
        {#if showP4}
          <span class="phrase p4" in:scale={{ duration: 400, start: 0.5, opacity: 0 }}>
            探索多元形态
          </span>
        {/if}
        {#if showP5}
          <span class="phrase p5" in:scale={{ duration: 400, start: 0.5, opacity: 0 }}>
            幼⼉教育实践者
          </span>
        {/if}
      </div>
    </div>
  </div>
  <!-- 右侧容器 -->
  <div class="right-content">
    <div class="subtitle">学习·洞察·创⻅</div>
    <h1 class="main-title">傅她的作品集</h1>
    <Link to="/PreEduCoreCompetition" class="main-btn">我的成果 →</Link>
  </div>
</div>

<style>
  /* 复制原有的样式 */
  .homepage-content {
    margin-top: 250px;
    margin-left: 80px;
    max-width: 1100px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 64px;
  }

  .left-block {
    flex: 0 0 320px;
    min-width: 120px;
    max-width: 400px;
    margin-left: 80px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 30px;
  }

  .right-content {
    flex: 1 1 0;
    display: flex;
    margin-left: 230px;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 10px;
    min-width: 600px;
  }

  .subtitle {
    color: #eb4603;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    margin-left: 9px;
    letter-spacing: 2px;
    font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
    line-height: 1.8;
  }

  .main-title {
    font-family: 'Georgia', serif;
    font-size: 3.5rem;
    font-weight: bold;
    margin: 0 0 2rem 0;
    line-height: 1.2;
    color: #293241;
    letter-spacing: 3px;
  }

  .main-btn {
    display: inline-block;
    padding: 13px 32px;
    border: 1px solid #e0d9c7;
    border-radius: 4px;
    background: #000;
    color: #fff;
    font-size: 1rem;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.3s ease;
    margin-left: 50px;
  }

  .main-btn:hover {
    background: #eb4603;
    color: #fff;
  }

  .creative-block {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 2.5rem;
    min-width: 220px;
    max-width: 400px;
  }

  .creative-phrases {
    display: flex;
    flex-direction: column;
    gap: 1.5em;
    align-items: flex-start;
    margin-top: -10px;
    margin-left: 80px;
  }

  .phrase {
    display: inline-block;
    font-family: 'Noto Sans SC', 'Inter', 'Helvetica Neue', Arial, sans-serif;
    font-weight: 0;
    transition: all 0.3s ease;
    cursor: pointer;
    text-align: center;
    line-height: 1.4;
    letter-spacing: 2px;
    transform-origin: center center;
    position: relative;
    z-index: 1;
  }

  .p1 {
    color: #293241;
    font-size: 1.8rem;
    transform: rotate(-7deg) translateY(-40px);
    background: #D1D2D4;
    padding: 12px 24px;
    border-radius: 12px;
    min-width: 200px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }

  .p2 {
    color: #705cc7;
    font-size: 1.8rem;
    transform: rotate(8deg) translateY(-30px);
    background: #fff;
    padding: 12px 24px;
    border-radius: 12px;
    min-width: 250px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }

  .p3 {
    color: #EB4603;
    font-size: 1.8rem;
    transform: rotate(-3deg) scale(1.1) translateY(-30px);
    background: #99C1DA;
    padding: 10px 24px;
    border-radius: 10px;
    min-width: 100px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }

  .p4 {
    color: #293241;
    font-size: 1.8rem;
    transform: rotate(5deg) translateY(-50px);
    background: #D1D2D4;
    padding: 12px 24px;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }

  .p5 {
    color: #fff;
    font-size: 1.8rem;
    background: #EB4603;
    transform: rotate(-5deg) scale(1.05) translateY(-45px) translateX(5px);
    padding: 12px 24px;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }

  .phrase:hover {
    transform: scale(7) rotate(1deg) translateX(50px);
    box-shadow: 0 4px 16px rgba(153, 193, 218, 0.4);
    filter: brightness(1.05);
    z-index: 0;
  }
</style>