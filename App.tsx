/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {PersistGate} from 'redux-persist/lib/integration/react';

import useLinking from 'app/navigators/useLinking';
import createStore from 'app/stores';

import DummyScreen from 'app/containers/DummyScreen';

declare var global: {HermesInternal: null | {}};

const Stack = createStackNavigator();
const {store, persistor} = createStore();

const App = (props: {skipLoadingScreen: any}) => {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState<
    any
  >();
  const containerRef = React.useRef();
  const {getInitialState} = useLinking(containerRef);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <View style={{flex: 1}}>
            <NavigationContainer
              ref={containerRef}
              initialState={initialNavigationState}>
              <Stack.Navigator headerMode="none">
                <Stack.Screen name="Root" component={DummyScreen} />
              </Stack.Navigator>
            </NavigationContainer>
          </View>
        </PersistGate>
      </Provider>
    );
  }
};

export default App;
