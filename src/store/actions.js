// actions.js      // 存放vuex的核心处理函数

export const fun = ({commit}) => {
  commit({
    type: 'geterrmsg',     // 对应mutation.js中的geterrmsg方法
    errmsg: '我是修改后的数据...'
  })
}
