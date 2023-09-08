<template>
	<div>
		<h1>Dashboard</h1>
	</div>
</template>

<script>
export default {
	data() {
		return {
			loggedIn: false,
			user: {
				username: '',
				_id: '',
			}
		}
	},
	methods: {
    async authenticate() {
      try {
        const response = await fetch('http://127.0.0.1:3111/api/user/authenticated', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include'
        });
        if (response.status == 200) {
          this.loggedIn = true;
          let user = await response.json();
          this.user._id = user._id;
          console.log(this.user._id);
        }
      }
      catch (error) {
        console.log(error);
      }
    }
  },
  created() {
    this.authenticate();
  }
}
</script>

<style scoped>
</style>