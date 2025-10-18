<template>
 <div class=" bg-green-950">
    <nav class=" flex gap-1 p-4 border-b">
     <nuxt-link to="/content" class=" text-yellow-200 text-3xl font-bold hover:underline hover:opacity-80 active:opacity-60 pl-4 font-serif">Home</nuxt-link> 
     <span class=" px-3 text-3xl text-yellow-200">/</span>
     <h2 class=" font-bold text-3xl text-white cursor-pointer hover:opacity-80">{{ id }}</h2>
    </nav>
    <div class=" p-8 grid grid-cols-5">
       <div v-for="food in category">
          <nuxt-link :to="`/content/${food.idMeal}`">
            <div class=" w-36 overflow-hidden rounded-2xl">
             <img :src="food.strMealThumb" alt="" class=" w-36 rounded-2xl object-contain opacity-70 hover:opacity-100 hover:scale-110 "></img>
          </div>
          </nuxt-link>
        <nuxt-link :to="`/content/${food.idMeal}`">
           <p class=" text-yellow-200 font-bold cursor-pointer w-36  pt-2 pb-4 hover:underline hover:opacity-80 text-center">{{ food.strMeal }}</p>
        </nuxt-link>
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
const category = ref('')
const {data} = await useFetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${id}`)
category.value = await data.value.meals
console.log(category.value);

</script>