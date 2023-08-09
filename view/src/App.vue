<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view/>
</template>

<script >
import Signup from './views/Signup.vue';
import Login from './views/Login.vue';
export default{
  name: 'App',
  components:{Signup,Login},
  data(){
    return{
    }
  }
}
</script>
