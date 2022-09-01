/* eslint-disable */

<template>
  <div id="app">
    <TodoHeader />
    <TodoInput @clickBtn="addItem"/>
    <TodoItem v-for="(i, k) in items" :key="k" :todo="i" @delClick="deleteItem" :index='k'/>
   <!-- <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>  -->
  </div>
</template>

<script>
import TodoHeader from '@/components/TodoHeader.vue'
import TodoInput from '@/components/TodoInput.vue'
import TodoItem from '@/components/TodoItem.vue'

export default {
  components: {
   TodoHeader,
   TodoInput,
   TodoItem
  },
  data(){
    return{
      items: [],
      title: 'To do list',
      num: 1
    }
  },
  methods: {
    addItem(todo){
      const todoObj = {
        idx: this.num,
        items: todo
      }
      console.log(todoObj)
      this.items.push(todoObj)
      this.num++
    },
    deleteItem (data){
      console.log('delete', data)
      console.log('현재', this.items)
      const todoObj = this.items.filter(items => items.idx !== data)
      console.log('삭제후', todoObj)
      //삭제된 항목의 다음 항목들의 idx를 하나씩 줄여야함
      this.items = todoObj  
    }
  }
}
</script>

<style lang="scss">
</style>