<template>
<div class=" p-4 bg-green-950">
 <div class="flex gap-2"> <nuxt-link to="/content" class="text-yellow-300 font-bold text-2xl hover:opacity-80 active:opacity-75 hover:underline">Home</nuxt-link> 
  <span class=" font-bold text-yellow-100 text-2xl">/</span> 
  <p class="text-yellow-300 font-bold text-2xl hover:opacity-80 active:75 cursor-pointer">Saved Recipes</p>
</div>
  <div class="" v-if="isFav"><h2 class=" text-white text-xl mt-9" >No Saved Food ...</h2></div>
  <ul class=" grid grid-cols-4 mt-4 overflow-y-scroll w-lvw h-96" >
    <li class="py-3" v-for="food in liked" :key="food?.id">
      <div class=" w-64 rounded-l-xl grid border grid-cols-2 rounded-lg overflow-hidden">
        <nuxt-link :to="`/content/${food.id}`"><img :src="food?.image" alt="" class="object-contain hover:opacity-80 active:opacity-75"></nuxt-link>
        <div class=" flex flex-col gap-2">
          <div class=" flex justify-end"><button class=" font-bold p-2 text-xs " @click="deleteFood(food?.id)">❌</button></div>
          <div class=" px-2">
            <nuxt-link :to="`/content/${food.id}`"><h4 class=" text-yellow-200 cursor-pointer text-xs hover:opacity-80 active:opacity-75 hover:underline">{{food?.name}}</h4></nuxt-link>
            <nuxt-link :to="`/content/country/${food.area}`"><p class=" text-yellow-100 cursor-pointer text-xs hover:opacity-80 active:opacity-75 hover:underline">{{food?.area}}</p></nuxt-link>
          </div>
        </div>
    </div>
    </li>
</ul>
</div>
</template>
<script setup>

const savedId = useCookie('saved')
console.log(savedId.value);
const isFav = ref(false)
const liked = useCookie('liked', { default: () => [] })

onMounted( async ()=>{
  if (!savedId.value) return
  const {data, error} = await useFetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${savedId.value}`)
   const food = await data?.value?.meals[0];
   console.log(data.value?.meals[0]);
   console.log(food)
   if(!food) return
  const check = liked.value.some((meal)=> meal.id === food?.idMeal)
  if(!check){
    liked.value.push({name:food?.strMeal, area:food?.strArea , image:food?.strMealThumb , id:food?.idMeal})
    console.log(liked.value)
  }
  if(!liked.value){
    isFav.value = true
  }
  console.log(error.value)
})

const deleteFood = function(id){
 liked.value = liked.value.filter((food)=>{
    return food.id !== id
  })
}
</script>