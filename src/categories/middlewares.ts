import "../blocks/node/apiBlocks";
import "../blocks/node/serverCreationBlocks";

export const generalMiddlewareCategory = {
  kind: "category",
  name: "General Middlewares",
  colour: "#5CA699",
  contents: [
    {
      kind: "block",
      type: "server_helmet_guard",
    },
    {
      kind: "block",
      type: "compression_middleware",
    },
  ],
};
