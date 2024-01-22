# cli-calls

`npm i cli-calls`

Quickly turn a JavaScript file into a CLI.

**Step 1**: add a function that takes in a single object of args, for example:

```js
function main({name}) {
  console.log(`hello ${name}!`);
}
```

**Step 2**: add cli-calls to your file:

```js
import cliCalls from 'cli-calls';
await cliCalls(import.meta, main);
```

**Step 3**: run the file from your cli

```bash
node ./main.mjs --name world
```
```
hello world!
```
