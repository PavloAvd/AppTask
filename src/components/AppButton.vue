<template>
  <button
      type = "button"
      class = " w-20 h-10 border-2 rounded-full text-cyan-200 "
      :class="color"
      @click = " $emit ( 'action' ) "

  > {{bTitle}} </button>
</template>

<script>
export default {
  emits: ['action'],

  props: {

    bTitle: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: '',
      validator(value) {
        return ['', 'bg-red-600', 'bg-green-800'].includes(value)
      }
    }
  }
}









</script>

<style >

</style>
