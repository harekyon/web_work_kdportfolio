import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "kdphoto",
  apiKey: process.env.API_KEY,
});
