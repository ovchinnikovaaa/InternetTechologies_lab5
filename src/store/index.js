import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
    state: { // поля которые хранят значения
        // для отображения корзины с товарами
        market: JSON.parse(localStorage.getItem('market')) ? JSON.parse(localStorage.getItem('market')) : [],
        list: []
    }, // геттеры просто получают данные, которые так или иначе есть уже в хранилище
    getters: {
        getMarket: (state) => state.market.map(id => state.list.find(item => item.id === id)), // получаем товары на основе id
        getMarketCounter: (state) => state.market.length, // получаем количество элементов в корзине
        getMarketSum: (state) => { // считаем сумму цен товаров из корзины
            if (state.list.length < 1) {
                return 0
            }
            const allItems = state.market.map(id => state.list.find(item => item.id === id))
            let summ = 0
            allItems.forEach(element => {
                summ += element.price
            })
            return summ
        },
        getListByCategory: (state) => (category) => state.list.filter(item => (item.category === category))
    }, // твои мутации будут обновлять состояние компонента! н-р, устанавливать данные
    mutations: {
        addMarket(state, id) {
            state.market.push(id)
            localStorage.setItem('market', JSON.stringify(state.market))
        },
        removeMarket(state, index) {
            state.market.splice(index, 1)
            localStorage.setItem('market', JSON.stringify(state.market))
        },
        setList: (state, list) => state.list = list
    }, // action нужны для связи с компонентами! т.е. они вызывают мутацию, чтобы отразить ее результат в компоненте
    actions: {
        addMarket({commit}, id) {
            commit('addMarket', id)
        },
        removeMarket({commit}, index) {
            commit('removeMarket', index)
        },
        loadCards({commit}) {
            return new Promise(() => {
                axios.get('http://localhost:3000/json')
                    .then((responce) => {
                    commit('setList', responce.data)
                }).catch(() => {

                }).finally(() => {

                })
            })
        }
    },
    modules: {
    }
})
