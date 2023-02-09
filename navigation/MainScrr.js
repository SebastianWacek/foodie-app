import MainScreen from "../screens/MainScreen";
import { createDrawerNavigator } from '@react-navigation/drawer';
import PaymentScreen from "../screens/PaymentScreen";
import BasketScreen from "../screens/BasketScreen";
import {Settings} from "react-native";
import CustomDrawer from "./CustomDrawer";
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import HistoryScreen from "../screens/HistoryScreen";
import LoginScreen from "../screens/LoginScreen";

const Drawer = createDrawerNavigator();

export default function MainScrr({navigation}){
    return(
        <Drawer.Navigator
            drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{headerShown: false,
                drawerActiveBackgroundColor: '#ffbf7c',
                drawerActiveTintColor: '#fff',
                drawerLabelStyle: {
                marginLeft: -25,
                    fontSize: 18,
            }}}
        >
            <Drawer.Screen name = "Ekran główny"  component = {MainScreen}
            options={{
                drawerIcon: ({color}) => (
                    <Ionicons name="home-outline" size={22} color={color} />
                )
            }} />
            <Drawer.Screen name = "Autorzy"  component = {HistoryScreen}
                           options={{
                               drawerIcon: ({color}) => (
                                   <Ionicons name="person-outline" size={22} color={color} />
                               )
                           }}
            />
            <Drawer.Screen name = "Kontakt" component = {HistoryScreen}
                           options={{
                               drawerIcon: ({color}) => (
                                   <Ionicons name="chatbox-ellipses-outline" size={22} color={color} />
                               )
                           }}
            />
        </Drawer.Navigator>

    );
}