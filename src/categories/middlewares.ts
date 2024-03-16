import "../blocks/node/apiBlocks";
import "../blocks/node/serverCreationBlocks";
import "../blocks/node/generalMiddleware";

export const generalMiddlewareCategory = {
  kind: "category",
  name: "General Middlewares",
  colour: "#1fc59b",
  contents: [
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
      type: "cors_middleware",
    },
    {
      kind: "block",
      type: "express_json_middleware",
    },
    {
      kind: "block",
      type: "express_URLEncoder_middleware",
    },
    {
      kind: "block",
      type: "express_text_middleware",
    },
    {
      kind: "block",
      type: "express_raw_middleware",
    },
  ],
};
