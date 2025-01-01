import type { Models } from "appwrite";

export const useAuthStore = defineStore("auth", () => {
  const { account } = useAppwrite();
  const {
    public: { applicationUrl },
  } = useRuntimeConfig();

  const user = ref<Models.User<Models.Preferences> | null>(null);

  const isLoggedIn = computed(() => !!user.value);

  const tryLogIn = () => {
    return account.get().then((u) => {
      user.value = u;
    });
  };

  const logIn = (email: string, password: string) => {
    return account
      .createEmailPasswordSession(email, password)
      .then(() => {
        return account.get();
      })
      .then((u) => {
        user.value = u;
      });
  };

  const logOut = () => {
    return account.deleteSessions().then(() => {
      user.value = null;
    });
  };

  const createRecovery = (email: string) => {
    const url = new URL("/admin/recover-password", applicationUrl).toString();
    return account.createRecovery(email, url).then(() => {});
  };

  const updateRecovery = (userId: string, secret: string, password: string) => {
    return account.updateRecovery(userId, secret, password).then(() => {});
  };

  return {
    user,
    isLoggedIn,
    tryLogIn,
    logIn,
    logOut,
    createRecovery,
    updateRecovery,
  };
});
