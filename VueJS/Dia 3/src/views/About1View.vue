<template>
  <div class="about1">
    <About1Component msg="Pagina primera"/>
  </div>
</template>

<script>
// @ is an alias to /src
  import About1Component from '@/components/About1Component.vue'

  export default {
    name: 'About1View',
    components: {
      About1Component
    }
  }
</script>
