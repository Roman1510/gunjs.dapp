<template>
  <div class="container">
    <form>
      <input
        type="text"
        placeholder="Type a message..."
        bind:value="{newMessage}"
        maxlength="100"
      />

      <button type="submit">Send</button>
    </form>
    <div class="scroll-button">
      <button on:click="{autoScroll}" class:red="{unreadMessages}">👇</button>
    </div>
  </div>
</template>
<script>
import { username } from '../util/User'
export default {
  name: 'Chat',
  components: {},
  setup() {
    console.log(username.value)
  }
}
</script>
<style></style>
