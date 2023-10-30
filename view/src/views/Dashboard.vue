<template>
  <div v-if="loggedIn">
    <h1>Dashboard</h1>
    <Profile :name="this.username"></Profile>
    <div>
          <Post
            v-for="post in posts"
            :postid="post._id"
            :likes="post.likes"
            :key="post.id"
            :image-url="post.image"
           />
        </div>
  </div>
</template>

<script>
import getCookie from '../cookieUtils';
import Profile from '../components/Profile.vue';
import Post from '../components/Post.vue';

export default {
  data() {
    return {
      username: getCookie('username'),
      data: {},
      loggedIn: false,
      posts: [],
    };
  },
  components: {
    Profile, Post,
  },
  methods: {
    async authenticate() {
      if ((this.user = getCookie('username')) !== null) {
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
    async loadPost() {
      const response = await fetch('http://127.0.0.1:3111/api/post/posts', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });
      const data = await response.json();
      this.posts = data.map((post) => {
        if (post.author.username === this.username) {
          return post;
        }
        console.log(this.posts);
      });
      console.log(this.posts);
    },
    createCookie() {
      document.cookie = `username=${this.user.username}`;
      document.cookie = `user=${this.user.id}`;
    },
  },
  created() {
    this.authenticate();
  },
  mounted() {
    this.loadPost();
  },
};
</script>

<style scoped></style>
