<template id="cartOrder-template">
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <a @click="$emit('close')" class="align-end">×</a>
          <div class="modal-header">
            <h3>Оформление заказа</h3>
          </div>
          <div class="modal-body">
            <div class="item-info">
              <span>{{user}}</span>
              <span>Телефон:</span>
              <masked-input :class="{'input': true, 'is-danger': errors.has('telephone') }"
              v-validate="{ required: true, regex: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/ }" 
              v-model="phone" mask="\+1 (111) 111-1111" name="telephone"
              placeholder="Номер телефона" type="tel" />
              <span  class="error">{{ errors.first('telephone') }}</span>

              <span>Электронная почта:</span>
              <input v-model="email" :class="{'input': true, 'is-danger': errors.has('email') }" 
              v-validate="'required|email'" name="email" type="text" >
              <span class="error">{{ errors.first('email') }}</span>

              <span>Адрес заказа: </span>   
              <textarea :class="{'input': true, 'is-danger': errors.has('adress') }" 
              name="adress" v-validate="'required'" id="client-address" cols="30"
              rows="3" v-model="clientAdress" 
              placeholder="Введите свой адрес"></textarea>
              <span class="error">{{ errors.first('adress') }}</span>

            </div>
            <div >
              <span class="align-end">Сумма: <br> <span class="totalPrice">{{totalCount}}₽</span> </span>
            </div>
          </div>
          <div class="modal-footer">
            <button class="flex" @click="formOrder" :disabled='errors.any() || !isComplete'>
              <img src="../../assets/cart-light.png" alt="">
              <span >Сделать заказ</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import maskedInput from 'vue-masked-input'

  export default {
    name: 'cartOrder',
    components:{
      maskedInput
    },
    data () {
      return {
        phone: '',
        clientAdress: '',
        email: '',
        user: 'John Doe'
      }
    },
    props:['current'],
    computed:{

      isComplete () {
        return this.phone && this.clientAdress && this.email
      },
      totalCount(){
       let total = 0;
       let cart = this.$store.state.cartItems
       for(var key in cart){
        total+= cart[key].price * cart[key].count
      }
      return total;
    }
  },
  methods:{
    formOrder(){
     let items = Object.values(this.$store.state.cartItems).map( function(item){
      return { key: item.key,
        count: item.count
      }
    })
     let order = {
      user: this.user,
      phone: this.phone,
      address: this.clientAdress,
      email: this.email,
      orderedItems: items
    }
    this.$emit('close')
    this.$emit('success', order)
    return
  },
  addToCart(){
    this.$emit('succeed')
    this.$emit('close')
  }
}
}
</script>
<style scoped>
#client-address{
 width:90%;
 max-width:90%;
 max-height:30%;
 resize: none;
}
.flex{
  display: flex;
}
.modal-body{
  margin: 20px 0;
  display: flex;
  flex-flow: row nowrap;
}
.item-info{
  display: flex;
  flex-flow:  column nowrap;
  align-items: flex-start; 
  justify-content: space-between;
}
.item-info *{
  margin-bottom: 10px;
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
  width: 350px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
  display: flex;
  flex-flow: column nowrap;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
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

.align-end{
  align-self: flex-end;
}
.totalPrice{
  color: #00BF0E;
  font: 24px Verdana bold;
}
.error{
  font-size: 10px;
  color: red;
}
.is-danger {
  outline-color:  red;
}
</style>