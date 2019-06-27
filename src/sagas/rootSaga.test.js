import { put, call, takeLatest } from 'redux-saga/effects';
import { fetchSuppliers } from './rootSaga';
import { get } from '../util/Api';

describe('Supplier Fetch Flow', () => {

  it('Fetches Suppliers Successfully', () => {
    const generator = fetchSuppliers();

    expect(generator.next().value)
      .toEqual(call(get, 'http://localhost:8081/suppliers'));

    expect(generator.next().value)
      .toEqual(put({ type: 'SUPPLIER_FETCH_SUCCESS', suppliers: undefined }));

    expect(generator.throw('Error').value)
      .toEqual(put({ type: 'SUPPLIER_FETCH_FAILED'}));
  });
  
});