<template>
  <div class="component-wrapper">
    <div class="box top" :style="`background-color: ${color}`" :class="{ 'is-mobile' : isMobile() }">
      <el-row type="flex" justify="end">
        <img :src="`${isProduction ? '/time-tracking-dashboard-main' : ''}/images/icon-${type}.svg`" :alt="type+' logo'">
      </el-row>
    </div>
    <div class="box bottom" :class="{ 'is-mobile' : isMobile() }">
      <div class="bottom-box-wrapper">
        <el-row type="flex" justify="space-between">
          <span>{{ getTypeTitle() }}</span>
          <div>
            <img :src="`${isProduction ? '/time-tracking-dashboard-main' : ''}/images/icon-ellipsis.svg`" alt="More">
          </div>
        </el-row>
        <el-row :type="isMobile() ? 'flex' : ''" justify="space-between">
          <div class="hour-wrapper">
            <div class="">{{ getTypeHour() }}</div>
          </div>
          <div class="desc-wrapper" :class="{'is-mobile' : isMobile()}">
            <div>{{ getDescription() }}</div>
          </div>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'hsl(246, 80%, 60%)',
    },
    type: {
      type: String,
      required: true,
    },
    active: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      isProduction: process.env.NODE_ENV === "production"
    }
  },
  methods: {
    isMobile() {
      const rect = document.body.getBoundingClientRect()
      return rect.width - 1 < 993
    },
    getTypeTitle() {
      if (this.type == 'work') return 'Work'
      if (this.type == 'play') return 'Play'
      if (this.type == 'study') return 'Study'
      if (this.type == 'exercise') return 'Exercise'
      if (this.type == 'social') return 'Social'
      if (this.type == 'self-care') return 'Self Care'
    },
    getTypeHour() {
      if (this.type == 'work') return '32hrs'
      if (this.type == 'play') return '10hrs'
      if (this.type == 'study') return '4hrs'
      if (this.type == 'exercise') return '4hrs'
      if (this.type == 'social') return '5hrs'
      if (this.type == 'self-care') return '2hrs'
    },
    getDescription() {
      let result = ''
      if (this.active == 'daily') result += 'Yesterday - '
      if (this.active == 'weekly') result += 'Last Week - '
      if (this.active == 'monthly') result += 'Last Month - '

      if (this.type == 'work') result += "36hrs"
      if (this.type == 'play') result += '8hrs'
      if (this.type == 'study') result += '7hrs'
      if (this.type == 'exercise') result += '5hrs'
      if (this.type == 'social') result += '10hrs'
      if (this.type == 'self-care') result += '2hrs'

      return result
    }
  }
}
</script>

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
    }
    &.bottom {
      z-index: 3;
      background-color: hsl(235, 46%, 20%);
      top: -7.5rem;
    }
    &.is-mobile {
      width: 100%;
    }
  }
  .bottom-box-wrapper {
    padding-top: 1rem;
    margin: 0 1rem;
    .el-row {
      span {
        color: white;
        font-weight: 400;
      }
    }
    .hour-wrapper {
      margin-top: 2rem;
      font-size: 2.5rem;
      color: white;
      font-weight: 300;
    }
    .desc-wrapper {
      margin-top: 0.5rem;
      font-size: 0.85rem;
      color: white;
      opacity: 0.5;
      &.is-mobile {
        margin-top: auto;
        margin-bottom: 1rem;
      }
    }
  }
}
</style>