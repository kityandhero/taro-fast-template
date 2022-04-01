import { checkEnvIsDevelopment } from 'taro-fast-common/es/utils/tools';
import { AppBase } from 'taro-fast-framework/es/framework';
import 'taro-fast-common/es/constants.css';
import 'taro-fast-component/es/index.css';

import models from './models';

import './app.less';

const config = {
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
};

class App extends AppBase {
  constructor(props) {
    super(props, config, models);
  }

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  loadRemoteMetaData = () => {
    const { dispatch } = this.store;

    dispatch({
      type: 'global/getMetaData',
      payload: { force: true },
    });
  };
}

export default App;
