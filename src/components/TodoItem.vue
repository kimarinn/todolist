<template>
    <div class="item-container">
        <!-- <div class="todo-number"> {{number}} </div> -->
        <div class="todo-item"> {{ todo }}</div>
    </div>
</template>

<script>
export default {
    props: {
        todo:{
            type: String,
            default: ''
        }
    },
    data () {
        return {
            // number : "1",
            // item : "숙제하기"
        }
    }
}
</script>

<style lang="scss">
 .item {
     font-family: 'Edu VIC WA NT Beginner', cursive;
 }
</style>