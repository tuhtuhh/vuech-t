<template>
  <div class="type-chat">      
    <input 
      type="text" 
      v-model="newChat" 
      @keyup.enter="beforeSendChat(newChat)"
      placeholder="Alusta chättimist...">
    <div class="btn-group">

      <button @click="beforeSendChat(newChat)" >Saada</button>    
    </div>
  </div> 
</template>

<script>
/* eslint-disable */


export default {
  name: 'typeChat',
  props: ['sendChat'],
  data() {
    return {
      newChat: '',
    };
  },
  computed: {

  },
  methods: {

    beforeSendChat(value) {
      this.sendChat(value);
      this.newChat = '';
    }
  },
}
</script>

<style scoped>
.type-chat {
  position: relative ;
  bottom: 0;
  height: 5rem;
  width: 100%;
  background-color: white;
  box-shadow: 0 -5px 10px -5px rgba(0,0,0,.2);
}
input[type="text"] {
  position: absolute;
  left: 2rem;
  top: 50%;
  padding: 1rem;
  width: calc(100% - 15rem);  
  background-color: transparent;  
  border: none;
  outline: none;  
  font-size: 1.25rem;  
  transform: translateY(-50%);
}
.btn-group {
  position: absolute;
  right: 2rem;
  top: 50%;
  height: 3rem;
  transform: translateY(-55%);
}
button {
  display: inline-block;
  padding: 1rem 1.5rem;
  margin: 0 0.2rem;
  background-color: transparent;
  border: none; 
  border-radius: 3px;
  outline: none;
  color: white;
  font-size: 1rem;
  transition: all 0.3s;
  background-color: #673ab7;
}
button:nth-of-type(1):hover{
  background-color: rgba(0,0,0, 0.1);
}
button:nth-of-type(2):hover{
  border-radius: 3rem;
}
</style>