export default defineNuxtRouteMiddleware(async () => {
  const store = useAuthStore();

  if (store.isLoggedIn) {
    return;
  }

  try {
    await store.tryLogIn();
  } catch {
    return navigateTo("/admin/login");
  }
});
