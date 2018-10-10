var saidarray = [];
Page({
  data: {
      hadsaid:[],
      userinfo:{}
  },
  onLoad: function (options) {
        var that = this;
        function Said(id){
          this.id = id;
          this.word = "坤哥小妖精";
          this.resttime = "6hours";
          this.publishtime = "2018.02.18";
        }
        for(var i = 0;i < 15;i ++){
          var said = new Said(i);
          saidarray.push(said);
        }

        that.setData({
          hadsaid:saidarray,
          userinfo:{
            imagesrc:"../../image/icon/1.jpg",
            name:"九尾熊",
            grade:"Lv100",
            hat:"ChinaNo.1",
          }
        })
  },
  onReady: function () {
  
  },
  onShow: function () {
  
  },
  onHide: function () {
  
  },
  onUnload: function () {
  
  },
  onPullDownRefresh: function () {
  
  },
  onReachBottom: function () {
  
  },
  onShareAppMessage: function () {
  
  },
  louder:function(){
    console.log("louder");
  },
  collect:function(){
    console.log("collect");
  }
})