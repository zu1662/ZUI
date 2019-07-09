import pkgJson from '../package.json';

const { version } = pkgJson;

export default {
  github: '',
  nav: [
    {
      name: '开发指南',
      groups: [
        {
          list: [
            {
              path: '/intro',
              title: '介绍'
            },
            {
              path: '/quickstart',
              title: '快速上手'
            },
            {
              path: '/style-guide',
              title: '风格指南'
            },
          ]
        }
      ]
    },
    {
      name: '组件',
      groups: [
        {
          groupName: '基础组件',
          iconName: 'basic',
          list: [
            {
              path: '/button',
              title: 'Button 按钮'
            },
            {
              path: '/cell',
              title: 'Cell 单元格'
            },
          ]
        },
      ]
    }
  ]
};
