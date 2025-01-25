<script setup lang="ts">
definePageMeta({
  layout: "admin",
  middleware: ["auth"],
});

const store = useTeamsStore();

const newTeamDialog = ref(false);
const deleteDialog = ref(false);
const snackbar = ref({
  open: false,
  message: "",
  color: "error",
});

const headers = [
  { title: "Streetteam", key: "name" },
  { title: "", key: "actions" },
];
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

const saveNewTeam = () => {};
const deleteTeam = (id: string) => {
  store
    .deleteTeam(id)
    .then(() => {
      deleteDialog.value = false;
      snackbar.value.message = "Team erfolgreich gelöscht";
      snackbar.value.color = "success";
      snackbar.value.open = true;
    })
    .catch(() => {
      deleteDialog.value = false;
      snackbar.value.message = "Fehler beim Löschen des Streetteams";
      snackbar.value.color = "error";
      snackbar.value.open = true;
    });
};
</script>

<template>
  <v-main>
    <v-snackbar v-model="snackbar.open" :color="snackbar.color">
      {{ snackbar.message }}

      <template #actions>
        <v-btn @click="snackbar.open = false">Schließen</v-btn>
      </template>
    </v-snackbar>
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
    >
      <template #[`header.actions`]>
        <v-dialog v-model="newTeamDialog">
          <template #activator="{ props: activator }">
            <v-btn v-bind="activator" prepend-icon="add" color="primary"
              >Neues Team</v-btn
            >
          </template>

          <v-card>
            <v-card-text>
              <v-row>
                <v-col>
                  <v-text-field label="Stadt"></v-text-field>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions>
              <v-btn @click="newTeamDialog = false">Abbrechen</v-btn>
              <v-btn @click="saveNewTeam()">Speichern</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </template>
      <template #[`item.actions`]="{ item }">
        <v-btn size="small" variant="text" icon="edit" />
        <v-dialog v-model="deleteDialog">
          <template #activator="{ props: activator }">
            <v-btn
              color="error"
              size="small"
              variant="text"
              icon="delete"
              v-bind="activator"
            />
          </template>
          <v-card>
            <v-card-text
              >Möchtest du wirklich das Team
              <span class="font-weight-bold">{{ item.name }}</span>
              löschen?</v-card-text
            >
            <v-card-actions>
              <v-btn @click="deleteDialog = false">Abbrechen</v-btn>
              <v-btn @click="deleteTeam(item.id)">Löschen</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </template>
    </v-data-table-server>
  </v-main>
</template>
