// pages/detail/detail.js
Page({
  data: {
    banner:[],
    http:'http',
    https:'https:',
    title:"",
    price:0,
    oldPrice:0,
    discount:"",
    columns:[],
    services:[],
    shop:[],
    descImage:[],
    paramDesc:[],
    usermessage:[],
    recommend:[],
    pageindex: 0,// 请求第几页的商品
    nowposition: 0,// scroll滑动的当前位置
    // 定义加入购物车的变量
    itemInfoDesc:'',
    goodsIid:'',
    realPrice:0,
  },
/**
   * 返回顶部事件
   */
  //1.获取滑动的当前位置
  onPageScroll(res) {
    this.setData({
      nowposition: res.scrollTop
    })
    // console.log(this.data.nowposition)
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
    // 1.获取首页商品传进来的iid
    let iid = options.iid
    console.log(iid)
    // 2.根据iid获取商品详情数据
    wx.request({
      url: 'http://152.136.185.210:7878/api/hy66/detail',
      method:"GET",
      data:{
        iid:iid
      },
      success: (res) => {
        this.setData({
          // 1.轮播图
          banner:res.data.result.itemInfo.topImages,
          // 2.商品标题
          title:res.data.result.itemInfo.title,
          // 3.获取价格区间
          price:res.data.result.itemInfo.price,
          // 4.获取旧价格数据
          oldPrice:res.data.result.itemInfo.oldPrice,
          // 5.获取优惠信息
          discount:res.data.result.itemInfo.discountDesc,
          // 6.获取销量、收藏、默认快递信息
          columns:res.data.result.columns,
          // 7.获取售后服务数据
          services:res.data.result.shopInfo.services,
          // 8.获取店铺信息
          shop:res.data.result.shopInfo,
          // 9.获取商品穿着效果图片
          descImage:res.data.result.detailInfo.detailImage[0].list,
          // 10.获取商品详细数据
          paramDesc:res.data.result.itemParams.info.set,
          // 11.获取评价的用户信息
          usermessage:res.data.result.rate.list[0],
          // 12.获取商品描述
          itemInfoDesc:res.data.result.itemInfo.desc,
          // 13.获取商品iid
          goodsIid:res.data.iid,
          // 14.获取商品真实价格
          realPrice:res.data.result.itemInfo.lowNowPrice,
        })
        // console.log(this.data.itemInfoDesc)
        // console.log(res.data)
      }
    })
    // 在页面加载时请求推荐商品数据
    this.getRecommend()
  },
// 请求推荐商品数据
getRecommend() {
  this.setData({
    pageindex: this.data.pageindex + 1
  })
  wx.request({
    url: 'http://152.136.185.210:7878/api/hy66/home/data',
    method: "GET",
    data: {
      type: "new",
      page: this.data.pageindex
    },
    success: (res) => {
      this.setData({
        recommend: this.data.recommend.concat(res.data.data.list)
      })
      // console.log(res)
    }
  })
},
//点击返回首页
backhome() {
  wx.navigateBack({
    delta: 1,
  })
},
//加入购物车
jionCart() {
  const product = {}
  product.image = this.data.banner[0]
  product.title = this.data.title
  product.desc = this.data.itemInfoDesc
  product.price = this.data.realPrice
  product.iid = this.data.goodsIid
  console.log(product)
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

  }
})