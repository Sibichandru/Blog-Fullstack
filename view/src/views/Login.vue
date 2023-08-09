<template>
	<div class="login-form">
		<form @submit.prevent="login">
			<div class="form-group">
				<label for="username">Username:</label>
				<input type="text" id="username" v-model="username" required>
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

</script>

<style scoped>
.login-form {
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
