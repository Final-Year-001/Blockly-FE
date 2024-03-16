import "../blocks/node/apiBlocks";
import "../blocks/node/serverCreationBlocks";

export const nodeCategory = {
  kind: "category",
  name: "Backend Components",
  colour: "#4295f5",
  contents: [
    {
      kind: "block",
      type: "express_server_creation",
    },
    {
      kind: "block",
      type: "api_method",
    },
    {
      kind: "block",
      type: "respond_json",
    },
    {
      kind: "block",
      type: "get_request",
    },
    {
      kind: "block",
      type: "respond_with_status",
    },
  ],
};
