import { NavigationActions } from 'react-navigation';
import axios from 'axios';
import { UPDATE_USER, UPDATE_ROOMS, UPDATE_ROOM_DETAILS } from '../constants'
import moment from 'moment'

export function fetchAllRooms(accessToken, userEmail){
    console.log("in fetch all rooms function")
    console.log(accessToken)
    console.log(userEmail)
    return dispatch => {
        axios.get(`https://graph.microsoft.com/beta/users/${userEmail}/findrooms`,
        {
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
        }
        })
        .then(response => {
            console.log(response.data.value)
            dispatch(updateRooms(response.data.value))
        })
        .catch(e => {
            console.log("In catch of fetch all rooms");
            console.log(e);
        });
    }
}


function updateRooms(roomsList){
    return{
        type: UPDATE_ROOMS,
        payload: roomsList
    }
}

export function fetchRoomDetails(accessToken, roomId, roomName){
      return dispatch => {
        var today = moment(new Date()).format('YYYY-MM-DD');
        var tomorrow = moment(moment()).add(1, 'days').format('YYYY-MM-DD');
        axios.get("https://graph.microsoft.com/beta/users/" + roomId+ "/calendar/calendarView?startDateTime=" + today + "&endDateTime=" + tomorrow,
        {headers: {
                'accept': 'application/json',                
                'content-type': 'application/json',
                'Authorization': `Bearer ${accessToken}`}
        }
        )
        .then(response => {
            //console.log("in response of calenders call"); 
            //console.log(response.data.value[0].start);
            //console.log(response.data.value[0].end);
            console.log("In success of calendar details")
            console.log(response.data.value);
            let roomDetails = {}
            roomDetails[roomName] = response.data.value
            dispatch(updateRoomDetails(roomDetails))
        })
        .catch(e => {
            console.log("In catch of fetch calendar details"); 
            console.log(e);
        }); 
      }
}

function updateRoomDetails(roomDetails){
    return {
        type: UPDATE_ROOM_DETAILS,
        payload: roomDetails
    }
}