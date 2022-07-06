import {
  reducerCommonCollection,
  reducerCommonNameCollection,
} from 'taro-fast-framework/es/utils/dva';
import { modelCollection } from 'taro-fast-framework/es/utils/globalModel';

import { exchangeShareData, getData } from '@/services/global';

export default {
  namespace: 'global',

  state: {
    ...(modelCollection || {}),
    ...{
      needSyncUserInfo: false,
      globalQuery: { path: '', query: {}, scene: 0 },
      rankList: [],
      sectionList: [],
    },
  },

  effects: {
    *getMetaData({ payload }, { call, put }) {
      const response = yield call(getData, payload);

      yield put({
        type: reducerCommonNameCollection.handleCommonData,
        payload: response,
      });
    },
    *exchangeShare({ payload }, { call, put }) {
      const response = yield call(exchangeShareData, payload);

      yield put({
        type: reducerCommonNameCollection.handleCommonData,
        payload: response,
      });
    },
  },

  reducers: {
    changeMetaData(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
    ...reducerCommonCollection,
  },
};
