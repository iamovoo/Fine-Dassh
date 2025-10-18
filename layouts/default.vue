<template>
<div class=" bg-green-950 flex justify-between h-20 w-lvw ">
  
      <div class="flex justify-center p-4" >
        <div class="w-10 bg-yellow-200 p-1 mb-16 h-10">
          <img src="/assets/restaurant.png" alt="" class=" object-cover"></img>
        </div>
        <h2 class="p-2 font-bold font-serif text-yellow-200 cursor-pointer hover:opacity-85 active:opacity-75"><nuxt-link to="/">Fine Dassh</nuxt-link></h2>
      </div>
      <div class=" ml-64 relative" >
        <button class="font-bold text rounded-xl flex h-8 m-5 pl-3 pt-0 w-28 border-none hover:bg-green-900 active:bg-green-700" @click="clicked ">
          <span class=" pt-0.5  text-yellow-200">Hi,</span>
          <span class="font-bold text-lg pl-1 text-yellow-200">{{ user }}</span> 
          <svg xmlns="http://www.w3.org/2000/svg" 
            class="w-5 h-5 text-gray-500 pt-3 font-bold" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
            d="M19 9l-7 7-7-7" />
          </svg>
       </button>

        <div class="flex flex-col border-black bg-green-700 w-64  rounded-2xl py-3 absolute left-[-36px] transition-all z-50" v-show="isClicked">
          <nuxt-link to="/favourite" @click="removeNav">
            <div class="flex gap-3  p-4 hover:bg-green-800 hover:bg-opacity-55 active:bg-green-700 active:bg-opacity-55"> 
              <img src="/assets/heart.png" alt="" class="w-4">
              <P>Saved</P>
            </div>
          </nuxt-link>
          <button @click="showModal">
            <div class="flex gap-3  p-4 hover:bg-green-800 hover:bg-opacity-55 active:bg-green-700 active:bg-opacity-55 "> 
              <img src="/assets/about.png" alt="" class="w-4">
              <p>About?</p>
            </div>
          </button>
        <nuxt-link to="/logout">
          <div class="flex gap-3 border-t-2 border-t-black p-4 w-64 hover:bg-green-800 hover:bg-opacity-55 active:bg-green-700 active:bg-opacity-55">
            <img src="/assets/logout.png" alt="" class="w-4">
            <p>Log out</p>
          </div>
        </nuxt-link>
      </div>
      </div>
       
      <div class=" p-4 relative"> 
        <input type="search" name="searchMeal" id="" placeholder="Search for a meal" class="p-2 pr-6 rounded-xl w-96  bg-green-800 opacity-70" v-model="searchMealInp">
      </div>
      <div class="w-96 absolute bg-green-800 border right-0 rounded-2xl top-16 h-64 bg-opacity-80 overflow-y-scroll z-50" v-if="showSearch"> 
        <div class="relative " v-if="isNoResult"><p class=" absolute right-36 top-24 font-bold text-yellow-200">No results</p></div>
        <div class=" p-3 border-b hover:bg-green-700 hover:bg-opacity-55 active:bg-green-600 active:bg-opacity-55" v-for="meal in searchMeal" :key="meal.idMeal">
        <nuxt-link :to="`/content/${meal.idMeal}`" @click="removeSearch"><p class=" font-bold text-yellow-200 block">{{meal.strMeal}}</p></nuxt-link>
        </div>
         <!-- <div class=" p-3 border-b hover:bg-green-700 hover:bg-opacity-55 active:bg-green-600 active:bg-opacity-55">
          <p class=" font-bold text-yellow-200 block">shut</p>
        </div>
         <div class=" p-3 border-b hover:bg-green-700 hover:bg-opacity-55 active:bg-green-600 active:bg-opacity-55">
          <p class=" font-bold text-yellow-200 block">sigh</p>
        </div> -->
      </div>
</div>
<div class="bg-green-950 w-lvw h-lvh" @click="removeNav"> 
    <slot />
</div>
<ShowModal />
</template>
<script setup>
import ShowModal from '~/components/ShowModal.vue'

const username = useCookie('username')
let user = ref('')
user.value  = username.value.username[0].toLocaleUpperCase() + username.value.username.slice(1)
console.log(user.value)

const clicked = function(){
  isClicked.value = !isClicked.value
}
const removeSearch = function(){
showSearch.value = false
searchMealInp.value = ''
}
let isClicked = ref(false);
const removeNav = function(){
  isClicked.value = false
}
const searchMealInp = ref('')
const searchMeal = ref('')
let showSearch = ref(false)
let isNoResult = ref(false)
watch(searchMealInp,  async function ( ){   
//  console.log(searchMealInp.value)
if(searchMealInp.value){
  showSearch.value = true
  isNoResult.value = false
  const {data:searchedMeals } = await useFetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMealInp.value}`)
  searchMeal.value = await searchedMeals.value.meals;
  console.log(searchMealInp.value)
  console.log(searchMeal.value, searchedMeals.value);
  if(!searchMeal.value){
   console.log('no result')
   isNoResult.value = true
  }
}
else{
  console.log('error')
   showSearch.value = false
}
})
let modal = ref(false)
const modalShow = useCookie('modal')
const showModal = () =>{
  removeNav()
  modal.value = true
  modalShow.value = modal.value
  console.log(modalShow.value)
}
</script>