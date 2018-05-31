<template>
  <div id="login">
    <section>
      <div class="col1">
        <h1>Vuegram</h1>
        <p>Welcome to the Savvy Apps sample social media web app powered by Vue.js and Firebase.</p>
      </div><!--/.col1-->
      <div class="col2">
        <form @submit.prevent>
          <h1>Welcome Back</h1>

          <label for="email1">Email</label>
          <input v-model.trim="loginForm.email" type="text" placeholder="you@email.com" id="email1" />

          <label for="password1">Password</label>
          <input v-modal.trim="loginForm.password" type="password" placeholder="*****" id="password1" />

          <button @click="login" class="button">Log In</button>

          <div class="extras">
            <a>Forgot Password</a>
            <a>Create an Account</a>
          </div><!--/.extras-->
        </form>
      </div><!--/.col2-->
    </section>
  </div><!--/#login-->
</template>

<script>
  const firebase = require('../firebaseConfig.js')
  export default {
    data() {
      return {
        loginForm: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      login() {
        firebase.authentication.signInWithEmailAndPassword(this.loginForm.email, this.loginForm.password).then(user => {
          this.$store.commit('setCurrentUser', user)
          this.$store.dispatch('fetchUserProfile')
          this.$router.push('/dashboard')
        }).catch(error => {
          console.log(error)
        })
      }
    }
  }
</script>

