import {hasHistory} from 'dva/router';
import {create, remove, update, query} from '../services/exams';
import { parse } from 'qs';

export default {

  namespace: 'exams',

  state: {
      list: [],
      field: '',
      keyword: '',
      total: null,
      loading: false,
      current: 1,
      currentItem: {},
      modalVisible: false,
      modalType: 'create'
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if(location.pathname === "/exam_lists"){
          dispatch({
            type: 'query',
            payload: location.query
          });
        }
      });
    },
  },

  effects: {
    *query({ payload }, { call, put }) {
      yield put({type: 'showLoading'});
      yield put({
        type: 'updateQueryKey',
        payload: { page: 1, field: '', keyword: '', ...payload },
      });
      const {data} = yield call(query, parse(payload));
       if(data){
         yield put({
           type: 'querySuccess',
           payload: {
             list: data.data,
             total: data.page.total,
             current: data.page.current
           }
         });
       }
    },
  },

  reducers: {
    querySuccess(state, action){
      return {...state, ...action.payload, loading:false};
    },
    showLoading(state, action){
       return {...state, loading:true};
    },
    updateQueryKey(state, action) {
      return { ...state, ...action.payload };
    },
  },

}
