export default defineNuxtRouteMiddleware((to, from)=>{
  const username = useCookie('username')
      username.value = null
      console.log(to, from)
     return navigateTo('/')
})