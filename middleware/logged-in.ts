export default defineNuxtRouteMiddleware(async () => {
  const { account } = useAppwrite();

  try {
    await account.get();
    return navigateTo("/admin");
  } catch {
    /* empty */
  }
});
