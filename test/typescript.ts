/* eslint-disable */

export default function foo () {
  console.log();
}

export default function bar () {
  try {
    console.log();
  } catch (e) {
    console.error(e);
  }
}

console.log({
  a: 1,
  b: 2,
} + 1)
