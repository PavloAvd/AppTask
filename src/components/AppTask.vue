<template>
<div class=" grid grid-cols-4 gap-8 rounded-full  border-2 p-2  text-cyan-200 "  >
  <div class="">{{ id }} . </div>
  <div class="col-span-2">{{ title }} </div>
  <div class="justify-self-end">{{ time }}</div>
</div>
</template>

<script>
export default {
  props : {

    title : {
      type : String,
      required : true
    },
    id : {
      type : Number,
      required : true
    },
    time : '',
    status : {
      type : Boolean
    }

  }

}
</script>

<style scoped>

</style>
