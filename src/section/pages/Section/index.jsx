import { connect } from 'react-redux';
import { View } from '@tarojs/components';

import PageWrapper from '../../../customComponents/PageWrapper';

import './index.less';

// eslint-disable-next-line no-undef
definePageConfig({
  navigationBarTitleText: '栏目页',
});

@connect(({ section, session, entrance, global, schedulingControl }) => ({
  section,
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
        loadApiPath: 'section/singleList',
      },
    };
  }

  getApiData = (props) => {
    const {
      section: { data },
    } = props;

    return data;
  };

  renderFurther() {
    return (
      <>
        <View>栏目页</View>
      </>
    );
  }
}
