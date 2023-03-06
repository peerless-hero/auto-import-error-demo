# auto-import-error-demo

This is a demo project to reproduce a bug in the **unplugin-auto-import** plugin.

The project dependencies are all listed in "package.json", **unplugin-auto-import** version number is locked to "0.15.1"

## Error situation

After ranking, when all of the following conditions are met:

- The version of **unplugin-auto-import**的版本号“>=13.0”。
- Use any component (whether it is a third-party import or a custom component) in the **App.vue** file, but do not use the "import" statement to explicitly import.
- Both **ant-design-vue** and **vuedraggable** exist in the "optimizeDeps.vuedraggable" configuration of "vite.config.ts"

The following error occurs:
![image](https://user-images.githubusercontent.com/65681376/220149400-22105288-6000-48bb-b326-64b4a323fb42.png)
![image](https://user-images.githubusercontent.com/65681376/220149690-e5321cfb-3f4c-4e15-a313-21a4dcf82531.png)

## Solution

Based on the conditions caused by the above errors, there are the following solutions:

- Downgrade **unplugin-auto-import** to "<0.13.0" version.。
- Using any component in the **App.vue** file displays the import.
- Adjust the "optimizeDeps.vuedraggable" configuration of "vite.config.ts" to not allow ant-design-vue and vuedraggable to exist at the same time.

## Pull request

After going through the code commit logs, it was basically determined that the problem was due to the fact that 13.0 **unplugin-auto-import** internally uses **unplugin** to configure an option ----``injectAtEnd:true``.To be able to flexibly circumvent similar error cases through configuration, I have created a merge request [feat(injectAtEnd): add new option](https://github.com/antfu/unplugin-auto-import/pull/327).
