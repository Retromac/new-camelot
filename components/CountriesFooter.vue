<template>

  <div class="">
    <div class="flex w-full justify-between border-b border-[#62676D] pb-3 mb-3 px-4">
      <div class="w-2/6">
        <a class="transition-all text-gray-400 hover:text-gray-100 cursor-pointer " v-on:click="toggleTabs(1)"
          v-bind:class="{ 'bg-footer-gray': openTab !== 1, 'text-white': openTab === 1 }">
          Ευρώπη
        </a>
      </div>
      <div class="w-2/6 pl-[3px]">
        <a class="transition-all text-gray-400 hover:text-gray-100 cursor-pointer " v-on:click="toggleTabs(2)"
          v-bind:class="{ 'bg-footer-gray': openTab !== 2, 'text-white': openTab === 2 }">
          Αμερική
        </a>
      </div>
      <div class="w-2/6 pl-[3px]">
        <a class="transition-all text-gray-400 hover:text-gray-100 cursor-pointer " v-on:click="toggleTabs(3)"
          v-bind:class="{ 'bg-footer-gray': openTab !== 3, 'text-white': openTab === 3 }">
          Αφρική / Μέση Ανατολή
        </a>
      </div>
    </div>
    <div class="w-full flex px-4">
      <!-- Europe -->
      <div class="w-full" v-bind:class="{ 'hidden': openTab !== 1, 'block': openTab === 1 }">
        <div class="flex flex-wrap gap-3 transition-all">
          <a href="#" class="flex w-[32.4%] items-center text-black-800 text-sm">Ελλάδα</a>
          <a href="#" class="flex w-[32.4%] items-center text-black-800 text-sm">Κύπρος</a>
          <a href="#" class="flex w-[32.4%] items-center text-black-800 text-sm">Αλβανία</a>
          <a href="#" class="flex w-[32.4%] items-center text-gray-400 text-sm">Γερμανία <span
              class="text-xs px-2 py-0.5 rounded-2xl border-solid border border-gray-400 ml-3">COMING SOON</span></a>
          <a href="#" class="flex w-[32.4%] items-center text-gray-400 text-sm">Βουλγαρία <span
              class="text-xs px-2 py-0.5 rounded-2xl border-solid border border-gray-400 ml-3">COMING SOON</span></a>
          <a href="#" class="flex w-[32.4%] items-center text-gray-400 text-sm">Γαλλία <span
              class="text-xs px-2 py-0.5 rounded-2xl border-solid border border-gray-400 ml-3">COMING SOON</span></a>
          <a href="#" class="flex w-[32.4%] items-center text-gray-400 text-sm">Ιταλία <span
              class="text-xs px-2 py-0.5 rounded-2xl border-solid border border-gray-400 ml-3">COMING SOON</span></a>
          <a href="#" class="flex w-[32.4%] items-center text-gray-400 text-sm">Κοσσυφοπέδιο <span
              class="text-xs px-2 py-0.5 rounded-2xl border-solid border border-gray-400 ml-3">COMING SOON</span></a>
          <a href="#" class="flex w-[32.4%] items-center text-gray-400 text-sm">Μονακό <span
              class="text-xs px-2 py-0.5 rounded-2xl border-solid border border-gray-400 ml-3">COMING SOON</span></a>
          <a href="#" class="flex w-[32.4%] items-center text-gray-400 text-sm"> Βόρεια Μακεδονία <span
              class="text-xs px-2 py-0.5 rounded-2xl border-solid border border-gray-400 ml-3">COMING SOON</span></a>
        </div>
      </div>

      <!-- America -->
      <div class="w-full" v-bind:class="{ 'hidden': openTab !== 2, 'block': openTab === 2 }">
        <a href="#" class="text-black-800 text-sm">ΗΠΑ</a>
        <div class="text-black-800 text-sm"></div>
        <div class="text-black-800 text-sm"></div>

      </div>
      <!-- Africa -->
      <div class="w-full" v-bind:class="{ 'hidden': openTab !== 3, 'block': openTab === 3 }">
        <a href="#" class="text-gray-400 text-sm"> Κατάρ <span
            class="text-xs px-2 py-0.5 rounded-2xl border-solid border border-gray-400">COMING SOON</span></a>
        <div class="text-black-800 text-sm"></div>
        <div class="text-black-800 text-sm"></div>

      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: "neutral-tabs",
  data() {
    return {
      openTab: 1
    }
  },
  methods: {
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber
    }
  }
}
</script>

<style>
</style>