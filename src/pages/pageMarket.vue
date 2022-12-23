<template>
    <!-- myHeader.vue -->
    <my-header></my-header>

    <h3>Корзина:</h3>
    <h4><span v-if="getMarketCounter">Итого: {{getMarketCounter}} позиций на сумму: {{getMarketSum}} р.</span></h4>

    <!-- MyCategoryList.vue -->
    <my-category-list :list="getList" :market-mode="marketMode"></my-category-list>

</template>

<script>

    import myHeader from "@/components/myHeader";
    import myCategoryList from "@/components/myCategoryList";
    import {mapGetters, mapActions} from "vuex";

    export default {
        name: "pageCard",
        props: {
            marketMode: {
                default: true,
                type: Boolean
            }
        },
        components: {
            myHeader,
            myCategoryList
        },
        mounted() {
           this.loadCards()
        },
        computed: {
            ...mapGetters(['getMarket', 'getMarketCounter', 'getMarketSum']),
            getList () {
                return this.getMarket
            }
        },
        methods: {
            ...mapActions(['loadCards'])
        }
    }

</script>

<style scoped>

    h3 {
        margin-top: 30px;
        margin-bottom: 30px;
    }

</style>