<template>
  <div v-if="loggedIn">
    <h1>Dashboard</h1>
    <form @submit.prevent="" method="post">
      <input type="text" v-model="data.name" />

    </form>
  </div>
</template>

<script>
import getCookie from '../cookieUtils';
import router from '../router/index';

export default {
  data() {
    return {
      user: getCookie('user'),
      data: {},
      loggedIn: false,
    };
  },
  methods: {
    async authenticate() {
      if ((this.user = getCookie('user')) !== null) {
        this.loggedIn = true;
      } else {
        try {
          const response = await fetch('http://127.0.0.1:3111/api/user/authenticated', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
            credentials: 'include',
          });
          if (response.status === 200) {
            this.loggedIn = true;
            this.user = await response.json();
            this.createCookie();
          }
        } catch (error) {
          throw new Error(error);
        }
      }
    },
    async loadProfile() {
      // eslint-disable-next-line no-cond-assign
      if ((this.user = getCookie('user')) !== null) {
        this.loggedIn = true;
        const profileLoader = await fetch(`http://127.0.0.1:3111/api/user/dashboard/${this.user}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });
        try {
          const data = await (profileLoader.json());
          this.data = data;
        } catch (error) {
          throw new Error(error);
        }
      } else {
        this.loggedIn = false;
        router.push('/login');
      }
    },
    createCookie() {
      document.cookie = `user=${this.user.id}`;
    },
  },
  beforeMount() {
    // await this.authenticate();
    this.loadProfile();
  },
};
</script>

<style scoped></style>
