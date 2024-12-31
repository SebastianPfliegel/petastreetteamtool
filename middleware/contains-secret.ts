export default defineNuxtRouteMiddleware(() => {
  const route = useRoute();

  const { userId, secret } = route.query;

  if (!userId || !secret) {
    return navigateTo("/admin/login");
  }
});
