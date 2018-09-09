//vuex
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import registerModule from "./register/registerModule";
import shopModule from "./shop/shopModule";
import loginModule from "./login/loginModule";
import addressModule from "./address/addressModule";
import checkAllModule from "./checkAll/checkAllModule";
import paySuccessModule from "./paySuccess/paySuccessModule";
import payFailureModule from "./payFailure/payFailureModule";
export default new Vuex.Store({
    modules:{
        registerModule,
        shopModule,
        loginModule,
        addressModule,
        checkAllModule,
        paySuccessModule,
        payFailureModule
    }
})  