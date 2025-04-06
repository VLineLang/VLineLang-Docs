import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "VLineLang Docs",
  description: "一个现代化、简洁、快速且功能强大的高级编程语言",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
    ],

    sidebar: [
      {
        text: '入门',
        items: [
          { text: '快速开始', link: '/guide/getting-started' },
          { text: '基础语法', link: '/guide/basic-syntax' }
        ]
      },
      {
        text: '核心概念',
        items: [
          { text: '控制结构', link: '/guide/control-flow' },
          { text: '函数', link: '/guide/functions' },
          { text: '面向对象编程', link: '/guide/oop' },
          { text: '标准库', link: '/guide/stdlib' },
          { text: '模块系统', link: '/guide/module-system' },
          { text: '错误处理', link: '/guide/error-handling' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vlinelang/vlinelang' }
    ]
  }
})
