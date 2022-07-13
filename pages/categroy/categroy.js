// pages/categroy/categroy.js
Page({
  data: {
    categroyTitle:[],
    categroyData:[],
    maitKeyItem:3627,
    goodsLick:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getCategroyTitle()
    this.getCategroyData()
  },

  //1.获取分类的标题
  getCategroyTitle() {
    wx.request({
      url: 'http://152.136.185.210:7878/api/hy66/category',
      method:"GET",
      success: (res) => {
        this.setData({
          categroyTitle:res.data.data.category.list,
        })
        // console.log(res)
      }
    })
  },
  // 2.获取分类的内容
  getCategroyData() {
    wx.request({
      url: 'http://152.136.185.210:7878/api/hy66/subcategory',
      method:"GET",
      data:{
        type: 'pop',
        maitKey:this.data.maitKeyItem
      },
      success: (res) => {
        this.setData({
          categroyData:res.data.data.list
        })
        // console.log(res)
      }
    })
  },
  // 点击事件获取maitKey的值
  getMaitKey(e) {
    this.setData({
      maitKeyItem:e.currentTarget.dataset.info
    })
    this.getCategroyData()
    console.log(this.data.maitKeyItem)
  },
  // 跳转外部网页
  bth(e) {
    let link = JSON.stringify(e.currentTarget.dataset.link)
    wx.navigateTo({
      url: '/pages/link/link?link='+ encodeURIComponent(link)
    })
    // console.log(link)
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