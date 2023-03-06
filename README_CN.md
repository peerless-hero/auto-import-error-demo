# auto-import-error-demo

这是一个复现 **unplugin-auto-import** 插件BUG的演示项目。

项目依赖已经全部列于“package.json”中，**unplugin-auto-import**版本号锁定为“0.15.1”。

## 错误情况

经过排查，在全部满足以下条件时：

- **unplugin-auto-import**的版本号“>=13.0”。
- 在 **App.vue** 文件中使用任意组件（无论是第三方导入或是自定义组件），但不使用“import”语句显式导入。
- **ant-design-vue** 和 **vuedraggable** 同时存在于“vite.config.ts”的“optimizeDeps.vuedraggable”配置中。

会出现下方的错误：
![image](https://user-images.githubusercontent.com/65681376/220149400-22105288-6000-48bb-b326-64b4a323fb42.png)
![image](https://user-images.githubusercontent.com/65681376/220149690-e5321cfb-3f4c-4e15-a313-21a4dcf82531.png)

## 解决方案

基于上面错误产生的条件，有如下解决方案：

- 将**unplugin-auto-import**的版本号降级为“<13.0”。
- 在 **App.vue** 文件中使用任何组件都要显示导入。
- 调整“vite.config.ts”的“optimizeDeps.vuedraggable”配置，不允许ant-design-vue和vuedraggable同时存在。

## 合并请求

经过对代码提交记录的翻阅，基本可以确定这个问题是因为13.0**unplugin-auto-import**内部使用**unplugin**配置了一个选项———— ``injectAtEnd:true``。为了能通过配置灵活规避类似的错误情况，我已经创建了一个[添加自定义injectAtEnd属性](https://github.com/antfu/unplugin-auto-import/pull/327)的合并请求。
