import React from "react";
import { HomeScreen } from "./src/screens/home";

import { Provider } from "react-redux";
import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import catsReducer from './src/store/slice';
import catSaga from "./src/store/saga";

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {
    cats: catsReducer,
  },
  middleware: [saga]
});
saga.run(catSaga);

export default function App() {

  return(
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  )
}
