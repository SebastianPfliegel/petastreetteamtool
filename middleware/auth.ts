export default defineNuxtRouteMiddleware(async () => {
  const { account } = useAppwrite();

  try {
    await account.get();
  } catch {
    return navigateTo("/admin/login");
  }
});
