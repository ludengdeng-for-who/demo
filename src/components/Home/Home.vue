<template>
  <div>
    <mt-swipe :auto="2000" class="swipe">
      <mt-swipe-item v-for="(item,index) in imgs" :key="index">
        <img :src="item.img"/>
      </mt-swipe-item>
    </mt-swipe>

    <div class="lists">
      <ul>
        <li v-for="(item,index) in lists" :key="index">
          <router-link :to="item.router">
            <img :src="item.img" alt="">
          </router-link>
          <p>{{item.title}}</p>
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
  export default {

    name: 'Home',
    data() {
      return {
        imgs: [
          {img: require('../../assets/dog2.jpg')},//静态图片资源需要require进行加载
          {img: require('../../assets/dog3.jpg')},
          {img: require('../../assets/dog4.jpg')}
        ],
        lists: [
          {img: require('../../assets/xinwen.png'), title: '新闻资讯',router:{name:'newsList'}},
          {img: require('../../assets/tuwenzixun.png'), title: '图文分享',router:{name:'photos',params:{dynamicId:0}}},
          {img: require('../../assets/lunkuodasan-.png'), title: '商品展示',router:{name:'newsList'}},
          {img: require('../../assets/zixun.png'), title: '资讯',router:{name:'newsList'}},
          {img: require('../../assets/liuyan.png'), title: '留言反馈',router:{name:'newsList'}},
          {img: require('../../assets/lianxiwomen.png'), title: '联系我们',router:{name:'newsList'}}
        ]
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .swipe {
    width: 100%;
    height: 250px;
    /*background-color: pink;*/
  }

  .swipe img {
    width: 100%;
    height: 250px;
  }

  ul {
    margin-top: 20px;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  }

  li {
    margin-top: 20px;
    /*width: 100px;*/
    height: 100px;
    flex: 33.33%;
    text-align: center;
    font-size: 14px;
  }

  li img {
    width: 60px;
    height: 60px;
  }
  .lists p{
    line-height: 30px;
    font-weight: 600;
  }
</style>
