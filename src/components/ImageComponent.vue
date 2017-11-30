<template>
  <div>
    <progressive-background
      class="listing__image"
      :src="'/static/main/' + id + '.jpg'"
      :placeholder="'/static/placeholder/' + id + '.jpg'"
      no-ratio></progressive-background>
  </div>
</template>

<script>
  export default {
    props: ['id']
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

  .listing__image {
    width: 400px;
    height: 200px;
  }

</style>
