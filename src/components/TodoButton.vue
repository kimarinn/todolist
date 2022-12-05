<template>
    <div class="addBtn">
        <button @click="clickAddButton" role="button">ADD</button>
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
            this.$emit('clickButton')
        }
    }
}
</script>

<style lang="scss">
.addBtn {
  display: inline-block;
  width: 90px;
  height: 40px;
  align-items: center;
  appearance: button;
  background-color: white;
  border-radius: 8px;
  border-style: none;
  box-shadow: rgba(255, 255, 255, 0.26) 0 1px 2px inset;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  flex-direction: row;
  flex-shrink: 0;
  font-family: "RM Neue",sans-serif;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
  padding: 10px;
  text-align: center;
  text-transform: none;
  transition: color .13s ease-in-out,background .13s ease-in-out,opacity .13s ease-in-out,box-shadow .13s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button:active {
  background-color: #006AE8;
}

.button:hover {
  background-color: #1C84FF;
}

</style>