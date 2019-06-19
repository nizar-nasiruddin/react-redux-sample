const USER_INFO_LOADED='USER_INFO_LOADED';

const initialState = {
  userInfo: {
    given_name: ''
  }
};

const profileReducer = (
  state = initialState,
  action
) => {
  switch(action.type) {
    case USER_INFO_LOADED:
      return { ...state, userInfo: action.userInfo };
    default:
      return state;
  }
};

export default profileReducer;