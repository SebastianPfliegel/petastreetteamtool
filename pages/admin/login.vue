<script setup lang="ts">
definePageMeta({
  layout: "empty",
});

const { required } = useRules();

const { account } = useAppwrite();

const email = ref("");
const password = ref("");
const valid = ref<boolean | null>(null);
const loading = ref(false);

onMounted(() => {
  account
    .get()
    .then(() => {
      navigateTo("/admin");
    })
    .catch(() => {});
});

const login = () => {
  if (!valid.value) return;

  loading.value = true;
  account
    .createEmailPasswordSession(email.value, password.value)
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
    <v-container class="pa-0 h-100" fluid>
      <v-row class="h-100" no-gutters align="center">
        <v-img
          src="https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&amp;w=1470&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          cover
          max-height="100vh"
          class="hidden-md-and-down"
        />
        <v-col cols="12" lg="5" class="d-flex justify-center">
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
                :rules="[required('E-Mail')]"
              ></v-text-field>
              <v-text-field
                id="password"
                v-model="password"
                name="password"
                type="password"
                label="Passwort"
                :rules="[required('Passwort')]"
              ></v-text-field>
              <v-btn
                class="mb-5 ms-n2 text-none"
                size="small"
                slim
                color="primary"
                variant="text"
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
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
