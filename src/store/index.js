import { createWrapper } from 'next-redux-wrapper';

// redux-logger:
// log 에 색을 입혀주거나, 리덕스 동작에 대한 것을 자세하고 편하게 log 에서 확인할 수 있도록 만들어진 리덕스 미들웨어
import reducer from '@/store/modules';
import { configureStore } from '@reduxjs/toolkit';
// import logger from "redux-logger";
import { createLogger } from 'redux-logger';

const logger = createLogger();
let middleware = [];
if (process.env.NODE_ENV != 'production') {
  middleware = [...middleware, logger];
} else {
  middleware = [...middleware];
}

const makeStore = () =>
  configureStore({
    // configureStore: store 를 생성
    reducer,
    middleware,
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    // redux-toolkit 은 devTools 등의 미들웨어들을 기본적으로 제공 (사용하고 싶은 미들웨어가 있다면 추가로 정의 ex.logger)
    devTools: process.env.NODE_ENV != 'production',
  });

const wrapper = createWrapper(makeStore, {
  // createWrapper: wrapper 생성, wrapper 에 store 바인딩
  debug: process.env.NODE_ENV != 'production',
});

export default wrapper;
