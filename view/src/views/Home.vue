<template>
  <div>
    <section>
      <nav class="navbar" v-if="!loggedIn">
        <router-link to="/login">Login</router-link> |
        <router-link to="/signup">Signup</router-link>
      </nav>
      <nav class="navbar" v-else>
        <button class="button">
          <font-awesome-icon :icon="['fas', 'circle-xmark']" />
        </button>
        <button class="button is-primary" v-on:click="logout">Logout</button>
      </nav>
    </section>
    <section v-if="loggedIn">
      <!-- <Post v-for="post in posts" :key="post.id" :image-url="post.imageUrl" /> -->
      <footer class="footer">
        <div class="container">
          <form @submit.prevent='addPost' method="post" enctype="multipart/form-data">
            <input v-model="caption" type="text" />
            <input type="file" name="post" @change='(event) => {
              this.post = event.target.files[0];
            }'>
            <input type="submit" value="post">
          </form>
        </div>
      </footer>
    </section>
  </div>
</template>


<script>
import Post from './Post.vue'
export default {
  data() {
    return {
      user: {},
      loggedIn: false,
      caption: '',
      post: ''
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
    async addPost() {
      const data = new FormData();
      data.set('caption', this.caption);
      data.set('post', this.post);
      data.set('author', this.user.id);
      const response = await fetch(`http://127.0.0.1:3111/api/post/addPost`, {
        method: 'POST',
        body: data
      });
      // console.log(await response.json());
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
  // mounted() {
  //   this.loadPost();
  // },
  watch: {
    loggedIn() {
      location.reload;
    }
  },
  components: { Post }
};
</script>

<style scoped></style>


