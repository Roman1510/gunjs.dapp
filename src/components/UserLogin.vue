<template>
  <div class="container">this is login</div>
</template>
<script>
import { user } from '../util/User'
export default {
  name: 'UserLogin',
  setup() {
    let username
    let password
    const login = () => {
      user.auth(username, password, ({ err }) => err && alert(err))
    }
    const signup = () => {
      user.create(username, password, ({ err }) => {
        if (err) {
          alert(err)
        } else {
          login()
        }
      })
    }
    return {
      login,
      signup
    }
  }
}
</script>
<style></style>
