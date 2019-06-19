export const onUserInfoLoaded = (userInfo) => {
  return {
    type: 'USER_INFO_LOADED',
    userInfo
  }
};

export const fetchSuppliers = () => {
  return {
    type: 'SUPPLIER_FETCH_REQUESTED'
  }
};