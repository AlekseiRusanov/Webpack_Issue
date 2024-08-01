const path = require('path');

module.exports = {
    entry: {
        "entry": "./entry.js"
    },
    output: {
        path: path.join(__dirname, "./build"),
        filename: "[name].js"
    },
    target: 'web',
    mode: 'development',
    externals: (ctx, callback) => {
        if(["external_dep"].indexOf(ctx.request) !== -1){
            callback(null, `assign-properties ${ctx.request}`);
            return;
        }
        callback()
    }
    devtool: false
}