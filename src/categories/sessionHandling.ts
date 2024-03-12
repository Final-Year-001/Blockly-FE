import "../blocks/node/apiBlocks";
import "../blocks/node/serverCreationBlocks";

export const sessionHandlingCategory = {
  kind: "category",
  name: "Session Handling",
  colour: "#f39c12",
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
