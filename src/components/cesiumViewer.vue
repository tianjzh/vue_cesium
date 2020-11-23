<template>
  <div id="cesiumContainer"></div>
</template>

<script>
export default {
  name: 'cesiumViewer',
  data () {
    return {}
  },
  mounted () {
    var viewer = new this.Cesium.Viewer('cesiumContainer')
    viewer._cesiumWidget._creditContainer.style.display = 'none'
  }
}
</script>

<style scoped>
#cesiumContainer {
  width: 100%;
  height: 100%;
}

</style>
