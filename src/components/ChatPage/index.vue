<template>
  <div class="chat-page">
    <chat-page-header />    
    <chat-list 
      :data="chatList"
      :userList="userList"
    />
    <type-chat :sendChat="sendChat" />
  </div>
</template>

<script>

/* eslint-disable */ 
import { mapState, mapGetters, mapActions } from 'vuex'
import Firebase from '../../firebaseHelper'
import ChatPageHeader from './Header';
import ChatList from './ChatList'
import TypeChat from './TypeChat'

// firebase
const database = Firebase.database();
const chats = database.ref('chats');
const users = database.ref('users');
const online = database.ref('online');
// for image store
const storageRef = Firebase.storage().ref();

// scroll to bottom
const scrollBottom = () => {
  const chatlist = document.querySelector('.chat-list');
  chatlist.scrollTop = chatlist.scrollHeight;
};

const XSSfilter = content => content.replace(/</g, "&lt;").replace(/>/g, "&gt;");

export default {
  name: 'chatpage',
  firebase: {
    chatList: chats,
    userList: users,
    onlineList: online,
  },
  computed: {
    ...mapState([
      'app',
      'modals',
    ]),

    myAccount() {
      return this.app.myAccount;
    },
    online() {
      return this.onlineList.length;
    },
  },
  methods: {
    ...mapActions('modals', {
      openModal: 'open',
      viewOriginal: 'viewOriginal',
      closeModal: 'close',
    }),
    sendChat(data) {
      if(data != ''){
        this.pushChat(`<div>${XSSfilter(data)}</div>`);
        this.newChat = '';
      }
    },
    pushChat(content) {
      chats.push({
        user: this.myAccount.uid,
        content: content,
        time: new Date().toString()
      });
      // scroll to bottom
      setTimeout(() => {
        scrollBottom();
      });
    },    
  },
  components: {
    ChatPageHeader,
    ChatList,
    TypeChat,
  }
}
</script>

<style scoped>
/* template css */
.chat-page {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #f2f2f2;
  color: #2f2f2f;
}
</style>
