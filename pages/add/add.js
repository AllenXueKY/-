var app = getApp(); 
Page({
  data:{
    sugData: '',
    array:['旅行','散步','看电影','体育运动','学习','玩耍'],
    objectArray:[
      {
        id:0,
        name: '旅行'
      },
      {
        id:0,
        name: '散步'
      },
      {
        id:0,
        name: '看电影'
      },
      {
        id:0,
        name: '体育运动'
      },
      {
        id:0,
        name: '学习'
      },
      {
        id:0,
        name: '玩耍'
      }
    ],
    index:0,
    date:'2018-01-01',
    time:'08:00',
    toast1Hidden: true,
    modalHidden: true,
    modalHidden2: true,
    notice_str: ''
  },

  bindPickerChange:function(e){
    console.log('picket发送选择改变，携带值为',e.detail.value)
    this.setData({
      index:e.detail.value
    })
  },
  bindDateChange:function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange:function (e) {
    this.setData({
      time: e.detail.value
    })
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数  
  },
  onReady: function () {
    // 页面渲染完成  
  },
  onShow: function () {
    // 页面显示  
  },
  onHide: function () {
    // 页面隐藏  
  },
  onUnload: function () {
    // 页面关闭  
  },
  formSubmit: function (e) {
    /*var that = this;
    var formData = e.detail.value;
    wx.request({
      url: 'https://124924778.sustplaytogether.xyz',
      data: formData,
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        that.modalTap();*/
        wx.showToast({
          title: "提交成功",
          icon:"success",
          duration:1000,
          success:function(){
            wx.switchTab({
              url: '../shouye/shouye',
         /* success: function(res) {},
          fail: function(res) {},
          complete: function(res) {},*/
         
        })
        }
     })

  },
  formReset: function () {
    console.log('form发生了reset事件');
    this.modalTap2();
  } ,
  toast1Change: function (e) {
    this.setData({ toast1Hidden: true });
  },
  //弹出确认框  
  modalTap: function (e) {
    this.setData({
      modalHidden: false
    })
  },
  confirm_one: function (e) {
    console.log(e);
    this.setData({
      modalHidden: true,
      toast1Hidden: false,
      notice_str: '提交成功'
    });
  },
  //弹出提示框  
  modalTap2: function (e) {
    this.setData({
      modalHidden2: false
    })
  },
  modalChange2: function (e) {
    this.setData({
      modalHidden2: true
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
