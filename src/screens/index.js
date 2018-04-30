import { StackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';

export default StackNavigator({
  Home: {
    screen: HomeScreen
  },
  Detail: {
    screen: DetailScreen
  }
});
