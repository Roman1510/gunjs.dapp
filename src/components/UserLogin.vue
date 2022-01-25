<script>
import { user } from '../util/User'
import { ref } from 'vue'
export default {
  name: 'UserLogin',
  setup() {
    const username = ref('')
    const password = ref('')
    const login = () => {
      user.auth(username.value, password.value)
    }
    return {
      username,
      password,
      login
    }
  }
}
</script>
<template>
  <div class="container">
    <label for="username">Username</label>
    <input
      v-model="username"
      autocomplete="off"
      name="username"
      minlength="3"
      maxlength="16"
    />
    <label for="password">Password</label>
    <input
      v-model="password"
      autocomplete="off"
      name="password"
      type="password"
    />
    <button @click.prevent="login" class="login">Login</button>
    <button @click.prevent="" class="login">Sign Up</button>
  </div>
</template>
<style></style>
