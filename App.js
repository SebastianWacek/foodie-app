import 'react-native-gesture-handler';
import { NativeBaseProvider } from 'native-base';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import LoginScreen from "./screens/LoginScreen";
import MainScreen from "./screens/MainScreen";
import DetailsScreen from "./screens/RestaurantScreen";
import {createStackNavigator} from "@react-navigation/stack";
import Localization from "./screens/Localization";
import PaymentScreen from "./screens/PaymentScreen";
import BasketScreen from "./screens/BasketScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import HistoryScreen from "./screens/HistoryScreen"

const Stack = createStackNavigator();

export default function App() {
  return (
      <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
              headerShown: false,
        }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="MainScreen" component={MainScreen} />
          <Stack.Screen name="Localization" component={Localization} />
          <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
          <Stack.Screen name="BasketScreen" component={BasketScreen} />
          <Stack.Screen name="RestaurantScreen" component={RestaurantScreen} />
          <Stack.Screen name="HistoryScreen" component={HistoryScreen} />
        </Stack.Navigator>
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