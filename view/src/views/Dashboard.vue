<template>
  <div v-if="loggedIn">
    <h1>Dashboard</h1>
    <form @submit.prevent="" method="post">
      <input type="text" v-model="data.name" /> 
      
    </form>
  </div>
</template>

<script>
import { getCookie } from '@/cookieUtils';
import router from '@/router';
export default {
  data() {
    return {
      user: getCookie('user'),
      data: {},
      loggedIn: false,
    }
  },
  methods: {
    async authenticate() {
      if ((this.user = getCookie('user')) !== null) {
        // console.log(this.user);
        this.loggedIn = true;
      } else {
        try {
          const response = await fetch('http://127.0.0.1:3111/api/user/authenticated', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            },
            credentials: 'include'
          });
          if (response.status == 200) {
            this.loggedIn = true;
            this.user = await response.json();
            this.createCookie();
            console.log('this ran', this.user);

          }
        }
        catch (error) {
          console.log(error);
        }
      }
    },
    async loadProfile() {
      // console.log(this.user);
      if ((this.user = getCookie('user')) !== null) {
        // this.user = getCookie('user')
        this.loggedIn = true;
        const profileLoader = await fetch(`http://127.0.0.1:3111/api/user/dashboard/${this.user}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include'
        });
        try {
          var data = await (profileLoader.json());
          this.data = data
          // console.log(data);
        } catch (error) {
          console.log(error);
        }
      } else {
        this.loggedIn = false;
        router.push('/login');
      }
    },
    createCookie() {
      document.cookie = `user=${this.user.id}`
    },
  },
   beforeMount() {
    // await this.authenticate();
     this.loadProfile();
  }
}
</script>

<style scoped></style>