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

    <main>
      <Login />
    </main>
  </div>
</template>
<script>
export default {
  name: 'Chat',
  components: {}
}
</script>
<style></style>
