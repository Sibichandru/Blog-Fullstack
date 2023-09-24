<template>
	<h2 class="title head has-text-centered">Sign Up</h2>
	<div class="container is-flex is-justify-content-center">
		<form @submit.prevent="signup">
			<div class="field">
				<label class="label " for="username">Username:</label>
				<input class="input is-primary" type="text" id="username" v-model="username" required>
			</div>
			<div class="field">
				<label class="label" for="name">Name:</label>
				<input class="input is-primary" type="text" id="name" v-model="name" required>
			</div>
			<div class="field">
				<label class="label" for="email">Email:</label>
				<input class="input is-primary" type="email" id="email" v-model="email" required>
			</div>
			<div class="field">
				<label class="label" for="password">Password:</label>
				<input class="input is-primary" type="password" id="password" v-model="password" required>
			</div>
			<button type="submit" class="button btn is-primary">Sign Up</button>
		</form>
	</div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      name: '',
    };
  },
  methods: {
    async signup() {
      try {
        const response = await fetch('http://127.0.0.1:3111/api/user/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: this.username,
            email: this.email,
            password: this.password,
            name: this.name,
          }),
        });

        if (response.status === 200) {
          this.$router.push('/login');
        } else {
          throw new Error('Signup failed. Please try again.');
        }
      } catch (error) {
        throw new Error(error);
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
