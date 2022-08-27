export default {
  lang: 'zh-CN',
  title: 'Durain',
  description: 'oiltofu的笔记。',
  base: '/notes/',
  themeConfig: {
    nav: [
      { text: 'Base', link: '/base/Git/command' },
    ],
    sidebar: {
      '/base/': [
        {
          text: 'Git',
          items: [
            { text: 'command', link: '/base/Git/command' },
          ]
        },
        {
          text: 'CSS',
          items: [
            { text: 'box model', link: '/base/CSS/boxModel' },
            { text: 'background', link: '/base/CSS/background' },
            { text: 'outline', link: '/base/CSS/outline' },
            { text: 'box-shadow', link: '/base/CSS/boxShadow' },
          ]
        }
      ],
    },
  }
}