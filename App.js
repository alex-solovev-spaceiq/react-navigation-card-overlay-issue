import * as React from 'react';
import {View, Text, Button, StyleSheet, Pressable} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

function HomeScreen({navigation: {navigate}}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button title="Open Modal" onPress={() => navigate('Modal')} />
    </View>
  );
}

function ModalScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}>
      <Text>Modal Screen</Text>
    </View>
  );
}

function ModalOverlay({navigation: {goBack}}) {
  return (
    <Pressable
      onPress={goBack}
      style={[
        StyleSheet.absoluteFillObject,
        {backgroundColor: 'rgba(0,0,0,0.7)'},
      ]}
    />
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Group
          screenOptions={{
            presentation: 'transparentModal',
            cardOverlay: () => <ModalOverlay />,
            cardOverlayEnabled: true,
            cardStyle: {
              width: 500,
              position: 'absolute',
              top: 40,
              right: 40,
              bottom: 40,
              borderRadius: 6,
            },
          }}>
          <Stack.Screen name="Modal" component={ModalScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
