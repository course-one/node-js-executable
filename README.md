# node-js-executable
A boilerplate to create JavaScript binary executable files using Node.

# build using `nexe`
```
$ npm i -g nexe
$ nexe --input src/server.js --target mac-x64-12.18.0 --name formula-one --resource src/**/* --output dist/nexe/build
```