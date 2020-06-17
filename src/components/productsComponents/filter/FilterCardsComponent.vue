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
              {{item}}
            </template>
          </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilterCardsComponent',
  data () {
    return {
      categoriArr: ['Man', 'Woman', 'Childrens', 'Hot Deals'],
      sizesArr: ['Small', 'Medium', 'Large', 'XLarge'],
      brandsArr: ['Reebok', 'Addidas', 'Nike', 'Active']
    }
  },
  props: {
    kindOfFilter: {
      type: String,
      default: 'Categories'
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
    }
  }
}
</script>
