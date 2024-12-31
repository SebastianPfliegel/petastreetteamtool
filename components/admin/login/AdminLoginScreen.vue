<template>
  <v-container class="pa-0 h-100" fluid>
    <v-row class="h-100" no-gutters align="center">
      <v-img
        src="https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&amp;w=1470&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        cover
        max-height="100vh"
        class="hidden-md-and-down"
      />
      <v-col cols="12" lg="5" class="d-flex justify-center">
        <slot />
      </v-col>
    </v-row>
  </v-container>
</template>
