import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import Test_1 from './component/Test_1';
import { NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { store } from './store';
import stack1 from './stackNavi/stack1';
import stack2 from './stackNavi/stack2';
import stack3 from './stackNavi/stack3';

export default function App() {

  // let store = createStore(reducer);

  const stack = createStackNavigator();
  const bottomTab = createBottomTabNavigator();

  const stackScreen = () => {
    return<>
      <stack.Navigator>
        <stack.Screen name='stack1' component={stack1}/>
        <stack.Screen name='stack2' component={stack2}/>
        <stack.Screen name='stack3' component={stack3}/>
      </stack.Navigator>
    </>
  }

  return (

    <Provider store={store}>

      <SafeAreaView />
      <NavigationContainer>
        <bottomTab.Navigator>
          <bottomTab.Screen 
            name='HOME' component={Test_1}
          />
          <bottomTab.Screen 
            name='Bottom_1' component={stackScreen}
          />
        </bottomTab.Navigator>
      </NavigationContainer>
    </Provider>
    
  );
}