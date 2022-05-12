import { navigateTo, switchTab } from 'taro-fast-common/es/utils/tools';
import { isArray, isFunction } from 'taro-fast-common/es/utils/typeCheck';

import { pathCollection } from '../../customConfig/pathConfig';
import PageWrapperCore from '../PageWrapperCore';

export default class PageWrapper extends PageWrapperCore {
  getSectionList = () => {
    const { sectionList } = this.getMetaData();

    return isArray(sectionList) ? sectionList : [];
  };

  goToHomeTab(callback = null) {
    switchTab({
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
