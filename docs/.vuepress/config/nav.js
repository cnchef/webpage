// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '前端',
    link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应.md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      // 可使用random脚本生成随机字符串作为每个目录的唯一id，或者使用MD5计算每个文件的MD5值作为id
      {
        text: '前端文章',
        items: [
          { text: 'JavaScript', link: '/pages/8143cc480faf9a11/' },
          // { text: 'Vue', link: '/pages/5d463fbdb172d43b/' },
        ],
      },
      {
        text: '页面',
        link: '/ui/',
        items: [
          { text: 'HTML', link: '/pages/8309a5b876fc95e3/' },
          { text: 'CSS', link: '/pages/0a83b083bdf257cb/' },
        ],
      },
      {
        text: '学习笔记',
        items: [
          { text: '《JavaScript教程》', link: '/note/javascript/' },
          { text: '《JavaScript高级程序设计》', link: '/note/js/' },
          { text: '《ES6 教程》', link: '/note/es6/' },
          { text: '《Vue》', link: '/note/vue/' },
          { text: '《React》', link: '/note/react/' },
          {
            text: '《TypeScript 从零实现 axios》',
            link: '/note/typescript-axios/',
          },
          {
            text: '《Git》',
            link: '/note/git/',
          },
          {
            text: 'TypeScript',
            link: '/pages/51afd6/',
          },
          {
            text: 'JS设计模式总结',
            link: '/pages/4643cd/',
          },
        ],
      },
    ],
  },
  {
    text: '开发',
    link: '/techcode/',
    items: [
      { text: 'Golang', link: '/pages/xq4lfnvhmvrpopy2/' },
      { text: 'Python', link: '/pages/agpduaa6lqnwifvx/' },
      { text: 'Java', link: '/pages/s6hp2iopfrd3o7o3/' },
      { text: 'Shell', link: '/pages/njye2ris6wzxashi/' },
      { text: 'C/C++', link: '/pages/5bm2dlo6a0d03z8s/' },
    ],
  },
  {
    text: '操作系统',
    link: '/systemos/',
    items: [
      { text: 'Linux', link: '/pages/bayz9mxytccxs5ha/' },
      { text: 'Windows', link: '/pages/2rum70nx7bx75ltd/' },
      { text: 'macOS', link: '/pages/dq3syfafe88gvfvj/' },
      { text: 'Unix', link: '/pages/iy5j4f2jtkmlhfsw/' },
    ],
  },
  {
    text: '工具',
    link: '/technology/',
    items: [
      { text: '技术文档', link: '/pages/9a7ee40fc232253e/' },
      { text: 'GitHub技巧', link: '/pages/4c778760be26d8b3/' },
      { text: 'Nodejs', link: '/pages/117708e0af7f0bd9/' },
      { text: '博客搭建', link: '/pages/41f87d890d0a02af/' },
    ],
  },
  {
    text: '更多',
    link: '/more/',
    items: [
      { text: '学习', link: '/pages/f2a556/' },
      { text: '面试', link: '/pages/aea6571b7a8bae86/' },
      { text: '心情杂货', link: '/pages/2d615df9a36a98ed/' },
      { text: '实用技巧', link: '/pages/baaa02/' },
      { text: '友情链接', link: '/friends/' },
    ],
  },
  { text: '关于', link: '/about/' },
  {
    text: '收藏',
    link: '/pages/beb6c0bd8a66cea6/',
    // items: [
    //   { text: '网站', link: '/pages/beb6c0bd8a66cea6/' },
    //   { text: '资源', link: '/pages/eee83a9211a70f9d/' },
    //   { text: 'Vue资源', link: '/pages/12df8ace52d493f6/' },
    // ],
  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
]
