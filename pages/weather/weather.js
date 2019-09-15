// 引用百度地图微信小程序JSAPI模块 
var bmap = require('../../libs/bmap-wx/bmap-wx.min.js');
Page({
  
  data: {
    weatherData: ''
  },
  onLoad: function () {
    var that = this;
    // 新建百度地图对象 
    var BMap = new bmap.BMapWX({
      ak: '6KOgLqeFArtbFW55UbWFcyrxKwTd2VQ0'
    });
    var fail = function (data) {
      console.log(data)
    };
    var success = function (data) {
      var weatherData = data.currentWeather[0];
      weatherData = '\n' +  '\n'+ '\n' + '\n' + '\n'+ weatherData.temperature + '\n' + '\n' + weatherData.currentCity + '\n' + '\n' + 'PM2.5：' + weatherData.pm25 + '\n' + '\n' + '日期：' + weatherData.date + '\n' + '\n' + '天气：' + weatherData.weatherDesc + '\n' + '\n' + '风力：' + weatherData.wind + '\n' + '\n' + '\n' + '\n' + '\n' + '\n' + '\n' + '\n'; 
      that.setData({
        weatherData: weatherData
      });
    }
    // 发起weather请求 
    BMap.weather({
      fail: fail,
      success: success
    });
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