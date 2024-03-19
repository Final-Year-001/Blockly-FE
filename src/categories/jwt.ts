import "../blocks/node/jwtBlocks";

export const jwtCategory = {
  kind: "category",
  name: "JWT Authentication",
  colour: "#6590df",
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
    {
      kind: "block",
      type: "get_auth_object",
    },
    {
      kind: "block",
      type: "get_salt",
    },
  ],
};
