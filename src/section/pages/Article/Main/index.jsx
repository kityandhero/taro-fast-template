import { connect } from 'react-redux';
import { View } from '@tarojs/components';

import PageWrapper from '../../../../customComponents/PageWrapper';

import './index.less';

// eslint-disable-next-line no-undef
definePageConfig({
  navigationBarTitleText: '文章页',
});

@connect(({ article, session, entrance, global, schedulingControl }) => ({
  article,
  session,
  entrance,
  global,
  schedulingControl,
}))
export default class Index extends PageWrapper {
  enableBackTop = true;

  constructor(props) {
    super(props);

    this.state = {
      ...this.state,
      ...{
        loadApiPath: 'article/get',
      },
    };
  }

  renderFurther() {
    return (
      <>
        <View>文章页</View>
      </>
    );
  }
}
