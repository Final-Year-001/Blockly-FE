import "../blocks/node/apiBlocks";
import "../blocks/node/serverCreationBlocks";

export const sessionHandlingCategory = {
  kind: "category",
  name: "Session Handling",
  colour: "#5CA699",
  contents: [
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
  ],
};
