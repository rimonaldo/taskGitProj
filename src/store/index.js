// import { userStore } from './modules/user.store.js'
import { createStore } from "vuex";
import firebaseService from '../services/firebase.service.js'
const store = createStore({
  strict: true,

  state: {
    taskDb:{}
  },
  getters: {
   
  },
  mutations: {
    
    
  },
  actions: {
    async query(){
      const db = await firebaseService.colRef
      console.log(db)
    }
  },
  modules: {
  },
});

export default store;
