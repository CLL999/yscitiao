var app = getApp();

// components/DataInDetail/DataInDetail.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    HP: Number, // 生命
    ATK: Number, // 攻击
    DEF: Number, // 防御
    CritRate: Number, //暴击
    CritDMG: Number, //爆伤
    ElementalMastery: Number, // 精通
    EnergyRecharge: Number // 充能
  },
  observers: {
    "**": function () {
      var DataInDetail = this.data;
      wx.setStorage({
        key: "DataInDetail",
        data: DataInDetail,
      });
      this.triggerEvent("input", {
        DataInDetail
      });
    }
  },
  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    inputHP: function (e) {
      console.log(e.detail.value);
      this.setData({
        HP: e.detail.value
      })
    },
    inputDEF: function (e) {
      console.log(e.detail.value);
      this.setData({
        DEF: e.detail.value
      })
    },

    inputElementalMastery: function (e) {
      console.log(e.detail.value);
      this.setData({
        ElementalMastery: e.detail.value
      })
    },

    inputATK: function (e) {
      console.log(e.detail.value);
      this.setData({
        ATK: e.detail.value
      })
    },

    inputCritRate: function (e) {
      console.log(e.detail.value);
      this.setData({
        CritRate: e.detail.value
      })
    },

    inputCritDMG: function (e) {
      console.log(e.detail.value);
      this.setData({
        CritDMG: e.detail.value
      })
    },

    inputEnergyRecharge: function (e) {
      console.log(e.detail.value);
      this.setData({
        EnergyRecharge: e.detail.value
      })
    },
  },

  async attached() {
    let {
      ATK,
      CritDMG,
      CritRate,
      DEF,
      ElementalMastery,
      EnergyRecharge,
      HP
    } = app.globalData.DataInDetail;
    this.setData({
      ATK,
      CritDMG,
      CritRate,
      DEF,
      ElementalMastery,
      EnergyRecharge,
      HP
    });
    // console.log("data!!",this.data);
  }
})