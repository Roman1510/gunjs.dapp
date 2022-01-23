<template>
  <div class="container">
    <main on:scroll="{debouncedWatchScroll}">
      <ChatMessage />
    </main>

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
      <button on:click="{autoScroll}" class:red="{unreadMessages}"></button>
    </div>

    <main>
      <Login />
    </main>
  </div>
</template>
<script>
import ChatMessage from './ChatMessage.vue'
export default {
  name: 'Chat',
  components: {
    ChatMessage
  }
}
</script>
<style></style>
