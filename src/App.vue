/* eslint-disable */

<template>
  <div id="app">
    <TodoHeader />
    <TodoInput />
    <TodoButton />
    <TodoItem />
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
import TodoButton from '@/components/TodoButton.vue'
import TodoItem from '@/components/TodoItem.vue'

export default {
  components: {
   TodoHeader,
   TodoInput,
   TodoButton,
   TodoItem
  }
}
</script>

<style lang="scss">
</style>