<template>
    <div class="input">
        <input type="text" v-model="item" placeholder="할 일을 입력해주세요">
        <TodoButton @clickButton="click" />
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
            item : ''
        }
    },
    methods: {
        // 권장 사항: 동사 형태로
        click () {
            console.log(this.item)
            this.$emit('clickBtn',this.item)
            this.item=''
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