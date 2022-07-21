<template>
    <div>
        <p>
            <input type="text" @change="input" placeholder="할 일을 입력해주세요">
            <button @click="addTodo">추가하기</button>
        </p>
        <p>{{text}}</p>
    </div>
</template>

<script>
export default {
    data(){
        return {
            text : '',
            inputText : ''
        }
    },
    methods:{
        input(e){
            return this.inputText = e.target.value
        },
        addTodo(){
            return this.text = this.inputText
        }
    }
    
}
</script>

<style lang="scss">

</style> 