import Firebase from '../../firebaseHelper';

// set Firebase
const database = Firebase.database();
const provider = new Firebase.auth.GoogleAuthProvider();

export default {
  /* eslint-disable */
  state: {
    auth: true,
    myAccount: {},

  },
  mutations: {
    SET_AUTH(state, value) {
      state.auth = value;
    },
    SET_MYACCOUNT(state, obj) {
      state.myAccount = obj;
    },
    LOGIN(state) {
      Firebase.auth().signInWithRedirect(provider);
    },
    LOGOUT(state) {
      state.auth = false;
      database.ref(`online/${state.myAccount.uid}`).remove();
      Firebase.auth().signOut();
      state.myAccount = {};
    },
  },
  actions: {
    checkAuth({ commit }) {
      Firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          const userObj = {
            uid: user.uid,
            username: user.displayName,
            picture: user.photoURL,
          };

          database.ref(`users/${user.uid}`).set(userObj);
          database.ref(`online/${user.uid}`).set(userObj);

          commit('SET_MYACCOUNT', userObj);
          commit('SET_AUTH', true);
        } else {
          commit('SET_AUTH', false);
        }
      });
    },
    login({ commit }) {
      commit('LOGIN');
    },
    logout({ commit }) {
      commit('LOGOUT');
    },
  },
};

