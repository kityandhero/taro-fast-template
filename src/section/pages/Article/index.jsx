import { connect } from 'react-redux';
import { View } from '@tarojs/components';

import PageWrapper from '../../../customComponents/PageWrapper';

import './index.less';

// eslint-disable-next-line no-undef
definePageConfig({
  navigationBarTitleText: '文章页',
});

@connect(({ article, global }) => ({
  article,
  global,
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

  getApiData = (props) => {
    const {
      article: { data },
    } = props;

    return data;
  };

  renderFurther() {
    return (
      <>
        <View>文章页</View>
      </>
    );
  }
}
