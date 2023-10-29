#!/usr/bin/env -S node --env-file=.env --import tsx/esm

console.log('hello', process.env['NODE_ENV']);
