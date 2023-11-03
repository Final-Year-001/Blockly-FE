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
      type: "server_helmet_guard",
    },
    {
      kind: "block",
      type: "compression_middleware",
    },
    {
      kind: "block",
      type: "session_middleware",
    },
    {
      kind: "block",
      type: "create_session",
    },
    {
      kind: "block",
      type: "has_session",
    },
    {
      kind: "block",
      type: "end_session",
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
