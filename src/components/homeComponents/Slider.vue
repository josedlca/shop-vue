<template>
  <carousel :items="1" :nav="false">
    <div class=" md:h-my/32 lg:h-44 xl:h-44">
      <img class=" w-full h-full" src="../../assets/img/ft-bg.png" alt="">
      <div class=" absolute w-full inset-0 py-16 flex items-center">
        <div class=" container mx-auto">
          <div class=" w-7/12">
            <h2 class=" text-5/2xl text-main-orange font-extrabold leading-none mb-6">FULL WINTER KIT</h2>
            <h6 class=" text-lg text-almost-black font-semibold mb-2">Half Jacket + Skiny Trousers + Boot leather</h6>
            <p class=" text-base text-almost-black mb-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum iste illum deleniti.</p>
            <div class=" flex flex-row">
              <p class="text-lg text-almost-black font-semibold mr-4">Price: s/.120</p>
              <button class=" flex flex-row text-lg text-main-orange font-semibold">
                <svg class="w-6 h-6" viewBox="0 0 24 24"><path class=" fill-current text-main-orange" d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm-10.563-5l-2.937-7h16.812l-1.977 7h-11.898zm11.233-5h-11.162l1.259 3h9.056l.847-3zm5.635-5l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z"/></svg>
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class=" md:h-my/32 lg:h-44 xl:h-44">
      <img class=" w-full h-full" src="../../assets/img/ft-bg.png" alt="">
      <div class=" absolute w-full inset-0 py-16 flex items-center">
        <div class=" container mx-auto">
          <div class=" w-7/12">
            <h2 class=" text-5/2xl text-main-orange font-extrabold leading-none mb-6">FULL WINTER KIT</h2>
            <h6 class=" text-lg text-almost-black font-semibold mb-2">Half Jacket + Skiny Trousers + Boot leather</h6>
            <p class=" text-base text-almost-black mb-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum iste illum deleniti.</p>
            <div class=" flex flex-row">
              <p class="text-lg text-almost-black font-semibold">Price: s/.120</p>
              <button class=" flex flex-row text-lg text-main-orange font-semibold">
                <svg class="w-6 h-6" viewBox="0 0 24 24"><path class=" fill-current text-main-orange" d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm-10.563-5l-2.937-7h16.812l-1.977 7h-11.898zm11.233-5h-11.162l1.259 3h9.056l.847-3zm5.635-5l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z"/></svg>
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class=" md:h-my/32 lg:h-44 xl:h-44">
      <img class=" w-full h-full" src="../../assets/img/ft-bg.png" alt="">
      <div class=" absolute w-full inset-0 py-16 flex items-center">
        <div class=" container mx-auto">
          <div class=" w-7/12">
            <h2 class=" text-5/2xl text-main-orange font-extrabold leading-none mb-6">FULL WINTER KIT</h2>
            <h6 class=" text-lg text-almost-black font-semibold mb-2">Half Jacket + Skiny Trousers + Boot leather</h6>
            <p class=" text-base text-almost-black mb-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum iste illum deleniti.</p>
            <div class=" flex flex-row">
              <p class="text-lg text-almost-black font-semibold">Price: s/.120</p>
              <button class=" flex flex-row text-lg text-main-orange font-semibold">
                <svg class="w-6 h-6" viewBox="0 0 24 24"><path class=" fill-current text-main-orange" d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm-10.563-5l-2.937-7h16.812l-1.977 7h-11.898zm11.233-5h-11.162l1.259 3h9.056l.847-3zm5.635-5l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z"/></svg>
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </carousel>
</template>

<script>
import carousel from 'vue-owl-carousel'
export default {
  name: 'Slider',
  components: {
    carousel
  }
}
</script>
