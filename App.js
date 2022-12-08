import 'react-native-gesture-handler';
import { NativeBaseProvider } from 'native-base';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import LoginScreen from "./screens/LoginScreen";


const Drawer = createDrawerNavigator();

export default function App() {
  return (
      <NativeBaseProvider>
      <NavigationContainer>
        <Drawer.Navigator
            screenOptions={{
              headerShown: false
            }}>
          <Drawer.Screen name="Login" component={LoginScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
      </NativeBaseProvider>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  TextInput: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  text:{
    fontSize: 24,
    marginBottom: 20,
  },

  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});