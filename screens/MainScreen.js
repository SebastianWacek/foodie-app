import React from 'react';
import {Text, StyleSheet, View, ImageBackground, TouchableHighlight, TouchableOpacity} from 'react-native';
import {Box, Button, Center, Heading, Image, Input, ScrollView} from "native-base";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import LoginScreen from "./LoginScreen";
import { SafeAreaView } from 'react-native-safe-area-context';
import Localization from "./Localization";
import PaymentScreen from "./PaymentScreen";
import {useNavigation} from "@react-navigation/native";
import img1 from "./images/pizza.png";
import kuchniaPolska from "./images/kuchniapolska.png";
import pizza from "./images/pizza.png";
import kebsy from "./images/kebab.png";
import kuchniaOrientalna from "./images/orientalne.png";
import spaghetti from "./images/carbonara.png";
import homar from "./images/homar.png";
import RegisterScreen from './RegisterScreen';

export default function MainScreen({navigation}){

    const clickHandler = () => {
        navigation.navigate("#")
    }
    let pizza = require('./images/pizza.png')
    let kuchniaPolska = require('./images/kuchniapolska.png')
    let kebsy = require('./images/kebab.png')
    let kuchniaOrientalna = require('./images/orientalne.png')
    let spaghetti = require('./images/carbonara.png')
    let homar = require('./images/homar.png')
    let sushi = require('./images/sushi.png')

    return (
        <Center w="100%" h="100%" backgroundColor="#F4BD57">

            <Image
                source={require("./images/logo.png")}
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
                <TouchableOpacity
                    activeOpacity={3}
                    style={styles.touchableOpacityStyle}>
                    <Image
                        source={require('./images/2arrow.png')}
                        alt={"Alt"}
                        style={styles.floatingButtonStyle}
                    />
                </TouchableOpacity>
                {/* Kategorie */}
                <ScrollView w="100%" horizontal={true} mt={"5"} showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity
                        style={{marginLeft: 15, marginRight: 15}}
                        onPress={()=>navigation.navigate('RestaurantScreen', {
                            name: "Pizza",
                            description: "Najlepsza pizza jaką jadłeś",
                            otherParam: pizza,
                            dishName1: "Capricioza",
                            price1:19.99+"zł",
                            dishName2: "Margheritta",
                            price2: 24.99+"zł",
                            dishName3: "Italiana",
                            price3: 26.99+"zł",
                            dishName4: "Hawajska",
                            price4: 28.99+"zł",
                            dishName5: "Wegetariana",
                            price5: 15.69+"zł"
                        })}
                    >
                        <Image
                            source={pizza}
                            style={{width: 120, height: 120, borderRadius: 10,  marginBottom: 10}}
                            alt={"Alt"}

                        />
                        <Text style={{marginTop:5,  fontSize:12, marginBottom: 6, marginLeft: 45 }}>Pizza</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft: 15, marginRight: 15}}
                                      onPress={() => navigation.navigate('RestaurantScreen', {
                                          name: "Kuchnia Polska",
                                          description: "Polskie dania i napoje",
                                          otherParam: kuchniaPolska,
                                          dishName1: "Rosół",
                                          price1:13.29+"zł",
                                          dishName2: "Pierogi",
                                          price2: 22.59+"zł",
                                          dishName3: "Schabowy z ziemniakami i surówką",
                                          price3: 29.90+"zł",
                                          dishName4: "Kluski z serem",
                                          price4: 14.50+"zł",
                                          dishName5: "Krokiety",
                                          price5: 19.80+"zł"
                                      })}
                    >
                        <Image
                            source={kuchniaPolska}
                            style={{width: 120, height: 120, borderRadius: 10,  marginBottom: 10}}
                            alt={"Alt"}
                        />
                        <Text style={{marginTop:5,fontSize:12, marginBottom: 6, marginLeft: 15 }}>Kuchnia Polska</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft: 15, marginRight: 15}}
                                      onPress={()=>navigation.navigate('RestaurantScreen', {
                                          name: "Kebab",
                                          description: "Tureckie kebaby",
                                          otherParam: kebsy,
                                          dishName1: "W bułce mały",
                                          price1:14.00+"zł",
                                          dishName2: "W bułce duży",
                                          price2: 16.00+"zł",
                                          dishName3: "W cieście mały",
                                          price3: 12.00+"zł",
                                          dishName4: "W cieście duży",
                                          price4: 16.00+"zł",
                                          dishName5: "Kebab box",
                                          price5: 22.59+"zł"
                                      })}
                    >
                        <Image
                            source={kebsy}
                            style={{width: 120, height: 120, borderRadius: 10,  marginBottom: 10}}
                            alt={"Alt"}
                        />
                        <Text style={{marginTop:5, fontSize:12 ,marginBottom: 6 , marginLeft: 42}}>Kebsy</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft: 15, marginRight: 15}}
                                      onPress={()=>navigation.navigate('RestaurantScreen', {
                                          name: "Kuchnia orientalna",
                                          description: "Dania ze wszystkich stron świata",
                                          otherParam: kuchniaOrientalna,
                                          dishName1: "Ramen",
                                          price1:19.99+"zł",
                                          dishName2: "Zupa curry",
                                          price2: 24.99+"zł",
                                          dishName3: "Kurczak po koreańsku",
                                          price3: 26.99+"zł",
                                          dishName4: "Zupa",
                                          price4: 28.99+"zł",
                                          dishName5: "Ryż",
                                          price5: 15.69+"zł"
                                      })}
                    >
                        <Image
                            source={kuchniaOrientalna}
                            style={{width: 120, height: 120, borderRadius: 10,  marginBottom: 10}}
                            alt={"Alt"}
                        />
                        <Text style={{marginTop:5, fontSize:12, marginBottom: 6, marginLeft: 10 }}>Kuchnia orientalna</Text>
                    </TouchableOpacity>
                </ScrollView>


                {/* OFERTA SPECJALNA */}

                <Text style={{marginTop:5, marginLeft:20,fontSize:25, fontWeight: "bold" }}>Oferta specjalana</Text>
                <TouchableOpacity
                    activeOpacity={3}
                    style={styles.touchableOpacityStyleOs}>
                    <Image
                        source={require('./images/2arrow.png')}
                        alt={"Alt"}
                        style={styles.floatingButtonStyle}
                    />
                </TouchableOpacity>
                <ScrollView w="100%" horizontal={true} mt="5" showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity style={{ marginLeft: 15, marginRight: 15}}

                    >
                        <TouchableOpacity
                            onPress={()=>navigation.navigate('RestaurantScreen', {
                                name: "Pizza",
                                description: "Najlepsza pizza jaką jadłeś",
                                otherParam: pizza,
                                dishName1: "Capricioza",
                                price1:19.99+"zł",
                                dishName2: "Margheritta",
                                price2: 24.99+"zł",
                                dishName3: "Italiana",
                                price3: 26.99+"zł",
                                dishName4: "Hawajska",
                                price4: 28.99+"zł",
                                dishName5: "Wegetariana",
                                price5: 15.69+"zł"
                            })}>
                        <Image
                            source={pizza}
                            style={{width: 120, height: 120, borderRadius: 10,  marginBottom: 10}}
                            alt={"Alt"}

                        />
                        </TouchableOpacity>
                        <Text style={{marginTop:5,  fontSize:12, marginBottom: 6, marginLeft: 45 }}>Pizza</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft: 15, marginRight: 15}}
                                      onPress={() => navigation.navigate('RestaurantScreen', {
                                          name: "Kuchnia Polska",
                                          description: "Polskie dania i napoje",
                                          otherParam: kuchniaPolska,
                                          dishName1: "Rosół",
                                          price1:13.29+"zł",
                                          dishName2: "Pierogi",
                                          price2: 22.59+"zł",
                                          dishName3: "Schabowy z ziemniakami i surówką",
                                          price3: 29.90+"zł",
                                          dishName4: "Kluski z serem",
                                          price4: 14.50+"zł",
                                          dishName5: "Krokiety",
                                          price5: 19.80+"zł"
                                      })}
                    >
                        <Image
                            source={kuchniaPolska}
                            style={{width: 120, height: 120, borderRadius: 10,  marginBottom: 10}}
                            alt={"Alt"}
                        />
                        <Text style={{marginTop:5,fontSize:12, marginBottom: 6, marginLeft: 15 }}>Kuchnia Polska</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft: 15, marginRight: 15}}
                                      onPress={()=>navigation.navigate('RestaurantScreen', {
                                          name: "Kebab",
                                          description: "Tureckie kebaby",
                                          otherParam: kebsy,
                                          dishName1: "W bułce mały",
                                          price1:14.00+"zł",
                                          dishName2: "W bułce duży",
                                          price2: 16.00+"zł",
                                          dishName3: "W cieście mały",
                                          price3: 12.00+"zł",
                                          dishName4: "W cieście duży",
                                          price4: 16.00+"zł",
                                          dishName5: "Kebab box",
                                          price5: 22.59+"zł"
                                      })}
                    >
                        <Image
                            source={kebsy}
                            style={{width: 120, height: 120, borderRadius: 10,  marginBottom: 10}}
                            alt={"Alt"}
                        />
                        <Text style={{marginTop:5, fontSize:12 ,marginBottom: 6 , marginLeft: 42}}>Kebsy</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft: 15, marginRight: 15}}
                                      onPress={()=>navigation.navigate('RestaurantScreen', {
                                          name: "Kuchnia orientalna",
                                          description: "Dania ze wszystkich stron świata",
                                          otherParam: kuchniaOrientalna,
                                          dishName1: "Ramen",
                                          price1:19.99+"zł",
                                          dishName2: "Zupa curry",
                                          price2: 24.99+"zł",
                                          dishName3: "Kurczak po koreańsku",
                                          price3: 26.99+"zł",
                                          dishName4: "Zupa",
                                          price4: 28.99+"zł",
                                          dishName5: "Ryż",
                                          price5: 15.69+"zł"
                                      })}
                    >
                        <Image
                            source={kuchniaOrientalna}
                            style={{width: 120, height: 120, borderRadius: 10,  marginBottom: 10}}
                            alt={"Alt"}
                        />
                        <Text style={{marginTop:5, fontSize:12, marginBottom: 6, marginLeft: 10 }}>Kuchnia orientalna</Text>
                    </TouchableOpacity>
                </ScrollView>




                {/* Propozycje dla Ciebie */}
                <Text style={{marginTop:5, marginLeft:20, fontSize:25, fontWeight: "bold" }}>Propozycje dla Ciebie</Text>
                <TouchableOpacity
                    activeOpacity={3}
                    onPress={() => navigation.navigate("BasketScreen")}
                    style={styles.touchableOpacityStylePdC}>
                    <Image
                        source={require('./images/2arrow.png')}
                        alt={"Alt"}
                        style={styles.floatingButtonStyle}
                    />
                </TouchableOpacity>
                <ScrollView showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity  style={{width: 395, height:140,marginTop:25, marginBottom:10 ,marginLeft: 15, marginRight: 15}}
                                       onPress={() => navigation.navigate('RestaurantScreen', {
                                           name: "Spaghetti",
                                           description: "Spaghetti Carbonara",
                                           otherParam: spaghetti,
                                           dishName1: "Carbonara",
                                           price1:16.00+"zł",
                                           dishName2: "Carbonara z pieczarkami",
                                           price2: 16.80+"zł",
                                           dishName3: "Podwójna carbonara",
                                           price3: 30.00+"zł",
                                           dishName4: "Carbonara wege",
                                           price4: 24.50+"zł",
                                           dishName5: "carbonara z makaronem ",
                                           price5: 15+"zł"
                                       })}>
                        <ImageBackground source={spaghetti} style={{width: '100%', height: '100%'}}>

                            <Text style={{color: 'black',fontWeight: "bold",textShadowRadius:1 , textShadowColor: "white",textShadowOffset: {width: -1, height: 1} ,  fontSize: 26, top:70, left: 100}}>Spaghetti Carbonara</Text>

                        </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity  style={{width: 395, height:140,marginTop:25, marginBottom:10 ,marginLeft: 15, marginRight: 15}}
                                       onPress={() => navigation.navigate('RestaurantScreen', {
                                           name: "Homar",
                                           description: "Owoce morza",
                                           otherParam: homar,
                                           dishName1: "Krewetki",
                                           price1:52+"zł",
                                           dishName2: "Ośmiornice",
                                           price2: 77+"zł",
                                           dishName3: "Ślimaki",
                                           price3: 48+"zł",
                                           dishName4: "Ostrygi",
                                           price4: 83+"zł",
                                           dishName5: "Homar",
                                           price5: 270+"zł"
                                       })}

                    >

                        <ImageBackground source={homar} style={{width: '100%', height: '100%'}}>

                            <Text style={{color: 'black',fontWeight: "bold", textShadowRadius:1,textShadowOffset: {width: -1, height: 1} , textShadowColor: "white", fontSize: 26, top:70, left: 160}}>Homar</Text>

                        </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity  style={{width: 395, height:140, borderRadius:5 ,marginTop:25, marginBottom:10,marginLeft: 15, marginRight: 15}}
                                       onPress={() => navigation.navigate('RestaurantScreen', {
                                           name: "Sushi",
                                           description: "Japońskie sushi i dodatki",
                                           otherParam: sushi,
                                           dishName1: "Nigiri z łososiem",
                                           price1:60.00+"zł",
                                           dishName2: "Tekka maki",
                                           price2: 95.00+"zł",
                                           dishName3: "Maki z awokado",
                                           price3: 74.00+"zł",
                                           dishName4: "Futo-maki",
                                           price4: 128.00+"zł",
                                           dishName5: "Temarizushi",
                                           price5: 210.00+"zł"
                                       })}
                    >
                        <ImageBackground source={sushi} style={{width: '100%', height: '100%'}}>

                            <Text style={{color: 'black',fontWeight: "bold", textShadowRadius:1,textShadowOffset: {width: -1, height: 1} , textShadowColor: "white", fontSize: 26, top:70, left: 170}}>Sushi</Text>

                        </ImageBackground>
                    </TouchableOpacity>
                </ScrollView>
            </ScrollView>
        </Center>
    );
}

const styles = StyleSheet.create({
    touchableOpacityStyle: {
        position: 'absolute',
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        left: 360,
        top: 5
    },
    touchableOpacityStyleOs: {
        position: 'absolute',
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        left: 360,
        top: 225
    },
    touchableOpacityStylePdC: {
        position: 'absolute',
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        left: 360,
        bottom: 520
    },
    floatingButtonStyle: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
    }


});