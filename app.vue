<template>
  <div>
    <Header />
    
    <NuxtPage />
    <Footer />
 
  </div>
</template>

<script>

import global from "/mixins/global.js";
export default {
  mixins: [global],
  mounted:function(){
        this.test()
    }
  
}
</script>

<style>
</style>