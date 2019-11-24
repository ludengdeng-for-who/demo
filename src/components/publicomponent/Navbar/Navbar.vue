<template>
  <div class="Navbar">
    <!--        <pre v-text="$attrs"/>-->
    <h3 @click="goBack" class="left"><</h3>
    <h3 class="title">{{title}}</h3>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    name:'Navbar',
    props: ['title'],
    methods:{
      goBack(){
        this.$router.go(-1);
      }
    }
  };
</script>
<style scoped>
  .Navbar{
    height: 30px;
    background-color: #b9ebff;
  }
  h3{
    float: left;
    margin-left: 20px;
  }
  .title{
    margin-left:130px;
  }

</style>
