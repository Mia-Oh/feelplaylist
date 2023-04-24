import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../reducers/counterSlice';

// configureStore
// : Reducer에서 반환된 새로운 state를 store라는 객체로 정리해 관리하는 곳
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
