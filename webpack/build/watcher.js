console.log('Automatically generate entry files.....');
const path = require('path')
const { updateSrcEntry } = require('./build-entry')
// node文件夹监听
const chokidar = require('chokidar')

var readyFlag = false
const watcher = chokidar.watch(path.resolve(__dirname, '../src/packages'), {
  ignored: /(^|[\/\\])\../
})
watcher
  .on('addDir', (dirpath) => {
    if(readyFlag) {
      let dirName = dirpath.split(path.sep).pop()
      if(dirName === 'New Folder' || dirName === 'packages') return
      console.log('addDir----->', dirpath)
      updateSrcEntry()
    }
  })
  .on('unlinkDir', (dirpath) => {
    console.log('unlinkDir---->',dirpath.split(path.sep).pop())
    updateSrcEntry()
  })
  .on('ready', () => { // 当监听完成后，再初始化入口文件，并设置flag。
    readyFlag = true
    updateSrcEntry()
  })
  
module.exports = watcher
