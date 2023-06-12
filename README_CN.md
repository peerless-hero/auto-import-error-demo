# auto-import-error-demo

这是一个复现 **unplugin-auto-import** 插件BUG的演示项目。

项目依赖已经全部列于“package.json”中，**unplugin-auto-import**版本号为“0.16.0”。

## 错误情况

经过排查，在全部满足以下条件时：

- **unplugin-auto-import**的版本号“>=0.16.0”。
- 自动导入的模块路径中包含 **{** **}** 。

生成的[auto-imports.d.ts](./types/auto-imports.d.ts)会出现错误（在第13行）。

![image](https://github.com/antfu/unplugin-auto-import/assets/65681376/a708c3fc-b9a8-46b3-97d6-7e58d6eed301)

## 解决方案

基于上面错误产生的条件，有如下解决方案：

- 将**unplugin-auto-import**的版本号降级为“<=0.15.3
- 调整“vite.config.ts”的“optimizeDeps.vuedraggable”配置，不允许ant-design-vue和vuedraggable同时存在。

## 原因

由于Git提交记录有一些多，暂时没能找出。
