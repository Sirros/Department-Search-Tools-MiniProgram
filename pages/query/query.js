// pages/query/query.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    iconList: 
    [
      {
        icon: 'cardboardfill',
        color: 'red',
        badge: 120,
        name: '科室名称'
      }, 
      {
        icon: 'recordfill',
        color: 'orange',
        badge: 1,
        name: '科室名称'
      }, 
      {
        icon: 'picfill',
        color: 'yellow',
        badge: 0,
        name: '科室名称'
      }, 
      {
        icon: 'noticefill',
        color: 'olive',
        badge: 22,
        name: '科室名称'
      }, 
      {
        icon: 'upstagefill',
        color: 'cyan',
        badge: 0,
        name: '科室名称'
      }, 
      {
        icon: 'clothesfill',
        color: 'blue',
        badge: 0,
        name: '科室名称'
      }, 
      {
        icon: 'discoverfill',
        color: 'purple',
        badge: 0,
        name: '科室名称'
      }
    ],
    gridCol: 3,
    skin: false,
    temp: 15
  },

  /**
   * 自定义事件：模糊查询
   * @param {查询字段} options 
   */
  fuzzy_query(e) {
    console.log(e)
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