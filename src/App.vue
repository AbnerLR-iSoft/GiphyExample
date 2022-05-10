<template>
    <the-navbar />
  <main class="container">
    <router-view/>
  </main>
</template>
<script>
import TheNavbar from '@/components/TheNavbar'
export default {
  components: {
    TheNavbar
  }
}
</script>
<style>
@import "assets/style.css";
</style>
