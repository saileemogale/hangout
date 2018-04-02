import {
  StackNavigator,
  addNavigationHelpers,
} from 'react-navigation';
import {
  createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import { Provider, connect } from 'react-redux';
import React from 'react';


import Routes from './src/navigators';
import getStore from "./src/stores";
import getRootReducer from './src/reducers';

const AppNavigator = StackNavigator(Routes);

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Landing'));

const navReducer = (state = initialState, action) => {
    const newState = AppNavigator.router.getStateForAction(action, state);
    return newState || state;
};

const appReducer = getRootReducer(navReducer);

// Note: createReactNavigationReduxMiddleware must be run before createReduxBoundAddListener
const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
);
const addListener = createReduxBoundAddListener('root');


class App extends React.Component {
  render() {
    return (
      <AppNavigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
        addListener,
      })} />
    );
  }
}

const mapStateToProps = (state) => ({
  nav: state.nav
});

const AppWithNavigationState = connect(mapStateToProps)(App);

const store = getStore(appReducer, middleware);

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
