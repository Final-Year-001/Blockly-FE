import "../blocks/node/apiBlocks";
import "../blocks/node/serverCreationBlocks";

export const sessionHandlingCategory = {
  kind: "category",
  name: "Session Handling",
  colour: "#ffd000",
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
      type: "set_session_to_variable",
    },
    {
      kind: "block",
      type: "save_session",
    },
    {
      kind: "block",
      type: "end_session",
    },
    {
      kind: "block",
      type: "has_session",
    },
  ],
};
