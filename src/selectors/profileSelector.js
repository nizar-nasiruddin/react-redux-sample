import get from 'lodash/get';
import { createSelector } from 'reselect'

const firstNameSelector = state => get(state, 'profileReducer.userInfo.given_name','');

export const initial = createSelector(
  firstNameSelector,
  (firstName) => firstName.charAt(0)
);