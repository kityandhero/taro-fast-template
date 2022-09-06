import { checkEnvIsDevelopment } from 'taro-fast-common/es/utils/tools';
import { AppBase } from 'taro-fast-framework/es/framework';

import models from './models';

import './app.less';

const config = {
  appId: '',
  showLogInConsole: checkEnvIsDevelopment(),
  // showRequestInfo: checkEnvIsDevelopment(),
  // showUseVirtualRequestMessage: true,
  apiPrefix: {
    corsTargetDomain: 'https://api.a.com',
  },
  apiSuccessCode: 200,
  authenticationFailCode: 2001,
  loginPath: '/entrance/signIn',
  apiVersion: 'v1',
  footerImage: '',
  footerText: '',
  footerDescription: '',
  defaultMetaData: {},
};

class App extends AppBase {
  constructor(props) {
    super(props, config, models);
  }
}

export default App;
