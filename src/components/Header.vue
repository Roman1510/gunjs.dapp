<template>
  <header>
    <h1></h1>
    <div v-if="username" class="user-bio">
      <span>Hello <strong>Username</strong></span>
      <img src="" alt="avatar" />
      <button @click.prevent="signout" class="signout-button">Sign Out</button>
    </div>
    <h3>GUN-DAPP</h3>
  </header>
</template>
<script>
import { user, username } from '../util/User'
import { useRouter } from 'vue-router'
export default {
  name: 'Header',
  setup() {
    const router = useRouter()
    const signout = () => {
      user.leave()
      username.value = ''
      router.push({ name: 'login' })
    }
    return {
      signout,
      username
    }
  }
}
</script>
<style></style>
