<template>
  <header class="flex flex-wrap w-full">   
    <!-- top header --> 
    <div class="bg-yellow w-full py-3.5">
      <div class="box-container flex justify-between w-full max-w-box mx-auto items-center relative">
        <div class="w-44 text-center font-medium">Από 1980</div>
        <div class="flex flex-1 ml-2.5">
          <div class="flex border-solid border-r pr-3 mr-3 border-black">
            <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>Χώρες</div>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 m-1" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="flex">
            <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>
          <div>Ελληνικά</div>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 m-1" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </div>
        </div>
        <div class="flex items-center">
          <div class="text-2xl font-semibold mr-5">Καλέστε μας</div>
          <div class="flex mr-5">
            <div class="flex items-center pr-2">          
              <svg xmlns="http://www.w3.org/2000/svg" class="rounded-full bg-blue text-white px-2 py-1 h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div class="display-block">            
              <div class="text-blue leading-none">Αθήνα</div>
              <div class=""><a href="tel:+302119557550" class="hover:text-blue">+30 211 9557550</a> </div>
            </div>
          </div>
          <div class="flex">
            <div class="flex items-center pr-2">          
              <svg xmlns="http://www.w3.org/2000/svg" class="rounded-full bg-blue text-white px-2 py-1 h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div class="display-block">            
              <div class="text-blue leading-none">Θεσσαλονίκη</div>
              <div><a href="tel:+302310536915" class="hover:text-blue">+30 2310 536915</a></div>
            </div>
          </div>
        </div>


 <!-- countries modal 

        <Countries_modal /> 
        
       SOS  modal is ready enable it with vue
        
        -->


      </div>
    </div>
    <!-- middle header -->
    <div class="bg-blue w-full">
      <div class="box-container flex justify-between w-full max-w-box mx-auto items-center">
        <!-- site logo -->
        <div class="w-44 text-center relative">
          <img src="../assets/images/logo.webp" alt="Camelot water" class="absolute w-40 inset-x-0 mx-auto -top-12">
        </div>
        <div class="flex flex-2 mr-2 ml-2.5">
          <div class="text-white">Προϊόντα</div>
            <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg> 
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
        </div>
        <div class="flex flex-1 ml-2 mr-4">
             <form method="GET" class="w-full">
              <div class="relative text-gray-600 focus-within:text-gray-400">
                <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                  <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  </button>
                </span>
                <input type="search" name="q" class="w-full my-2 pl-7 pr-2 py-4 text-sm text-gray-900 bg-white pl-10 focus:outline-none focus:bg-white focus:text-black" placeholder="Αναζήτηση..." autocomplete="on">
              </div>
            </form>                
        </div>
        <!-- cart section -->
        <div class="flex flex-2 bg-blueS h-16 items-center px-4">
          <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span class="text-white border-solid border-r pr-2 mr-2 border-border">
              0.00 &euro;
            </span>
          </div>

          <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          </div>
        </div>
      </div>
    </div>
    <!-- bottom header -->
    <div class="bg-white-100 w-full">
      <div class="box-container flex  w-full max-w-box mx-auto items-center">
        <div class="w-44 text-center"> </div>
        <div class="py-3">
          
            <nav class="flex justify-center space-x-4">
                <NuxtLink to="/home" class="ont-m px-3 py-2 rounded-lg hover:text-blueL">Αρχική</NuxtLink>
                <NuxtLink to="/company" class="ont-m px-3 py-2 rounded-lg hover:text-blueL">Εταιρεία</NuxtLink>
                <NuxtLink to="/shop" class="ont-m px-3 py-2 rounded-lg hover:text-blueL">Shop</NuxtLink>
                <NuxtLink to="/affiliates" class="ont-m px-3 py-2 rounded-lg hover:text-blueL">Συνεργάτες</NuxtLink>
                <NuxtLink to="/news" class="ont-m px-3 py-2 rounded-lg hover:text-blueL">Νέα</NuxtLink>
                <NuxtLink to="/contact" class="ont-m px-3 py-2 rounded-lg hover:text-blueL">Επικοινωνία</NuxtLink>              
            </nav>
        </div>
      </div>
    </div>
   
  </header>
</template>

<script>
import Countries_modal from './Countries_modal.vue';
export default {
    components: { Countries_modal }
}
</script>

<style>

</style>