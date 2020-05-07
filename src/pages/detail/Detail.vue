<template>
  <section class="detail">
    <van-notice-bar text="通知内容" left-icon="volume-o" />
    <van-uploader v-model="fileList" multiple :deletable="false" />
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" style="height:100px">
      <p>刷新次数: {{ count }}</p>
    </van-pull-refresh>
    <van-cell title="显示分享面板" @click="showShare = true" />
    <van-share-sheet
      v-model="showShare"
      title="立即分享给好友"
      :options="options"
      @select="onSelect"
    />
    <van-divider>分割线</van-divider>
    <van-skeleton title :row="3" :loading="skeletonLoading">
      <div>实际内容</div>
    </van-skeleton>
    <van-button @click="addCount">
      {{getCount}}sotre{{storeCount}}
    </van-button>

  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Detail',
  components: {},
  computed: {
    storeCount: function () {
      return this.$store.state.count
    },
     ...mapGetters([
      'getCount'
    ])
  },
  watch: {

  },
  data(){
    return{
      fileList: [
        { url: 'https://img.yzcdn.cn/vant/leaf.jpg' }
      ],
      count: 0,
      isLoading: false,
      showShare: false,
      skeletonLoading: true,
      options: [
        [
          { name: '微信', icon: 'wechat' },
          { name: '微博', icon: 'weibo' },
          { name: 'QQ', icon: 'qq' },
        ],
        [
          { name: '复制链接', icon: 'link' },
          { name: '分享海报', icon: 'poster' },
          { name: '二维码', icon: 'qrcode' },
        ],
      ]
    }
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
    onSelect (options) {
      console.log(options)
    },
    addCount() {
      this.$store.dispatch('addCount')
  }
  },
  created(){
    setInterval(()=>{
      // this.skeletonLoading = !this.skeletonLoading
    },5000)
  }
}
</script>

<style lang="less">
</style>
