<template>
  <div class="photos">
    <!--    <p>{{this.$route.params}}</p>-->
    <Navbar title="图文分享"></Navbar>
    <!--        <pre v-text="$attrs"/>-->
    <!--      <h1>我是photos</h1>-->
    <div class="top">
    <ul class="type clearfix">
      <li v-for="(item,index) in types" :key="item.id" @click="changeHash(index)"
          :class="'{active:item.id==isShow}'">
        {{item.type}}
      </li>
    </ul>
      <ul class="bottom">
        <li v-for="(item,index) in imgs" :key="index">
          <div class="imgs">
            <img :src="item.img" />
          </div>
          <p class="words">{{item.words}}</p>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'Photos',
    props: {},
    methods: {
      changeHash(index) {
        this.$router.push(this.types[index].router);

      },
      getImgs: function (id) {
        this.$axios.get('http://127.0.0.1:8888/photos/' + id,{timeout:5000})
          .then(res => {
            // console.log(res.data[0].img);

            this.imgs = res.data;
            console.log(this.imgs);
          })
          .catch(err => {
            console.log(err);
            //请求失败，关闭加载标志
            this.$mint.Indicator.close();
          });
      }
    },
    beforeRouteUpdate(to, from, next) {
      this.getImgs(to.params.dynamicId);
      next();
    },
    created(){
      this.getImgs(0);
    },
    data() {
      return {
        isShow: 0,
        types: [
          {type: 'dog1', router: {name: 'photos', params: {dynamicId: 1}}, id: 1},
          {type: 'dog2', router: {name: 'photos', params: {dynamicId: 2}}, id: 2},
          {type: 'dog3', router: {name: 'photos', params: {dynamicId: 3}}, id: 3},
          {type: 'dog4', router: {name: 'photos', params: {dynamicId: 4}}, id: 4}
        ],
        imgs:[]
      }
    }
  }
</script>

<style scoped>
  .type {
    /*width: 500px;*/
    /*overflow: auto;*/
  }

  .type li {
    margin: 10px;
    width: 70px;
    height: 30px;
    background-color: #3b99ff;
    float: left;
    color: #fff;
    border-radius: 30px;
    line-height: 30px;
    text-align: center;
  }

  .imgs {
    width: 100%;
    height: 300px;
    margin-top: 10px;
    /*height: 100px;*/
    /*width: 100px;*/
    border-radius: 20px;
  }

  .imgs img{
    width: 100%;
    height: 100%;
  }
  .bottom li {
    position: relative;
  }

  .words {
    position: absolute;
    left: 5px;
    bottom: 0;
    color: black;
  }

  .bottom li:last-child {
    margin-bottom: 55px;
  }

  .active {
    background-color: #ff9b67;
  }
</style>
