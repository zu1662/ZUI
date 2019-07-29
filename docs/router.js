/*
 * @Author: zu1662
 * @Date: 2019-07-23 01:00:47
 * @LastEditTime: 2019-07-29 23:11:36
 * @LastEditor: zu1662
 * @Description: 根据 doc.config 生成routes
 */

import './utils/syncRoute'
import { navigation } from './doc.config.js'

// 根据不同环境设置routes
function getRoutes (options) {
  const isMobile = options.mobile
  const routes = []
  // 设置首页路由
  routes.push({
    path: '/',
    redirect: '/intro'
  })
  // 循环config信息，设置路由
  navigation.map(category => {
    const groups = category.groups
    if (category.showInMobile) {
      groups.map(group => {
        const lists = group.list
        lists.map(list => {
          const pkgName = list.name.toLowerCase()
          // 如果是mobile，则展示demo页面。否则展示readme文件
          if (isMobile) {
            routes.push({
              path: '/' + pkgName,
              component: () => import(`../src/packages/${pkgName}/demo/index.vue`),
              name: list.name
            })
          } else {
            routes.push({
              path: '/' + pkgName,
              component: () => import(`../src/packages/${pkgName}/README.md`),
              name: list.name
            })
          }
        })
      })
    } else {
      if (!isMobile) {
        groups.map(group => {
          const lists = group.list
          lists.map(list => {
            const pkgName = list.name.toLowerCase()
            routes.push({
              path: '/' + pkgName,
              component: () => import(`../docs/markdown/` + pkgName + `.md`),
              name: list.name
            })
          })
        })
      } else {
        groups.map(group => {
          const lists = group.list
          lists.map(list => {
            const pkgName = list.name.toLowerCase()
            routes.push({
              path: '/' + pkgName,
              component: () => import(`../docs/mobile/components/MobileHome.vue`),
              name: list.name
            })
          })
        })
      }
    }
  })
  return routes
}

export default getRoutes
