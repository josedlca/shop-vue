<template>
  <div class=" container mx-auto pb-12">
    <div class="flex flex-row">
      <div class=" w-8/12 px-3">
        <div class=" w-full bg-white flex flex-row py-3">
          <img class=" px-3" src="@/assets/img/descont.png" alt="50% descont">
          <div class=" flex flex-col justify-center">
            <h5 class=" text-2xl font-bold uppercase text-smooth-gray mb-4">FULL WINTER KIT</h5>
            <p class=" text-xs text-smooth-gray ">Half Jackets + Skiny Trouser + Booth Leather</p>
          </div>
          <div class=" flex items-center">
            <div class="flex flex-row items-end px-3">
              <svg class=" w-5 h-5" viewBox="0 0 24 24"><path class=" fill-current text-main-orange" d="M10 20.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.304-17l-3.431 14h-2.102l2.541-11h-16.812l4.615 13h13.239l3.474-14h2.178l.494-2h-4.196z"/></svg>
              <div class=" text-4xl text-main-orange font-extrabold leading-none">S/120</div>
            </div>
          </div>
        </div>
      </div>
      <div class=" w-4/12 px-3">
        <div class=" w-full bg-white flex flex-col h-full justify-center items-center">
          <div class=" text-base text-almost-black lowercase font-medium">ADV <span class=" text-main-orange">area</span></div>
          <div class=" text-xs text-light-gray">470 x 100</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FullWinterComponent'
}
</script>
