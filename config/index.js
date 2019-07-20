const pkg = require("../package.json");
const envConfig = require("./" + process.env.BUILD_ENV + "_env.js");

const baseEnv = {
    APP_NAME: JSON.stringify(pkg.name)
};
for (var i in envConfig) {
    baseEnv[i] = envConfig[i];
}

module.exports = baseEnv;