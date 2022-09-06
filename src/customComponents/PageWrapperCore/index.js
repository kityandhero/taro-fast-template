import { navigateTo, recordObject } from 'taro-fast-common/es/utils/tools';
import { isFunction } from 'taro-fast-common/es/utils/typeCheck';
import { AuthorizationWrapper } from 'taro-fast-framework/es/framework';

import { pathCollection } from '../../customConfig/pathConfig';

export default class PageWrapper extends AuthorizationWrapper {
  loadRemoteRequestDelay = 100;

  useFadeSpinWrapper = true;

  useSimulationFadeSpin = true;

  simulationFadeSpinDuration = 800;

  hideFadeSpinWrapperAfterLoadRemoteRequest = false;

  showRenderCountInConsole = false;

  viewStyle = {
    backgroundColor: '#fff',
  };

  // loadRemoteRequestAfterMount = false;

  verifySession = true;

  verifyTicket = false;

  verifyTicketValidity = false;

  getGlobal = () => {
    const { global } = this.props;

    return global;
  };

  dispatchCheckTicketValidity = (data) => {
    return this.dispatchApi({
      type: 'entrance/checkTicketValidity',
      payload: data,
    });
  };

  dispatchRefreshSession = (data) => {
    return this.dispatchApi({
      type: 'session/refreshSession',
      payload: data,
    });
  };

  dispatchSingIn = (data) => {
    return this.dispatchApi({
      type: 'entrance/signIn',
      payload: data,
    });
  };

  reloadRemoteMetaData = () => {
    const { dispatch } = this.props;

    dispatch({
      type: 'global/getMetaData',
      payload: { force: true },
    });
  };

  getRemoteMetaData = () => {
    const { global } = this.props;
    return global;
  };

  /**
   * 登录校验失败时候的回调, 例如访问需要登录才能调用的接口
   * @returns
   */
  authorizeFailCallback = (remoteData) => {
    recordObject(remoteData);
  };

  goToHomeTab(callback = null) {
    this.switchTab({
      url: `${pathCollection.root.home.path}`,
      success: () => {
        if (isFunction(callback)) {
          callback();
        }
      },
    });
  }

  goToSection = ({ sectionId, callback = null }) => {
    navigateTo({
      url: `${pathCollection.section.section.path}?sectionId=${sectionId}`,
      success: () => {
        if (isFunction(callback)) {
          callback();
        }
      },
    });
  };
}
