import pkgJson from '../package.json';

const { version } = pkgJson;

const github = ''

const packageType = [
  '基础组件'
]
const packages = [
  {
    name: 'Button',
    cnName: '按钮',
    type: 0,
    hasPath: true
  }
]

export {
  version,
  github,
  packages,
  packageType
};
