import Vue from 'vue'
import Vuex from 'vuex'
import cart from '../assets/cart.json'
import wishlist from '../assets/wishlist.json'
window.Vue = Vue

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    wishlistCount: Object.keys(wishlist).length,
    cartCount: Object.keys(cart).length,
    cartItems: cart,
    wishlistItems: wishlist
  },
  mutations: {
    addItemToCart (state, payload) {
      state.cartCount += 1   
      if (Object.keys(state.cartItems).length >= 20) {
        state.cartCount -= 1
        console.log('Слишком много товаров в корзине, удалите что-нибудь, а затем добавьте снова')
        return
      }
      console.log((['payload'] in state.cartItems))
      console.log('(payload in state.cartItems)')
      for (let i = 1; i < 30; i++) {
        if (!(i in state.cartItems)) {
          state.cartItems[i] = payload.payload
          return
        }
      }
    },
    addItemToWishList (state, payload) {
      state.wishlistCount += 1
      if (Object.keys(state.wishlistItems).length >= 40) {
        state.wishlistCount -= 1
        console.log('Слишком много товаров в списке желаемого, удалите что-нибудь, а затем попытайтесь добавить снова')
        return
      }
      for (let i = 1; i < 50; i++) {
        if (!(i in state.wishlistItems)) {
          state.wishlistItems[i] = payload.payload
          return
        }
      }
    },
    removeFromCart (state, payload, id) {
      Vue.delete(state.cartItems, payload.id)
      state.count -= payload.price
      state.cartCount -= 1
    },
    removeFromWishlist (state, payload, id) {
      Vue.delete(state.wishlistItems, payload.id)
      state.wishlistCount -= 1
    }
  }
})

export default store
