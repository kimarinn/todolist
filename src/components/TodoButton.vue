<template>
    <div class="button">
        <button @click="addTodo">추가하기</button>
    </div>
</template>

<script>
export default {
    methods: {
        addTodo: function(){
            alert("버튼이 작동중")
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