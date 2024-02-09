function organizeCode(code: string) {
  // Split the code into lines
  const lines = code.split("\n");

  // Extract import statements and other code
  const importStatements: any = [];
  const otherCode = [];

  let emptyLineCount = 0; // Count consecutive empty linea

  for (const line of lines) {
    if (line.trim().startsWith("import ")) {
      if (!importStatements.includes(line)) {
        importStatements.push(line);
      }
    } else if (line.trim() === "") {
      emptyLineCount++;
      if (emptyLineCount <= 1) {
        otherCode.push(line);
      }
    } else {
      emptyLineCount = 0;
      otherCode.push(line);
    }
  }

  // Combine import statements and other code
  const organizedCode =
    importStatements.join("\n") + "\n" + otherCode.join("\n");

  return organizedCode;
}

export { organizeCode };