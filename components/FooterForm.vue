<template>
  <div class="w-full py-10">
    <div class="flex justify-between animate_top mb-10 mt-4 w-full">
        <div class=" flex-col text-4xl text-blue font-semibold">
            <div>
                Επικοινωνήστε μαζί μας
            </div>
            <img src="../assets/images/icon_wave-titles.svg" alt="wave" class="mt-2">
        </div>
    </div>
    <div class="form_container w-full">
        <form action="/">
        <div class="mb-7 flex gap-5">
            <input type="text" placeholder="Ονοματεπώνυμο" class="w-6/12 border-2 border-blackL h-12 p-4">
            <input type="text" placeholder="Email" class="w-6/12 border-2 border-blackL h-12  p-4">
        </div>
        <div class="mb-7 flex gap-5">
            <input type="text" placeholder="Τηλέφωνο" class="w-6/12 border-2 border-blackL h-12  p-4">
            <input type="text" placeholder="Περιοχή" class="w-6/12 border-2 border-blackL h-12  p-4">
        </div>
        <div class="mb-7 flex gap-5">
            <textarea name="message" id="" cols="30" rows="10" placeholder="Μήνυμα" class="w-full border-2 border-blackL p-4 h-40"></textarea>
        </div>
        <div class="mb-7 flex gap-5">
            <input type="checkbox" name="aggree" id="" class="cursor-pointer">
            <label for="aggree">Συμφωνώ στην επεξεργασία προσωπικών δεδομένων σύμφωνα με την <a href="#" target="_blank" rel="noopener noreferrer" class="cursor-pointer">Πολιτική Προστασίας Προσωπικών Δεδομένων</a></label>
        </div>
        
        <div>
            <input type="submit" value="ΑΠΟΣΤΟΛΗ" class="cursor-pointer bg-yellow py-4 px-8 flex mt-6">
        </div>
        </form>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>