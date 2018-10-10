//index.js
//获取应用实例

Page({
  data:{
    latitude:0,
    longitude:0,
    speed:0,
    accuracy:0,
    altitude:0,
    markers:[],
    controls: [{
      id: 1,
      position: {
        left: 10,
        top: 10,
        width: 50,
        height: 50
      }, iconPath: "../../image/icon/control1.png",
      clickable: "true"
    }, {
      id:2,
      position: {
        left: 10,
        top: 70,
        width: 50,
        height: 50
      }, iconPath: "../../image/icon/control2.png",
      clickable: "true"
    },{
      id: 3,
      position: {
        left: 10,
        top: 130,
        width: 50,
        height: 50
      }, iconPath: "../../image/icon/control3.png",
      clickable: "true"
    }]
  },
  tapmarker:function(res){
    console.log(res);
  },
  controltap:function(res){
    switch(res.controlId){
      case 1:
        console.log("显示最新十条");
        break;
      case 2:
        console.log("显示最热十条");
        break;
      case 3:
        console.log("显示商户十条");
        break;
    }
  },
  onLoad:function(){
    var that = this;
    wx.getLocation({
      type: 'gcj02', 
      altitude:true,
      success: function(res) {
        console.log(res.latitude, res.longitude, res.altitude);
        that.setData({
          latitude:res.latitude,
          longitude:res.longitude,
          speed:res.speed,
          accuracy:res.accuracy,
          altitude:res.altitude,
          markers: [{
            id: 1,
            latitude: res.latitude,
            longitude: res.longitude,
            title: "miao",
            iconPath: "../../image/icon/1.jpg",
            width: 50,
            height: 50,
            label: {
              content: "坤哥磨人小妖精",
              color: "#ff0000",
              fontSize: 20,
              bgColor: "#ffffff",
              borderRadius: 5,
              textAlign: "left",
              x: 25,
              y: -50,
              borderWidth: 0,
              borderColor: "#ffffff"
            },
            callout: {
              content: "what the fuck?",
              color: "#ff0000",
              fontSize: 15,
            }
          },
          {
            id: 2,
            //latitude: 33.908694, 
            //longitude: 117.941558,
            latitude: res.latitude + 0.001,
            longitude: res.longitude + 0.001,
            title: "miao",
            iconPath: "../../image/icon/2.jpg",
            width: 50,
            height: 50,
            label: {
              content: "Fuck U Bitch",
              color: "#ff0000",
              fontSize: 20,
              bgColor: "#00ff00",
              borderRadius: 5,
              textAlign: "left",
              x: 25,
              y: -50,
              borderWidth:8,
              borderColor: "#000000"
            },
            callout:{
              content:"what the fuck?",
              color:"#ff0000",
              fontSize:15,
            }
          }],
        })
      },
    })
    wx.getSystemInfo({
      success: function(res) {
        width:res.windowWidth
        height:res.screenHeight
      },
    })
  },
})
