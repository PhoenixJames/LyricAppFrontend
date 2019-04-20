<template>
  <div class="md-layout">
    <div class="md-layout-item"></div>
    <div class="md-layout-item">
      <h3>{{data[0].title}}</h3>
      <h5 id='singer'>{{data[0].singer}}</h5>
      <p v-html= "data[0].lyric">
      </p>
    </div>
    <div class="md-layout-item"></div>

  </div>
</template>

<script>
import axios from 'axios' 
import cd from './Chord'
export default {
  props: ['lyricId'],
  name: 'LyricDetail', //this is the name of the component
  components: {
    'cd': cd
  },
  data () {
    return {
      data: null
    }
  },
  mounted () {
    this.getData();
  },
  methods: {
    getData () {
      axios
        .get(`http://localhost:3000/api/lyric/${this.$route.params.lyricId}`)
        .then(response => (this.data = response.data))
        .catch(error => console.log(error));

      var str = response.data[0].lyric;
      console.log(str);
    }

  }
}
</script>
<style> 
  .spacing { 
    Margin-right: 10px; 
  } 
  #singer{
    color:blue;

  } 
</style>