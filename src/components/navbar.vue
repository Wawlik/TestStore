<template>
  <div id="navbar">
    <header class="flex">
      <div class="main flex row-nowrap align-center">
        <router-link to="/"><span class="navbar-main-blocks">Главная</span></router-link>
      </div>
      <div class="control flex row-nowrap ">
        <router-link to="/cart"><span class="navbar-main-blocks"> Корзина </span></router-link>
        <div class="wishlist-wrapper flex row-nowrap align-center dropdown">
          <img src="../../src/assets/wish.png" height="32px" alt="">
          <span class="navbar-main-blocks cursor-default"> {{ wishListGoodsCount}} товар{{wishEnding }}  </span>
          <div class="dropdown-content">
           <a href="" class="wish-item"
           v-for="(item,index) in wishlistItemsSortedByDate.slice(0,5)" >
           <img :src="item.img" alt="">
           <span class="align-self-start">{{item.name}}</span>
           <span class="align-self-end">{{item.date}}</span>
         </a>
         <router-link class="switch-to-wishlist" to="/wishlist">
          <img src="../../src/assets/heart.png" alt="">
          <span> Мои желания</span>
        </router-link>

      </div>
    </div>
    <div class="shop-info flex row-nowrap align-center">
      <img src="../../src/assets/cart.png" height="32px"  alt="">
      <div class="shop-summary flex">
        <span class="cursor-default">
          В корзине {{goodsTotalCount }} товар{{cartEnding }}
        </span>
        <span class="cursor-default">
          На сумму {{moneyTotalCount }}₽
        </span>
      </div>
    </div>
  </div>
</header>
</div>
</template>

<script>
  import moment from 'moment'

  export default {
    name: 'navbar',
    data () {
      return {
        limit: 5,
        dataset:[]
      }
    },
    computed:{
      moneyTotalCount(){
        let total = 0;
        let cart = this.$store.state.cartItems
        for(var key in cart){
          total+= cart[key].price * cart[key].count
        }
        return total
      },
      wishListGoodsCount(){
        return this.$store.state.wishlistCount
      },
      goodsTotalCount(){
        return this.$store.state.cartCount
      },
      wishEnding(){
       return this.endFind(this.wishListGoodsCount)
     },
     cartEnding(){
       return this.endFind(this.goodsTotalCount)
     },
     wishlistItemsSortedByDate(){
      return Object.values(this.$store.state.wishlistItems).sort((a,b) => moment(a.date).isBefore(b.date))
    },
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
  min-height: 60px;
  margin: 0 0 40px 0;
  background-color: #00BF0E;
  border-radius: 2px; 

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
  user-select: none;
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
.navbar {
  overflow: hidden;
  font-family: Arial, Helvetica, sans-serif;
}

.navbar a {
  float: left;
  font-size: 16px;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.dropdown {
  float: left;
  overflow: hidden;
}

.dropdown {
  font-size: 16px;    
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}

.navbar a:hover, .dropdown:hover .dropbtn {
  background-color: red;
}
.cursor-default{
  cursor: default;
}
.dropdown-content {
  min-height: 210px;
  max-height: 210px;
  display: none;
  position: absolute;
  top: 68px;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  overflow-y: scroll;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 10px 15px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}
.wish-item{
  height: 50px;
  display: inline-block;
  flex-flow: row nowrap;
  align-content: center;
}
.wish-item img{
  height: 100%;
}
.switch-to-wishlist{
  background-color: #f9f9f9;
  height:20px;
  text-align: center;
}
.switch-to-wishlist img{
  height: 100%;
}
</style>
