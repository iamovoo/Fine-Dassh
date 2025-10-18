<template>
<div class=" w-lvw h-lvh opacity-90 bg-green-950">
 <div>
    <div class=" relative overflow-hidden w-1vw h-96"> <img src="/assets/vegetarian.jpg" alt="" class=" w-lvw object-contain"></img></div>
    <div class="px-1 pt-10 absolute left-2 top-1">
      <nav>
        <div class="w-10 bg-yellow-200 p-1 mb-10">
          <img src="/assets/restaurant.png" alt="" class=" overflow-auto"></img>
        </div>
      </nav>
      <h3 class=" font-bold font-serif text-yellow-300 text-2xl" > Welcome to <br/> <span class=" text-5xl">Fine Dash</span></h3>
      <p class=" w-96 text-yellow-200 py-3 text-sm">Find fun recipes for meals from around the world. Whether you're a seasoned chef or just starting your cooking journey,
      these recipes are your key to creating mouthwatering masterpieces in your very own kitchen.</p>
      <input type="text" name="searchFoodInp" placeholder="Whats your name ?" class="p-2 rounded border-2 w-72" v-model="user">
      <button @click="startExploring" class=" bg-yellow-200 rounded p-2 w-40 ml-6 hover:opacity-85 active:opacity-75">Start Exploring</button>
    </div>
   
 </div>
   <div class=" flex gap-2 mt-4 p-2"> 
     <div class=" overflow-hidden h-28 w-64 rounded-xl "><img src="/assets/ChickenPotPie.jpg" alt="" class="hover:scale-110 hover:transition-all opacity-80 hover:opacity-100  object-contain"></img></div>
     <div class=" overflow-hidden h-28 w-64 rounded-xl "> <img src="/assets/tacos.jpeg" alt="" class="hover:scale-110 hover:transition-all opacity-85 hover:opacity-100   object-contain"></img></div>
     <div class=" overflow-hidden h-28 w-64 rounded-xl "><img src="/assets/chicken.jpeg" alt="" class="hover:scale-110  hover:transition-all opacity-80 hover:opacity-100   object-contain"></img></div>
     <div class=" overflow-hidden h-28 w-64 rounded-xl "> <img src="/assets/hamburger.jpeg" alt="" class="hover:scale-110  hover:transition-all opacity-80 hover:opacity-100  object-contain"></img></div>
     <div class=" overflow-hidden h-28 w-64 rounded-xl "> <img src="/assets/ChickenPotPie.jpg" alt="" class="hover:scale-110  hover:transition-all opacity-80 hover:opacity-100  object-contain "></img></div>
  </div>
    <p class=" text-xs text-yellow-200 font-bold  px-3 pt-1 text-center"> &middot; Save & Organize: Bookmark your favorite dishes and create personal collections for easy access. Practice your skills with help from us... Help us to help you !!!</p>
</div>
</template>
<script setup>
const user = ref('')
const username = useCookie('username')
definePageMeta({
  layout: false
})
const startExploring = function(){
  username.value = {username: user.value}
  if(username.value){
    navigateTo('/content')
  }
}
</script>