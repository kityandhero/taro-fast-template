// eslint-disable-next-line no-undef
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
        text: '首页',
      },
      {
        pagePath: 'pages/customer/index',
        iconPath: './assets/tab-bar/user.png',
        selectedIconPath: './assets/tab-bar/user-active.png',
        text: '我的',
      },
    ],
  },
});
