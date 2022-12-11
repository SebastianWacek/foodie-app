
import React from 'react';
import { Text,StyleSheet, View } from 'react-native';
import {Box, Button, Center, Heading, Image, Input, ScrollView} from "native-base";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import LoginScreen from "./LoginScreen";
import DetailsScreen from "./DetailsScreen";
import Localization from "./Localization";

export default function MainScreen({navigation}){
    return (
        <Center w="100%" h="100%" backgroundColor="#F4BD57">

            <Image
                source={require("./logo.png")}
                style={{width: 120, height: 120, borderRadius: 100, marginBottom: 10}}
                alt={"Alt"}
            />
            <Box w="90%" mt="3">
                <Input backgroundColor="white" borderRadius="10" placeholder="Wyszukaj swoje ulubione jedzenie" />
            </Box>
            <Box safeArea mb="20" p="2" py="8" w="90%" >
                <Heading size="lg"  fontWeight="600" color="coolGray.800" _dark={{
                    color: "warmGray.50"
                }}>
                </Heading>

            </Box>
            <Box>
                <Button borderRadius="10" mt="3" color="#63C5C5" width="150" onPress={()=>navigation.navigate('Localization')} >
                    Zlokalizuj
                </Button>
            </Box>
        </Center>
    );
}

