import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Home';
import TodoList from './src/components/Todo';

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen
            name="Home"
            component={Home}
          />
          <Stack.Screen
            name="Todo"
            component={TodoList}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;