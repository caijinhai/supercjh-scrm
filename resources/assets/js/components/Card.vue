<template>
  <el-row>
    <el-card :body-style="{ padding: '0px' }">
      <img :src="img" class="image">
      <div style="padding: 14px;">
        <h4>{{ name }}</h4>
        <span>{{ description }}</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button btn-lg"><span class="glyphicon glyphicon-hand-right"></span></el-button>
        </div>
      </div>
    </el-card>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date()
    };
  },
  computed: {
    img: function() {
      return 'img/bg' + this.id + '.jpg';
    }
  },
  props: ['id', 'name', 'description'],
}
</script>

<style>
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>