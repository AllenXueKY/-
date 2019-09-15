
var app = getApp()
Page({
  data: {
    imgUrls: [
      {
        link: '/pages/index/index',
        url: 'http://img1.shikee.com/report/2015/07/23/15342720925715810773.jpg'
      }, {
        link: '/pages/logs/logs',
        url: 'http://img1.selfimg.com.cn/self800w/2016/06/03/1464923651_68Iqx8.jpg'
      }, {
        link: '/pages/test/te90st',
        url: 'http://img008.hc360.cn/g7/M06/22/15/wKhQtFP_XuyEbgUNAAAAAAlec0w609.jpg'
      }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    idcardNum:null,
    date: '',
    addList: [],
    winHeight: 600,
    currentTab: '1'
  },
  onLoad: function () {

  console.log('onLoad test');
  },
  switchBtn:function(){
  wx.switchTab({
    url: '../weather/weather',
    success: function(res) {

    },
    fail: function(res) {

    },
    complete: function(res) {

    }
  }),
  
    wx.updateShareMenu({
      withShareTicket: true,
      success() {
      }
    })
},
 

  navigateTo: function (e) {
    console.log(1);
    wx.navigateTo({
      url: '/pages/xiangqing/xiangqing?id=' + 1,
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
