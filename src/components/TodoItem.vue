<template>
    <div class="item-container">
        <!-- <div class="todo-number"> {{number}} </div> -->
        <div class="todo-item"> {{ index + 1 }}{{ todo.items }}</div>
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
        },
        index:{
            type: Number,
            default: 0
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
            this.$emit('delClick', this.todo.idx)
        }
    }
}
</script>

<style lang="scss">
.item-container{
    background-color: white;
    width: 400px;
    height: 40px;
    border: 1px;
    border-color: lightsteelblue;
}
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