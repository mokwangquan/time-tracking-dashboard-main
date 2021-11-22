<template>
  <div class="component-wrapper" :class="{ 'is-mobile' : isMobile() }">
    <div class="box top" :class="{ 'is-mobile' : isMobile() }">
      <div class="top-box-wrapper">
        <el-row :type="isMobile() ? 'flex' : ''" justify="space-between">
          <div class="image-wrapper" :class="isMobile() ? 'div-center' : ''">
            <img :src="`${isProduction ? '/time-tracking-dashboard-main' : ''}/images/image-jeremy.png`" alt="Jeremy Image">
          </div>
          <div class="detail-wrapper" :class="isMobile() ? 'div-center is-mobile' : ''">
            <span class="description">Report for</span><br/>
            Jeremy Robson
          </div>
        </el-row>
      </div>
    </div>
    <div class="box bottom" :class="{ 'is-mobile' : isMobile() }">
      <el-row :type="isMobile() ? 'flex' : ''" justify="end" class="bottom-box-wrapper">
        <div class="options" :class="getOptionClass('daily')"
          @click="active='daily'">Daily</div>
        <div class="options" :class="getOptionClass('weekly')"
        @click="active='weekly'">Weekly</div>
        <div class="options" :class="getOptionClass('monthly')"
        @click="active='monthly'">Monthly</div>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 'weekly',
    }
  },
  methods: {
    isMobile() {
      const rect = document.body.getBoundingClientRect()
      return rect.width - 1 < 993
    },
    getOptionClass(active) {
      return {
        'text-center' : true,
        'is-active' : this.active == active
      }
    }
  },
  watch: {
    active(newValue) {
      this.$emit('activeChanged', newValue)
    }
  }
}
</script>

<style lang="scss" scoped>
.component-wrapper {
  .box {
    margin: 0;
    width: 13rem;
    height: 18.5rem;
    border-radius: 1rem;
    position: relative;
    &.is-mobile {
      width: 100%;
      height: 9rem;
    }
    &.top {
      z-index: 3;
      background-color: hsl(246, 80%, 60%);
      top: -1rem;
    }
    &.bottom {
      z-index: 2;
      background-color: hsl(235, 46%, 20%);
      top: -11.5rem;
      &.is-mobile {
        top: -5.5rem;
      }
    }
  }
  .top-box-wrapper {
    margin: 1.2rem;
    >.el-row {
      .image-wrapper {
        margin-top: 2rem;
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
        width: fit-content;
        .description {
          font-size: 1rem;
          opacity: 0.5;
        }
        &.is-mobile {
          margin-top: 1.8rem;
          margin-bottom: 0;
          font-size: 1.8rem;
        }
      }
    }
  }
  .bottom-box-wrapper {
    position: absolute;
    bottom: 1rem;
    left: 0;
    >div {
      width: fit-content;
      margin: 1rem 1.2rem;
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

  &.is-mobile {
    margin: 1rem;
    margin-top: 2rem;
    height: 13rem;
  }

  //ETC
  .text-center {
    text-align: center;
  }
  .div-center {
    margin: auto;
  }
}
</style>