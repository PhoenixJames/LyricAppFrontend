<template>
  <div id="app" class="page-container md-layout-column">
    <NavBar/>
    <md-content>
      <div class="md-layout">
        <router-view/>  
      </div>      
    </md-content>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
export default {
  name: 'app',
  components: {
    'NavBar': NavBar
  },
  data: () => ({
      
    })
}
</script>

<style lang="scss" scoped>
  #app{
    min-height: 100vh;
  }

  .md-content {
    padding: 16px;
  }
</style>
