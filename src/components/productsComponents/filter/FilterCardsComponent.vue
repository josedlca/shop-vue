<template>
  <div class="pr-5 mb-10">
    <div class=" bg-white py-3 px-3">
      <h4 class=" text-lg text-main-orange font-extrabold mb-4">{{kindOfFilter}}</h4>
        <ul>
          <li class=" text-base font-bold text-smooth-gray my-4"
              v-for="(item,index) in whatArrUse(kindOfFilter)" :key="index"
          >
            <template v-if="kindOfFilter != 'Categories'">
              <input class=" mr-2" type="checkbox" :name= item >
              <label :for= item>{{item}}</label>
            </template>
            <template v-else>
              <span @click="searchEspecific()" class=" cursor-pointer">
                {{item}}
              </span>
            </template>
          </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilterCardsComponent',
  props: {
    kindOfFilter: {
      type: String,
      default: 'Categories'
    },
    myClothes: {
      type: [Array, Object]
    }
  },
  methods: {
    whatArrUse: function (x) {
      if (x === 'Categories') {
        return this.categoriArr
      } else if (x === 'Sizes') {
        return this.sizesArr
      } else {
        return this.brandsArr
      }
    },
    searchEspecific: function () {
      if (event.srcElement.innerText === 'Man') {
        this.fullInfo = this.myClothes.filter(item => (item.id % 2) === 0)
        return this.$emit('passClothes', this.fullInfo)
      } else if (event.srcElement.innerText === 'Woman') {
        this.fullInfo = this.myClothes.filter(item => (item.id % 3) === 0)
        return this.$emit('passClothes', this.fullInfo)
      } else if (event.srcElement.innerText === 'Childrens') {
        this.fullInfo = this.myClothes.filter(item => (item.id % 4) === 0)
        return this.$emit('passClothes', this.fullInfo)
      } else {
        this.fullInfo = this.myClothes.filter(item => (item.id % 5) === 0)
        return this.$emit('passClothes', this.fullInfo)
      }
    }
  },
  data () {
    return {
      categoriArr: ['Man', 'Woman', 'Childrens', 'Hot Deals'],
      sizesArr: ['Small', 'Medium', 'Large', 'XLarge'],
      brandsArr: ['Reebok', 'Addidas', 'Nike', 'Active'],
      fullInfo: []
    }
  }
}
</script>
