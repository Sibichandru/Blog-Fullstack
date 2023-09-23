<template>
  <div>
    <section class="nav">
      <nav class="nav" v-if="!loggedIn">
        <router-link to="/login">Login</router-link> |
        <router-link to="/signup">Signup</router-link>
      </nav>
      <nav class="nav" v-else>
        <button class="button" tooltip="Add Post" @click="redirect">
          <router-link to="/AddPost" >
          <font-awesome-icon icon="fa-solid fa-plus" />
          </router-link>
        </button>
        <button class="button is-primary" v-on:click="logout">
          <font-awesome-icon icon="fa-solid fa-right-from-bracket" />
        </button>
      </nav>
    </section>
    <section v-if="loggedIn">
      <Post v-for="post in posts" :key="post.id" :image-url="post.imageUrl" />
    </section>
  </div>
</template>


<script>
import Post from '../components/Post.vue'
export default {
  data() {
    return {
      user: {},
      loggedIn: false,
      posts: [],
    };
  },
  methods: {
    async authenticate() {
      try {
        const response = await fetch("http://127.0.0.1:3111/api/user/authenticated", {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          },
          credentials: "include"
        });
        if (response.status == 200) {
          this.loggedIn = true;
          this.user = await response.json();
          // console.log(this.user);
          this.createCookie();
        }
        else {
          this.loggedIn = false;
        }
      }
      catch (error) {
        console.log(error);
      }
    },
    redirect(){
      this.$router.push('/AddPost')
    },
    async loadPost() {
      const response = await fetch(`http://127.0.0.1:3111/api/post/posts`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
      });
      const data = await response.json();
      // console.log(data);
    },
    createCookie() {
      document.cookie = `user=${this.user.id}`;
    },
    async logout() {
      const response = await fetch("http://127.0.0.1:3111/api/user/logout", {
        method: "POST",
        credentials: "include"
      });
      if (response.ok) {
        document.cookie = `user=`;
        this.loggedIn = false;
      }
      location.reload();
    },
  },
  created() {
    this.authenticate();
  },
  mounted() {
    this.loadPost();
  },
  watch: {
    loggedIn() {
      location.reload;
    }
  },
  components: { Post }
};
</script>

<style scoped>
.btn {
  margin: 10px;
  width: 100%
}

.nav {
  float: right
}
</style>


