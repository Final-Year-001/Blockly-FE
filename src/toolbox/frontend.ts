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

const frontendToolboxCategories = {
  kind: "categoryToolbox",
  contents: [
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