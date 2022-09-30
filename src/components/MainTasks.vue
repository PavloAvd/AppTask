<template>



  <div class="flex justify-center bg-myIndiLight-0 p-4 rounded-[30px] gap-8 ml-40 mr-40 ">
    <div class=" flex justify-between gap-3 ">
      <div >
        <input
            type="text"
            placeholder="write new task"
            class="rounded w-50 h-8  text-center bg-myLight-0"
            v-model="title"
            @keydown.enter="addNewTask"
        />

      </div>
      <div>
        <input
            type="time"
            class="rounded text-center bg-myLight-0 "
            v-model="time"
        >
        <p class="text-cyan-200" >{{ time }}</p>
      </div>

    </div>

    <app-button b-title="Add New" class="bg-myBlue-0 text-[#d8ceff]"
                @action="addNewTask"
    ></app-button>

    <ul class="" v-if="this.tasks.length > 0 ">
      <li v-for="(task, index) in tasks"
          :key="index"
          class=" grid grid-cols-2 gap-4 mb-2"
      >

        <app-task
            :id="task.id"
            :title="task.title"
            :time="task.time" >
        </app-task>
        <div class="flex gap-4">
          <app-button b-title="Done" color="bg-green-800" @click="!isActive" ></app-button>
          <app-button
              b-title="delete"
              color="bg-red-600"
              @action="delTask(index)"
          ></app-button>
        </div>


      </li>
    </ul>
    <div  v-if="this.tasks.length < 1">
      <p class="text-cyan-200  text-center" > No tasks </p>
    </div>

  </div>


</template>

<script>

import appButton from "@/components/AppButton";
import AppTask from "@/components/AppTask";


export default {
  data() {
    return {
      isActive : true,
      title: '',
      time : '',

      tasks : [
        {
          id: 1,
          title: 'start coding',
          time: '12:00'
        },
        {
          id: 2,
          title: 'time to eat',
          time: '13.00'
        },
        {
          id: 3,
          title: 'time to dance',
          time: '14.00'
        },



      ],
      bTitle : 'Delete'





    }
  },
  methods : {
    addNewTask (index) {
      console.log('action' , index)
      if ( this.title.length > 0 ) {
        this.tasks.push({
          id: this.tasks.length + 1,
          title: this.title,
          time: this.time

        })
      }

      this.title=''
      this.time = ''
    },
    delTask (index) {
      this.tasks.splice(index, 1)


    }
    // taskText () {
    //   console.log()
    // }
  },


  components: {
    appButton,
    AppTask


  }
}
</script>

<style>

</style>
