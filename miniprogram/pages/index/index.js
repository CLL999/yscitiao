// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    DataInDetail: {
      HP: 0, // 生命
      ATK: 0, // 攻击
      DEF: 0, // 防御
      CritRate: 0, //暴击
      CritDMG: 0, //爆伤
      //    ElementDMGBonus: 0,
      ElementalMastery: 0, // 精通
      EnergyRecharge: 0 // 充能
    }
  },

  inputDetail: function (e) {
    this.setData({
      DataInDetail: e.detail.DataInDetail
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})