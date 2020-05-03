<template>
  <section class="help">
    <van-icon name="chat-o" size="20" @click="tip" :title="'客服'"/>
  </section>
</template>

<script>
export default {
  name: 'Hlep',
  data(){
    return{
    }
  },
  methods: {
    tip (event) {
      this.$toast('没有客服')
    }
  }
}
</script>

<style lang="less" scope>
.help{
  position: fixed;
  right: 10px;
  top: 50%;
  cursor: pointer;
}
</style>
