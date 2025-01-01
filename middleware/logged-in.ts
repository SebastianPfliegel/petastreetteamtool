export default defineNuxtRouteMiddleware(async () => {
  const store = useAuthStore();

  try {
    await store.tryLogIn();
    return navigateTo("/admin");
  } catch {
    /* empty */
  }
});
