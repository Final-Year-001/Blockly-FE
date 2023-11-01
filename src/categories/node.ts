import "../blocks/node/apiBlocks";
import "../blocks/node/serverCreationBlocks";

export const nodeCategory = {
  kind: "category",
  name: "Backend",
  colour: "#5CA699",
  contents: [
    {
      kind: "block",
      type: "api_method",
    },
    {
      kind: "block",
      type: "express_server_creation",
    },
    {
      kind: "block",
      type: "respond_json",
    },
    {
      kind: "block",
      type: "get_request",
    },
  ],
};
