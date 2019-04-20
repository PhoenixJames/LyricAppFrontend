<template>
  <i id="chord">
    {{this.chord}}
  </i>
</template>

<script>
export default {
  props: 'chord',
  name: 'cd' //this is the name of the component
}
</script>
<style> 
  .spacing { 
    Margin-right: 10px; 
  } 
  #chord {
        position: relative;
        top: -1em;
        display:inline-block; 
        width: 0;
        overflow:visible; 
        color:#00F;
        font-weight:bold;
        font-family: Arial;
        text-decoration: none;
  } 
</style>