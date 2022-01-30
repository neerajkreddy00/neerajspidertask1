import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Dimensions,
  FlatList,
  Button,
  Image,
  PermissionsAndroid,
} from 'react-native';
//import BoilerPlate from './components/BoilerPlate';
import DoubleClick from 'react-native-double-tap';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Alarm from './components/alarm';
import Stopwatch from './components/stopwatch';
import Timer from './components/timer';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Alarmstackscreens = () => {
  
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Homescreen"
          component={Alarm}
          options={{
            title: 'ALARM APP',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
         <Stack.Screen name="stopwatch" component={Stopwatch} />
         <Stack.Screen name="timer" component={Timer} />
    
      </Stack.Navigator>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Alarm"
          component={Alarmstackscreens}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('./assests/alarm.jpeg')}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Stopwatch"
          component={Stopwatch}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('./assests/stopwatch.png')}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            ),
          }}
        />
         <Tab.Screen
          name="Timer"
          component={Timer}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('./assests/timer.jpg')}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );

};
const styles = StyleSheet.create({
  containerView: {
    margin: 100,
    width: Dimensions.get('screen').width,
  },
});
export default App;
