<template>
 <div class=" bg-green-950">
    <nav class=" flex gap-1 p-4 border-b">
     <nuxt-link to="/content" class=" text-yellow-200 text-3xl font-bold hover:underline hover:opacity-80 active:opacity-60 pl-4 font-serif">Home</nuxt-link> 
     <span class=" px-3 text-3xl text-yellow-200">/</span>
     <h2 class=" font-bold text-3xl text-white cursor-pointer hover:opacity-80">{{ food?.strMeal }}</h2>
    </nav>
    <!-- id:{{ id }} -->
    <div class=" p-5 grid grid-cols-2">
      <div class=" p-4">
       <div class=" w-96 h-80 overflow-hidden rounded-2xl hover:scale-105">
         <img :src="food.strMealThumb" alt="" class=" w-96 rounded-2xl object-contain opacity-70 hover:opacity-100 "></img>
       </div>
        <div class="bg-yellow-200 border mt-16 w-80 rounded-md flex gap-3"> 
           <div class="w-10 overflow-hidden ">
            <a :href="food.strYoutube" target="_blank"><img src="/assets/youtube2.png" alt="" class="w-32 opacity-70 object-contain"></img></a>
          </div>
         <h2 class=" font-bold text-md text-red-500 hover:underline hover:text-blue-500 active:opacity-70 pt-3 "><a :href="food.strYoutube " target="_blank">click for a YouTube Tutorial</a></h2>
       </div>
      </div>
      <div>
        <div class=" flex gap-2 py-3">
          <button class=" border text-yellow-200 font-bold p-3  hover:bg-green-800 hover:bg-opacity-55 active:bg-green-700 active:bg-opacity-55 rounded-xl" @click="instructionBtn">Instructions</button>
          <button class=" border text-yellow-200 font-bold p-3  hover:bg-green-800 hover:bg-opacity-55 active:bg-green-700 active:bg-opacity-55 rounded-xl" @click="ingredientBtn">Ingredients</button>
        </div>
       <div class=" p-4" v-if="isInstructionsClicked">
         <h2 class=" text-white font-bold text-2xl pb-4 cursor-pointer">{{ food.strMeal }} - Instructions </h2>
         <p class=" text-yellow-100 cursor-pointer">{{ food.strInstructions }}</p>
       </div>
       <div class=" p-4" v-if="isIngredientsClicked">
         <h2 class=" text-white font-bold text-2xl pb-4 cursor-pointer">{{ food.strMeal }} - Ingredients </h2>
         <div class="grid grid-cols-3 ">
           <div class=" p-2" v-for="ingredient in ingredientsArr" :key="ingredient">
            <div class="flex gap-2 w-64 p-2">
             <img :src="`https://www.themealdb.com/images/ingredients/${ingredient}.png`" alt="" class=" w-10">
             <p class=" text-yellow-100 cursor-pointer w-20">{{ingredient}}</p>
            </div>
           </div>
         </div>
       </div>
      </div>
    </div>
 </div>
 <footer class=" bg-green-950 w-lvw p-1 text-yellow-300 h-16  text-xs relative">
 <div class="absolute bottom-0 left-96">
   <h2 class=" text-center font-bold  pl-36 pb-2">Designed by OVO; Template from TOFUNMI</h2>
 </div>
</footer>
</template>
<script setup>
const {id} = useRoute().params
const food = ref('')
const ingredientsArr = ref([])
const {data} = await useFetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
  food.value = await data.value.meals[0];
  // console.log(food.value);
for (let i = 1; i <= 20; i++) {
  if(food.value[`strIngredient${i}`]){
  ingredientsArr.value.push(food.value[`strIngredient${i}`])
  }
  // console.log(ingredientsArr.value);
}
// const {data:img} = await useFetch(`https://www.themealdb.com/images/ingredients/onions.png`)
// console.log(img);



let isInstructionsClicked = ref(true)
let isIngredientsClicked = ref(false)
const instructionBtn = function(){
  isIngredientsClicked.value = false
  isInstructionsClicked.value =  true
   console.log('instructionBtn');
   
}
const ingredientBtn = function(){
  isInstructionsClicked.value = false
   isIngredientsClicked.value = true
  console.log('ingredientBtn');
}
</script>