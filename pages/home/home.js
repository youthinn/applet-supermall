// pages/home/home.js
Page({
  data: {
    banners: [],// 轮播图
    recommends: [],// 四个推荐
    goods: [],// 商品数据
    pageindex: 0,// 请求第几页的商品
    nowposition: 0,// scroll滑动的当前位置
  },
  /**
   * 返回顶部事件
   */
  //1.获取滑动的当前位置
  onPageScroll(res) {
    this.setData({
      nowposition: res.scrollTop
    })
  },
  //2.设置返回顶部
  backTop() {
    wx.pageScrollTo({
      scrollTop: 0
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getBanner()
    this.getRecommend()
  },
  //请求首页轮播图、四个介绍的数据
  getBanner() {
    wx.request({
      url: 'http://152.136.185.210:7878/api/hy66/home/multidata',
      method: "GET",
      success: (res) => {
        this.setData({
          banners: res.data.data.banner.list,
          recommends: res.data.data.recommend.list
        })
        // console.log(res)
      }
    })
  },
  // 请求首页商品数据
  getRecommend() {
    this.setData({
      pageindex: this.data.pageindex + 1
    })
    wx.request({
      url: 'http://152.136.185.210:7878/api/hy66/home/data',
      method: "GET",
      data: {
        type: "pop",
        page: this.data.pageindex
      },
      success: (res) => {
        this.setData({
          goods: this.data.goods.concat(res.data.data.list)
        })
        // console.log(res)
      }
    })
  },
  //点击商品进入商品详情页面
  godetail(e) {
    let iid = e.currentTarget.dataset.iid
    wx.navigateTo({
      url: '/pages/detail/detail?iid=' + iid,
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
    this.getRecommend()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  // 跳转外部链接
  bth(e) {
    let link = JSON.stringify(e.currentTarget.dataset.link)
    wx.navigateTo({
      url: '/pages/link/link?link=' + encodeURIComponent(link)
    })
    // console.log(link)
  }
})

