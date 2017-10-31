<template>
  <div class="block">
    <el-pagination
      layout="prev, pager, next"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    props: ['total']
  }
</script>