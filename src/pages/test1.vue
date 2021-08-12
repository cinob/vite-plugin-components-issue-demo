<template>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  test1
</template>
<script lang="ts" setup>
onMounted(() => {
  console.log('test1')
})
</script>
<script lang="ts">
export default {
  name: 'test1'
}
</script>