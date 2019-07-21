class CopyrightWebpackPlugin {

    apply(compiler){
        compiler.hooks.compile.tab('CopyrightWebpackPlugin', (compilation) => {

        })
        compiler.hooks.emit.tapAsync('CopyrightWebpackPlugin', (compilation, cb) => {
            compilation.assets['copyright.txt']= {
                source: function() {
                    return 'copyright by liusisi'
                },
                size: function() {
                    return 20;
                }
            }
            cb();
        })
    }
}

module.exports = CopyrightWebpackPlugin;