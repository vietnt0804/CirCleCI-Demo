<template>
  <Card>
    <template #header>
      <h1>My Custom Header</h1>
    </template>
    <!-- <p>This is the main content of the card.</p> -->
    <!-- <p>This is the main content of the card.</p> -->
      <p>A paragraph for the main content.</p>
      <p>And another one.</p>
    <template #foo>
      <h1>My Custom Header xxx</h1>
    </template>

    <!-- <template #defaut>
      <small>Custom Footer 111</small>
    </template>
    <template #oip>
      <small>Custom Footer</small>
    </template> -->
  </Card>
</template>

<script setup>
import Card from '@/components/Card.vue'

</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
