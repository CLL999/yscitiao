var app = getApp();
// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // imageSrc: "../../assets/characters/klee.png"
  },

  inputDetail: function (e) {
    this.setData({
      DataInDetail: e.detail.DataInDetail
    })
  },

  CharacterData: function (e) {
    this.setData({
      CharacterData: e.detail.CharacterData
    })
  },

  ChangeCharacter: function (e) {
    // this.setData({
    //   DataInDetail: app.globalData.DataInDetail,
    //   CharacterData: app.globalData.CharacterData
    // })
    console.log(e.detail);
    this.setData({
      DataInDetail: e.detail.DataInDetail,
      CharacterData: e.detail.CharacterData
    });

    this.selectComponent("#CharacterData").Refresh();
    this.selectComponent("#DataInDetail").Refresh();
    this.onLoad();
    
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let character = app.globalData.character;
    // let imageSrc = "../../assets/characters/"+character+".png";
    let imageSrc = "http://qianchen.ink/sourse/characters/"+character+".png";
    this.setData({imageSrc});
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