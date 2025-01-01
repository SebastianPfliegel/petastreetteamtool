<script setup lang="ts">
definePageMeta({
  layout: "empty",
  middleware: "logged-in",
});

const { required } = useRules();

const store = useAuthStore();

const email = ref("");
const valid = ref<boolean | null>(null);
const loading = ref(false);

const sendPasswordRecovery = () => {
  if (!valid.value) return;

  loading.value = true;
  store
    .createRecovery(email.value)
    .then(() => {
      console.log("erfolg");
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
          @submit.prevent="sendPasswordRecovery"
        >
          <h1 class="text-h4 text-center font-weight-bold mb-2">
            PETA Streetteam Tool
          </h1>
          <h2 class="text-h6 font-weight-regular text-center mb-8">
            Passwort zurücksetzen
          </h2>
          <v-text-field
            id="email"
            v-model="email"
            name="email"
            type="email"
            label="E-Mail"
            :rules="[required]"
          ></v-text-field>
          <v-btn
            class="mb-5 ms-n2 text-none"
            size="small"
            slim
            color="primary"
            variant="text"
            to="/admin/login"
            >Passwort doch nicht vergessen?</v-btn
          >
          <v-btn
            type="submit"
            color="primary"
            flat
            size="large"
            block
            :loading="loading"
            >Senden</v-btn
          >
        </v-form>
      </v-responsive>
    </AdminLoginScreen>
  </v-main>
</template>
