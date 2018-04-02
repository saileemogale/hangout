import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react'
import LoginView from '../components/LoginView'
import { azureLogin } from '../actions/Auth'

var mapStateToProps = function(state, ownProps){
    console.log("AuthContainer")
    console.log(state)
    console.log(ownProps.children.props.navigation)
    return {
       ...state, navigation: ownProps.children.props.navigation
   }
}

const mapDispatchToProps = (dispatch) => {
  return {
    azureLogin: (accessToken) => dispatch(azureLogin(accessToken)),
  }
};

const AuthContainer = connect(mapStateToProps, mapDispatchToProps)(LoginView);

export default AuthContainer;
