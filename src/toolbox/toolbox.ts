import { databaseCategory } from "../categories/database";
import { commonCategory, loopsCategory, textCategory, variablesCategory } from "../categories/google_blocks";
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
    mathCategory,
    commonCategory,
    loopsCategory,
    variablesCategory,
    textCategory,
  ],
};

export default toolboxConfig;