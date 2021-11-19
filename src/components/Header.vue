<template>
  <div id="header">
      <h1 id="portada" :style="{color: this.color}">{{titulo}}</h1>
  </div>
</template>

<script>
export default {
    name: 'Header',
    props: {
        titulo: String, color: String
    }
}
</script>