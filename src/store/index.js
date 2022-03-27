import { createStore } from 'vuex'
import axios from "axios"

export default createStore({
  state: {
    primary_category_list:[],
    slider:[],
    right_three_product:[],
    just_for_you:[],
  },
  mutations: {
    SET_PRIMARY_CATEGORY_LIST(state, primary_category_list) {
      state.primary_category_list = primary_category_list
  },
    SET_SLIDER(state,slider){
      state.slider=slider
    },
    SET_THREE_PRODUCT(state,right_three_product){
      state.right_three_product=right_three_product
    },
    JUST_FOR_YOU(state,just_for_you){
      state.just_for_you=just_for_you
    }

},
  getters:{},
  actions: {
    async fetchProductList({ commit }) {
      try {
        const data = await axios.get('https://availtrade.com/api/primarycategorylist')
          commit('SET_PRIMARY_CATEGORY_LIST', data.data)
        }
        catch (error) {
            alert(error)
            console.log(error)
        }
    },
    async fetchSlider({ commit }) {
      try {
        const data = await axios.get('https://availtrade.com/api/homesliderlist')
          commit('SET_SLIDER', data.data)
        }
        catch (error) {
            alert(error)
            console.log(error)
        }
    },
  async fetchRightThreeProduct({ commit }) {
    try {
      const data = await axios.get('https://availtrade.com/api/homeleftthreeproduct')
        commit('SET_THREE_PRODUCT', data.data)
      }
      catch (error) {
          alert(error)
          console.log(error)
      }
  },
  async fetchJustForYou({ commit }) {
    try {
      const data = await axios.get('https://availtrade.com/api/homejustforproduct')
        commit('JUST_FOR_YOU', data.data)
      }
      catch (error) {
          alert(error)
          console.log(error)
      }
  },
},

  modules: {
  }
})
