# auto-import-error-demo

This is a demo project to reproduce a bug in the **unplugin-auto-import** plugin.

The project dependencies are all listed in "package.json", **unplugin-auto-import** version number is locked to "0.16.3"

## error conditions

After investigation, when all the following conditions are met:

- Version number ">=0.16.0" of **unplugin-auto-import**.
- **{** **}** is included in the auto-imported module path.
The generated [auto-imports.d.ts](./types/auto-imports.d.ts) will have an error at line 13.

![image](https://github.com/antfu/unplugin-auto-import/assets/65681376/a708c3fc-b9a8-46b3-97d6-7e58d6eed301)

## solution

Based on the above error conditions, there are the following solutions:

- Downgrade the version number of **unplugin-auto-import** to "<=0.15.3
- Replacement string.

## reason

Since there are a lot of Git submission records, I haven't been able to find them yet.
