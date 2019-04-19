<template>
  <div>
    <h1>Find Lyrics</h1>

    <div class="md-layout">
      <div class="md-layout-item" v-for="item in data">
        <md-card>
          <md-card-header>
            <div class="md-title">{{item.title}}</div>
          </md-card-header>

          <md-card-content>
            Westlife
          </md-card-content>

          <md-card-actions>
            <router-link
              v-bind:key="item.id"
              :to="`/LyricDetail/${item.id}`">

              <md-button>View Lyric</md-button>          
            
            </router-link>
          </md-card-actions>
        </md-card>
      </div>

    </div>

  </div>
</template>

<script>
import axios from 'axios' 
export default {
  name: 'Home', //this is the name of the component
  data () {
    return {
      data: null
    }
  },
  mounted () {
    axios
      .get('http://localhost:3000/api/lyric/')
      .then(response => (this.data = response.data))
      .catch(error => console.log(error))
  },
  methods: {
    handleClick: function() {
      console.log(this.data)
    }
  }
}
</script>
<style lang="scss" scoped>
  .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
  .spacing { 
    Margin-right: 10px; 
  } 
</style>
