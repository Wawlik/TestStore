<template>
  <div id="navbar">
    <div class="navbar-content">
      <div class="main flex row-nowrap align-center">
        <router-link to="/store"><span class="navbar-main-blocks">Главная</span></router-link>
      </div>
      <div class="control flex row-nowrap ">
        <router-link to="/cart"><span class="navbar-main-blocks"> Корзина </span></router-link>
        <div class="flex row-nowrap align-center dropdown">
          <img src="../../src/assets/wish.png" height="32px" alt="">
          <span class="navbar-main-blocks cursor-default"> {{ wishListGoodsCount }} товар{{ wishEnding }}</span>
          <div class="dropdown-content">
            <a href="#" class="wish-item"
            v-for="(item, index) in wishlistItemsSortedByDate.slice(0,5)" :key="index" >
            <img :src="item.img" alt="">
            <span class="align-self-start">{{ item.name}}</span>
            <span class="align-self-end">{{ item.date}}</span>
          </a>
          <router-link class="switch-to-wishlist" to="/wishlist">
            <img src="../../src/assets/heart.png" alt="">
            <span> Мои желания</span>
          </router-link>
        </div>
      </div>
      <div class="flex row-nowrap align-center">
        <img src="../../src/assets/cart.png" height="32px"  alt="">
        <div class="shop-summary flex">
          <span class="cursor-default">
            {{ goodsTotalCount}} товар{{ cartEnding}}
          </span>
          <span class="cursor-default">
            На сумму {{ moneyTotalCount}}₽
          </span>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  import moment from 'moment'

  export default {
    name: 'navbar',
    data () {
      return {
        limit: 5,
        dataset: []
      }
    },
    created () {
      this.$store.commit('setCartCost')
    },
    computed: {
      moneyTotalCount () {
        return this.$store.state.cartTotalCost
      },
      wishListGoodsCount () {
        return this.$store.state.wishlistCount
      },
      goodsTotalCount () {
        return this.$store.state.cartCount
      },
      wishEnding () {
        return this.endFind(this.wishListGoodsCount)
      },
      cartEnding () {
        return this.endFind(this.goodsTotalCount)
      },
      wishlistItemsSortedByDate () {
        let objForSort = this.$store.state.wishlistItems
        if (objForSort) {
          return Object.values(objForSort).sort((a, b) =>
            moment(a.date).isBefore(b.date) === true ? 1 : moment(a.date).isBefore(b.date) === false ? -1 : 0)
        }
      }
    },
    methods: {
      endFind (number) {
        let end = number % 10
        if ('567890'.indexOf(end) !== -1 || ['11', '12', '13', '14'].indexOf(number.toString()) !== -1) {
          return 'ов'
        } else if ('1'.indexOf(end) !== -1) {
          return ''
        } else if ('234'.indexOf(end) !== -1) {
          return 'а'
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
  width: 100%;
  overflow-x: hidden;
}

.navbar-content{
  width: 100%;
  height: 100%;
  display: inline-flex;
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
  align-items: center;
  justify-content: ;
  margin-right: 10px;
  margin-left: 10px;
}
.shop-summary span{
  color: white;
  font: 20px Verdana;
}
.flex{
  display: flex;
}
.row-nowrap{
  flex-flow: row nowrap;
}
.main{
  flex: 1 1 100px;
  padding-left: 5px;
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
  font: 24px Verdana;
}
.main:hover{
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

.wish-item:hover, .switch-to-wishlist:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}
.wish-item{
  min-height: 50px;
  flex-flow: row nowrap;
  float: none;
  color: black;
  padding: 10px 15px;
  text-decoration: none;
  display: block;
  text-align: left;
  align-content: center;
}
.wish-item img{
  height: 40px;
}
.switch-to-wishlist{
  display: block;
  color: black;
  background-color: #f9f9f9;
  height:20px;
  padding: 10px 15px;
  text-align: center;
}
.switch-to-wishlist img{
  height: 100%;
}
@media(max-width: 768px){
  .shop-summary{
  margin-left: 5px;

  }
  .dropdown{
    padding-left: 5px;
  }

  .navbar-main-blocks{
    font: 4vw Verdana;
  }
  .shop-summary span{
    font: 3.5vw Verdana;
  }
  .control{
    padding-right: 5px;
  }
}
</style>
