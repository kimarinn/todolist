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

  created () {
  },

  mounted () {
    const todoItem = window.localStorage.getItem('todoItem')
    this.items = JSON.parse(todoItem)
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
      window.localStorage.setItem('todoItem', JSON.stringify(this.items))
    },
    deleteItem (data){
      console.log('delete', data)
      console.log('현재', this.items)
      const todoObj = this.items.filter(items => items.idx !== data)
      console.log('삭제후', todoObj)
      this.items = todoObj  
      window.localStorage.setItem('todoItem', JSON.stringify(this.items))
    }
  }
}
</script>

<style lang="scss">
</style>