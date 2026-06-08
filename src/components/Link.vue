<script setup lang="ts">
import { computed, useAttrs } from "vue";
import { useRouter } from "../composables/useRouter";

const attrs = useAttrs();
const router = useRouter();

const props = defineProps<{
  external?: boolean;
  renderAs?: "a" | "button" | "div";
  href?: string;
  to?: string;
  replace?: boolean;
}>();

const resolvedTo = computed(() => {
  const base = props.href || props.to || "/";

  let path = base;

  if (path.length > 1 && path.endsWith("/")) {
    path = path.slice(0, -1);
  }

  return path;
});

const resolvedHref = computed(() => {
  if (props.external) {
    return props.href || props.to;
  }

  const base = import.meta.env.BASE_URL.replace(/\/$/, "");

  if (!base) {
    return resolvedTo.value;
  }

  return resolvedTo.value === "/" ? `${base}/` : `${base}${resolvedTo.value}`;
});

const handleClick = (event: MouseEvent) => {
  if (props.external || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) {
    return;
  }

  event.preventDefault();

  if (props.replace) {
    router.replace(resolvedTo.value);
  } else {
    router.push(resolvedTo.value);
  }
};
</script>

<template>
  <component
    v-if="props.external"
    :is="props.renderAs || 'a'"
    :href="resolvedHref"
    target="_blank"
    rel="noopener noreferrer"
    v-bind="attrs"
  >
    <slot></slot>
  </component>

  <component
    v-else
    :is="props.renderAs || 'a'"
    :href="resolvedHref"
    @click="handleClick"
    v-bind="attrs"
  >
    <slot></slot>
  </component>
</template>
