Page({
  data: {
    disabled: true,
    btnstate: "default",
    iconType: [
      'success', 'warn'
    ],

  },
  accountblur: function (e) {
    var content = e.detail.value;
    if (content != "") {
      this.setData({ disabled: false, btnstate: "primary" });
    } else {
      this.setData({ disabled: true, btnstate: "default" });
    }
  },
  formSubmit: function (e) {
    console.log(e);
    var user = new Object();
    user.account = e.detail.value.idcardNum;
    user.college = e.detail.value.college;
    user.class = e.detail.value.class;
    if (user.account == '201706060333' && user.college=='电气与信息工程学院' && user.class=='计算机173班'){
    wx.setStorageSync('user', user);
    wx.showToast({
      title: "提交成功",
      icon: "warn",
      duration: 1000,
      success: function () {
        wx.switchTab({
          url: '../shouye/shouye',
          success: function (res) {

          },
          fail: function (res) {

          },
          complete: function (res) {

          }
        })
      }
    });}else{
      wx.showToast({
        title: '一卡通输入有误',
        icon:"warn"
      })
    }
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

