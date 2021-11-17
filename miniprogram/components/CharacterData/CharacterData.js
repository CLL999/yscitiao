var app = getApp();

// components/CharacterData/CharacterData.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    HPDefault: Number,
    ATKDefault: Number,
    DEFDefault: Number,
    Sands: String,
    Goblet: String,
    Circlet: String,
  },

  observers: {
    "**": function () {
      var CharacterData = this.data;
      var DataInDetail = app.globalData.DataInDetail;
      let character = app.globalData.character;
      getApp().globalData.CharacterData = this.data;
      console.log(app.globalData);
      wx.setStorage({
        key: character,
        data: {CharacterData, DataInDetail},
      });
      console.log("球球");

      // wx.getStorage({
      //   key: "CharacterData"
      // }).then(
      //   res1 => {
      //     wx.getStorage({
      //       key: "DataInDetail"
      //     }).then(
      //       res2 => {
      //         getApp().globalData = {
      //           CharacterData: res1.data,
      //           DataInDetail: res2.data
      //         };
      //       }
      //     );
      //   }
      // );

      // wx.getStorage({
      //   key: "CharacterData"
      // }).then(res => {
      //   getApp().globalData.CharacterData = res.data;

      //   console.log("APP", app.globalData.CharacterData);
      // });
      // console.log("data", this.data);

      this.triggerEvent("input", {
        CharacterData
      });
      
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    SandsArray: ["攻击力%", "生命值%", "防御力%", "元素精通", "充能效率%"],
    GobletArray: ["属性伤害%", "元素精通", "生命值%", "攻击力%", "防御力%"],
    CircletArray: ["暴击伤害%", "暴击率%", "治疗加成", "元素精通", "生命值%", "攻击力%", "防御力%"],
    SandsIndex: "",
    GobletIndex: "",
    CircletIndex: "",

    // inputHP: true,
    // inputATK: true,
    // inputDEF: true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindGobletPickerChange: function (e) {
      this.setData({
        GobletIndex: e.detail.value,
        Goblet: this.data.GobletArray[e.detail.value]
      });
    },
    bindSandsPickerChange: function (e) {
      this.setData({
        SandsIndex: e.detail.value,
        Sands: this.data.SandsArray[e.detail.value]
      });
    },
    bindCircletPickerChange: function (e) {
      this.setData({
        CircletIndex: e.detail.value,
        Circlet: this.data.CircletArray[e.detail.value]
      });
    },

    inputATK: function (e) {
      this.setData({
        ATKDefault: e.detail.value
      })
    },
    inputHP: function (e) {
      this.setData({
        HPDefault: e.detail.value
      })
      console.log(e.detail);
    },
    inputDEF: function (e) {
      this.setData({
        DEFDefault: e.detail.value
      })
    },
    Refresh: function () {
      console.log("我来了?");
      console.log(app.globalData);
      this.setData({
        CircletIndex: app.globalData.CharacterData.CircletIndex,
        SandsIndex: app.globalData.CharacterData.SandsIndex,
        GobletIndex: app.globalData.CharacterData.GobletIndex,
  
        Circlet: this.data.CircletArray[app.globalData.CharacterData.CircletIndex],
        Sands: this.data.SandsArray[app.globalData.CharacterData.SandsIndex],
        Goblet: this.data.GobletArray[app.globalData.CharacterData.GobletIndex],
  
        HPDefault: app.globalData.CharacterData.HPDefault,
        ATKDefault: app.globalData.CharacterData.ATKDefault,
        DEFDefault: app.globalData.CharacterData.DEFDefault
      });
      // if (this.data.SandsIndex) console.log("我会不会输出呢？？",this.data.SandsIndex);
    }
  },

   async attached() {
    // console.log(app.globalData.CharacterData);

    // console.log("我来了");
    // console.log(app.globalData);
    // this.setData({
    //   CircletIndex: app.globalData.CharacterData.CircletIndex,
    //   SandsIndex: app.globalData.CharacterData.SandsIndex,
    //   GobletIndex: app.globalData.CharacterData.GobletIndex,

    //   Circlet: this.data.CircletArray[app.globalData.CharacterData.CircletIndex],
    //   Sands: this.data.SandsArray[app.globalData.CharacterData.SandsIndex],
    //   Goblet: this.data.GobletArray[app.globalData.CharacterData.GobletIndex],

    //   HPDefault: app.globalData.CharacterData.HPDefault,
    //   ATKDefault: app.globalData.CharacterData.ATKDefault,
    //   DEFDefault: app.globalData.CharacterData.DEFDefault
    // });
    await this.Refresh();
    console.log("沙111111",this.data.SandsIndex);
  },


})