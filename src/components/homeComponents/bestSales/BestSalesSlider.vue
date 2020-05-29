<template>
  <div class=" container mx-auto">
    <carousel :items="3" :nav="false">
      <div class=" w-full px-1" v-for="(item, index) in this.bestJacket" :key="index">
        <div class=" bg-white flex flex-row py-4 px-2 md:justify-center">
          <div>
            <img src="@/assets/img/img-4.png" alt="jacket">
          </div>
          <div class=" flex flex-col pl-2 items-center justify-center">
            <p class=" text-lg text-smooth-gray font-bold">{{item}}</p>
            <div class=" flex flex-row">
              <StarRating
              :star-size= '20'
              :rounded-corners= false
              :show-rating= false
              :padding= '0'
              active-color='#FF5912'
              />
              <p class=" text-main-orange font-medium">S/.100</p>
            </div>
          </div>
        </div>
      </div>
    </carousel>
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
import StarRating from 'vue-star-rating'
export default {
  name: 'BestSalesSlider',
  components: {
    carousel,
    StarRating
  },
  data () {
    return {
      bestJacket: ['Reebook Track Jacket', 'Reebook Track Jacket', 'Reebook Track Jacket', 'Reebook Track Jacket']
    }
  }
}
</script>
