import { Client, Account } from "appwrite";

const runtimeConfig = useRuntimeConfig();

export const client = new Client();

client
  .setEndpoint(runtimeConfig.public.endpointUrl)
  .setProject(runtimeConfig.public.projectId);

export const account = new Account(client);
export { ID } from "appwrite";
