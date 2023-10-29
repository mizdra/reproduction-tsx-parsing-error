## How to reproduce

```console
$ node -v
v20.8.1
$ npm -v
8.11.0
$ sw_vers
ProductName:		macOS
ProductVersion:		14.0
BuildVersion:		23A344

$ npm i
$ ./scripts/hello.ts

node:internal/process/esm_loader:40
      internalBinding('errors').triggerUncaughtException(
                                ^
Error: Parse error @:2:44
    at Oe (file:///Users/mizdra/src/github.com/mizdra/reproduction-tsx-parsing-error/node_modules/tsx/dist/index-9eae64fa.mjs:8:8007)
    at BA (file:///Users/mizdra/src/github.com/mizdra/reproduction-tsx-parsing-error/node_modules/tsx/dist/index-9eae64fa.mjs:13:66)
    at Ie (file:///Users/mizdra/src/github.com/mizdra/reproduction-tsx-parsing-error/node_modules/tsx/dist/index-9eae64fa.mjs:21:85)
    at or (file:///Users/mizdra/src/github.com/mizdra/reproduction-tsx-parsing-error/node_modules/tsx/dist/index-9eae64fa.mjs:22:1132)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async Qr (file:///Users/mizdra/src/github.com/mizdra/reproduction-tsx-parsing-error/node_modules/tsx/dist/index-9eae64fa.mjs:22:2155)
    at async Z (file:///Users/mizdra/src/github.com/mizdra/reproduction-tsx-parsing-error/node_modules/tsx/dist/esm/index.mjs:13:1786)
    at async nextLoad (node:internal/modules/esm/hooks:833:22)
    at async Hooks.load (node:internal/modules/esm/hooks:416:20)
    at async MessagePort.handleMessage (node:internal/modules/esm/worker:168:18) {
  idx: 99
}

Node.js v20.8.1
```
