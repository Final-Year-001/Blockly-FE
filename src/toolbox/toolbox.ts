import { customCategory } from "../categories/custom";
import { databaseCategory } from "../categories/database";
import {
  commonCategory,
  loopsCategory,
  textCategory,
  variablesCategory,
} from "../categories/google_blocks";
import { jsonCategory } from "../categories/json";
import { jwtCategory } from "../categories/jwt";
import { mathCategory } from "../categories/math";
import { generalMiddlewareCategory } from "../categories/middlewares";
import { nodeCategory } from "../categories/node";
import { sessionHandlingCategory } from "../categories/sessionHandling";
import "@blockly/toolbox-search";

const toolboxConfig = {
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
    nodeCategory,
    generalMiddlewareCategory,
    sessionHandlingCategory,
    jwtCategory,
    databaseCategory,
    jsonCategory,
    customCategory,
    { kind: "sep" },
    { kind: "sep" },
    mathCategory,
    commonCategory,
    loopsCategory,
    variablesCategory,
    textCategory,
  ],
};

export default toolboxConfig;
