<template>
  <transition-group tag="div" class="chat-list" name="chat">        
    <div class="chat" 
      v-for="item in data"
      :key="item.user"
      :class="{myChat: item.user == myAccount.uid}">
      <div class="info">
        <img 
          class="info-thumbnail" 
          v-if="item.user != myAccount.uid"
          :src="userList[_.findIndex(userList, {uid: item.user})].picture">       
        <div class="info-text">
          <span 
            class="username"
            v-if="item.user != myAccount.uid">
            {{userList[_.findIndex(userList, {uid: item.user})].username}}
          </span>            
        </div> 
      </div>

      <span class="time" 
        v-if="item.user == myAccount.uid"
        v-text="new Date(item.time).toLocaleString()" />

      <div class="content" v-html="item.content" ></div>

      <span class="time" 
        v-if="item.user != myAccount.uid"
        v-text="new Date(item.time).toLocaleString()" />

    </div>
  </transition-group>
</template>

<script>
/* eslint-disable */
import { mapState  } from 'vuex';
import _ from 'lodash';

export default {
  name: 'chatList',
  props: [
    'data',
    'userList'
  ],
  computed: {
    ...mapState([
      'app',
    ]),
    // lodash
    _() {
      return _;
    },
    myAccount() {
      return this.app.myAccount;
    }
  },
}
</script>

<style>
/* transition CSS */
.chat-enter-active {
  transition: all 0.75s cubic-bezier(0.18, 0.89, 0.32, 1.28);
}
.chat-enter {
  transform: translateX(-3rem);
  opacity: 0;
}

/* template CSS */
.chat-list {
  height: calc(100vh - 8.5rem);
  overflow-x: hidden;
  overflow-y: auto;  
  padding: 0.5rem 1rem;
}
.chat {  
  padding: 0.5rem;
}
.chat.myChat {
  text-align: right;
}
.info {
  position: relative;
  padding-bottom: 0.5rem;
}
.info-thumbnail {
  position: absolute;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 100%;
  border: none;
  object-position: center;
  object-fit: cover;
}
.info-text,
.content {
  margin-left: 3.5rem;
}
.myChat .info-text,
.myChat .content {
  margin-left: 0.5rem;
}

.username {

}
.time {
  margin-left: 0.5rem;
  font-size: 0.8rem;
  color: gray;  
}
.content {
  display: inline-block;
}
.content > div {  
  padding: 0.6rem 1rem;
  background-color: white;    
  border-radius: 3px;
  color: black;
  font-weight: 300;
  cursor: pointer;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2), 0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12);
}
.content > img {
  max-width: 40vw;
  max-height: 40vh;
  border-radius: 3px;
  pointer-events: none;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2), 0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12);box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2), 0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12);
}
.myChat .content > div{
  background-color: #5775f6;
  color: white;
}
</style>