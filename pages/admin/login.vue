<script setup lang="ts">
definePageMeta({
  layout: "empty",
  middleware: "logged-in",
});

const { required } = useRules();

const store = useAuthStore();

const email = ref("");
const password = ref("");
const valid = ref<boolean | null>(null);
const loading = ref(false);

const login = () => {
  if (!valid.value) return;

  loading.value = true;
  store
    .logIn(email.value, password.value)
    .then(() => {
      navigateTo("/admin");
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
          @submit.prevent="login"
        >
          <h1 class="text-h4 text-center font-weight-bold mb-2">
            PETA Streetteam Tool
          </h1>
          <h2 class="text-h6 font-weight-regular text-center mb-8">
            Admin-Login
          </h2>
          <v-text-field
            id="email"
            v-model="email"
            name="email"
            type="email"
            label="E-Mail"
            :rules="[required]"
          ></v-text-field>
          <v-text-field
            id="current-password"
            v-model="password"
            name="current-password"
            type="password"
            label="Passwort"
            :rules="[required]"
          ></v-text-field>
          <v-btn
            class="mb-5 ms-n2 text-none"
            size="small"
            slim
            color="primary"
            variant="text"
            to="/admin/forgot-password"
            >Passwort vergessen?</v-btn
          >
          <v-btn
            type="submit"
            color="primary"
            flat
            size="large"
            block
            :loading="loading"
            >Login</v-btn
          >
        </v-form>
      </v-responsive>
    </AdminLoginScreen>
  </v-main>
</template>
