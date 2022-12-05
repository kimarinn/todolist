<template>
    <div class="input">
        <div class="inputBox"><input type="text" v-model="item" placeholder="할 일을 입력해주세요"></div>
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
 input[type="text"] {
      display: inline-block;
      background-color: white;
      font-family: 'Edu VIC WA NT Beginner', cursive;
      width: 310px;
      height: 40px;
      border-width: 0.7px;
      border-color: powderblue;
      padding: 3px 3px;
  }
  .inputBox {
      display: inline-block;
      width: 310px;
      height: 40px;
      border-width: 0.7px;
      border-color: powderblue;
  }
</style> 