<template>
    <section class="bg-[#F7F7F7]">
        <div class="box-container flex flex-wrap justify-between w-full max-w-box mx-auto">
            <FooterForm/>
        </div>
    </section>
    <section>
        <div class="subfooter-cnt bg-footer-gray w-full text-white py-5">
            <div class="box-container flex justify-between w-full max-w-box mx-auto items-center">
                <div class="flex w-full">
                    <div class="sub_footer_col flex flex-col">
                        <div class="text-center">Since 1980</div>
                        <img src="../assets/images/logo.webp" alt="" class="max-w-[170px]">
                    </div>
                    <div class="sub_footer_tabs_container block w-full pl-10">
                        <CountriesFooter/>                        
                    </div>
                </div>
            </div>
        </div>
        
    </section>  
<!-- FOOTER -->
    <footer class="bg-footer-gray-2">
        <div class="box-container flex justify-between w-full max-w-box mx-auto flex-shrik text-white pt-10 gap-4">
            <div class="footer_col grow-1 basis-[14.2rem] shrink-0 p-1 text-xs leading-4">
                <p>
                    Από το 1980, ο Διεθνής Οργανισμός Υγείας Camelot® είναι μέλος μεγάλων διεθνών οργανισμών και αμερικανικών εργοστασίων που συμβάλλουν στην ανάπτυξη και τη διατήρηση της ανθρώπινης υγείας από το 1945
                </p>
                <div class="my-5 max-w-[190px]">
                    <img src="../assets/images/wqa.business.excellence_white-1024x397.png" alt="">
                    </div>
                <div>
                    <a href="" class="pr-2">ISO 9001</a>
                    <a href="" class="pr-2">ISO 9001</a>
                    <a href="" class="pr-2">ISO 14001</a>
                    <a href="" class="pr-2">ISO 27001</a>
                    <a href="" class="pr-2">ISO 45001</a>
                </div>
                <div class="flex items-center mt-5 flex">
                   <a href="#" class="flex w-6/12"><img src="../assets/images/trustmark_color_GR.png" alt=""></a>
                   <a href="#" class="flex w-6/12"><img src="../assets/images/eu_color_balanced.png" alt=""></a>
                </div>
            </div>
            <div class="footer_col grow-1 basis-[14.2rem] shrink-[3] p-1 flex flex-col">
                
                <div class="footer_nav_title text-yellow font-bold mb-3">Εταιρεία</div>
                <div class="footer_nav text-sm flex flex-col">                    
                    <a href="" class="mb-1 hover:text-yellow">Η Εταιρία Camelot®</a>
                    <a href="" class="mb-1 hover:text-yellow">Κριτικές Πελατών Camelot®</a>
                    <a href="" class="mb-1 hover:text-yellow">Εργαστείτε στην Camelot®</a>
                    <a href="" class="mb-1 hover:text-yellow">Πιστοποιήσεις</a>
                    <a href="" class="mb-1 hover:text-yellow">Πολιτικές εταιρείας</a>
                    <a href="" class="mb-1 hover:text-yellow">Επικοινωνήστε μαζί μας</a>
                </div>
            </div>
            <div class="footer_col grow-1 basis-[14.2rem] shrink-[3] p-1 flex flex-col">
                
                <div class="footer_nav_title text-yellow font-bold mb-3">Πελάτες</div>
                <div class="footer_nav text-sm flex flex-col">                    
                    <a href="" class="mb-1 hover:text-yellow">Η Εταιρία Camelot®</a>
                    <a href="" class="mb-1 hover:text-yellow">Εκπομπές – Videos</a>
                    <a href="" class="mb-1 hover:text-yellow">Συχνές Ερωτήσεις</a>
                    <a href="" class="mb-1 hover:text-yellow">Συνεργάτες</a>
                    <a href="" class="mb-1 hover:text-yellow">Τρόποι Πληρωμής</a>
                    <a href="" class="mb-1 hover:text-yellow">Κριτικές – Αξιολογήσεις</a>
                </div>

            </div>
            <div class="footer_col grow-1 basis-[14.2rem] shrink-[3] p-1 flex flex-col">                
                  <div class="footer_nav_title text-yellow font-bold mb-3">Προϊόντα</div>
                  <div class="footer_nav text-sm flex flex-col">              
                    <a href="" class="mb-1 hover:text-yellow">Ανταλλακτικά Φίλτρα</a>
                    <a href="" class="mb-1 hover:text-yellow">Μπουκάλι Νερού Με Φίλτρο</a>
                    <a href="" class="mb-1 hover:text-yellow">Πλυντήρια Καθαρισμού Τροφίμων</a>
                    <a href="" class="mb-1 hover:text-yellow">Συσκευές Σπιτιού</a>
                    <a href="" class="mb-1 hover:text-yellow">Συσκευή Όζοντος / Οζονοποιητές Νερού</a>
                    <a href="" class="mb-1 hover:text-yellow">Φίλτρα Αέρα - Ιονιστής - Απολυμαντής</a>
                    <a href="" class="mb-1 hover:text-yellow">Φίλτρα Νερού Βρύσης</a>
                    <a href="" class="mb-1 hover:text-yellow">Φίλτρο Νερού Μπάνιου - Ντους - Νιπτήρα</a>
                    <a href="" class="mb-1 hover:text-yellow">Ψύκτες Νερού</a>
                </div>
            </div>
            <div class="footer_col grow-1 basis-[14.2rem] shrink-[2] p-1 flex flex-col">                
                <div class="footer_nav_title text-yellow font-bold mb-5">Καλέστε μας</div>
                <div class="footer_CONTENT">     
                    <div>
                        <div class="flex mr-5">
                            <div class="flex items-center pr-2">          
                            <svg xmlns="http://www.w3.org/2000/svg" class="rounded-full bg-yellow text-black px-2 py-1 h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            </div>
                            <div class="display-block">            
                            <div class="text- leading-none text-[#d6d6d6]">Αθήνα</div>
                            <div class=""><a href="tel:+302119557550" class="hover:text-yellow">+30 211 9557550</a> </div>
                            </div>
                        </div>
                        <div class="flex my-5">
                            <div class="flex items-center pr-2">          
                            <svg xmlns="http://www.w3.org/2000/svg" class="rounded-full bg-yellow text-black px-2 py-1 h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            </div>
                            <div class="display-block">            
                                <div class="text-blue leading-none text-[#d6d6d6]">Θεσσαλονίκη</div>
                                <div><a href="tel:+302310536915" class="hover:text-yellow">+30 2310 536915</a></div>
                            </div>
                        </div>
                    </div>               
                    <div>
                        <img src="../assets/images/42xr-logo1-pp1btli0kelojm4x4qj9vrpidqvttgawm2v2ejqr3m.png" alt="">
                    </div>               
                </div>
            </div>
        </div>
        <div class="box-container flex justify-between w-full max-w-box mx-auto flex-shrik text-white pt-10 gap-4">
            <div class="copyright_container flex justify-between flex-col w-full">            
                <div class="copyright_upper_row flex justify-between w-full border-b border-[#7A7A7A] pb-3 mb-3">
                    <div class="footer_social flex gap-x-12">
                        <div class="footer_social_item flex flex-col text-center">
                            <div class="flex bg-[#48629F] rounded-full w-[40px] h-[40px] mx-auto">
                                <svg class="w-3 fill-white mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
                            </div>
                            <div class="text-xs font-bold mt-4">89,003</div>
                            <div class="text-[#7A7A7A] text-sm">Likes</div>
                        </div>
                        <div class="footer_social_item flex flex-col text-center">
                            <div class="flex bg-[#56CAFF] rounded-full w-[40px] h-[40px] mx-auto">
                                <svg class="w-4 fill-white mx-auto"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
                            </div>
                            <div class="text-xs font-bold mt-4">55</div>
                            <div class="text-[#7A7A7A] text-sm">Followers</div>
                        </div>
                        <div class="footer_social_item flex flex-col text-center">
                            <div class="flex bg-[#4F80A4] rounded-full w-[40px] h-[40px] mx-auto">
                                <svg class="w-4 fill-white mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                            </div>
                            <div class="text-xs font-bold mt-4">525</div>
                            <div class="text-[#7A7A7A] text-sm">Followers</div>
                        </div>
                        <div class="footer_social_item flex flex-col text-center">
                            <div class="flex bg-[#EC121C] rounded-full px-[15px] py-[12px] w-[40px] h-[40px] mx-auto">
                                <svg class="w-4 fill-white mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
                            </div>
                            <div class="text-xs font-bold mt-4">1,060</div>
                            <div class="text-[#7A7A7A] text-sm">Subscribers</div>
                        </div>
                    </div>
                    <div>
                        <img src="../assets/images/payment_logs_n.png" alt="">
                    </div>
                    
                </div>
                <div class="copyright_row flex justify-between text-sm text-[#ACB0B3] pb-3 pt-1">
                    <div>Copyright © 2022 Camelot® - All rights reserved</div>
                    <div class="text-xs">                        
                        <a href="" class="border-r pr-2 mr-2 border-[#ACB0B3] hover:text-white">ΟΡΟΙ ΧΡΗΣΗΣ</a>
                        <a href="" class="border-r pr-2 mr-2 border-[#ACB0B3] hover:text-white">ΠΟΛΙΤΙΚΗ ΑΠΟΡΡΗΤΟΥ</a>
                        <a href="" class="hover:text-white">ΠΟΛΙΤΙΚΗ COOKIES</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>

</template>

<script>


export default {

}
</script>

<style>
</style>