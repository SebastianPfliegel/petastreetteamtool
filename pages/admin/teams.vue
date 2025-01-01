<script setup lang="ts">
definePageMeta({
  layout: "admin",
  middleware: ["auth"],
});

const store = useTeamsStore();

const headers = [{ title: "Streetteam", key: "name" }];
const items = ref<{ id: string; name: string }[]>([]);
const itemsLength = ref(0);
const itemsPerPage = ref(10);
const itemsPerPageOptions = [
  { value: 5, title: "5" },
  { value: 10, title: "10" },
  { value: 20, title: "20" },
  { value: -1, title: "$vuetify.dataFooter.itemsPerPageAll" },
];
const loading = ref(true);

const loadItems = ({
  page,
  itemsPerPage,
}: {
  page: number;
  itemsPerPage: number;
}) => {
  loading.value = true;
  store
    .fetchPage(page, itemsPerPage)
    .then((response) => {
      itemsLength.value = response.total;
      items.value = response.documents;
    })
    .catch((reason) => console.log(reason))
    .finally(() => {
      loading.value = false;
    });
};
</script>

<template>
  <v-main>
    <v-data-table-server
      :headers="headers"
      :items="items"
      :items-length="itemsLength"
      :items-per-page="itemsPerPage"
      :items-per-page-options="itemsPerPageOptions"
      :loading="loading"
      item-value="id"
      disable-sort
      @update:options="loadItems"
    ></v-data-table-server>
  </v-main>
</template>
