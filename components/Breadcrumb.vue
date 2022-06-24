<template>
<div>
  <nav>
    <ol class="breadcrumb">
      <li
        v-for="(crumb, ci) in crumbs"
        :key="ci"
        class="breadcrumb-item"
      >
        <button class="button-link" :class="{ disabled: isLast(ci) }" @click="selected(crumb)">
          {{ crumb }}
        </button>
      </li>
    </ol>
  </nav>
  </div>
</template>

<script>
export default {
  props: {
    crumbs: {
      type: Array,
      required: true,
    },
  },
  methods: {
    isLast(index) {
      return index === this.crumbs.length - 1;
    },
    selected(crumb) {
      this.$emit('selected', crumb);
    },
  },
};
</script>
 
<style scoped>
.breadcrumb {
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.37rem;
}
</style>