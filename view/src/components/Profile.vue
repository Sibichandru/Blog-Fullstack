<template>
  <div>
  <p>{{ this.profileName }}</p>
  <button onclick="changePassword">change password</button>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
  },
  data() {
    return {
      url: 'http://localhost:3111/api/user',
      profileName: this.name,
    };
  },
  methods: {
    changePassword() {
      this.$router.push('/password');
    },
  },
};
</script>

<style scoped>

</style>
