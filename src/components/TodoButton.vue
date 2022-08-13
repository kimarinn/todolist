<template>
    <div class="button">
        <button @click="AddTodo">추가하기</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            TestValue: 'test value'
        }
    },
    methods: {
        AddTodo () {
            console.log('click add button')
            this.$emit('NewTodoItem', this.TestValue)
        }
    }
}
</script>

<style lang="scss">
  .button {
      display: inline-block;
      font-family: 'Edu VIC WA NT Beginner', cursive;
  }
</style>