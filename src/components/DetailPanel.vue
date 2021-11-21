<template>
  <div class="component-wrapper">
    <div class="box top" :style="`background-color: ${color}`">
      <el-row type="flex" justify="end">
        <img :src="`/images/icon-${type}.svg`" :alt="type+' logo'">
      </el-row>
    </div>
    <div class="box bottom">
      <div class="bottom-box-wrapper">
        <el-row type="flex" justify="space-between">
          <span>{{ getTypeTitle() }}</span>
          <div>
            <img src="/images/icon-ellipsis.svg" alt="More">
          </div>
        </el-row>
        <el-row class="hour-wrapper">
          <div class="">{{ getTypeHour() }}</div>
        </el-row>
        <el-row class="desc-wrapper">
          <div>{{ getDescription() }}</div>
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
    }
  },
  methods: {
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
      if (this.type == 'work') return 'Last Week - 36hrs'
      if (this.type == 'play') return 'Last Week - 8hrs'
      if (this.type == 'study') return 'Last Week - 7hrs'
      if (this.type == 'exercise') return 'Last Week - 5hrs'
      if (this.type == 'social') return 'Last Week - 10hrs'
      if (this.type == 'self-care') return 'Last Week - 2hrs'
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
    }
  }
}
</style>