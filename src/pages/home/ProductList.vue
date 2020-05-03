<template>
  <div id="ProductList">
    <van-row gutter="10">
      <van-col span="8"  v-for="item in list" :key="item.id">
        <van-card
          :desc="item.description"
          :title="item.name"
          thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
        />
        </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  components: {},
  data(){
    return{
      list: [
      ]
    }
  },
  created () {
    let temp = []
    for(let i = 0; i < 100; i++) {
      temp.push({id:i, name: `产品${i}`, description: `描述${i}`})
    }
    this.list = temp
  },
  methods: {
  }
}
</script>

<style lang="less">
#ProductList{
  height: inherit;
  padding: 0px 5px;
  .van-row{
    height: 100%;
    overflow: auto;
  }
  @media screen and (max-width: 600px)  {
    .van-card__header{
      justify-content: left;
      flex-wrap: wrap;
      .van-card__content{
        min-height: fit-content;
      }
    }
  }
}

</style>
