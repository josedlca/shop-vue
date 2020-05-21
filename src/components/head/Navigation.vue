<template>
    <div class=" container mx-auto flex flex-row py-12">
        <div class=" w-3/12 lg:w-2/12 flex items-center">
          <img class="w-8/12 max-w-full h-auto" src="../../assets/img/logo.png" alt="logo">
        </div>
        <div class=" w-7/12 lg:w-8/12 flex items-center lg:justify-center">
          <ul class=" flex flex-row">
              <li class=" text-base text-almost-black mx-4 lg:mx-7">Home</li>
              <li class=" text-base text-almost-black mx-4 lg:mx-7">Products</li>
              <li class=" text-base text-almost-black mx-4 lg:mx-7">Hot Deals</li>
              <li class=" text-base text-almost-black mx-4 lg:mx-7">About</li>
              <li class=" text-base text-almost-black mx-4 lg:mx-7">Contact</li>
          </ul>
        </div>
        <div class=" w-2/12 flex items-center justify-end">
          <ul class=" flex flex-row">
              <li>
                <svg class="w-4 h-4" viewBox="0 0 24 24"><path d="M23.111 20.058l-4.977-4.977c.965-1.52 1.523-3.322 1.523-5.251 0-5.42-4.409-9.83-9.829-9.83-5.42 0-9.828 4.41-9.828 9.83s4.408 9.83 9.829 9.83c1.834 0 3.552-.505 5.022-1.383l5.021 5.021c2.144 2.141 5.384-1.096 3.239-3.24zm-20.064-10.228c0-3.739 3.043-6.782 6.782-6.782s6.782 3.042 6.782 6.782-3.043 6.782-6.782 6.782-6.782-3.043-6.782-6.782zm2.01-1.764c1.984-4.599 8.664-4.066 9.922.749-2.534-2.974-6.993-3.294-9.922-.749z"/></svg>
              </li>
              <li class=" mx-7">
                <svg class="w-4 h-4" viewBox="0 0 24 24"><path d="M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z"/></svg>
              </li>
              <li class=" mr-2">
                <svg class="w-4 h-4" viewBox="0 0 24 24"><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm-10.563-5l-2.937-7h16.812l-1.977 7h-11.898zm11.233-5h-11.162l1.259 3h9.056l.847-3zm5.635-5l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z"/></svg>
              </li>
          </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>
