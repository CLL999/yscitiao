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
      var CharacterData = app.globalData.CharacterData;
      let character = app.globalData.character;
      wx.setStorage({
        key: character,
        data: {
          DataInDetail,
          CharacterData
        }
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
      let value = (e.detail.value).toString();
      console.log(value[value.length - 1]);
      if (value[value.length - 1] !== '.')
        this.setData({
          HP: e.detail.value
        })
    },
    inputDEF: function (e) {
      console.log(e.detail.value);
      let value = (e.detail.value).toString();
      console.log(value[value.length - 1]);
      if (value[value.length - 1] !== '.')
        this.setData({
          DEF: e.detail.value
        })
    },

    inputElementalMastery: function (e) {
      console.log(e.detail.value);
      let value = (e.detail.value).toString();
      console.log(value[value.length - 1]);
      if (value[value.length - 1] !== '.')
        this.setData({
          ElementalMastery: e.detail.value
        });
    },

    inputATK: function (e) {
      console.log(e.detail.value);
      let value = (e.detail.value).toString();
      console.log(value[value.length - 1]);
      if (value[value.length - 1] !== '.')
        this.setData({
          ATK: e.detail.value
        })
    },

    inputCritRate: function (e) {
      console.log(e.detail.value);
      let value = (e.detail.value).toString();
      console.log(value[value.length - 1]);
      if (value[value.length - 1] !== '.')
        this.setData({
          CritRate: e.detail.value
        })
    },

    inputCritDMG: function (e) {
      console.log(e.detail.value);
      let value = (e.detail.value).toString();
      console.log(value[value.length - 1]);
      if (value[value.length - 1] !== '.')
        this.setData({
          CritDMG: e.detail.value
        })
    },

    inputEnergyRecharge: function (e) {
      console.log(e.detail.value);
      let value = (e.detail.value).toString();
      console.log(value[value.length - 1]);
      if (value[value.length - 1] !== '.')
        this.setData({
          EnergyRecharge: e.detail.value
        })
    },

    Refresh: function () {
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
    },

  },

  async attached() {

    this.Refresh();
  }
})