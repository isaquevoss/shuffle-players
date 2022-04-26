import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

Vue.config.productionTip = false
const firebaseConfig = {
  apiKey: "AIzaSyADux9xYxOAhT_wU2odGBGd6uro1g3bbf8",
  authDomain: "sorteador-93fc8.firebaseapp.com",
  projectId: "sorteador-93fc8",
  storageBucket: "sorteador-93fc8.appspot.com",
  messagingSenderId: "1061541252387",
  appId: "1:1061541252387:web:8ebb2f1489ccb758989096",
  measurementId: "G-81NCF3T805"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 console.log(analytics)


new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
