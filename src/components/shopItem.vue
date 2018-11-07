<template id="shopItem">
  <div class="shop-item" v-if="returnedItem" >
    <img :src="returnedItem.img" alt="Iphone" class="main-image">
    <p class="name"> {{ returnedItem.name }} </p>
    <span class="price"> {{ returnedItem.price }}₽
      <input v-if="this.$route.path === '/cart'" min="1" class="count" size="20"
      type="number" v-model="returnedItem.count" name=""> </span>

      <div class="buyings" v-if="this.$route.path === '/store'">
        <a href="#openModal" >
          <button  id="show-modal" @click="showModal = true" class="cart">
            <img src="../assets/cart-light.png" alt="">
            <span>В корзину</span>
          </button>
        </a>
        <button class="wish" @click="moveToWishList(item)">
          <img src="../assets/wish-light.png" alt="">
        </button>
      </div>

      <div v-else-if="this.$route.path === '/cart'">
        <div class="buyings">
          <button class="wish" @click="moveToWishList(item)">
            <img src="../assets/wish-light.png" alt="">
          </button>
          <button class="trashcan" @click="deleteCartItem(item)">
            <img src="../assets/trashcan.png" alt="">
          </button>
        </div>
      </div>

      <div class="buyings" v-if="this.$route.path === '/wishlist'">
        <a href="#openModal">
          <button  id="show-modal" @click="showModal = true"
          class="cart">
          <img src="../assets/cart-light.png" alt="">
        </button>
      </a>
      <button class="trashcan" @click="deleteWishlistItem(item)">
        <img src="../assets/trashcan.png" alt="">
      </button>
    </div>
    <modal v-if="showModal" @close="showModal = false" @succeed="moveToCart(item)" :current="returnedItem">
    </modal>
  </div>
</template>

<script>
import modal from '../components/modal/modal.vue'
import moment from 'moment'

export default {
  name: 'shopItem',
  components: {
    modal
  },
  data () {
    return {
      showModal: false
    }
  },
  props: ['item', 'place'],
  methods: {
    deleteCartItem (item) {
      let search = item.key
      for (var key in this.$store.state.cartItems) {
        if (search === this.$store.state.cartItems[key].key) {
          this.$store.commit('removeFromCart', { payload: item, id: key })
        }
      }
    },
    deleteWishlistItem (item) {
      for (var key in this.$store.state.wishlistItems) {
        if (item.key === this.$store.state.wishlistItems[key].key) {
          this.$store.commit('removeFromWishlist', { payload: item, id: key })
        }
      }
    },
    addToCart (item) {
      item.date = moment().format('h:mm:ss DD-MM-YYYY')
      this.$store.commit('addItemToCart', { payload: item })
    },
    addToWishlist (item) {
      item.date = moment().format('h:mm:ss DD-MM-YYYY')
      this.$store.commit('addItemToWishList', { payload: item })
    },
    moveToCart (shopItem) {
      this.addToCart(shopItem)
      this.deleteWishlistItem(shopItem)
    },
    moveToWishList (shopItem) {
      this.addToWishlist(shopItem)
      this.$router.push('wishlist')
      this.deleteCartItem(shopItem)
    }
  },
  computed: {
    someProp () {
      return this.wishlist
    },
    returnedItem () {
      return this.item
    }
  }
}
</script>
<style scoped>
.price{
  margin-bottom: 5px;
}
.shop-item{
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-content: center;
  flex: 1 1 25%;
  max-width: 15%;
  min-width: 100px;
  min-height: 25vh;
  margin: 15px 0 15px 0;
}
.count{
  width: 30px;
}
.buyings{
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}
.cart, .wish, .trashcan{
  height: 40px;
  min-width: 40px;
}
.cart{
  display: flex;

}
.cart span{
  margin: auto;

}
.cart img, .wish img, .trashcan img{
  height: 90%;
}
.main-image{
  max-height:200px;
  max-width: 100%;
}
.modalDialog {
  position: fixed;
  font-family: Arial, Helvetica, sans-serif;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0,0,0,0.8);
  z-index: 99999;
  -webkit-transition: opacity 400ms ease-in;
  -moz-transition: opacity 400ms ease-in;
  transition: opacity 400ms ease-in;
  display: none;
  pointer-events: none;
}
a{
  text-decoration: none;
  color: black;
}
</style>

