import { takeLatest, call , put} from 'redux-saga/effects';
import { get } from '../util/Api';

const SUPPLIER_FETCH_REQUESTED = 'SUPPLIER_FETCH_REQUESTED';
const SUPPLIER_FETCH_SUCCESS = 'SUPPLIER_FETCH_SUCCESS';
const SUPPLIER_FETCH_FAILED = 'SUPPLIER_FETCH_FAILED';

//GET SUPPLIERS
export function* fetchSuppliers() {
  try {
    const suppliers = yield call(get, 'http://localhost:8081/suppliers');
    yield put({type: SUPPLIER_FETCH_SUCCESS, suppliers});
  }
  catch(err) {
    yield put({type: SUPPLIER_FETCH_FAILED});
  }
}

export function* supplierWatcher() {
  yield takeLatest(SUPPLIER_FETCH_REQUESTED, fetchSuppliers);
}