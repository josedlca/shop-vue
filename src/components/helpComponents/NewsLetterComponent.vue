<template>
  <div class=" container mx-auto pb-16">
    <div class=" bg-white w-full py-8 flex flex-row">
      <div class=" w-1/2 flex flex-col justify-center items-center">
        <h4 class=" text-main-orange text-lg font-extrabold uppercase">News Letter</h4>
        <p class=" text-sm italic text-smooth-gray">join us now to get all news and speciall offers</p>
      </div>
      <div class=" w-1/2 flex flex-row items-center justify-center">
        <svg class=" w-5 h-5 mt-1 mr-3" viewBox="0 0 24 24"><path class=" fill-current text-main-orange" d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z"/></svg>
        <input class=" outline-none text-like-gray placeholder-like-gray text-sm italic" type="text" placeholder="type your email here">
        <button class="focus:outline-none text-white bg-main-orange text-sm font-semibold px-5 py-4">join us</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsKetterComponent'
}
</script>
