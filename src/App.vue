/* eslint-disable */

<template>
  <div id="app">
    <TodoHeader />
    <TodoInput @clickBtn="addItem"/>
    <TodoItem v-for="(item, key) in item" :key="key" :todo="item" />
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
      item: [],
      title: 'To do list'
    }
  },
  methods: {
    addItem(todo){
      console.log(todo)
      this.item.push(todo)
    }
  }
}
</script>

<style lang="scss">
</style>