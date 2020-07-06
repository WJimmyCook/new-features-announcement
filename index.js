import {Navigation} from 'react-native-navigation';
import registerScreens from './src/screens/registerScreens';
import AsyncStorage from '@react-native-community/async-storage';
import DeviceInfo from 'react-native-device-info';

const start = () => {
  registerScreens();
  Navigation.events().registerAppLaunchedListener(async () => {
    setRoot();
    showWhatsNew();
  });
};

const setRoot = () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'NewFeatures.MainScreen',
            },
          },
        ],
      },
    },
  });
};

const showWhatsNew = async () => {
  const persistedVersion = await AsyncStorage.getItem('@app_version');
  const currentVersion = parseFloat(DeviceInfo.getVersion());
  if (persistedVersion !== null && currentVersion > persistedVersion) {
    Navigation.showModal({
      component: {
        name: 'NewFeatures.WhatsNew',
        passProps: {
          currentVersion,
        },
      },
    });
  }

  AsyncStorage.setItem('@app_version', JSON.stringify(currentVersion));
};

start();
