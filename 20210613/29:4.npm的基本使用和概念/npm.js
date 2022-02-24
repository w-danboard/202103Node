// npm node package manager 第三方模块，可以通过npm进行下载
// 主流 npm yarn
// npm安装的模块，分为两种，本地安装和全局安装

// 全局安装：只能放在命令行中使用
// 本地安装：在开发的时候会使用的模块

// npm install http-server -g
// npm root -g 全局安装的目录 /Users/wanglin/.nvm/versions/node/v14.18.1/lib/node_modules 也就是把对应的模块放到了环境变量指代的目录

// /Users/wanglin/.nvm/versions/node/v14.18.1/bin/http-server -> /Users/wanglin/.nvm/versions/node/v14.18.1/lib/node_modules/http-server/bin/http-server

/**
 * 写一个自己的包
 * 
 *  1.包必须要初始化
 *  2.在开发时可以临时将我们的包，放到全局下 npm link，开发中可以使用npm link方便调试
 * 
 *  后续肯定需要将包发布到npm上，可以下载加-g直接放到当前用户系统中
 * 
 *  仅仅在命令中使用，做一些工具
 * 
 *  nrm切换源 npm、nrm(node regisiter manager)、nvm(node version manager window要安装win-nvm)
 *  
 *  nrm use 使用某个源 cnpm/taobao/npm
 */

// 本地模块 两种：开发依赖 --save-dev -D(仅在开发时使用)、项目依赖 --save -S(开发上线都需要)
// 也可以不区分 没有很大影响

// package-lock.json 是用于锁定版本的

// devDependencies
// dependencies
// peerDependencies 同等依赖

// npm的特点是将包拍平,如果引得版本共同就拍平，不同就分别安装
// a -> c@2
// a -> c@3

// vue2 -> template-compiler2

// 版本号 ^ ~ >= <= semver约定 三位  major minor patch

// ^2.2.0 2只能是2 (2.3.0 2.2.4)
// ~2.2.0 2.2只能是2.2 后面比0大都可以
// >= 2.1
// <= 2.1
// 1.0.0 ~ 2.0.0

// 还有一些特殊的 ^2.2.0 -> 2.3.0发布了 (预发版，先测试，后续ok，再发布正式的)
// alpha @2.0.0-alpha0.1 内部测试
// beta 公测版本 可以一起测试
// rc 是最终测试版本
// 最后发布正式版本

// 命令执行问题，将模块安装到项目里，改如何使用

// webpack

// npm run 命令会将当前项目下的node_modules/.bin 目录放到环境变量中，所以可以在执行时找到目录下的文件，执行完毕后，环境变量就移除掉了

// npx 如果模板不存在会下载 执行 =》 在删除 如果当前项目下有可以直接复用 如果没有会先安装 (好处就是永远是最新的)
// 执行的命令都很长 npx 的命令没法保存参数 (临时就是用完就销毁)