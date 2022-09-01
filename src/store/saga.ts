import { call, put, takeEvery } from "redux-saga/effects";
import { getCats } from "../services/api";
import { getCatsSuccess } from "./slice";

function* workGetCatsFetch(): Generator<any, void, string> {
  const cats = yield call(getCats);
  const formattedCatsShortened = cats.slice(0, 15);
  //total de 67 raças
  yield put(getCatsSuccess(formattedCatsShortened));
}

function* catSaga() {
  yield takeEvery("cats/getCatsFetch", workGetCatsFetch);
}
export default catSaga;
