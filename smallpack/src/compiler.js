class Compiler {
  constructor (config) {
    const {
      entry,
      output,
      module,
      plugins
    } = config;
    // 入口
    this.entryPath = entry;
    // 输出path
    this.distPath = output.path;
    // 输出文件名
    this.distFileName = output.fileName;
    this.loaders = module.rules;
    this.plugins = plugins;
    // 根目录
    this.root = process.cwd();
    // 编译工具类
    this.compilation = {};
    /**
     * undefined
      > path.resolve(/WorkSpace/demo/smallpack)
      > path.resolve('/WorkSpace/demo/smallpack', './src/index.js')
      '/WorkSpace/demo/smallpack/src/index.js'
      > path.relative('/WorkSpace/demo/smallpack', '/WorkSpace/demo/smallpack/src/index.js')
      'src/index.js'
      > path.extname('./src/index.js')
      '.js'
      >
     */
  }
}