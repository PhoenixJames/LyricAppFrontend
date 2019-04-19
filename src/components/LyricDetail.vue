<template>
  <div class="md-layout">
    <div class="md-layout-item"></div>
    <div class="md-layout-item">
      <h3>{{data[0].title}}</h3>
      <p>
        {{data[0].lyric}}
      </p>
    </div>
    <div class="md-layout-item"></div>

  </div>
</template>

<script>
import axios from 'axios' 
export default {
  props: ['lyricId'],
  name: 'LyricDetail', //this is the name of the component
  data () {
    return {
      data: null
    }
  },
  mounted () {
    axios
      .get(`http://localhost:3000/api/lyric/${this.lyricId}`)
      .then(response => (this.data = response.data))
      .catch(error => console.log(error))
  },
}
</script>
<style> 
  .spacing { 
    Margin-right: 10px; 
  } 
</style>