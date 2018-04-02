import { StackNavigator } from 'react-navigation';
import Landing from '../components/Landing'
import Auth from '../components/Auth'
import Dashboard from '../components/Dashboard'
import LeftNavigation from '../components/LeftNavigation'


// export default StackNavigator(
//   {
//     Login: { screen: Login },
//     Auth: { screen: Auth},
//   },
//   {
//     initialRouteName: 'Login',
//   }
// );
const Routes = {
    Landing: { screen: Landing },
    Auth: { screen: Auth },
    Dashboard: { screen: Dashboard },
    LeftNavigation: { screen: LeftNavigation }
};

export default Routes;
