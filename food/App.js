import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

import SearchScreen from './src/screens/SearchScreen';
// HELLO
const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultsShow: ResultsShowScreen,
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Business Search',
    },
  }
);

export default createAppContainer(navigator);

// Client ID
// Mg3fvJ2FV-6CL4z8NOcoQQ

// API Key
// LgbuhAwYr54Q2Krt5Sokl4bdqQpnEXPXyVhTky2PFYlDvG16K7akTNAvtVBcTTCGG4a20h1xGgniHijq-28IsBGTcNKYdoiUrOtKmfsEml0x47rkyu0_yeWzf-MNYHYx
