/** 
 * @author yaniky
 * @description 编译基础工具
 */
const filterAppEnv = function(env) {
    const res = {};
    for (const i in env) {
        if (/^APP_/.test(i)) {
            res[i] = env[i];
        }
    }
    return res;
}

module.exports = {
    filterAppEnv
};