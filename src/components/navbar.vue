<template>
  <div id="navbar">
    <header class="flex">
      <div class="main flex row-nowrap align-center">
        <router-link to="/"><span class="navbar-main-blocks">Главная</span></router-link>
      </div>
      <div class="control flex row-nowrap ">
        <router-link to="/cart"><span class="navbar-main-blocks"> Корзина </span></router-link>
        <router-link to="/wishlist">
          <div class="wishlist-wrapper flex row-nowrap align-center">
            <img src="../../src/assets/wish.png" height="32px" alt="">
            <span class="navbar-main-blocks"> {{ wishListGoodsCount }} товар{{wishEnding }}  </span>
          </div>
        </router-link>
        <div class="shop-info flex row-nowrap align-center">
          <img src="../../src/assets/cart.png" height="32px"  alt="">
          <div class="shop-summary flex">
            <span>
              В корзине {{goodsTotalCount }} товар{{cartEnding }}
            </span>
            <span>
              На сумму {{moneyTotalCount }} руб.
            </span>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>

  export default {
    name: 'navbar',
    data () {
      return {
      }
    },
    computed:{
      moneyTotalCount(){
        let total = 0;
        let cart = this.$store.state.cartItems
        for(var key in cart){
          total+= cart[key].price
        }
        return total;
      },
      wishListGoodsCount(){
        return this.$store.state.wishlistCount;
      },
      goodsTotalCount(){
        return this.$store.state.cartCount;
      },
      wishEnding(){
         return this.endFind(this.wishListGoodsCount)
      },
      cartEnding(){
         return this.endFind(this.goodsTotalCount)
      }
    },
    methods:{

      endFind(number){
        let end = number % 10;
        if ('1'.indexOf(end) != -1) {
          return ''
        } else if('234'.indexOf(end) != -1){
          return 'а'
        } else if('567890'.indexOf(end) != -1){
          return 'ов'
        }
      }
    }
  }
</script>

<style scoped>

#navbar{
  height: 60px;
  margin: 0 0 40px 0;
  background-color: #00BF0E;
}
header{
  height: 100%;
}
p{
  align-self: flex-start;
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
  margin-right: 10px;
  margin-left: 5px;
}
.shop-summary span{
  color: white;
  font: 16px Verdana;
}
.flex{
  display: flex;
}
.row-nowrap{
  flex-flow: row nowrap;
}
.main{
 flex: 1 1 100px; 
 padding-left: 10px;
}
.control{
  flex: 8 1 100px;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 20px;

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
.navbar-main-blocks{
  color: white;
  font: 20px Verdana;
}
.main:hover,
.control:hover{
  background-color: #007F09;

}
.main, .control{
  transition: 1s;
}
a{
  text-decoration: none !important;
  align-self: center;

}
</style>
