export const useTeamsStore = defineStore("teams", () => {
  const { database, Query } = useAppwrite();
  const {
    public: { collectionId, databaseId },
  } = useRuntimeConfig();

  const fetchPage = (page: number, itemsPerPage: number) => {
    return database
      .listDocuments(databaseId, collectionId, [
        Query.orderAsc("name"),
        ...(itemsPerPage !== -1
          ? [Query.limit(itemsPerPage), Query.offset((page - 1) * itemsPerPage)]
          : []),
      ])
      .then((response) => {
        return {
          ...response,
          documents: response.documents.map((d) => ({
            id: d.$id,
            name: d.name as string,
          })),
        };
      });
  };

  return { fetchPage };
});
