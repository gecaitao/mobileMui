<template>
  <section class="detail">
    {{detailId}}
  </section>
</template>

<script>
export default {
  name: 'Detail',
  components: {},
  computed: {
    detailId: function () {
      debugger
      return this.$route.params.id
    }
  },
  data(){
    return{
    }
  },
  methods: {
  }
}
</script>

<style lang="less">
</style>
