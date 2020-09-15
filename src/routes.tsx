import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Identification from './pages/Identification';
import Todos from './pages/Todos';

const Stack = createStackNavigator();

const {Navigator, Screen} = Stack;

const Routes: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#232123',
        },
        headerTitleAlign: 'center',
      }}>
      <Screen
        name="Identification"
        component={Identification}
        options={{title: 'Identificação'}}
      />
      <Screen
        name="Todos"
        component={Todos}
        options={{title: 'Listagem de TODOs'}}
      />
    </Navigator>
  );
};

export default Routes;
