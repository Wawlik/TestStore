<template>
  <div id="offers">
    <div v-if="this.$route.path =='/cart'" class="cart-order-section">
        <span>Привет, John Doe!</span>
        <a href="#openCartOrder" >        
          <button class="order-button" id="cart-order" @click="showModal = true">
            <span>Оформить заказ</span>
          </button>
        </a>
    </div>
    <div class="shop-items-section">
      <shop-item v-for="item in items" :item="item"></shop-item>
    </div>
    <cart-order  v-if="showModal" @close="showModal = false" :items="cartItems"></cart-order>
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
        wishlistItems : this.$store.state.wishlistItems,
        cartItems : this.$store.state.cartItems,
        globeItems: globe,
        showModal: false,
        maskedField: ''

      }
    },
    computed:{
      items(){
        return this.$route.path == '/cart' ? this.cartItems : this.$route.path == '/' ? this.globeItems :
        this.$route.path == '/wishlist' ? this.wishlistItems : null;
      }
    }
  }
</script>

<style scoped>
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
