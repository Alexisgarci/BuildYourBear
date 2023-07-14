<template>
  <div>
    <headerApp></headerApp>
    <buildYourBear></buildYourBear>
    <footerApp></footerApp>
  </div>
</template>

<script>
import headerApp from './components/template/header.vue'
import footerApp from './components/template/footer.vue'
import buildYourBear from './components/builder/builYourBear.vue'

export default {
  data() {
    return {
        date: new Date(),
    }
  },
  components: {
    headerApp, footerApp, buildYourBear,
  }  
}
</script>


<style>

</style>