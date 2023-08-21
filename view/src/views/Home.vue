<template>
  <div>
    <nav>
      <router-link to="/login">Login</router-link> |
      <router-link to="/signup">Signup</router-link>
    </nav>
    <!-- <div class="navbar">
      <div class="logo">Blog Website</div>
      <div class="login">
        <a href="signin.html">Sign In</a> / <a href="login.html">Login</a>
      </div> -->
    <!-- </div> -->

    <!-- Blog List
    <ul class="blog-list">
      <li v-for="blog in blogs" :key="blog.id">
        <img :src="blog.image" :alt="blog.title">
        <div>
          <div class="title">{{ blog.title }}</div>
          <div class="summary">{{ blog.summary }}</div>
        </div>
      </li>
    </ul> -->
  </div>
</template>


<script>
import { onBeforeMount, onMounted } from 'vue';

export default {
  data() {
    return {
      blogs: [
        {
          id: 1,
          title: 'Blog 1 Title',
          summary: 'Summary of Blog 1 content...',
          image: 'blog1.jpg'
        },
        {
          id: 2,
          title: 'Blog 2 Title',
          summary: 'Summary of Blog 2 content...',
          image: 'blog2.jpg'
        }
        // Add more blog items as needed
      ]
    };
  },
  beforeMount() {
    onBeforeMount(async () => {
      try {
        await fetch('http://127.0.0.1:3111/api/user/authenticated', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include'
        }) ;
      }
      catch (error) {
        console.log(error);
      }
    })
  }
};
</script>

<style>
/* CSS styles for the navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
}

.navbar .logo {
  font-size: 24px;
  font-weight: bold;
}

.navbar .login {
  font-size: 18px;
}

/* CSS styles for the blog list */
.blog-list {
  list-style-type: none;
  padding: 0;
  margin: 20px;
}

.blog-list li {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.blog-list li img {
  width: 150px;
  height: 150px;
  margin-right: 20px;
}

.blog-list li .title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.blog-list li .summary {
  font-size: 16px;
}
</style>


<!-- mounted() {
	onMounted(async () => {
		try {
			const response = await fetch('http://example.com/api/blogs');
			if (response.ok) {
				this.blogs = await response.json();
			} else {
				console.error('Failed to fetch blogs:', response.status);
			}
		} catch (error) {
			console.error('An error occurred while fetching blogs:', error);
		}
	});
} -->