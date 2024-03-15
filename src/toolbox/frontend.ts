import { cssCategory } from "../categories/css";
import {
  colorCategory,
  commonCategory,
  functionCategory,
  listCategory,
  loopsCategory,
  textCategory,
  variablesCategory,
} from "../categories/google_blocks";
import { htmlCategory } from "../categories/html";
import { javascriptCategory } from "../categories/javascript";
import { mathCategory } from "../categories/math";
import "@blockly/toolbox-search";

const frontendToolboxCategories = {
  kind: "categoryToolbox",
  contents: [
    {
      kind: "search",
      name: "Search",
      contents: [],
    },
    {
      kind: "sep",
      blockxml:
        "<block type='math_arithmetic'><field name='OP'>ADD</field></block>",
      gap: 10,
    },
    htmlCategory,
    cssCategory,
    javascriptCategory,
    { kind: "sep" },
    { kind: "sep" },
    commonCategory,
    loopsCategory,
    variablesCategory,
    textCategory,
    mathCategory,
    functionCategory,
    listCategory,
    colorCategory,
  ],
};

export default frontendToolboxCategories;
