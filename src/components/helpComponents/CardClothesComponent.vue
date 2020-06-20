<template>
    <div :class="[colNumbers === '4' ? 'w-1/4' : 'w-1/3']"  class="px-3 mb-10">
      <div class=" bg-white px-2 py-3">
        <div class=" h-0 w-full pt-11/25 relative my-3">
          <img class=" w-full h-full absolute top-0 left-0 py-3 px-5" :src= srcImg alt="nothing">
        </div>
        <div class=" w-full">
          <p class=" text-base text-second-light-gray flex justify-center font-medium mb-4">Reebok Track Jacket</p>
          <div class=" text-lg text-main-orange flex justify-center">100$</div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'CardClothesComponent',
  props: {
    srcImg: {
      type: String
    },
    colNumbers: {
      type: String,
      default: '4'
    }
  }
}
</script>
