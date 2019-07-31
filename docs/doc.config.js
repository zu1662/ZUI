import pkgJson from '../package.json'

const { version } = pkgJson

const github = ''

const navigation = [
  {
    name: '开发指南',
    groups: [
      {
        list: [
          {
            name: 'Intro',
            title: '介绍'
          },
          {
            name: 'Color',
            title: '色彩'
          }
        ]
      }
    ]
  },
  {
    name: '组件',
    showInMobile: true,
    groups: [
      {
        groupName: '基础组件',
        groupIcon: 'dashboard',
        list: [
          {
            name: 'Button',
            title: 'Button 按钮'
          },
          {
            name: 'Icon',
            title: 'Icon 图标'
          }
        ]
      }
    ]
  }
]

export {
  version,
  github,
  navigation
}
