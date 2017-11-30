<template>
  <div>
    <h1> With Placeholders</h1>
    <p>Scrollling stutters in this section, most apparent with 2 columns</p>
    <div class="container">
      <ImageComponent v-for="x in 16"
                      :key="x"
                      :id="x"></ImageComponent>
    </div>

    <h1 class="section-2"> No Placeholders (no stutter)</h1>
    <div class="container">
      <ImageComponentNoplaceholder v-for="x in 16"
                                   :key="x"
                                   :id="x"></ImageComponentNoplaceholder>
    </div>
  </div>
</template>

<script>
  import ImageComponent from './components/ImageComponent'
  import ImageComponentNoplaceholder from './components/ImageComponentNoplaceholder'

  export default {
    name: 'app',
    components: {
      ImageComponent,
      ImageComponentNoplaceholder
    }
  }
</script>

<style lang="scss">

  * {
    box-sizing: border-box;
  }

  h1 {
    padding: 2em 0;

  }

  .section-2 {
    margin-top: 4em;
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    max-width: 800px;
  }

  .image-component {
    width: 50%;
  }

</style>
