<template>
	<div class="signup-form">
		<h2>Sign Up</h2>
		<form @submit.prevent="signup">
			<div class="form-group">
				<label for="username">Username:</label>
				<input type="text" id="username" v-model="username" required>
			</div>
			<div class="form-group">
				<label for="name">Name:</label>
				<input type="text" id="name" v-model="name" required>
			</div>
			<div class="form-group">
				<label for="email">Email:</label>
				<input type="email" id="email" v-model="email" required>
			</div>
			<div class="form-group">
				<label for="password">Password:</label>
				<input type="password" id="password" v-model="password" required>
			</div>
				<button type="submit">Sign Up</button>
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
			name: ''
		};
	},
	methods: {
		async signup() {
			try {
				const response = await fetch('http://127.0.0.1:3111/api/user/signup', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						username: this.username,
						email: this.email,
						password: this.password,
						name:this.name
					})
				});

				if (response.status == 200) {
					alert('Signup successful!');
					// this.$router.push('/login');
				} else {
					alert('Signup failed. Please try again.');
				}
			} catch (error) {
				console.error('Error signing up:', error);
				alert('An error occurred. Please try again.');
			}
		}
	}
};
</script>

<style scoped>
.signup-form {
	max-width: 300px;
	margin: 0 auto;
}

.form-group {
	margin-bottom: 10px;
}

label {
	display: block;
}

input {
	width: 100%;
	padding: 5px;
}

button {
	padding: 5px 10px;
	background-color: #007bff;
	color: white;
	border: none;
	cursor: pointer;
}</style>
