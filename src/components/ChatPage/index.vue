<template>
  <div>
 <chat-page-header />
  <div class="chat-page">
    <div class="gifs">
      <div class="wrapper">
        <div v-for="gif in gifs" :key="gif.id">
          <img class="gif" :src="gif.images.original.url" alt="">
        </div>
        <div>
          {{ tests }}
        </div>
      </div>
    </div>
    
    <div class="chat">
      <chat-list :data="chatList" :userList="userList" />
      <type-chat :sendChat="sendChat" />
    </div>
  </div>
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
  data() {
    return {
      gifs: [],
      test: 'test',
      newBtn: '',
      buttons: [
        { text: 'test' },

      ],
    }
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
    tests() {
      const keys = Object.keys(this.chatList)
      const index = 1;
      if (index >= keys.length) {
        this.test = 'hello'
        this.load()
        return
      } else {
        const last = keys[keys.length - 1]
        const lastChat = this.chatList[last].content
        const removedDiv = lastChat.replace(/^<div[^>]*>|<\/div>$/g, '');
        this.test = removedDiv;
        if(this.test[0] == "/")
        this.load()
      } 
    },




  },
  mounted() {


  },
  methods: {
    load() {
      fetch(`https://api.giphy.com/v1/gifs/search?api_key=0e416030e0dd497196dfbe570c5fc692&q=${this.test}&limit=1&offset=0&rating=R&lang=en`)
        .then(res => res.json())
        .then((result) => {
          this.gifs = result.data
        });
    },

    addBtn() {
      this.buttons.push({
        text: this.newBtn,
      })
    },

    sendChat(data) {
      if (data != '') {
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
  display: flex;
  flex-wrap: wrap;
  background-color: #f2f2f2;
  color: #2f2f2f;

}

.chat {
  flex-basis: 50%
}

.gifs {
  flex-basis: 50%
}


.wrapper {
  margin-left: 100px;
  width: 560px;
}





.gif {
  margin-top: 20px;
  max-height: 500px;
  min-height: 450px;
  max-width: 500px;
  min-width: 450px
}


</style>
