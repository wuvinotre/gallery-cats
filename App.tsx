import React from "react";
import { Navigation } from "./src/navigation";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import catSaga from "./src/store/modules/home/saga";
import catsReducer from "./src/store/modules/home/slice";

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {
    cats: catsReducer,
  },
  middleware: [saga],
});
saga.run(catSaga);

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
