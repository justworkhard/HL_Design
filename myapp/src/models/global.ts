import { Subscription, Reducer, Effect } from 'umi';

import { NoticeIconData } from '@/components/NoticeIcon';

export interface NoticeItem extends NoticeIconData {
  id: string;
  type: string;
  status: string;
}

export interface GlobalModelState {
  loading: number
}

export interface GlobalModelType {
  namespace: 'global';
  state: GlobalModelState;
  effects: {
    fetchLoading: Effect
  };
  reducers: {
    setLoading: Reducer<GlobalModelType>
  };
  subscriptions: { setup: Subscription };
}

const GlobalModel: GlobalModelType = {
  namespace: 'global',

  state: {
    loading: 0
  },

  effects: {
    *fetchLoading({ payload }, { put, select }) {
      yield put({
        type: 'setLoading',
        payload: payload,
      });
    },
  },

  reducers: {
    setLoading(state, { payload }): GlobalModelState {
      return {
        ...state,
        loading: payload.type,
      };
    },
  },

  subscriptions: {
    setup({ history }): void {
      // Subscribe history(url) change, trigger `load` action if pathname is `/`
      history.listen(({ pathname, search }): void => {
        if (typeof window.ga !== 'undefined') {
          window.ga('send', 'pageview', pathname + search);
        }
      });
    },
  },
};

export default GlobalModel;
