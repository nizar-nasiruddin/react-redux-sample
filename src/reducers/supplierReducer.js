const SUPPLIER_FETCH_SUCCESS='SUPPLIER_FETCH_SUCCESS';

const initialState = {
  suppliers:{}
};

const supplierReducer = (
  state = initialState,
  action
) => {
  switch(action.type) {
    case SUPPLIER_FETCH_SUCCESS:
      return { ...state, suppliers: action.suppliers };
    default:
      return state;
  }
};

export default supplierReducer;