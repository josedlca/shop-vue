<template>
    <div class=" container mx-auto flex-col">
        <h2 class=" text-4xl text-main-orange uppercase font-extrabold flex justify-center leading-none mb-5">{{titlePartOne}}<span class=" text-smooth-gray ml-2">{{titlePartTwo}}</span></h2>
        <p class=" text-base text-smooth-gray font-medium flex justify-center">{{titleDescription}}</p>
    </div>
</template>

<script>
export default {
  name: 'TitleComponent',
  props: {
    titlePartOne: {
      type: String
    },
    titlePartTwo: {
      type: String
    },
    titleDescription: {
      type: String
    }
  }
}
</script>
