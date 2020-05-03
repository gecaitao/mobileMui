<template>
  <section class="home">
    <header class="home-header">
      <Header></Header>
    </header>
    <section class="home-content">
      <ProductHeader style="width: 100%;height: 60px;"></ProductHeader>
      <ProductList></ProductList>
    </section>
    <footer class="home-fotter">脚</footer>
    <Help></Help>
  </section>
</template>

<script>
import Header from '@/components/header/Header.vue'
import Help from '@/components/help/Help.vue'
import ProductHeader from './ProductHeader.vue'
import ProductList from './ProductList.vue'
export default {
  name: 'App',
  components: {Header, Help, ProductHeader, ProductList},
  data(){
    return{
    }
  },
  methods: {
  }
}
</script>

<style lang="less">
.home{
  height: 100%;
  .home-header{
    width: 100%;
    height: 60px;
  }
  .home-content{
    padding-bottom: 100px;
    height: calc(100% - 160px);
    overflow: auto;
    #ProductList{
      height: calc(100% - 60px);
    }
  }
  .home-fotter{
    width: 100%;
    height: 100px;
    position: fixed;
    bottom: 0;
  }
}
</style>
