/* eslint-disable */
<template>
    <div class="header">
      <div class="date"> {{dateOfToday}} </div>
      <div class="taskcount"> 3 tasks </div>
    </div>
</template>

<script>
export default {

  data() {
    return {
      dateOfToday: ''
    }
  },

  created() {
    let today = new Date()
    let dateOfToday = this.$date.dateFormat(today)
    console.log('[TodoHeader.vue] created', dateOfToday)
  }
    
}
</script>

<style lang="scss">
 .header {
   gap: 10px;
   border: 1px solid;
   border-color:white;
   border-top-left-radius:30px;
   border-top-right-radius: 30px;
   background-color: white;
   padding: 10px;

   div:nth-child(1) {
     font-size: 25px;
     color:gray;
   }

   div:nth-child(2) {
     color: powderblue;
   }
 }

 .date {
   display: flex;
   flex-direction: coiumn;
   justify-content: flex-start;
   margin-left: 17px;
   margin-bottom: 15px;
   margin-top: 30px;
 }

 .taskcount{
   display: flex;
   flex-direction: coiumn;
   justify-content: flex-start;
   margin-left: 17px;
   margin-bottom: 20px;
 }

 

</style>;