<template>
      <div class='tab-bar-item' @click="itemClick">
        <div v-if="!isActive"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-icon-active"></slot></div>
        <div :style="isColor"><slot name="item-text"></slot></div>
      </div>
    <!-- <router-view/> -->
</template>

<script>
export default {
  name: 'TabBarItem',
  data(){
    return {
    }
  },
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    isColor(){
      return this.isActive ? {color:this.activeColor} : {}
    }
  },
  props: {
    path:String,//定义变量类型
    activeColor: {
      type:String,
      default:'red'
    }
  },
  methods: {
    itemClick(){
      this.$router.push(this.path)
    }
  }
}
</script>

<style>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img {
      width: 24px;
      height: 24px;
      margin-top: 3px;
      vertical-align: middle;
      margin-bottom: 2px;
  }
</style>
