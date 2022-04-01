export default {
  pages: ['pages/entry/index'],
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
      pages: ['pages/section/index', 'pages/article/index'],
    },
  ],
  permission: {
    'scope.userLocation': {
      desc: '你的位置信息将用于筛选所在地的商品。',
    },
  },
  serviceProviderTicket: '',
};
