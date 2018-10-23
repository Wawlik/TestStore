<template>
  <div id="offers">
    <div class="shop-items-section">
      <shop-item v-for="item in items" :item="item"></shop-item>
    </div>
  </div>
</template>

<script>
import globe from '../assets/goods.json'
import shopItem from '../components/shopItem.vue'

  export default {
    name: 'offers',
    components: {
      shopItem,
    },
    data () {
      return {
        wishlistItems : this.$store.state.wishlistItems,
        cartItems : this.$store.state.cartItems,
        globeItems: globe
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
.align-center{
  align-items: center;
}
.shop-summary{
  flex-flow: column nowrap;
  align-items: flex-start; 
}
.flex{
  display: flex;
}
.row-nowrap{
  flex-flow: row nowrap;
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
