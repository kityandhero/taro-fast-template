export default {
  pages: ['pages/home/main/index'],
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
};
