<template>

  <router-view/>
</template>

<script >
import 'bulma/css/bulma.css'

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
