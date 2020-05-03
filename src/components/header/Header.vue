<template>
  <section class="head">
    <van-icon name="aim" @click="openArea" size="36"/> {{realyAddress}}
    <van-dialog ref="addressDialog" v-model="showArea" title="选择地址" :showConfirmButton="false">
      <van-area :area-list="areaList" @confirm="selectOk"/>
    </van-dialog>
  </section>
</template>

<script>
import areaList from '@/assets/configData/areaList.js'
export default {
  name: 'App',
  computed: {
    'realyAddress':function(){
      let temp = this.selectedArea.length>0 &&  this.selectedArea.map(item=>{
        return item.name
      }).reduce((realy, current)=>{
        return realy === current ? current : `${realy}/${current}`
      })
      return temp || ''
    }
  },
  data(){
    return{
      areaList: areaList,
      selectedArea: [],
      showArea: false,
      images: [
      require('@/assets/image/logo1.png'),
      require('@/assets/image/logo2.png')
      ]
    }
  },
  methods: {
    onChange (index) {
      // console.log(`当前 Swipe 索引：${index}`);
    },
    openArea () {
      this.selectedArea = []
      this.showArea = true
    },
    selectOk (arr) {
      this.selectedArea = arr
      this.showArea = false
    }
  }
}
</script>

<style lang="less" scope>
.head{
  height: 100%;
  display: flex;
  padding: 0px 20px;
}
</style>
