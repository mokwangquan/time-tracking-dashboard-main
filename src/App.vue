<template>
  <div id="app" :class="{ 'is-mobile' : isMobile() }">
    <div class="component-container" :class="{ 'is-mobile' : isMobile() }">
      <el-row :type="isMobile() ? '' : 'flex'" justify="center">
        <summary-panel @activeChanged="(value) => this.active=value"/>
        <div class="detail-container">
          <el-row :type="isMobile() ? '' : 'flex'" justify="center">
            <detail-panel
              color="hsl(15, 100%, 70%)"
              :active="active"
              type="work"/>
            <detail-panel
              color="hsl(195, 74%, 62%)"
              :active="active"
              type="play"/>
            <detail-panel
              color="hsl(348, 100%, 68%)"
              :active="active"
              type="study"/>
          </el-row>
          <el-row :type="isMobile() ? '' : 'flex'" justify="center">
            <detail-panel
              color="hsl(145, 58%, 55%)"
              :active="active"
              type="exercise"/>
            <detail-panel
              color="hsl(264, 64%, 52%)"
              :active="active"
              type="social"/>
            <detail-panel
              color="hsl(43, 84%, 65%)"
              :active="active"
              type="self-care"/>
          </el-row>
        </div>
      </el-row>
    </div>
  </div>
</template>

<script>
import SummaryPanel from "@/components/SummaryPanel.vue"
import DetailPanel from "@/components/DetailPanel.vue"

export default {
  name: 'App',
  components: {
    SummaryPanel,
    DetailPanel,
  },
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
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap');
@import url('https://unpkg.com/element-ui/lib/theme-chalk/index.css');
body {
  margin: 0;
  padding: 0;
}
#app {
  z-index: 1;
  font-family: 'Rubik', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: hsl(226, 43%, 10%);
  .component-container {
    padding: 8rem 14rem;
    margin: 0 auto;
    >.el-row {
      height: 100vh;
    }
    .detail-container {
      margin: 0 0.5rem;
      >.el-row {
        width: fit-content;
        >* {
          margin: 0 0.5rem;
        }
      }
    }
    &.is-mobile {
      padding: 0;
      .el-row {
        width: 100%
      }
    }
  }
  &.is-mobile {
    overflow: auto;
  }
}
</style>
