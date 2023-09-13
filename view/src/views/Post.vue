<template>
  <div class="image-post">
    <div class="image-container">
      <img :src="imageUrl" alt="Image" />
    </div>
    <div class="actions-container">
      <button @click="likePost">Like</button>
      <div class="likes">Likes: {{ likes }}</div>

      <!-- create a new comment component -->
      <!-- <div class="comments">
        <div v-for="comment in comments" :key="comment.id" class="comment">
          {{ comment.text }}
        </div>
        <input v-model="newComment" @keyup.enter="addComment" placeholder="Add a comment..." />
      </div> -->

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
      liked: false,
      // comments: [],
      // newComment: "",
    };
  },
  methods: {
    likePost() {
      if (this.liked) {
        this.likes--;
        this.liked = false;
      } else {
        this.likes++;
        this.liked = true;
      }
    },
    // addComment() {
    //   if (this.newComment.trim() !== "") {
    //     this.comments.push({ id: Date.now(), text: this.newComment });
    //     this.newComment = "";
    //   }
    // },
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






