import { navigation } from './doc.config.js'

// 根据不同环境设置routes
function getRoutes(options) {
  const isMobile = options.mobile
  const routes = []
  navigation.map(category => {
    let groups = category.groups
    if(category.showInMobile) {
      groups.map(group => {
        let lists = group.list
        lists.map(list => {
          const pkgName = list.name.toLowerCase()
          if(isMobile) {
            routes.push({
              path: '/' + pkgName,
              component: () => import(`../src/packages/${pkgName}/demo/index.vue`),
              name: list.name
            })
          }else {
            routes.push({
              path: '/' + pkgName,
              component: () => import(`../src/packages/${pkgName}/README.md`),
              name: list.name
            })
          }
        })
      })
    }else {
      if (!isMobile) {
        groups.map(group => {
          let lists = group.list
          lists.map(list => {
            const pkgName = list.name.toLowerCase()
            routes.push({
              path: '/' + pkgName,
              component: () => import(`../docs/markdown/` + pkgName + `.md`),
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
