import "../blocks/node/database";

export const databaseCategory = {
  kind: "category",
  name: "Database",
  colour: "#afcd77",
  contents: [
    {
      kind: "block",
      type: "find_by_id_db",
    },
    {
      kind: "block",
      type: "insert_to_collection",
    },
    {
      kind: "block",
      type: "find_with_filter",
    },
    {
      kind: "block",
      type: "find_in_database_filter",
    },
    {
      kind: "block",
      type: "delete_with_filter",
    },
    {
      kind: "block",
      type: "update_with_filter",
    },
  ],
};
