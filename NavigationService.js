import { NavigationActions } from 'react-navigation';

const config = {};

export function setNavigator(nav) {
  if (nav) {
    //when attempting to console.log nav app crashes, yete does go
    //in if block...
    console.log('Nav')
    config.navigator = nav;
  }
}

export function navigate(route, params) {
  if (config.navigator && route) {
    let action = NavigationActions.navigate({routeName: route});
    config.navigator.dispatch(action);
  }
}

export function goBack() {
  if (config.navigator) {
    let action = NavigationActions.back({});
    config.navigator.dispatch(action);
  }
}
