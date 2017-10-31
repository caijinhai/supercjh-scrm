<template>
  <div class="media mb20">
    <div class="media-left media-top">
      <a href="#" class="img-box">
        <img class="media-object" :src="img" alt="easy1">
      </a>
    </div>
    <div class="media-body">
      <h4 class="media-heading">{{ name }}</h4>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    props: ['img', 'name', 'description'],
  }

</script>


<style lang="scss">
 .img-box img {
  width: 64px;
  height: 64px;
} 
</style>