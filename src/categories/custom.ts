import "../blocks/node/customBlocks";

export const customCategory = {
  kind: "category",
  name: "Custom Blocks",
  colour: "#ffb5eb",
  contents: [
    {
      kind: "block",
      type: "custom_code",
    },
    {
      kind: "block",
      type: "custom_input",
    },
  ],
};
