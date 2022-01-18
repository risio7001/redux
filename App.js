import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Test_1 from './component/Test_1';
import reducer from './redux/reducer';
import { NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TestBottom_1 from './component/TestBottom_1';

export default function App() {

  let store = createStore(reducer);

  const bottomTab = createBottomTabNavigator();

  return (

    <Provider store={store}>

      <SafeAreaView />
      <NavigationContainer>
        <bottomTab.Navigator>
          <bottomTab.Screen 
            name='HOME' component={Test_1}
          />
          <bottomTab.Screen 
            name='Bottom_1' component={TestBottom_1}
          />
        </bottomTab.Navigator>
      </NavigationContainer>
    </Provider>
    
  );
}