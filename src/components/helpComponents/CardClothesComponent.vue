<template>
    <div class=" w-1/4 px-3">
      <div class=" bg-white">
        <div class=" h-0 w-full pt-11/25 relative">
          <img class=" w-full h-full absolute top-0 left-0 py-3 px-5" :src= srcImg alt="nothing">
        </div>
        <p class=" text-base text-second-light-gray font-medium">Reebok Track Jacket</p>
        <div class=" text-lg text-main-orange">100$</div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'CardClothesComponent',
  props: {
    srcImg: {
      type: String
    }
  }
}
</script>
