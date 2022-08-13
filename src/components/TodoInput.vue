<template>
    <div class="input">
        <input type="text" v-model="item" placeholder="할 일을 입력해주세요">
        <TodoButton />
    </div>
</template>

<script>
import TodoButton from '@/components/TodoButton.vue'
export default {
    components: {
        TodoButton
    },
    data () {
        return {
            item : ""
        }
    }
}
</script>

<style lang="scss">
  .input {
      display: inline-block;
      font-family: 'Edu VIC WA NT Beginner', cursive;
  }
</style> 