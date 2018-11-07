<template>
  <div id="offers">
    <div v-if="place ==='cart' && Object.values(items).length !== 0" class="cart-order-section">
        <span>Привет, John Doe!</span>
        <a href="#openCartOrder">
          <button v-if="place ==='cart'" class="order-button" id="cart-order" @click="showModal = true">
            <span>Оформить заказ</span>
          </button>
        </a>
    </div>
    <div class="cart-empty" v-else-if="place ==='cart' && Object.values(items).length === 0">
      <h1> Нет товаров</h1>
    </div>
    <div class="shop-items-section">
      <shop-item v-for="(item, index) in items" :key="index" :item="item"></shop-item>
    </div>
    <cart-order v-if="showModal" @close="showModal = false"
    @success="showData" :items="cartItems"></cart-order>
    <div class="data-section" v-if="jsonData">
        <p> {{ jsonData }}</p>
    </div>
  </div>
</template>

<script>
import globe from '../assets/goods.json'
import shopItem from '../components/shopItem.vue'
import cartOrder from '../components/modal/cartOrder.vue'

export default {
  name: 'offers',
  components: {
    shopItem,
    cartOrder
  },
  data () {
    return {
      wishlistItems: this.$store.state.wishlistItems,
      cartItems: this.$store.state.cartItems,
      globeItems: globe,
      showModal: false,
      maskedField: '',
      jsonData: ''
    }
  },
  props: ['place'],
  methods: {
    showData (data) {
      this.jsonData = data
      setTimeout(this.clearJsonData, 10000)
    },
    clearJsonData () {
      this.jsonData = ''
    }
  },
  computed: {
    items () {
      return this.$route.path === '/cart' ? this.cartItems
        : this.$route.path === '/store' ? this.globeItems
          : this.$route.path === '/wishlist' ? this.wishlistItems
            : null
    }
  }
}
</script>

<style scoped>


#offers{
  width: 100%;
  overflow-x: hidden;
}

.cart-order-section{
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-end;
  justify-content: space-between;
  height: 80px;
  padding: 0 10px 25px 0;
}
.order-button{
  cursor: pointer;
  text-decoration: none;
  padding: 10px 20px;
  color: #ffffff;
  background-color: #00BF0E;
  border-radius: 5px;
  border: none;
  font: 20px Verdana;
  outline: none;
}

p{
  align-self: flex-start;
}
.shop-items-section{
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  padding: 0 20px 0 20px;
}
.margin-auto{
  margin: auto;
}
.shop-summary{
  flex-flow: column nowrap;
  align-items: flex-start;
}
.flex{
  display: flex;
}
.main{
 flex: 1 1 100px;
}
.control{
  flex: 8 1 100px;
  justify-content: space-between;

}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
