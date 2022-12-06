// React
import React from 'react';

// Libraries
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

// Mobx
import { Provider } from 'mobx-react';
import { store } from '~/store';

// Routes
import Routes from '~/routes';

const Index: React.FC = () => {
  return (
    <Provider {...store}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </Provider>
  );
};

export default Index;
