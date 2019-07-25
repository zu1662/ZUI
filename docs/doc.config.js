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
        list: [
          {
            name: 'Button',
            title: 'Button 按钮'
          },
          {
            name: 'Cell',
            title: 'Cell 单元格'
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
