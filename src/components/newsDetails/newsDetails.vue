<template>
  <div>

    <Navbar title="新闻详情"></Navbar>
    <!--        <pre v-text="$attrs"/>-->
    <div class="newsDetails">
      <span>{{news[newsId-1].title}}</span>
      <p>{{news[newsId-1].addTime}}</p>
      <!--        <div class="details">{{news[newsId-1].details}}</div>-->
    </div>
    <div class="details">{{news[newsId-1].details}}</div>
  </div>
</template>

<script>
  export default {
    name: 'NewsDetails',
    props: {},
    data() {
      return {
        //获取当前id
        newsId: this.$route.query.id,
        news: [
          {
            id: 1,
            title: '买房还是炒股，2015买房无法拒绝的五大理由',
            addTime: new Date,
            details: '111111111111111111111111111111111111111111111111111111111111111111111111111'
          },
          {
            id: 2,
            title: '买房还是炒股，2015买房无法拒绝的五大理由',
            addTime: new Date,
            details: '222222222222222222222222222222222222222222222222222222222222222222222222222222'
          },
          {
            id: 3,
            title: '买房还是炒股，2015买房无法拒绝的五大理由',
            addTime: new Date,
            details: '3333333333333333333333333333333333333333333333333333333333333333333333333333333333'
          },
          {
            id: 4,
            title: '买房还是炒股，2015买房无法拒绝的五大理由',
            addTime: new Date,
            details: '44444444444444444444444444444444444444444444444444444444444444444444444444444444'
          },
          {
            id: 5,
            title: '买房还是炒股，2015买房无法拒绝的五大理由',
            addTime: new Date,
            details: '55555555555555555555555555555555555555555555555555555555555555555555555555555555555'
          },
          {
            id: 6,
            title: '买房还是炒股，2015买房无法拒绝的五大理由',
            details: '6666666666666666666666666666666666666666666666666666666666666666666666666666666666666'
          },
          {
            id: 7,
            title: '买房还是炒股，2015买房无法拒绝的五大理由',
            addTime: new Date,
            details: '7777777777777777777777777777777777777777777777777777777777777777777777777777777777777'
          }
        ]
      }
    }
  };
</script>
<style scoped>
  .newsDetails {
    width: 100%;
    text-align: center;
    /*overflow: auto;*/
  }

  .details {
    width: 375px;
    word-wrap: break-word;
    word-break: break-all;
    /*font-size: 12px;*/
  }

  /*span{*/
  /*  margin: 0 auto;*/
  /*}*/
  p {
    border-bottom: 1px solid #cccccc;
  }
</style>
