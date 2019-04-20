<template>
  <i id="chord">
    D
  </i>
</template>

<script>
export default {
  name: 'D' //this is the name of the component
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