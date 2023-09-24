<template>
		<h2 class="title head has-text-centered">Login</h2>
		<div class="container is-flex is-justify-content-center">
		<form @submit.prevent="login">
			<div class="field">
				<label class="label " for="username">Username:</label>
				<input type="text" class="input is-primary" id="username" v-model="username" required>
			</div>
			<div class="field" >
				<label class="label" for="password">Password:</label>
				<input type="password" class="input is-primary" id="password" v-model="password" required>
			</div>
			<button type="submit" class="button btn is-primary">Login</button>
		</form>
	</div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async login() {
      try {
        const response = await fetch(
          'http://127.0.0.1:3111/api/user/login',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: this.username,
              password: this.password,
            }),
            credentials: 'include',
          },
        );
        if (response.ok) {
          return await this.$router.push('/');
        }
        throw new Error('invalid credentials');
      } catch (error) {
        return error;
      }
    },
  },
};
</script>

<style scoped>
.head{
	margin-top: 5%;
}
.btn{
	margin-top: 2%;
}
</style>
