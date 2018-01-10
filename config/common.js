let branch = 'master'    //  要推送的分支
let http_url = ''
let http_api = ''
let dev_url = 'http://localhost:8066'

switch(branch) {
  case 'master':
    http_url = 'http://localhost:8066'
    http_api = 'http://localhost:8080'
    break;
}

module.exports = {
  prov_url: {
    // 测试
    FRIENDS: `"${http_url}"`,
  },
  dev_url: {
    FRIENDS: `"${dev_url}"`,
  },
  prov_api: {
    API: `"${http_api}"`,
  },
  dev_api: {
    API: `"${http_api}"`,
  }
}
