// page/publish/publish.js
Page({
  data:{
    selectedimage:[]
  },
  addimage:function(){
    var that = this;
    wx.chooseImage({
      count:9,
      success: function(res) {
        console.log(res.tempFilePaths);
        that.setData({
          selectedimage: res.tempFilePaths,
        });
      },
    })
  },
  publish:function(){
    console.log("publish");
  }
})