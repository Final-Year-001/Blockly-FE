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

const toolboxConfig = {
  kind: "categoryToolbox",
  contents: [
    nodeCategory,
    generalMiddlewareCategory,
    sessionHandlingCategory,
    jwtCategory,
    databaseCategory,
    { kind: "sep" },
    { kind: "sep" },
    mathCategory,
    commonCategory,
    loopsCategory,
    variablesCategory,
    textCategory,
    jsonCategory,
  ],
};

export default toolboxConfig;
