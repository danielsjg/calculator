// React
import React from 'react';

// Libraries
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import Calculator from '~/screens/Calculator';

const StackScreens = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Calculator"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Calculator" component={Calculator} />
    </Stack.Navigator>
  );
};

const AppRoutes: React.FC = () => {
  return <StackScreens />;
};

export default AppRoutes;
