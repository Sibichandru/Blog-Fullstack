<template>
  <div>
    <section>
      <nav class="navbar" v-if="!loggedIn">
        <router-link to="/login">Login</router-link> |
        <router-link to="/signup">Signup</router-link>
      </nav>
      <nav class="navbar" v-else>
        <button v-on:click="logout">Logout</button>
      </nav>
    </section>

    <section v-if="loggedIn">

      <Post v-for="post in posts" :key="post.id" :image-url="post.imageUrl" />

      <footer class="footer">
        <div class="container">
          <form @submit.prevent='addPost' method="post">
            <input type="file" name="post" id="postBtn">
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
      user: "",
      loggedIn: false,
      posts: [
        //images will be BSON files
      ],
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
      console.log(data);
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
.navbar {
  display: flex;
  justify-content: right;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
}

.navbar a {
  text-decoration: none;
  color: #333;
}

.navbar button {
  text-decoration: none;
  background-color: blue;
}
</style>


