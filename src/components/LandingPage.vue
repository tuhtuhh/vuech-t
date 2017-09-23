<template>
  <div class="landing-page">
    <div class="wrapper">
      <h1>{{landMsg}}</h1>
      <button @click="auth">
        {{landingBtnMsg}}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'landingPage',
  props: ['auth'],
  data() {
    return {
      landMsg: 'Tere... Super Salajane Chat',
      landingBtnMsg: 'Logi Sisse',
    };
  },
};
</script>

<style scoped>
.landing-page {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #673ab7;
  color: white;
  overflow: hidden;
}
.wrapper{
  position: absolute;
  left: 50%;
  top: 50%;
  white-space: nowrap;
  text-align: center;
  transform: translate(-50%, -50%);
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
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  transition: all 0.3s;  
}
button:hover {
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}
</style>