<template>
  <section id="ProductHeader">
    <van-swipe :autoplay="3000" @change="onChange">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" style="object-fit: fill;width: 100%;height: 100%;"/>
      </van-swipe-item>
    </van-swipe>
  </section>
</template>

<script>
export default {
  name: 'ProductHeader',
  data(){
    return{
      images: [
      require('@/assets/image/logo1.png'),
      require('@/assets/image/logo2.png')
      ]
    }
  },
  methods: {
    onChange (index) {
      // console.log(`当前 Swipe 索引：${index}`);
    }
  }
}
</script>

<style lang="less" scope>
#ProductHeader{
  height: 100%;
  .van-swipe{
    height: inherit;
    img{
      object-fit: fill;
    }
  }
}
</style>
