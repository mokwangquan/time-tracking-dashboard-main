<template>
  <div id="app">
    <div class="component-container">
      <el-row type='flex' justify="center">
        <summary-panel/>
        <el-col>
          <el-row type="flex" justify="start">
            <detail-panel/>
            <detail-panel/>
            <detail-panel/>
          </el-row>
          <el-row type="flex" justify="start">
            <detail-panel/>
            <detail-panel/>
            <detail-panel/>
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
  .component-container {
    padding: 8rem 14rem;
    .el-row {
      margin: 0 0.5rem;
      height: fit-content; // FIXME: why extra white space below
      >* {
        margin: 0 0.5rem;
      }
    }
  }
}
</style>
