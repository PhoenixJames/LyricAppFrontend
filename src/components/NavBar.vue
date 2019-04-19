<template>
  <div>
    <md-toolbar class="md-primary">
      <md-button class="md-icon-button" @click="showNavigation = true">
        <md-icon>menu</md-icon>
      </md-button>
      <span class="md-title">Lyric App</span>

      <div class="md-toolbar-section-end">
        <md-button @click="showSidepanel = true">James</md-button>
      </div>
    </md-toolbar>

    <md-drawer :md-active.sync="showNavigation">
      <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-title">Lyric App</span>
      </md-toolbar>

      <md-list>
        <router-link v-for="routes in links" 
          v-bind:key="routes.id"
          :to="`${routes.page}`">

          <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">{{routes.text}}</span>
          </md-list-item>          
        
        </router-link>

      </md-list>
    </md-drawer>

  </div>  


</template>

<script>
  export default {
    name: 'Temporary',
    data: () => ({
      showNavigation: false,
      showSidepanel: false,
      links: [
        {
          id: 1,
          text: 'Home',
          page:'/Home'
        },
        {
          id: 2,
          text: 'Lyric View',
          page:'/LyricView'
        },
        {
          id: 3,
          text: 'About',
          page:'/About'
        },
        {
          id: 4,
          text: 'Contact',
          page:'/Contact'
        }
      ]
    })
  }
</script>

<style lang="scss" scoped>
  .page-container {
    min-height: 300px;
    overflow: hidden;
    position: relative;
    border: 1px solid rgba(#000, .12);
  }

   // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }

  .md-content {
    padding: 16px;
  }
</style>