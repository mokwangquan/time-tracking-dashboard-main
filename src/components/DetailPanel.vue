<template>
  <div class="component-wrapper">
    <div class="box top">
      &nbsp;
    </div>
    <div class="box bottom">
      &nbsp;
    </div>
  </div>
</template>

<style lang="scss" scoped>
.component-wrapper {
  height: 14rem;
  .box {
    margin: 0;
    width: 13rem;
    height: 10rem;
    border-radius: 1rem;
    position: relative;
    &.top {
      z-index: 2;
      background-color: hsl(246, 80%, 60%);
    }
    &.bottom {
      z-index: 3;
      background-color: hsl(235, 46%, 20%);
      top: -7.5rem;
    }
  }
}
</style>