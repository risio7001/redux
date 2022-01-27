import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import Test_1 from './component/Test_1';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { store } from './store';
import stack1 from './stackNavi/stack1';
import stack2 from './stackNavi/stack2';
import stack3 from './stackNavi/stack3';
import payTest from './payment/payTest';
import payResult from './payment/payResult';
import payRES from './payment/payRES';
import payIMP from './payment/payIMP';
import IMPResult from './payment/IMPResult';
import payList from './payment/payList';

export default function App() {

  const stack = createStackNavigator();
  const bottomTab = createBottomTabNavigator();

  const stackScreen = () => {
    return <>
      <stack.Navigator>
        <stack.Screen name='stack1' component={stack1} />
        <stack.Screen name='stack2' component={stack2} />
        <stack.Screen name='stack3' component={stack3} />
      </stack.Navigator>
    </>
  }
  
  const payStackScreen = () => {
    return <>
      <stack.Navigator>
        <stack.Screen name='PayTest' component={payTest} />
        <stack.Screen name='payList' component={payList} />
        <stack.Screen name='pay' component={payRES} />
        <stack.Screen name='payResult' component={payResult} />
        <stack.Screen name='payIMP' component={payIMP} />
        <stack.Screen name='IMPResult' component={IMPResult} />
      </stack.Navigator>
    </>
  }

  return (

    <Provider store={store}>
      <NavigationContainer>
        <bottomTab.Navigator>
          <bottomTab.Screen name='HOME' component={Test_1} />
          <bottomTab.Screen name='Bottom_1' component={stackScreen} />
          <bottomTab.Screen name='PAY' component={payStackScreen} />
        </bottomTab.Navigator>
      </NavigationContainer>
    </Provider>

  );
}