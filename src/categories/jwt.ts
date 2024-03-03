import "../blocks/node/jwtBlocks";

export const jwtCategory = {
  kind: "category",
  name: "JWT",
  colour: "#000000",
  contents: [
    {
      kind: "block",
      type: "authenticationTocken_middleware",
    },
    {
      kind: "block",
      type: "sign_jwt",
    },
    {
      kind: "block",
      type: "get_hashed_password",
    },
    {
      kind: "block",
      type: "match_passwords",
    },
  ],
};
