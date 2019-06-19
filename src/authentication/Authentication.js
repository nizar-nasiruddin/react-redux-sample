import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withAuth } from '@okta/okta-react';
import { bindActionCreators } from 'redux';

import * as profileActions from '../actions/profileActions';
import * as profileSelector from '../selectors/profileSelector';

const withOktaAuth = (WrappedComponent) => {
  class Wrapper extends Component {
    handleLogOut() {
      this.props.auth.logout();
    }

    async componentDidMount() {
      const { onUserInfoLoaded, fetchSuppliers } = this.props.actions;
      this.props.auth.getUser()
        .then ((userInfo) => {
          onUserInfoLoaded(userInfo);
          fetchSuppliers();
        });
    }

    render() {
      return (
        <React.Fragment>
          <WrappedComponent logOut={ () => this.handleLogOut()} {...this.props}/>
        </React.Fragment>
      )
    }
  }

  const mapStateToProps = (state) => {
    return {
      initial: profileSelector.initial(state)
    }
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      actions: bindActionCreators({
        ...profileActions,
      }, dispatch)
    }
  };

  const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return {
      ...stateProps,
      ...dispatchProps,
      ...ownProps,
      actions: Object.assign({}, dispatchProps.actions, ownProps.actions)
    }
  };

  const WrapperWithAuth = withAuth(Wrapper);

  return connect(mapStateToProps, mapDispatchToProps, mergeProps)(WrapperWithAuth);
};

export default withOktaAuth;