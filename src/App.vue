<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Vue js</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <!--For proper routing we  have to use router-link
            otherwise every link  will always routed to / (if u are using '/' as the index page)
            Otherwise you shouldnt  have a '/'  route.-->
            <router-link v-if="authenticated" v-on:click="logout()" class="nav-link" to="/">Logout</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view @authenticated="setAuthentication"> </router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      authenticated: false,
      mockAccount: {
        username: 'sujith',
        password: 'password'
      }
    }
  },
  mounted () {
    if (!this.authenticated) {
      this.$router.replace({name: 'login'})
    }
  },
  methods: {
    setAuthentication: function (status) {
      this.authenticated = status
    },
    logout: function () {
      this.authenticated = false
      this.$router.replace({name: 'login'})
    }
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
