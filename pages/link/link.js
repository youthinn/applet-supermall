// pages/link/link.js
Page({
  data: {
    aLink:'',
  },
  toLick(e) {
    this.setData({
      aLink:e.currentTarget.dataset.link
    })
    console.log(this.data.aLink)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let link = JSON.parse(decodeURIComponent(options.link))
    console.log(link)
    this.setData({
      aLink:link
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})