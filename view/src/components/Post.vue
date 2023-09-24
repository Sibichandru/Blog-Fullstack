<template>
  <div class="image-post">
    <div class="image-container">
      <img :src='this.url + imageUrl' alt="Image" />
    </div>
    <div class="actions-container">
      <button :id="postid" @click="likePost">Like</button>
      <div class="likes">Likes: {{ totalLikes }}</div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    imageUrl: String,
    likes: Number,
    postid: String,
  },
  data() {
    return {
      url: 'http://localhost:3111/',
      liked: false,
      totalLikes: this.likes,
    };
  },
  // WHEN START LOADING CHECK IF THE USER HAS LIKED THE POST ALREADY
  // BY USING THE COOKIE IN USER DETAIL
  // THEN TO RENDER THAT ADD PROP TO THE POST
  methods: {
    async likePost(event) {
      // eslint-disable-next-line no-underscore-dangle
      const _id = event.target.id;
      const likes = this.totalLikes;
      if (this.liked) {
        const like = await fetch('http://127.0.0.1:3111/api/post/unlike', {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: _id,
            likes,
          }),
          credentials: 'include',
        });
        if (like.status === 200) {
          this.totalLikes -= 1;
          this.liked = false;
        }
      } else {
        const like = await fetch('http://127.0.0.1:3111/api/post/like', {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: _id,
            likes,
          }),
          credentials: 'include',
        });
        if (like.status === 200) {
          this.totalLikes += 1;
          this.liked = true;
        }
      }
    },
  },
};
</script>

<style scoped>
.image-post {
  text-align: center;
  margin: 20px;
}

.image-container {
  width: 200px;
  height: 200px;
  overflow: hidden;
  margin: 0 auto;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.actions-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
}

.likes,
.comments {
  margin: 5px 0;
}

.comment {
  margin-bottom: 5px;
}
</style>
