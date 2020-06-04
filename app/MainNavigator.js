import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Destination from './screen/Destination';
import Place from './screen/Place ';
import GoBook from './screen/GoBook';
import Booking from './screen/Booking';
import Quotes from './screen/Quotes';
import Itinary from './screen/Itinary';
import Splash from './screen/Splash';
import Login from './screen/Login';
import Auth from './screen/Auth';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Icon} from 'react-native-elements';
import {fromRight, zoomIn} from 'react-navigation-transitions';
import NavigationService from './functions/NavigationService';
import BottomBar from './components/BottomBar';

const DestStack = createStackNavigator(
  {
    Destination: {screen: Destination},
    Place: {screen: Place},
  },
  {
    headerMode: 'none',
    transitionConfig: () => zoomIn(),
    navigationOptions: ({navigation}) => ({
      tabBarVisible: navigation.state.index === 0,
    }),
  },
);

const BookStack = createStackNavigator(
  {
    GoBooking: {screen: GoBook},
    Booking: {screen: Booking},
  },
  {
    headerMode: 'none',
    transitionConfig: () => fromRight(),
  },
);

const QuoteStack = createStackNavigator(
  {
    Quote: {screen: Quotes},
    Itinary: {screen: Itinary},
  },
  {
    headerMode: 'none',
    transitionConfig: () => fromRight(),
  },
);

const MainStack = createBottomTabNavigator(
  {
    Destinations: DestStack,
    GoBook: BookStack,
    Quotes: QuoteStack,
  },
  {
    lazy: false,
    tabBarComponent: () => {
      return (
        <BottomBar
          dest={() => NavigationService.navigate('Destinations')}
          go={() => NavigationService.navigate('GoBook')}
          quotes={() => NavigationService.navigate('Quotes')}
        />
      );
    },
    // defaultNavigationOptions: ({navigation}) => ({
    //   tabBarIcon: ({tintColor}) => {
    //     const {routeName} = navigation.state;
    //     if (routeName === 'Destinations') {
    //       return <Icon name="card-travel" type="material" color={tintColor} />;
    //     } else if (routeName === 'GoBook') {
    //       return <Icon name="explore" type="material" color={tintColor} />;
    //     } else if (routeName === 'Quotes') {
    //       return <Icon name="comment" type="font-awesome" color={tintColor} />;
    //     }
    //   },
    // }),
    // tabBarOptions: {
    //   showLabel: true,
    //   showIcon: true,
    //   activeTintColor: '#ab93c9',
    //   style: {paddingBottom: 5},
    // },
  },
);

const AuthStack = createStackNavigator(
  {
    Login: {screen: Login},
    Authentication: {screen: Auth},
  },
  {headerMode: 'none', transitionConfig: () => fromRight()},
);

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      // Splash: Splash,
      // Auth: AuthStack,
      App: MainStack,
    },
    {transitionConfig: () => fromLeft()},
  ),
);
const MainNavigator = props => {
  return (
    <AppContainer
      ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}
    />
  );
};

export default MainNavigator;
