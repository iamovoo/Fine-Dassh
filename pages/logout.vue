<template>
  <p>Hi Logout</p>
</template>
<script setup>
  definePageMeta({
    middleware: 'logout'
  })
</script>