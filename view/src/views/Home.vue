<template>
  <div>
    <section class="nav">
      <div>
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
      </div>
      </section>
      <section v-if="loggedIn">
        <div>
          <Post
            v-for="post in posts"
            :postid="post._id"
            :likes="post.likes"
            :key="post.id"
            :image-url="post.image"
           />
        </div>
    </section>
  </div>
</template>

<script>
import Post from '../components/Post.vue';

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
        } else {
          this.loggedIn = false;
        }
      } catch (error) {
        throw new Error(error);
      }
    },
    redirect() {
      this.$router.push('/AddPost');
    },
    async loadPost() {
      const response = await fetch('http://127.0.0.1:3111/api/post/posts', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });
      this.posts = await response.json();
    },
    createCookie() {
      document.cookie = `user=${this.user.id}`;
    },
    async logout() {
      const response = await fetch('http://127.0.0.1:3111/api/user/logout', {
        method: 'POST',
        credentials: 'include',
      });
      if (response.ok) {
        document.cookie = 'user=';
        this.loggedIn = false;
      }
      // eslint-disable-next-line no-restricted-globals
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
      // eslint-disable-next-line no-restricted-globals, no-unused-expressions
      location.reload;
    },
  },
  components: { Post },
};
</script>

<style scoped>
.btn {
  margin: 10px;
  width: 100%
}
</style>
