<template>
  <div class="wrapper">
    <div v-for="gif in gifs" :key="gif.id">
      <img class="gif" :src="gif.images.original.url" alt="">
    </div>
    <div class="inputWrap">
      <input 
        type="text" 
        v-model="newBtn" 
        placeholder="Lisa nuppe"
        @keyup.enter="inputChange">
      <button class="addBtn" @click="addBtn"> + </button>
    </div>  
 
    <div class="wrappers">
            <div class="buttons" v-for="button in buttons" :key="button.text">
        <button @click="changeGif">
          {{ button.text }}
        </button>
      </div>
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
      test: 'test',
      newBtn: '',
      buttons: [
        { text: 'test' },
        { text: 'dogs' },
        { text: 'cats' },
        { text: 'test' },
        { text: 'dogs' },
        { text: 'cats' },
        { text: 'test' },
        { text: 'dogs' },
        { text: 'cats' },
        { text: 'test' },

        


      ]
    };
  },

  mounted() {
    this.ranCcol();
    this.load();
  },

  methods: {
    load() {
      fetch(`https://api.giphy.com/v1/gifs/search?api_key=0e416030e0dd497196dfbe570c5fc692&q=${this.test}&limit=1&offset=0&rating=G&lang=en`)
        .then(res => res.json())
        .then((result) => {
          this.gifs = result.data;
        });
    },
    changeGif(e) {
      this.test = e.target.innerText;
      
      this.load()
      e.target.style.backgroundColor = this.ranCcol()

    },
    inputChange(e) {
      this.test = e.target.value
      if(this.test === '') {
        alert('no späm');
        return
      };
      this.buttons.push({
        text: this.test,
      })
      this.newBtn = ''
      this.load();
    },
    ranCcol(value) { //function name
      var value = '#'; // hexadecimal starting symbol
      var letters = ['000000', 'FF0000', '00FF00', '0000FF', 'FFFF00', '00FFFF', 'FF00FF', 'C0C0C0']; //Set your colors here
      value += letters[Math.floor(Math.random() * letters.length)];
      return value
    },
    addBtn() {
      this.buttons.push({
        text: this.newBtn,
      })
      this.test = this.newBtn
      this.load();
    }
  },

};
</script>

<style scoped>
@media only screen and (max-width: 1200px) {
  .wrapper {
    visibility: hidden;
  }
}

.wrapper {
  margin-left: 100px;
  width: 560px;
 
}

.buttons {
  margin: 5px;
  display: inline-block;
}
.wrappers {
    max-height: 200px;
  overflow: auto;
}
.inputWrap {
  margin-top: 20px;
  height: 5rem;
  width: 90%;
  background-color: white;
  box-shadow: 0 -5px 10px -5px rgba(0,0,0,.2);
  margin-bottom: 50px

}

.addBtn {
  background-color: green;
  margin-top: 15px;
  margin-left: 100px;


}
input {
  width: calc(100% - 15rem);  
  height: 50px;
  border: none;
  outline: none;  
  font-size: 1.25rem;
  margin-left: 25px;

}

h1 {
  font-size: 3rem;
  margin-bottom: 2rem;
}

button {
  padding: 0.7rem 1.3rem;
  background-color: #f44336;
  border: none;
  outline: none;
  color: white;
  font-size: 1.5rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: all 0.3s;
}

button:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

.gif {

  margin-top: 20px;
  max-height: 500px;
  min-height: 450px;
  max-width: 500px;
  min-width: 450px
}

.chat {}

input {}
</style>
