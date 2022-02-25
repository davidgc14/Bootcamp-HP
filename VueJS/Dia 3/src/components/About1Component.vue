<template>
  <div class="about1">
    <p>{{ msg }}</p>
    <p>Aqui se encuentra cargada una lista de cosas aleatorias</p>
  </div>
</template>

<script>
  export default {
    name: 'About1Component',
    props: {
      msg: String
    }
  }

  function lista(){
  fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data))
  }

  lista();

</script>