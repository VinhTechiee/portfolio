<script setup lang="ts">
import { computed } from "vue";
import { tagLabels, type TagVariant } from "./tagVariants";

const props = defineProps<{
  variant: TagVariant;
}>();

const classes = computed(() => ["tag", `tag-variant-${props.variant}`]);
</script>

<template>
  <div :class="classes">
    <p class="tag-copy">{{ tagLabels[props.variant] }}</p>
  </div>
</template>

<style scoped lang="scss">
.tag {
  border-radius: var(--radius-md);
  padding: calc(var(--space-xxs) - var(--stroke-md)) calc(var(--space-sm) - var(--stroke-md));
  border: var(--stroke-md) solid transparent;
  color: white;

  &-copy {
    font-size: var(--font-size-xs);
    font-weight: 700;
  }

  &-variant {
    &-c,
    &-cpp,
    &-mips {
      background-color: #2563eb;
    }

    &-python,
    &-algorithms,
    &-benchmark {
      background-color: #0f766e;
    }

    &-verilog,
    &-fpga {
      background-color: #7c3aed;
    }

    &-esp32,
    &-mqtt {
      background-color: #0891b2;
    }

    &-dsp,
    &-dsa {
      background-color: #be185d;
    }
  }
}
</style>
