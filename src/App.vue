<template>
  <div id="app">
    <div class="component-container">
      <el-row type='flex' justify="center">
        <summary-panel/>
        <el-col class="detail-container">
          <el-row type="flex" justify="start">
            <detail-panel
              color="hsl(15, 100%, 70%)"
              type="work"/>
            <detail-panel
              color="hsl(195, 74%, 62%)"
              type="play"/>
            <detail-panel
              color="hsl(348, 100%, 68%)"
              type="study"/>
          </el-row>
          <el-row type="flex" justify="start">
            <detail-panel
              color="hsl(145, 58%, 55%)"
              type="exercise"/>
            <detail-panel
              color="hsl(264, 64%, 52%)"
              type="social"/>
            <detail-panel
              color="hsl(43, 84%, 65%)"
              type="self-care"/>
          </el-row>
        </el-col>
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
  }
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
  background-color: #2c3e50;
  height: 100vh;
  width: 100vw;
  background-color: hsl(226, 43%, 10%);
  overflow: hidden;
  .component-container {
    padding: 8rem 14rem;
    margin: 0 auto;
    .detail-container { // FIXME: let row have 100% width
      margin: 0 0.5rem;
      >.el-row {
        width: fit-content;
        >* {
          margin: 0 0.5rem;
        }
      }
    }
  }
}
</style>
