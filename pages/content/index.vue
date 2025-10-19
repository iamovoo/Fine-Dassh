<template>
<div class=" grid grid-cols-3 p-8 pt-10">
  <div class="flex flex-col">
    <div class="flex gap-2">
      <div>
        <p class=" text-xl font-bold text-yellow-100 cursor-pointer">Feeling adventurous?</p>
        <p class=" text-green-700 text-lg cursor-pointer">Find a random meal to make.</p>
      </div>
      <div class="relative p-1">
        <button class=" flex text-center w-36 border-gray-400 border p-3 rounded-md text-yellow-100 font-bold absolute hover:bg-green-900 hover:top-[-1px] justify-center" @click="randomize">
        Randomize </button>
      </div>
    </div>

      <div class=" h-72 rounded-3xl mt-10 relative group  ">
      <nuxt-link :to="`/content/${food.idMeal}`">
        <img :src="food?.strMealThumb" alt="" class=" w-96 h-72 rounded-2xl  overflow-hidden object-cover opacity-70 hover:opacity-100 group-hover:scale-110">
        <h2 class="text-lg text-white absolute bottom-12 font-bold ml-5 pb-3 cursor-pointer group-hover:scale-110 w-44">{{ food?.strMeal }}</h2>
      </nuxt-link>
       <nuxt-link :to="`/content/country/${food.strArea}`"><button class=" bg-gray-100 w-20 rounded-3xl opacity-70 font-bold text-sm mr-2 inline ml-5 absolute bottom-8 hover:bottom-9 bg-opacity-50  ">{{food?.strArea}}</button></nuxt-link>
        <nuxt-link :to="`/content/category/${food?.strCategory}`"><button class=" bg-gray-100 w-24 rounded-3xl opacity-70 font-bold text-sm inline absolute left-28 bottom-8 bg-opacity-50 hover:bottom-9">{{food?.strCategory}}</button></nuxt-link>
        <button class="bg-red-800 w-8 rounded-3xl opacity-70 font-bold text-sm inline absolute left-56 bottom-8 bg-opacity-80 hover:scale-110 active:opacity-75" @click="save">❤</button>
      </div>
  </div>
  <div class="p-3 flex flex-col gap-6 ml-5">
     <nuxt-link :to="`/content/${mealOfTheDay.idMeal}`">
         <div class="bg-blue-300 rounded-3xl  h-44 px-5 w-80 pt-3 ">
          <p class=" p-1 font-bold text-xl font-sans cursor-pointer ">Meal of the day</p>
          <div class=" h-24 w-64 border-2  overflow-hidden rounded-3xl  mx-2 my-2 relative hover:scale-110 z-0 " >
            <img :src="mealOfTheDay.strMealThumb" alt="" class=" object-contain opacity-70 hover:opacity-100 z-0">
            <p class=" absolute top-10 left-16 font-bold text-white cursor-pointer z-0">{{ mealOfTheDay.strMeal }}</p>
          </div>
        </div>
     </nuxt-link>
      <nuxt-link :to="`/content/${category.idMeal}`">
        <div class="bg-blue-800 rounded-3xl  h-44 px-5 w-80 pt-3">
          <p class=" p-1 font-bold text-xl font-sans cursor-pointer text-yellow-200 ">Category of the day</p>
          <div class=" h-24 w-64 border-2  overflow-hidden rounded-3xl mx-2 my-2 relative hover:scale-110 " >
            <img :src="category.strMealThumb" alt="" class=" object-contain opacity-80 absolute hover:opacity-100">
            <p class=" absolute top-10 left-16 font-bold text-white cursor-pointer">{{ category.strMeal }}</p>
          </div>
        </div>
      </nuxt-link>
  </div>
  <div>
    <div>
      <h2 class=" font-bold text-2xl pb-4 text-yellow-200 cursor-pointer">Discover meals</h2>
      <div class=" flex border gap-3 mb-3">
        <button class=" text-white p-3 hover:bg-green-800 hover:bg-opacity-55 active:bg-green-700 active:bg-opacity-55 rounded-xl" @click="showCategories">Categories</button>
        <button class=" text-white p-3 hover:bg-green-800 hover:bg-opacity-55 active:bg-green-700 active:bg-opacity-55 rounded-xl" @click="showCountries">Countries</button>
        <button class=" text-white p-3 hover:bg-green-800 hover:bg-opacity-55 active:bg-green-700 active:bg-opacity-55 rounded-xl" @click="showingredients">Ingredients</button>
      </div>
    </div>

      <div v-if="categoryBtnIsClicked">
          <div >
            <p class="text-yellow-200 my-6 font-bold">{{total}} results</p>
          </div>
          <div class=" overflow-y-scroll h-80">
            <div class=" border-b p-3 mb-2 rounded-xl hover:bg-green-800 hover:bg-opacity-55 active:bg-green-700 active:bg-opacity-55 hover:border-0" v-for="category in listOfCategory" :key="category.strCategory">
            <nuxt-link :to="`/content/category/${category.strCategory}`">
              <p class=" font-bold text-yellow-200 cursor-pointer">{{category.strCategory}}</p>
            </nuxt-link>
            </div>
          </div>
        </div>


      <div v-if="countriesBtnIsClicked">
        <div>
          <p class="text-yellow-200 my-6 font-bold">{{totalCountries}} results</p>
        </div>
        <div class=" overflow-y-scroll h-80">
          <div class=" border-b p-3 mb-2 rounded-xl hover:bg-green-800 hover:bg-opacity-55 active:bg-green-700 active:bg-opacity-55 hover:border-0" v-for="country in countries" :key="country.strArea">
          <nuxt-link :to="`/content/country/${country.strArea}`">
            <p class=" font-bold text-yellow-200 cursor-pointer">{{country.strArea}}</p>
          </nuxt-link>
          </div>
        </div>
      </div>

      <div v-if="ingredientBtnIsClicked">
        <div>
          <p class="text-yellow-200 my-6 font-bold">{{totalIngredients}} results</p>
        </div>
        <div class=" overflow-y-scroll h-80 ">
          <div class=" border-b p-3 mb-2 rounded-xl hover:bg-green-800 hover:bg-opacity-55 active:bg-green-700 active:bg-opacity-55 hover:border-0" v-for="ingredient in ingredients" :key="ingredient.idIngredient">
            <nuxt-link :to="`/content/ingredient/${ingredient.strIngredient}`">
            <p class=" font-bold text-yellow-200 cursor-pointer">{{ingredient.strIngredient}}</p>
            </nuxt-link>
          </div>
        </div>
      </div>
  </div> 
</div>
<!-- <ShowModal/> -->
</template>

<script setup>
// import ShowModal from '../components/showModal.vue'

const total = ref('')
let categoryBtnIsClicked = ref(true)
let countriesBtnIsClicked = ref(false)
let ingredientBtnIsClicked = ref(false)
const totalCountries = ref('')
const food = ref('')
const ingredients = ref('')
const totalIngredients = ref('')
const category = ref('')
const countries = ref('')
const listOfCategory = ref('')
const mealOfTheDay = ref('')
const savedId = useCookie('saved')


onMounted( async()=>{
const {data} = await useFetch('https://www.themealdb.com/api/json/v1/1/random.php')
food.value = await data.value.meals[0];

console.log(food.value);

const save = function(){
savedId.value = food.value.idMeal
 console.log('hello', savedId.value);
}
const randomize = async ()=>{
  const {data} = await useFetch('https://www.themealdb.com/api/json/v1/1/random.php')
  food.value = await data.value.meals[0];
}

const {data:meal} = await useFetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
mealOfTheDay.value = await meal.value.meals[5];
// console.log(mealOfTheDay.value );

const {data:dataRecommend} = await useFetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=beef')
category.value = await dataRecommend.value.meals[5];
// console.log(dataRecommend.value );

const {data:listCategories} = await useFetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
listOfCategory.value = await listCategories.value.meals;
total.value = [...listCategories.value.meals].length
// console.log(listOfCategory.value , total.value);

const {data:listCountries} = await useFetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
countries.value = await listCountries.value.meals;
totalCountries.value = [...listCountries.value.meals].length
// console.log(countries.value, totalCountries.value, listCountries.value);

const {data:Ingredients} = await useFetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
ingredients.value = await Ingredients.value.meals;
totalIngredients.value = [...Ingredients.value.meals].length
// console.log(ingredients.value, totalIngredients.value, Ingredients.value);
 })

const showCategories = function(){
   categoryBtnIsClicked.value = true
 countriesBtnIsClicked.value= false
 ingredientBtnIsClicked.value = false
}
const showCountries = function(){
   categoryBtnIsClicked.value = false
 countriesBtnIsClicked.value= true
 ingredientBtnIsClicked.value = false
}
const showingredients = function(){
     categoryBtnIsClicked.value = false
 countriesBtnIsClicked.value= false
 ingredientBtnIsClicked.value = true
}





  


</script>