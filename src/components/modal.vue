<template id="modal-template">
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <a @click="$emit('close')" class="close">×</a>
          <div class="modal-header">
            <h3>Добавить в корзину</h3>
          </div>
          <div class="modal-body">
            <img class="main-image" :src="current.img" alt="goods">
            <div class="item-info">
              <span>{{current.name}}</span>
              <span>Кол-во: <input class="count" size="20" type="number" v-model="count" name=""></span>
              <span>Сумма: {{totalCount}} руб.</span>              
            </div>
          </div>

          <div class="modal-footer">
            <button class="flex" @click="addToCart">
              <img src="../assets/cart-light.png" alt="">
              <span>Добавить</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>

  export default {
    name: 'modal',
    data () {
      return {
        count: 1,
      }
    },
    props:['current'],
    computed:{
      totalCount(){
        return this.current.price * this.count
      }
    },
    methods:{
      addToCart(){
        this.$emit('succeed')
        this.$emit('close')
      }
    }
  }
</script>
<style scoped>
.flex{
  display: flex;
}
.modal-body{
  display: flex;
  flex-flow: row nowrap;
}
.item-info{
  display: flex;
  flex-flow:  column nowrap;
  align-items: flex-start; 
  justify-content: space-between;
}
.main-image{
  max-height:100px;
  max-width: 100%;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

 .modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.count{
  width: 30px;
}
.modal-footer button span{
  margin: auto;
}
.modal-footer button{
  margin: auto;
}

.close{
  position: fixed;
  right: 10px; 
  top: 10px; 
}
</style>