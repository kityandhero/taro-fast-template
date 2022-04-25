import {
  reducerCommonCollection,
  reducerCommonNameCollection,
} from 'taro-fast-framework/es/utils/dva';

import { pageListData, getData } from '../services/article';

export default {
  namespace: 'article',

  state: {},

  effects: {
    *pageList({ payload }, { call, put }) {
      const response = yield call(pageListData, payload);
      yield put({
        type: reducerCommonNameCollection.handlePageListData,
        payload: response,
      });
    },
    *get({ payload }, { call, put }) {
      const response = yield call(getData, payload);
      yield put({
        type: reducerCommonNameCollection.handleCommonData,
        payload: response,
      });
    },
  },

  reducers: {
    ...reducerCommonCollection,
  },
};
