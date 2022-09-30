<template>
<div class="">

      <div class="flex gap-8 justify-end p-8 ml-40 mr-40 border-4 border-myBlack-0 mb-4 bg-myBlue-0 rounded-[30px] " >
        <h1 class="text-cyan-200 text-4xl mr-40">
            To Do list...
        </h1>
        <router-link to="/mainTasks" class="border-myBlack-0 border-4 rounded-full p-4 bg-myLight-0"> Main tasks </router-link>
        <router-link to="/taskHistory" class="border-myBlack-0 border-4 rounded-full p-4 bg-myLight-0"> Task history</router-link>
        <router-link to="/about"  class="border-myBlack-0 border-4 rounded-full p-4 bg-myLight-0"> About </router-link>
      </div>
      <router-view></router-view>
  </div>



</template>

<script>

import mainTasks from "@/components/MainTasks";
import appButton from "@/components/AppButton";
import AppTask from "@/components/AppTask";


export default {
  data() {
    return {











    }
  },
  methods : {


  },


  components: {
    appButton,
    AppTask,
    mainTasks


  }
}
</script>

<style>
/*.color1 {color: #140f07;}*/
/*.color2 {color: #172c57;}*/
/*.color3 {color: #4e61b2;}*/
/*.color4 {color: #9b9efa;}*/
/*.color5 {color: #ffe6f4;}*/
</style>
