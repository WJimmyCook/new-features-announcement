import {Navigation} from 'react-native-navigation';

import MainScreen from './MainScreen';
import WhatsNewScreen from './WhatsNewScreen';

export default () => {
  Navigation.registerComponent('NewFeatures.MainScreen', () => MainScreen);
  Navigation.registerComponent('NewFeatures.WhatsNew', () => WhatsNewScreen);
};
