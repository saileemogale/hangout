import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react'
import DashboardView from '../components/DashboardView'
import { fetchAllRooms, fetchRoomDetails } from '../actions/Dashboard'

var mapStateToProps = function(state, ownProps){
  console.log("in map to state")
  console.log(state)
    return {
       user: state.UserReducer.user,
       nav: state.nav,
       roomsList: state.UserReducer.roomsList,
       navigation: ownProps.children.props.navigation,
       roomDetails: state.UserReducer.roomDetails

   }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllRooms: (accessToken, userEmail) => dispatch(fetchAllRooms(accessToken, userEmail)),
    fetchRoomDetails: (accessToken, roomId, roomName) => dispatch(fetchRoomDetails(accessToken, roomId, roomName)),
  }
};

const DashboardContainer = connect(mapStateToProps, mapDispatchToProps)(DashboardView);

export default DashboardContainer;
