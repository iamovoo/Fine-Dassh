 <template>
 <div class="relative" v-if="modalShow">
   <div class="  bg-green-900 bg-opacity-85 fixed top-0 bottom-0 left-0 right-0">
   <div class="absolute">
     <div class=" w-96 border bg-white shadow-2xl rounded-lg fixed top-1/3 left-1/3">
      <div class=" flex justify-end  font-bold bottom-0"><button @click="cancelModal" class=" px-3 pt-1 hover:opacity-70 active:opacity-60">x</button></div>
      <p class=" p-4 pt-2 cursor-pointer"><span class=" font-bold ">Fine Dassh</span> is a practice app created by <span class=" font-bold">Ovo</span> in Oct, 2025. <br>
        This app was built around the API from <span class=" opacity-70 hover:underline">TheMealDB.com</span></p>
    </div>
    </div>
</div>
 </div>
</template>
<script setup>
const modalShow = useCookie('modal')
const cancelModal = function(){
  modalShow.value = !modalShow.value
}
</script>