export default function main({name}) {
  if (name) {
    console.log(`hello ${name}!`);
  } else {
    console.log('hey you')
  }
}

import cliCalls from '../index.mjs';
await cliCalls(import.meta, main);