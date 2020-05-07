<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data(){
    return{
    }
  },
  methods: {
  },
  created() {
    console.log(process.env.VUE_APP_TITLE)
  },
}
</script>

<style lang="less">
html,body{
  height: 100%;
  margin: 0px
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  padding: 20px;
}
</style>
