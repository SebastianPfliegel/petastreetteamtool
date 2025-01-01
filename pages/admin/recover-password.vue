<script setup lang="ts">
definePageMeta({
  layout: "empty",
  middleware: ["logged-in", "contains-secret"],
});

const route = useRoute();

const { required, minLength, maxLength, matches } = useRules();

const store = useAuthStore();

const password = ref("");
const confirmPassword = ref("");
const valid = ref<boolean | null>(null);
const loading = ref(false);
const { userId, secret } = route.query;

const changePassword = () => {
  if (!valid.value) return;

  loading.value = true;
  store
    .updateRecovery(userId as string, secret as string, password.value)
    .then(() => {
      navigateTo("/admin/login");
    })
    .catch((reason) => {
      console.log(reason);
    })
    .finally(() => {
      loading.value = false;
    });
};
</script>

<template>
  <v-main>
    <AdminLoginScreen>
      <v-responsive class="pa-4" max-width="420">
        <v-form
          v-model="valid"
          class="flex-column pa-4"
          validate-on="invalid-input"
          @submit.prevent="changePassword()"
        >
          <h1 class="text-h4 text-center font-weight-bold mb-2">
            PETA Streetteam Tool
          </h1>
          <h2 class="text-h6 font-weight-regular text-center mb-8">
            Passwort zurücksetzen
          </h2>
          <v-text-field
            id="new-password"
            v-model="password"
            name="new-password"
            type="password"
            label="Passwort"
            :rules="[
              required,
              minLength('Passwort', 8),
              maxLength('Passwort', 256),
            ]"
          ></v-text-field>
          <v-text-field
            id="confirm-password"
            v-model="confirmPassword"
            name="confirm-password"
            type="password"
            label="Passwort wiederholen"
            :rules="[matches('Passwörter', password)]"
          ></v-text-field>
          <v-btn
            class="mt-5"
            type="submit"
            color="primary"
            flat
            size="large"
            block
            :loading="loading"
            >Passwort ändern</v-btn
          >
        </v-form>
      </v-responsive>
    </AdminLoginScreen>
  </v-main>
</template>
