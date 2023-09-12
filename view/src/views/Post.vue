<template>
  <div class="image-post">
    <div class="image-container">
      <img :src="imageUrl" alt="Image" />
    </div>
    <div class="actions-container">
      <div class="likes">Likes: {{ likes }}</div>
      <div class="comments">
        <div v-for="comment in comments" :key="comment.id" class="comment">
          {{ comment.text }}
        </div>
        <input v-model="newComment" @keyup.enter="addComment" placeholder="Add a comment..." />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: String,
  },
  data() {
    return {
      likes: 0,
      comments: [],
      newComment: "",
    };
  },
  methods: {
    likePost() {
      this.likes++;
    },
    addComment() {
      if (this.newComment.trim() !== "") {
        this.comments.push({ id: Date.now(), text: this.newComment });
        this.newComment = "";
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






<!-- async loadPost() {
  const response = await fetch(`http://127.0.0.1:3111/api/post/posts`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
  });
  const data = await response.json();
  console.log(data);
}, -->