import React from 'react';
import {Text, StyleSheet, View, ImageBackground, TouchableHighlight} from 'react-native';
import {Box, Button, Center, Heading, Image, Input, ScrollView} from "native-base";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import LoginScreen from "./LoginScreen";
import { styles } from '../App';
import { SafeAreaView } from 'react-native-safe-area-context';
import Localization from "./Localization";
const images = [
    require('./kebab.png'),
    require('./kuchniapolska.png'),
    require('./orientalne.png'),
    require('./pizza.png')
]


export default function MainScreen({navigation}){
    return (
        <Center w="100%" h="100%" backgroundColor="#F4BD57">

            <Image
                source={require("./logo.png")}
                style={{width: 120, height: 120, borderRadius: 100, marginBottom: 10, marginTop:25}}
                alt={"Alt"}
            />
            <Box w="90%" mt="3">
                <Input backgroundColor="white" borderRadius="10" placeholder="Wyszukaj swoje ulubione jedzenie" />
            </Box>
            <Box>
                <Heading size="lg"  fontWeight="600" color="coolGray.800" _dark={{
                    color: "warmGray.50"
                }}>
                </Heading>
            </Box>
            <ScrollView w="100%" backgroundColor={"#F4BD57"} showsVerticalScrollIndicator={false} contentContainerStyle={{justifyContent: 'center'}}>
                <Text style={{marginTop:5, marginLeft:20, fontSize:25, fontWeight: "bold" }}>Kategorie</Text>

                {/* Kategorie */}
                <ScrollView w="100%" horizontal={true} showsHorizontalScrollIndicator={false}>
                    <SafeAreaView style={{marginLeft: 15, marginRight: 15}}>
                        <Image
                            source={require("./pizza.png")}
                            style={{width: 120, height: 120, borderRadius: 10,  marginBottom: 10}}
                            alt={"Alt"}
                        />
                        <Text style={{marginTop:5,  fontSize:12, marginBottom: 6, marginLeft: 45 }}>Pizza</Text>
                    </SafeAreaView>
                    <SafeAreaView style={{marginLeft: 15, marginRight: 15}}>
                        <Image
                            source={require("./kuchniapolska.png")}
                            style={{width: 120, height: 120, borderRadius: 10,  marginBottom: 10}}
                            alt={"Alt"}
                        />
                        <Text style={{marginTop:5,fontSize:12, marginBottom: 6, marginLeft: 15 }}>Kuchnia Polska</Text>
                    </SafeAreaView>
                    <SafeAreaView style={{marginLeft: 15, marginRight: 15}}>
                        <Image
                            source={require("./kebab.png")}
                            style={{width: 120, height: 120, borderRadius: 10,  marginBottom: 10}}
                            alt={"Alt"}
                        />
                        <Text style={{marginTop:5, fontSize:12 ,marginBottom: 6 , marginLeft: 42}}>Kebsy</Text>
                    </SafeAreaView>
                    <SafeAreaView style={{marginLeft: 15, marginRight: 15}}>
                        <Image
                            source={require("./orientalne.png")}
                            style={{width: 120, height: 120, borderRadius: 10,  marginBottom: 10}}
                            alt={"Alt"}
                        />
                        <Text style={{marginTop:5, fontSize:12, marginBottom: 6, marginLeft: 10 }}>Kuchnia orientalna</Text>
                    </SafeAreaView>
                </ScrollView>


                {/* OFERTA SPECJALNA */}

                <Text style={{marginTop:5, marginLeft:20, fontSize:25, fontWeight: "bold" }}>Oferta specjalana</Text>
                <ScrollView w="100%" horizontal={true} showsHorizontalScrollIndicator={false}>
                    <SafeAreaView style={{ marginLeft: 15, marginRight: 15}}>
                        <TouchableHighlight onPress={() => navigation.navigate("Localization")}>
                        <Image
                            source={require("./pizza.png")}
                            style={{width: 120, height: 120, borderRadius: 10,  marginBottom: 10}}
                            alt={"Alt"}

                        />
                        </TouchableHighlight>
                        <Text style={{marginTop:5,  fontSize:12, marginBottom: 6, marginLeft: 45 }}>Pizza</Text>
                    </SafeAreaView>
                    <SafeAreaView style={{marginLeft: 15, marginRight: 15}}>
                        <Image
                            source={require("./kuchniapolska.png")}
                            style={{width: 120, height: 120, borderRadius: 10,  marginBottom: 10}}
                            alt={"Alt"}
                        />
                        <Text style={{marginTop:5,fontSize:12, marginBottom: 6, marginLeft: 15 }}>Kuchnia Polska</Text>
                    </SafeAreaView>
                    <SafeAreaView style={{marginLeft: 15, marginRight: 15}}>
                        <Image
                            source={require("./kebab.png")}
                            style={{width: 120, height: 120, borderRadius: 10,  marginBottom: 10}}
                            alt={"Alt"}
                        />
                        <Text style={{marginTop:5, fontSize:12 ,marginBottom: 6 , marginLeft: 42}}>Kebsy</Text>
                    </SafeAreaView>
                    <SafeAreaView style={{marginLeft: 15, marginRight: 15}}>
                        <Image
                            source={require("./orientalne.png")}
                            style={{width: 120, height: 120, borderRadius: 10,  marginBottom: 10}}
                            alt={"Alt"}
                        />
                        <Text style={{marginTop:5, fontSize:12, marginBottom: 6, marginLeft: 10 }}>Kuchnia orientalna</Text>
                    </SafeAreaView>
                </ScrollView>




                {/* Propozycje dla Ciebie */}
                <Text style={{marginTop:5, marginLeft:20, fontSize:25, fontWeight: "bold" }}>Propozycje dla Ciebie</Text>

                <ScrollView showsHorizontalScrollIndicator={false}>
                    <SafeAreaView  style={{width: 395, height:140 ,marginLeft: 15, marginRight: 15}}>
                        <ImageBackground source={require("./carbonara.png")} style={{width: '100%', height: '100%'}}>

                            <Text style={{color: 'black',fontWeight: "bold",textShadowRadius:1 , textShadowColor: "white",textShadowOffset: {width: -1, height: 1} ,  fontSize: 26, top:70, left: 100}}>Spaghetti Carbonara</Text>

                        </ImageBackground>
                    </SafeAreaView>

                    <SafeAreaView  style={{width: 395, height:140 ,marginLeft: 15, marginRight: 15}}>
                        <ImageBackground source={require("./homar.png")} style={{width: '100%', height: '100%'}}>

                            <Text style={{color: 'black',fontWeight: "bold", textShadowRadius:1,textShadowOffset: {width: -1, height: 1} , textShadowColor: "white", fontSize: 26, top:70, left: 160}}>Homar</Text>

                        </ImageBackground>
                    </SafeAreaView>

                    <SafeAreaView  style={{width: 395, height:140 ,marginLeft: 15, marginRight: 15}}>
                        <ImageBackground source={require("./sushi.png")} style={{width: '100%', height: '100%'}}>

                            <Text style={{color: 'black',fontWeight: "bold", textShadowRadius:1,textShadowOffset: {width: -1, height: 1} , textShadowColor: "white", fontSize: 26, top:70, left: 170}}>Sushi</Text>

                        </ImageBackground>
                    </SafeAreaView>
                </ScrollView>
            </ScrollView>
        </Center>
    );
}