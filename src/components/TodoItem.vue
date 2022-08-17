<template>
    <div class="item-container">
        <!-- <div class="todo-number"> {{number}} </div> -->
        <div class="todo-item"> {{ todo.idx }}{{ todo.items }}</div>
        <div class="deleteBtn">
            <button @click="deleteBtn">X</button>
            </div>
    </div>
</template>

<script>
export default {
    props: {
        todo:{
            type: Object,
            default: () => {}
        }
    },
    data () {
        return {
            // number : "1",
            // item : "숙제하기"
        }
    },
    methods: {
        deleteBtn () {
            console.log("delete")
        }
    }
}
</script>

<style lang="scss">
.todo-item {
      display: inline-block; 
}
.deleteBtn {
      display: inline-block; 
}
 .item {
     font-family: 'Edu VIC WA NT Beginner', cursive;
 }
</style>