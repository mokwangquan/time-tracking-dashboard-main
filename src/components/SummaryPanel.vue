<template>
  <div class="component-wrapper">
    <div class="box top">
      <div class="top-box-wrapper">
        <div class="image-wrapper">
          <img src="/images/image-jeremy.png" alt="Jeremy Image">
        </div>
        <div class="detail-wrapper">
          <span class="description">Report for</span>
          Jeremy Robson
        </div>
      </div>
    </div>
    <div class="box bottom">
      <div class="bottom-box-wrapper">
        <span class="options">Daily</span>
        <span class="options is-active">Weekly</span>
        <span class="options">Monthly</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.component-wrapper {
  .box {
    margin: 0;
    width: 13rem;
    height: 18rem;
    border-radius: 1rem;
    position: relative;
    &.top {
      z-index: 3;
      background-color: hsl(246, 80%, 60%);
    }
    &.bottom {
      z-index: 2;
      background-color: hsl(235, 46%, 20%);
      top: -9.5rem;
    }
  }
  .top-box-wrapper {
    margin: 0 1.2rem 1.2rem;
    padding-top: 1.2rem; // cheating, try to fix me (FIXME)
    .image-wrapper {
      width: 4.5rem;
      height: 4.5rem;
      background-color: white;
      border-radius: 50%;
      position: relative;
      img {
        width: 4rem;
        height: 4rem;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
      }
    }
    .detail-wrapper {
      margin-top: 1rem;
      color: white;
      font-weight: 300;
      opacity: 0.8;
      font-size: 2rem;
      .description {
        font-size: 1rem;
        opacity: 0.5;
      }
    }
  }
  .bottom-box-wrapper {
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    padding-bottom: 1rem;
    span {
      margin: 0.5rem 0 0.5rem 1.2rem;
      width: 100%;
      cursor: pointer;
      color: hsl(235, 45%, 61%);
      &.is-active {
        color: white;
      }
      &:not(.is-active) {
        opacity: 0.8;
      }
    }
  }
}
</style>