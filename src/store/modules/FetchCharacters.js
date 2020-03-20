const characters = {
  state: {
    data: ''
  },
  mutations: {
    sendData(state, data) {
      state.data = data
    }
  },
  actions: {
    async getCharByHouse(ctx, house) {
      let key = '$2a$10$3MrZobg/Odnt9RHkkFFBleAqkaDziFiQLAkPCHNsEavJZGi6HmFxO'
      let baseUrl = `https://www.potterapi.com/v1/characters?key=${key}&house=${house}`

      let response = await fetch(baseUrl, { method: 'GET' })
      let data = await response.json()
      ctx.commit('sendData', data)
    }
  }
}

export default characters
