import { NavigationActions } from 'react-navigation';
import { UPDATE_USER } from '../constants'

export function azureLogin(accessToken){
    console.log("in azure login function")
    console.log(accessToken)
    return dispatch => {
        console.log("in dispatch")
        console.log(dispatch)
      return fetch('https://graph.microsoft.com/beta/me', {
        method : 'GET',
        headers : {
              Authorization : `bearer ${accessToken}`
            }
        })
        .then((response) => response.json())
        .then(userData => {
          console.log("in response")
          console.log(userData)
          console.log("after user data")
          dispatch(updateUser(userData))
          dispatch(NavigationActions.navigate({routeName:'Dashboard'}))
        })
    }
}

function updateUser(userData){
    return{
        type: UPDATE_USER,
        payload: userData
    }
}
