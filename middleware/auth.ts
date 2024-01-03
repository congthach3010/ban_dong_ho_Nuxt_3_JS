export default defineNuxtRouteMiddleware((to, from) => {
  const tokenStore = useTokenStore();
  // const token = localStorage.getItem("token");

  if (!tokenStore.getStatus) {
    return navigateTo("/admin/login");
  }
});
