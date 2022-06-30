<template>
  <div class="flex justify-between w-full text-center">
    <div class="count text-6xl text-blueXL font-bold">
        <vue3-autocounter ref="counter" :startAmount="0" :endAmount="23" :duration="1" prefix="" suffix="" separator="" decimalSeparator="" :decimals="0"/>
        <div class="text-sm text-blueXL font-medium">Countries</div>
</div>
    <div class="count text-6xl text-blue font-bold">
        <vue3-autocounter ref="counter" :startAmount="0" :endAmount="62" :duration="1" prefix="" suffix="" separator="" decimalSeparator="" :decimals="0"/>
        <div class="text-sm text-blue font-medium">International Certifications</div>
    </div>
    <div class="count text-6xl text-blueXL font-bold">
        <vue3-autocounter ref="counter" :startAmount="0" :endAmount="26.582" :duration="1" prefix="" suffix="" separator=',' decimalSeparator='.' :decimals='3'  />
        <div class="text-sm text-blueXL font-medium">Worldwide Customer Reviews</div>
    </div>
    <div class="count text-6xl text-blue font-bold">
        <vue3-autocounter ref="counter" :startAmount="0" :endAmount="42" :duration="1" prefix="" suffix="" separator="" decimalSeparator="" :decimals="0"/>
        <div class="text-sm text-blue font-medium">Years of operation</div>
    </div>
    <div class="count text-6xl text-blueXL font-bold">
        <vue3-autocounter ref="counter" :startAmount="0" :endAmount="2.3" :duration="1" prefix="" suffix="M" separator=',' decimalSeparator='.' :decimals='1'/>        
        <div class="text-sm text-blueXL font-medium">Happy Customers Worldwide</div>
    </div>
     

  </div>
</template>

<script>
import Vue3Autocounter from 'vue3-autocounter';


export default {
    components: { Vue3Autocounter},
    methods: {
        start() {
            this.$refs.counter.start();
        }
        },    
}

</script>

<style>

</style>