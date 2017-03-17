<template>
  <div id="app">
  <transition
  enter-active-class="animated wobble">
 <router-view></router-view>
 </transition>
  </div>
</template>

<script>
/*import bar from './components/bar.vue'*/
import home from './components/home.vue'
export default {
  name: 'app',
  components:{
   home
  }
}
</script>

<style>
</style>