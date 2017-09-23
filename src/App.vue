<template>
  <div id="app">
      <landing-page 
      v-if="!auth"
      :auth="login" />
      <chat-page v-if="auth" />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import LandingPage from './components/LandingPage';
import ChatPage from './components/ChatPage/index';

export default {
  name: 'app',
  created() {
    this.checkAuth();
  },
  computed: {
    ...mapState([
      'app',
    ]),
    auth() {
      return this.app.auth;
    },
    myAccount() {
      return this.app.myAccount;
    },
  },
  methods: {
    ...mapActions([
      'checkAuth',
      'login',
      'logout',
    ]),
  },
  components: {
    ChatPage,
    LandingPage,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-weight: 400;
}
body {
  font-family: 'Roboto', sans-serif;
  overflow: hidden;
}

</style>

