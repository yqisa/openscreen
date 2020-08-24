Page({
    data: {
    },
    onLoad: function(t) {
      
      _this2.banners = res.data.content;
      var timestamp = Date.parse(new Date());
      let shijian = '86400000‬';
      console.log(timestamp)
      var expiration = new Date(new Date().toLocaleDateString()).getTime() + parseInt(shijian);
      console.log(expiration)
      var data_expiration = wx.getStorageSync("data_expiration");             
      if (data_expiration) {
        if (timestamp > data_expiration){
          wx.setStorageSync("closeindexbanner", 0)
        }
        var closeindexbanner = wx.getStorageSync("closeindexbanner");
        console.log(a)
        var b = closeindexbanner + 1
        if (b<=a) {                       
          _this2.data.btnclose = closeindexbanner+1
          wx.setStorageSync("data_expiration", expiration)
        }
        else{
          _this2.data.btnclose = 0
        }
      } else {
        wx.setStorageSync("data_expiration", expiration)
       
      }
      _this2.ar = ar
      console.log(ar)
      console.log(_this2.data.btnclose)
      wx.setStorageSync("ar", ar)
      wx.setStorageSync("data_bannerl", a)
      _this2.btnclose = _this2.data.btnclose
      _this2.$apply();
    },
    closeHideHandle: function (e) {            
      console.log(e.currentTarget.dataset.wpygotourlhandleA)
      var closeindexbanner = wx.getStorageSync("closeindexbanner");
      console.log(closeindexbanner)
      if (closeindexbanner || closeindexbanner==0){ 
        this.btnclose = e.currentTarget.dataset.wpygotourlhandleA
      }else{
        this.btnclose = 0
      } 
       this.close = 0
      wx.setStorageSync('closeindexbanner', this.btnclose)
      // if(){

      // }
      this.$apply();
        // this.isShow = !1, this.$apply(), wx.$Analysis.emit("indexAlertClose", {
        //     message_id: this.advertisingBanner.id
        // });

    },
});