import "../blocks/node/apiBlocks";
import "../blocks/node/serverCreationBlocks";

export const mathCategory = {
  kind: "category",
  name: "Math",
  colour: "#263585", 
  contents: [
    {
      kind: "block",
      type: "math_number", 
    },
    {
      kind: "block",
      type: "math_arithmetic", 
    },
    {
      kind: "block",
      type: "math_single", 
    },
    {
      kind: "block",
      type: "math_trig", 
    },
    {
      kind: "block",
      type: "math_constant", 
    },
    {
      kind: "block",
      type: "math_number_property", 
    },
    {
      kind: "block",
      type: "math_round", 
    },
    {
      kind: "block",
      type: "math_on_list", 
    },
    {
      kind: "block",
      type: "math_modulo", 
    },
    {
      kind: "block",
      type: "math_constrain", 
    },
    {
      kind: "block",
      type: "math_random_int", 
    },
    {
      kind: "block",
      type: "math_random_float", 
    },
    {
      kind: "block",
      type: "math_atan2", 
    },
  ],
};
