<script setup lang="ts">
const { account } = useAppwrite();

const logout = () => {
  account
    .deleteSessions()
    .then(() => {
      navigateTo("/admin/login");
    })
    .catch((reason) => {
      console.log(reason);
    });
};
</script>

<template>
  <v-app-bar color="black">
    <v-app-bar-title tag="h1" text="PETA Streetteam Tool" />
    <template #append>
      <v-btn prepend-icon="logout" @click="logout">Logout</v-btn>
    </template>
  </v-app-bar>
</template>
