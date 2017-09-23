<template>
  <div class="wrapper">
    <div v-for="gif in gifs" :key="gif.id">
      <img class="gif" :src="gif.images.original.url" alt="">
    </div>

  </div>
</template>

<script>
  /* eslint-disable */


export default {  
  name: 'Action',
  props: [
    'data',
  ],
  data() {
    return {
      gifs: [],
    };
  },


  mounted() {
    var oneGif = this.data.filter((item) => {
      return item
    })
    console.log(oneGif)
    this.load();
  },

  methods: {
    load() {
      const test = 'test'
      fetch(`https://api.giphy.com/v1/gifs/search?api_key=0e416030e0dd497196dfbe570c5fc692&q=${test}&limit=1&offset=0&rating=G&lang=en`)
        .then(res => res.json())
        .then((result) => {
          this.gifs = result.data;
        });
    },
  },
};
</script>

<style scoped>
@media only screen and (max-width: 1200px)  {
  .gif {
    visibility: hidden;
  }
}
  .wrapper {
    display: flex;
    flex-wrap: wrap;
    height: 100vw;

  }
  .gif {
    margin-left: 20px;
    margin-top: 20px;
    width: 580px;
    height: 400px;

  }

</style>
