Page({
  jumpToMyPage: function () {
    wx.navigateTo({
      url: '../yanzheng/yanzheng'
    })
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: 'Play Together',
      path: '/page/user?id=123'
    }
  }
})