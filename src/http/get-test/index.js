let data = require('@begin/data')

exports.handler = async function http(request) {
  let table = 'greetings'
  let key = 'Japanese'
  let greeting = `Kon'nichiwa`
  await data.set({ table, key, greeting })
  return {
    body: `Hello!`
  }
}