import { Client } from "@elastic/elasticsearch";
import { Mahabharata } from "../models/mahabharata.model.js";

const esClient = new Client({
  node: "http://localhost:9200",
  auth: {
    username: "elastic",
    password: "RMjJ1urn1vakeICnX*KH",
  },
  requestTimeout: 60000,
});

async function indexMahabharata() {
  try {
    for await (const doc of Mahabharata.find({})) {
      await esClient.index({
        index: "mahabharata",
        id: doc._id.toString(),
        body: {
          book: doc.book,
          chapter: doc.chapter,
          shloka: doc.shloka,
          text: doc.text,
        },
      });
    }
    console.log("Mahabharata indexing completed.");
  } catch (error) {
    console.error("Error indexing data:", error);
  }
}

console.log("test file");

export { indexMahabharata };
