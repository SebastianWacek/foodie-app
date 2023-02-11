import 'react-native-gesture-handler';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from "./screens/LoginScreen";
import {createStackNavigator} from "@react-navigation/stack";
import Localization from "./screens/Localization";
import PaymentScreen from "./screens/PaymentScreen";
import BasketScreen from "./screens/BasketScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import HistoryScreen from "./screens/HistoryScreen";
import SummaryScreen from './screens/SummaryScreen';
import RegisterScreen from './screens/RegisterScreen';
import MainScrr from "./navigation/MainScrr";

import { MainContext } from './context';
import { useState } from 'react';

const Stack = createStackNavigator();

export default function App() {

  const[basketInfo, setBasketInfo] = useState({});

  return (
    <NativeBaseProvider>
      {/* zapewnienie dostępu do danych koszyka w całej aplikacji */}
      <MainContext.Provider value={{ basketInfo, setBasketInfo }}>
        <NavigationContainer>
          <Stack.Navigator
              screenOptions={{
                headerShown: false,
          }}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen name="MainScreen" component={MainScrr}/>
            <Stack.Screen name="Localization" component={Localization} />
            <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
            <Stack.Screen name="BasketScreen" component={BasketScreen} />
            <Stack.Screen name="RestaurantScreen" component={RestaurantScreen} />
            <Stack.Screen name="SummaryScreen" component={SummaryScreen} />
            <Stack.Screen name="HistoryScreen" component={HistoryScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </MainContext.Provider>
    </NativeBaseProvider>
  );
}