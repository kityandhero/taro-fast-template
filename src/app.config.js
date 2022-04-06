export default defineAppConfig({
  pages: ['pages/entry/main/index', 'pages/home/main/index'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  subpackages: [
    {
      root: 'section',
      name: '栏目',
      pages: ['pages/section/main/index', 'pages/article/main/index'],
    },
  ],
  permission: {
    'scope.userLocation': {
      desc: '你的位置信息将用于筛选所在地的商品。',
    },
  },
  serviceProviderTicket: '',
  tabBar: {
    color: '#353535',
    selectedColor: '#3778F4',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/home/main/index',
        iconPath: './assets/tab-bar/home.png',
        iconPath: './assets/tab-bar/home-active.png',
        text: '直播',
      },
      // {
      //   pagePath: 'pages/live/index',
      //   iconPath: './assets/tab-bar/home.png',
      //   selectedIconPath: './assets/tab-bar/home-active.png',
      //   text: '直播',
      // },
      // {
      //   pagePath: "pages/productList/index",
      //   iconPath: "./assets/tab-bar/cate.png",
      //   selectedIconPath: "./assets/tab-bar/cate-active.png",
      //   text: "分类"
      // },
      // {
      //   pagePath: 'pages/home/index',
      //   iconPath: './assets/tab-bar/cate.png',
      //   selectedIconPath: './assets/tab-bar/cate-active.png',
      //   text: '资讯',
      // },
      // {
      //   pagePath: "pages/live/index",
      //   iconPath: "./assets/tab-bar/live.png",
      //   selectedIconPath: "./assets/tab-bar/live-active.png",
      //   text: "直播"
      // },
      // {
      //   pagePath: 'pages/cart/index',
      //   iconPath: './assets/tab-bar/cart.png',
      //   selectedIconPath: './assets/tab-bar/cart-active.png',
      //   text: '天中集市',
      // },
      {
        pagePath: 'pages/customer/index',
        iconPath: './assets/tab-bar/user.png',
        selectedIconPath: './assets/tab-bar/user-active.png',
        text: '我的',
      },
    ],
  },
});
