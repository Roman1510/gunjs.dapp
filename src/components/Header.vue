<template>
  <header>
    <h1></h1>
    <div v-if="username" class="user-bio">
      <span
        >Hello <strong>{{ username }}</strong></span
      >
      <img :src="getAvatarURL" alt="avatar" />
      <button @click.prevent="signout" class="signout-button">Sign Out</button>
    </div>
    <h3>GUN-DAPP</h3>
  </header>
</template>
<script>
import { user, username } from '../util/User'
import { useRouter } from 'vue-router'
import { computed } from 'vue'
export default {
  name: 'Header',
  setup() {
    const getAvatarURL = computed(() => {
      return `https://avatars.dicebear.com/api/identicon/${username.value}.svg`
    })
    const router = useRouter()
    const signout = () => {
      user.leave()
      username.value = ''
      router.push({ name: 'login' })
    }
    return {
      signout,
      username,
      getAvatarURL
    }
  }
}
</script>
<style></style>
