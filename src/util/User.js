import GUN from 'gun'
import 'gun/sea'
import 'gun/axe'
import { ref } from 'vue'

// Database
export const db = GUN()

// Gun User
export const user = db.user().recall({ sessionStorage: true })

// Current User's username
export const username = ref('')

user.get('alias').on((v) => username.value.set(v))

db.on('auth', async (event) => {
  const alias = await user.get('alias') // username string
  username.value.set(alias)

  console.log(`signed in as ${alias} and this is the event ${event}`)
})
