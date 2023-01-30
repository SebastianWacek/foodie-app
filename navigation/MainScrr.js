import MainScreen from "../screens/MainScreen";
import { createDrawerNavigator } from '@react-navigation/drawer';
import PaymentScreen from "../screens/PaymentScreen";
import BasketScreen from "../screens/BasketScreen";
import Authors from "../screens/Authors";
import {Settings} from "react-native";
import Contact from "../screens/Contact";
const Drawer = createDrawerNavigator();

export default function MainScrr({navigation}){
    return(
        <Drawer.Navigator
            screenOptions={{headerShown: false}}
        >
            <Drawer.Screen name = "MainScreen"  component = {MainScreen}/>
            <Drawer.Screen name = "Authors"  component = {Authors}/>
            <Drawer.Screen name = "Contact" component = {Contact}/>
        </Drawer.Navigator>

    );
}