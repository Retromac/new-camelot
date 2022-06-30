<template>
     <div class="w-full font-bold text-blue">
        <div @click="isOpen = !isOpen" class="py-5 cursor-pointer flex justify-between">
            {{title}} <span v-if="!isOpen"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="#1358e8" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg></span> <span v-if="isOpen"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-700" fill="" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" /></svg></span>
        </div>
        <div class="p-2 font-normal text-black" v-if="isOpen"> 
            <slot></slot> 
        </div>
     </div>
</template>

<script>
export default {
    
    data() {
        return {
        isOpen: false,
        }
    },
    name: 'Accordion',
    props:{
        title: String,
    }
}
</script>


<style>
p{
    margin-bottom: 15px;
}
</style>