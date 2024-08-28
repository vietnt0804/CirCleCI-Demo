<template>
  <div class="card">
    <header>
      <slot name="header">Default Header</slot>
    </header>
    <main>
      <slot>Default Content</slot>
    </main>
    <main>
      <slot>Default Content 1</slot>
    </main>
    <footer>
      <slot name="foo">Default Footer b</slot>
    </footer>
    <footer>
      <slot name="teter">Default Footer a</slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'CardComponent'
}
</script>