<template>
  <div id="app">
    <!--    <img src="./assets/logo.png">-->
    <mt-header title="首页" fixed>
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <!--    //路由入口-->
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>


    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="home">
        <img slot="icon" src="./assets/1.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="gouwuche">
        <img slot="icon" src="./assets/gouwuche.png">
        购物车
      </mt-tab-item>
      <mt-tab-item id="vip">
        <img slot="icon" src="./assets/huiyuan.png">
        会员
      </mt-tab-item>
      <mt-tab-item id="search">
        <img slot="icon" src="./assets/chazhao.png">
        查找
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        selected: ''
      }
    },
    watch: {
      //监听路由的变化
      selected: function (newV, oldV) {
        this.$router.push({name: this.selected});
      }
    }
  }
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition: all .3s;

  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
