<template>
    <div>
        <h2>{{title}}</h2>
    </div>
</template>

<script>
export default {
  name: 'TitleComponent',
  props: {
    title: {
      type: String
    }
  }
}
</script>
