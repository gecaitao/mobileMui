<template>
  <section class="footer">
    <van-cell is-link @click="showPopup">展示弹出层</van-cell>
    <van-popup v-model="showP" position="bottom" :style="{ height: '30%' }" closeable>内容</van-popup>
    <van-field
      name="身份证"
      label="身份证"
      readonly
      clickable
      :value="value"
      @touchstart.native.stop="showK = true"
    />
      <van-number-keyboard
      position="top"
        theme="custom"
        close-button-text="完成"
        v-model="value"
        :show="showK"
        extra-key="X"
        @blur="showK = false"
      />
  </section>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
  },
  data(){
    return{
      showP: false,
      showK: false,
      value:''
    }
  },
  methods: {
    showPopup () {
      this.showP = true
    }
  }
}
</script>

<style lang="less" scope>

</style>
