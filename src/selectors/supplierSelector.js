import get from 'lodash/get';

export const supplierSelector = state => get(state.supplierReducer, 'supplier.items', []);