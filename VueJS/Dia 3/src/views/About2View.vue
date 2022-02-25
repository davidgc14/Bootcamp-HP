<template>
  <div class="about2">
    <About2Component msg="Pagina segunda"/>
  </div>
</template>

<script>
// @ is an alias to /src
  import About2Component from '@/components/About2Component.vue'

  export default {
    name: 'About2View',
    components: {
      About2Component
    }
  }
</script>