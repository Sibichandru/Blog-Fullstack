<template>
	<div class="container">
		<form @submit.prevent='addPost' method="post" enctype="multipart/form-data">
			<div class="field">
				<label class="label" for="caption">Caption:</label>
				<input v-model="caption" class="input is-primary" type="text" />

			</div>
			<div class="field">
				<label class="file-label" for="caption">
					<input type="file" name="post" class="input is-primary" @change='(event) => {
						this.post = event.target.files[0];
					}'>
				</label>
			</div>
			<div>
				<button type="submit" class="button btn is-primary">
					<font-awesome-icon :icon="['fas', 'check']" />
				</button>
			</div>
		</form>
	</div>
</template>

<script>
export default {
  data() {
    return {
      caption: '',
      post: '',
    };
  },
  methods: {
    async addPost() {
      const data = new FormData();
      data.set('caption', this.caption);
      data.set('post', this.post);
      const response = await fetch('http://127.0.0.1:3111/api/post/addPost', {
        method: 'POST',
        body: data,
        credentials: 'include',
      });
    },
  },
};
</script>
