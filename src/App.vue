/* eslint-disable */

<template>
  <div id="app">
    <TodoHeader />
    <TodoInput />
   <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/> 
  </div>
</template>

<script>
import TodoHeader from '@/components/TodoHeader.vue'
import TodoInput from '@/components/TodoInput.vue'

export default {
  components: {
   TodoHeader,
   TodoInput
  }
}
</script>

<style lang="scss">

</style>