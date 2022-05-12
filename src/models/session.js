import {
  reducerCommonCollection,
  reducerCommonNameCollection,
} from 'taro-fast-framework/es/utils/dva';

import { refreshSessionData } from '../services/session';

export default {
  namespace: 'session',

  state: {},

  effects: {
    *refreshSession({ payload }, { call, put }) {
      const response = yield call(refreshSessionData, payload);

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
