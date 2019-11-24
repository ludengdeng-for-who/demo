<template>
  <div class="news">
    <Navbar title="新闻资讯"></Navbar>
    <div class="newsList">

      <!--        <pre v-text="$attrs"/>-->
      <ul>
        <li v-for="(item,index) in news" :key="index">
          <router-link :to='{name:"details",query:{id:item.id}}'>
            <div class="left"><img :src="item.img" alt=""></div>
            <div class="right">
              <span>{{item.title}}</span>
              <p>{{item.addTime | changeTime}}</p>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props: {},
    data() {
      return {
        news: [
          {
            id: 1,
            title: '买房还是炒股，2015买房无法拒绝的五大理由',
            addTime: new Date,
            zhaiYao: '转眼间2015已结过去四个月',
            click: 2,
            img: require('../../assets/dog4.jpg')
          },
          {
            id: 2,
            title: '买房还是炒股，2015买房无法拒绝的五大理由',
            addTime: new Date,
            zhaiYao: '转眼间2015已结过去四个月',
            click: 2,
            img: require('../../assets/dog4.jpg')
          },
          {
            id: 3,
            title: '买房还是炒股，2015买房无法拒绝的五大理由',
            addTime: new Date,
            zhaiYao: '转眼间2015已结过去四个月',
            click: 2,
            img: require('../../assets/dog4.jpg')
          },
          {
            id: 4,
            title: '买房还是炒股，2015买房无法拒绝的五大理由',
            addTime: new Date,
            zhaiYao: '转眼间2015已结过去四个月',
            click: 2,
            img: require('../../assets/dog4.jpg')
          },
          {
            id: 5,
            title: '买房还是炒股，2015买房无法拒绝的五大理由',
            addTime: new Date,
            zhaiYao: '转眼间2015已结过去四个月',
            click: 2,
            img: require('../../assets/dog4.jpg')
          },
          {
            id: 6,
            title: '买房还是炒股，2015买房无法拒绝的五大理由',
            addTime: new Date,
            zhaiYao: '转眼间2015已结过去四个月',
            click: 2,
            img: require('../../assets/dog4.jpg')
          },
          {
            id: 7,
            title: '买房还是炒股，2015买房无法拒绝的五大理由',
            addTime: new Date,
            zhaiYao: '转眼间2015已结过去四个月',
            click: 2,
            img: require('../../assets/dog4.jpg')
          }
        ]
      }
    },
    filters: {
      changeTime: function (input) {
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var timeNow = year + '-' + month + '-' + day;
        return timeNow;
      }
    }
  };
</script>
<style scoped>
  ul li {
    height: 120px;
  }

  .left {
    padding: 10px;
    float: left;
  }

  .left img {
    /*padding-bottom: 20px;*/
    /*padding-top: 20px;*/
    width: 170px;
    height: 100px;
  }

  .right {
    padding: 10px;
    margin-left: 10px;
    float: left;
    height: 120px;
    overflow: auto;
    width: 170px;
    display: block;
    white-space: normal;
    font-size: 12px;
  }

  ul li:last-child {
    margin-bottom: 75px;
  }
</style>
