// import { userStore } from './modules/user.store.js'
import { createStore } from "vuex";
import firebaseService from "../services/firebase.service.js";
const store = createStore({
  strict: true,

  state: {
    tasks: {},
  },
  getters: {
    tasks({tasks}){
      return tasks
    }
  },
  mutations: {
    setTasks(state, { tasks }) {
      state.tasks = tasks
    },
  },
  actions: {
    async query({commit}) {
      // init services
      const db = firebaseService.getFirestore();

      // collection ref
      const colRef = firebaseService.collection(db, "task");

      // get collection data when page is loaded.
      
      firebaseService.onSnapshot(colRef, (snapshot) => {
          console.log("snapshot :>> 123", snapshot);
          const tasks = snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          });
          commit({type:'setTasks', tasks})
        });
      
    },
  },
  modules: {},
});

export default store;
