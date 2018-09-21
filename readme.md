# webpack-multipage-ie8
> #### 使用webpack开发兼容ie8的多页面应用

![jquery](https://img.shields.io/badge/jquery-1.8.3-blue.svg?style=flat-square)
![webpack](https://img.shields.io/badge/webpack-^3.x-green.svg?style=flat-square)
![riot](https://img.shields.io/badge/riot-2.2.4-red.svg?style=flat-square)

## 相关工具库
- `jquery` 兼容ie8须使用1.8.3及以下版本，且通过script标签引入
- `webpack` 使用3.x版本, 为避免未知错误不要升级
- `riotjs` 2.2.4版本，最后一个兼容ie8的版本
- `underscore-template-loader` 支持html模板引用且支持传参
- `less` 本项目使用的css预编译工具


## 已完成功能
- [x] 发布生产兼容ie低版本(需引用babel-polyfill.js)
- [x] 项目开发支持promise等es6语法, 支持export\module.exports, import\require导出导入
- [x] 代码切割, 支持import动态加载js\css等模块, 节省首次加载文件体积
- [x] html模板化, 支持模板引用传参
- [x] 引入MVP框架riotjs, 兼容ie8
- [x] 入口js文件和html文件可配置化

## 开发构建

#### 目录结构
```bash
├── /build/          # webpack配置文件
├── /config/         # 项目运行配置文件
├── /dist/           # 项目输出目录
├── /src/            # 项目源码目录
│ ├── /configs/      # 项目相关配置全局文件
│ ├── /html/         # 视图文件
│ │ └── /templates/  # 页面公用模板
│ ├── /images/       # 图片文件
│ ├── /js/           
│ │ ├── /common/     # 公共js
│ │ ├── /components/ # 组件
│ │ ├── /utils/      # 工具类
│ │ ├── /riot/       # riot组件
│ │ └── /page/       # 页面对应js 入口级
│ └── /style/        # 样式文件
│   ├── /page/       # 页面样式
│   └── /common/     # 公共组件样式
├── package.json     # 项目依赖信息
└── .babelrc         # babel配置文件
```

#### 项目说明
- 开发目录及webpack配置可根据实际需要配置
- 开发环境下不兼容ie8，需打包后服务器环境下检测兼容性
- html模板传参必须是严格模式的json语法(双引号、无换行), 模板使用ejs语法
- riotjs已通过`webpack.ProvidePlugin`全局注入, 不需要可以注释
- 页面配置入口文件`/config/page.js`, 默认倒出空数组


## 快速开始

#### 安装依赖
```bash
$ npm install
```

#### 项目启动
```bash
$ npm start
打开 http://localhost:8001
```

#### 项目发布
```bash
$ npm build
```