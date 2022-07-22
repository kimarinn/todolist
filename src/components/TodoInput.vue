<template>
    <div class="input">
        <input type="text" v-model="item" placeholder="할 일을 입력해주세요">
    </div>
</template>

<script>
export default {
    data () {
        return {
            item : ''
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