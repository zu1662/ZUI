import { packages } from './doc.config.js'

const ua = navigator.userAgent.toLowerCase();
const isMobile = /ios|iphone|ipod|ipad|android/.test(ua);

let routes = []

packages.map(item => {
  const pkgName =  item.name.toLowerCase();
  if(isMobile) {
    routes.push({
      path: '/' + item.name,
      components: () => import('../src/packages/' + pkgName + '/demo/index.vue'),
      name: item.name
    });
  }else {
    routes.push({
      path: '/' + item.name,
      components: () => import('../src/packages/' + pkgName + 'README.md'),
      name: item.name
    });
  }
})

export default routes