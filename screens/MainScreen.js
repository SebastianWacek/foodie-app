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
                            description: "Najlepsza pizza jak?? jad??e??",
                            otherParam: pizza,
                            dishName1: "Capricioza",
                            price1:19.99+"z??",
                            dishName2: "Margheritta",
                            price2: 24.99+"z??",
                            dishName3: "Italiana",
                            price3: 26.99+"z??",
                            dishName4: "Hawajska",
                            price4: 28.99+"z??",
                            dishName5: "Wegetariana",
                            price5: 15.69+"z??"
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
                                          dishName1: "Ros????",
                                          price1:13.29+"z??",
                                          dishName2: "Pierogi",
                                          price2: 22.59+"z??",
                                          dishName3: "Schabowy z ziemniakami i sur??wk??",
                                          price3: 29.90+"z??",
                                          dishName4: "Kluski z serem",
                                          price4: 14.50+"z??",
                                          dishName5: "Krokiety",
                                          price5: 19.80+"z??"
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
                                          dishName1: "W bu??ce ma??y",
                                          price1:14.00+"z??",
                                          dishName2: "W bu??ce du??y",
                                          price2: 16.00+"z??",
                                          dishName3: "W cie??cie ma??y",
                                          price3: 12.00+"z??",
                                          dishName4: "W cie??cie du??y",
                                          price4: 16.00+"z??",
                                          dishName5: "Kebab box",
                                          price5: 22.59+"z??"
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
                                          description: "Dania ze wszystkich stron ??wiata",
                                          otherParam: kuchniaOrientalna,
                                          dishName1: "Ramen",
                                          price1:19.99+"z??",
                                          dishName2: "Zupa curry",
                                          price2: 24.99+"z??",
                                          dishName3: "Kurczak po korea??sku",
                                          price3: 26.99+"z??",
                                          dishName4: "Zupa",
                                          price4: 28.99+"z??",
                                          dishName5: "Ry??",
                                          price5: 15.69+"z??"
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
                                description: "Najlepsza pizza jak?? jad??e??",
                                otherParam: pizza,
                                dishName1: "Capricioza",
                                price1:19.99+"z??",
                                dishName2: "Margheritta",
                                price2: 24.99+"z??",
                                dishName3: "Italiana",
                                price3: 26.99+"z??",
                                dishName4: "Hawajska",
                                price4: 28.99+"z??",
                                dishName5: "Wegetariana",
                                price5: 15.69+"z??"
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
                                          dishName1: "Ros????",
                                          price1:13.29+"z??",
                                          dishName2: "Pierogi",
                                          price2: 22.59+"z??",
                                          dishName3: "Schabowy z ziemniakami i sur??wk??",
                                          price3: 29.90+"z??",
                                          dishName4: "Kluski z serem",
                                          price4: 14.50+"z??",
                                          dishName5: "Krokiety",
                                          price5: 19.80+"z??"
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
                                          dishName1: "W bu??ce ma??y",
                                          price1:14.00+"z??",
                                          dishName2: "W bu??ce du??y",
                                          price2: 16.00+"z??",
                                          dishName3: "W cie??cie ma??y",
                                          price3: 12.00+"z??",
                                          dishName4: "W cie??cie du??y",
                                          price4: 16.00+"z??",
                                          dishName5: "Kebab box",
                                          price5: 22.59+"z??"
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
                                          description: "Dania ze wszystkich stron ??wiata",
                                          otherParam: kuchniaOrientalna,
                                          dishName1: "Ramen",
                                          price1:19.99+"z??",
                                          dishName2: "Zupa curry",
                                          price2: 24.99+"z??",
                                          dishName3: "Kurczak po korea??sku",
                                          price3: 26.99+"z??",
                                          dishName4: "Zupa",
                                          price4: 28.99+"z??",
                                          dishName5: "Ry??",
                                          price5: 15.69+"z??"
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
                                           price1:16.00+"z??",
                                           dishName2: "Carbonara z pieczarkami",
                                           price2: 16.80+"z??",
                                           dishName3: "Podw??jna carbonara",
                                           price3: 30.00+"z??",
                                           dishName4: "Carbonara wege",
                                           price4: 24.50+"z??",
                                           dishName5: "carbonara z makaronem ",
                                           price5: 15+"z??"
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
                                           price1:52+"z??",
                                           dishName2: "O??miornice",
                                           price2: 77+"z??",
                                           dishName3: "??limaki",
                                           price3: 48+"z??",
                                           dishName4: "Ostrygi",
                                           price4: 83+"z??",
                                           dishName5: "Homar",
                                           price5: 270+"z??"
                                       })}

                    >

                        <ImageBackground source={homar} style={{width: '100%', height: '100%'}}>

                            <Text style={{color: 'black',fontWeight: "bold", textShadowRadius:1,textShadowOffset: {width: -1, height: 1} , textShadowColor: "white", fontSize: 26, top:70, left: 160}}>Homar</Text>

                        </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity  style={{width: 395, height:140, borderRadius:5 ,marginTop:25, marginBottom:10,marginLeft: 15, marginRight: 15}}
                                       onPress={() => navigation.navigate('RestaurantScreen', {
                                           name: "Sushi",
                                           description: "Japo??skie sushi i dodatki",
                                           otherParam: sushi,
                                           dishName1: "Nigiri z ??ososiem",
                                           price1:60.00+"z??",
                                           dishName2: "Tekka maki",
                                           price2: 95.00+"z??",
                                           dishName3: "Maki z awokado",
                                           price3: 74.00+"z??",
                                           dishName4: "Futo-maki",
                                           price4: 128.00+"z??",
                                           dishName5: "Temarizushi",
                                           price5: 210.00+"z??"
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