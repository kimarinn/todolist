<template>
    <div class="button">
        <button @click="clickAddButton">추가하기</button>
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
        // 소문자 시작
        clickAddButton () {
            console.log('click add button')
            this.$emit('clickButton')
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