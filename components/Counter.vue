<template>
  <div>
    <div class="count">
        <vue3-autocounter ref="counter" :startAmount="0" :endAmount="23" :duration="1" prefix="" suffix="" separator="" decimalSeparator="" :decimals="0" :autoinit="true" />
</div>
    <div class="count">
        <vue3-autocounter ref="counter" :startAmount="0" :endAmount="62" :duration="1" prefix="" suffix="" separator="" decimalSeparator="" :decimals="0" :autoinit="true" />
    </div>
    <div class="count">
        <vue3-autocounter ref="counter" :startAmount="0" :endAmount="26.582" :duration="1" prefix="" suffix="" separator=',' decimalSeparator='.' :decimals='3' :autoinit="true" />
    </div>
    <div class="count">
        <vue3-autocounter ref="counter" :startAmount="0" :endAmount="42" :duration="1" prefix="" suffix="" separator="" decimalSeparator="" :decimals="0" :autoinit="true" />
    </div>
    <div class="count">
        <vue3-autocounter ref="counter" :startAmount="0" :endAmount="2.3" :duration="1" prefix="" suffix="M" separator=',' decimalSeparator='.' :decimals='1' :autoinit="true" />
    </div>
     

  </div>
</template>

<script>
import Vue3Autocounter from 'vue3-autocounter';


export default {
    components: { Vue3Autocounter}
    
}

</script>

<style>

</style>