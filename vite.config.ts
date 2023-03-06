/*
 * @Author: peerless_hero peerless_hero@outlook.com
 * @Date: 2023-03-07 00:15:58
 * @LastEditors: peerless_hero peerless_hero@outlook.com
 * @LastEditTime: 2023-03-07 00:37:49
 * @FilePath: \auto-import-error-demo\vite.config.ts
 * @Description:
 *
 */
/*
 * @Author: peerless_hero peerless_hero@outlook.com
 * @Date: 2023-03-07 00:15:58
 * @LastEditors: peerless_hero peerless_hero@outlook.com
 * @LastEditTime: 2023-03-07 00:20:33
 * @FilePath: \auto-import-error-demo\vite.config.ts
 * @Description:
 *
 */
import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteComponents from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    AutoImport({
      imports: [
        'vue',
        'vue/macros',
      ],
      dts: 'types/auto-imports.d.ts',
      vueTemplate: true,
    }),
    vue({ reactivityTransform: true }),
    ViteComponents({
      dts: 'types/components.d.ts',
      resolvers: [
        AntDesignVueResolver(),
      ],
    }),
  ],
  optimizeDeps: {
    include: [
      'ant-design-vue',
      'vuedraggable',
    ],
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
