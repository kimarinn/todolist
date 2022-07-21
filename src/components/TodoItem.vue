<template>
    <div class="item">
        {{number}} : {{item}}
    </div>
</template>

<script>
export default {
    el: '#item',
    data() {
        return{
            number : "1",
            item : "숙제하기"
        }
    }
}
</script>

<style lang="scss">
 .item {
     font-family: 'Edu VIC WA NT Beginner', cursive;
 }
</style>