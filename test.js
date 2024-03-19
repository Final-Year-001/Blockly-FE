import _ from "lodash";
import fs from "fs";

const stripId = (_obj) => {
  for (const key in _obj) {
    if (["x", "y", "id"].includes(key)) {
      delete _obj[key];
    } else if (typeof _obj[key] === "object") {
      stripId(_obj[key]);
    }
  }

  return _obj;
};

const stripId2 = (_obj) => {
  const m = new Map();
  m.set("x", true);
  m.set("y", true);
  m.set("id", true);

  for (const key in _obj) {
    if (m.has(key)) {
      delete _obj[key];
    } else if (typeof _obj[key] === "object") {
      stripId(_obj[key]);
    }
  }

  return _obj;
};

const m = new Map();
m.set("x", true);
m.set("y", true);
m.set("id", true);

const stripId3 = (_obj) => {
  for (const key in _obj) {
    if (m.has(key)) {
      delete _obj[key];
    } else if (typeof _obj[key] === "object") {
      stripId(_obj[key]);
    }
  }

  return _obj;
};

const mm = { x: true, y: true, id: true };

const stripId4 = (_obj) => {
  for (const key in _obj) {
    if (m[key]) {
      delete _obj[key];
    } else if (typeof _obj[key] === "object") {
      stripId(_obj[key]);
    }
  }

  return _obj;
};

const object = JSON.parse(fs.readFileSync("example.txt"));

const testFn = (fn, id, iterations) => {
  console.time("Function #" + id);
  for (let i = 0; i < iterations; i++) {
    fn();
  }
  let t = console.timeEnd("Function #" + id);
  console.log("Time Per call #" + id, t/iterations)
};

let iterations = 1000000;

console.log(process.argv)

let testToRun = parseInt(process.argv[2]);

let tests = [
  () => testFn(() => stripId(object), 1, iterations),
  () => testFn(() => stripId2(object), 2, iterations),
  () => testFn(() => stripId3(object), 3, iterations),
  () => testFn(() => stripId4(object), 4, iterations),
];

console.log("Running test #" + testToRun)
tests[testToRun - 1]()