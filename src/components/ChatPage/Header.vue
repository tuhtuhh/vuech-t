<template>
  <header style="{backgroundColor: #673ab7}">      
    <h3>Chät</h3>
    <button @click="logout">Logi Välja</button>
  </header>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'chatpageHeader',
  methods: {
    ...mapActions([
      'logout',
    ]),

  },
};
</script>

<style scoped>
header {
  position: relative;
  padding: 0 2rem;
  height: 3.5rem;
  color: white;
  box-shadow: 0 5px 10px -5px rgba(0,0,0,.8);
  transition: all 0.3s;
  background-color: #673ab7;
}
header > h3 { 
  position: absolute;      
  left: 50%;    
  top: 50%;  
  transform: translate(-50%, -50%);  
}
header > span > i {
  position: absolute;        
  left: 1.5rem; 
  top: 50%;  
  cursor: pointer;
  transform: translateY(-50%); 
}
header > button {
  position: absolute;      
  right: 1.5rem;    
  top: 50%;  
  transform: translateY(-50%); 
  padding: 0.5rem 1.2rem;
  background-color: transparent;
  border: 2px solid white;
  border-radius: 3px;
  color: white;  
  transition: all 0.3s;
}
header > button:hover {  
  background-color: rgba(255,255,255, 0.2);
}
</style>