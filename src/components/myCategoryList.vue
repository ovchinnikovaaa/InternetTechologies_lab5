<template>
    <!-- вот тут печатаем по категориям все v-bind:style="{ 'background-image': 'url(' + require('../assets/' + item.img) + ')' }" -->
    <div>
        <div class="categoryTable" v-if="list.length > 0" >
            <div v-for="(item, index) in list" :key="index" >
                <my-element :market-mode="marketMode" :item="item"></my-element>
            </div>
        </div>
        <div v-else>Empty</div>
    </div>
</template>

<script>
    import MyElement from "@/components/myElement";
    import {mapActions} from "vuex";

    export default {
        name: "myCategoryList",
        components: {
           MyElement
        },
        props: {
            list: {
                default: () => ([]),
                type: Array
            },
            marketMode: {
                default: false,
                type: Boolean
            }
        },
        mounted() {
            this.loadCards()
        },
        methods: {
            ...mapActions(['loadCards'])
        }
    }
</script>

<style scoped>

    .categoryTable {
        display: grid;
        justify-content: center; /* чтобы элементы внутри сетки были по центру */
        grid-template-columns: repeat(4, 200px);
        grid-auto-rows: 300px;
        grid-column-gap: 30px;
        grid-row-gap: 30px;
    }



</style>