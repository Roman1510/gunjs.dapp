import GUN from 'gun'
import 'gun/sea'
import 'gun/axe'
import { ref } from 'vue'

export const db = GUN({
  peers: ['http://localhost:3000/gun']
})

export const user = db.user().recall({ sessionStorage: true })
export const username = ref('')

user.get('alias').on((value) => (username.value = value))

db.on('auth', async () => {
  const alias = await user.get('alias')
  username.value = alias

  console.log(`signed in as ${alias}`)
})
