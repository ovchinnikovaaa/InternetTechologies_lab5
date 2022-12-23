<template>
    <!-- myHeader.vue -->
    <my-header></my-header>

    <h2>Доставка цветов в Воронеже</h2>

    <h3>Розы в наличии: </h3>

    <!-- MyCategoryList.vue -->
    <my-category-list :list="getRosesList"></my-category-list>


</template>

<script>
    import myHeader from "@/components/myHeader";
    import MyCategoryList from "@/components/myCategoryList";
    import {mapGetters} from "vuex";

    export default {
        name: "pageRoses",
        components: {
            myHeader,
            MyCategoryList
        },
        computed: {
            ...mapGetters(['getListByCategory']),
            getRosesList () {
                return this.getListByCategory('rose')
            }
        }
    }

</script>

<style scoped>

</style>