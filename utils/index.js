const processNashornTemplateCompiler = require(
    './nashorn/process-nashorn-template-compiler');
const processVueDevRuntime = require('./vue-runtime/process-vue-dev-runtime');
const processVueRuntime = require('./vue-runtime/process-vue-runtime');
const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, 'out');
if (!fs.existsSync(OUT)) {
  fs.mkdirSync(OUT);
}

processNashornTemplateCompiler();
processVueDevRuntime();
processVueRuntime();