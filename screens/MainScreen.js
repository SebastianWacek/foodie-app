
import React from 'react';
import { Text,StyleSheet, View } from 'react-native';
import {Box, Button, Center, Image, Input, ScrollView} from "native-base";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import LoginScreen from "./LoginScreen";
import DetailsScreen from "./DetailsScreen";
import {NavigationContainer} from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export default function MainScreen({navigation}){
    return (
    <Center w="100%" h="100%" backgroundColor="#F4BD57">
        <Image
            source={require("./logo.png")}
            style={{width: 150, height: 150, marginTop:20, borderRadius: 100}}
            alt={"Alt"}
        />
        <Box safeArea mb="20" p="2" py="8" w="100%" >
            <Input w="100%"  backgroundColor="white" placeholder="Wyszukaj swoje ulubione jedzenie"/>
        </Box>

            <Button name="DetailsScreen" onPress={()=>navigation.navigate(DetailsScreen)} />

    </Center>
    )}
