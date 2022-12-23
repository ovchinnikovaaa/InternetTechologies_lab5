<template>
    <!-- myHeader.vue -->
    <my-header></my-header>

    <h2>Доставка цветов в Воронеже</h2>

    <h3>Возможные композиции: </h3>

    <!-- MyCategoryList.vue -->
    <my-category-list :list="getDaisiesList"></my-category-list>

    <!-- myFooter.vue -->
    <my-footer></my-footer>

</template>

<script>

    import MyFooter from "@/components/myFooter";
    import myHeader from "@/components/myHeader";
    import MyCategoryList from "@/components/myCategoryList";
    import {mapGetters} from "vuex";

    export default {
        name: "pageCompositions",
        components: {
            MyCategoryList,
            MyFooter,
            myHeader
        },
        computed: {
            ...mapGetters(['getListByCategory']),
            getDaisiesList () {
                return this.getListByCategory('daisy')
            }
        }
    }
</script>

<style scoped>

</style>