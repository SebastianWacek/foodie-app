import MapView, {Marker} from "react-native-maps";
import {Box, Button, Center, Image, Input, ScrollView, Text, View, VStack} from "native-base";
import {SafeAreaView, StyleSheet, TouchableOpacity} from "react-native";
import MainScreen from "./MainScreen";

import axios from 'axios';
import * as Location from 'expo-location';
import { useState } from "react";

export default function Localization({navigation}) {
    const [location, setLocation] = useState(null);
    const [address, setAddress] = useState(null);
    const [waitingForLocation, setWaitingForLocation] = useState(false);
    const [city, setCity] = useState("");
    const [postCode, setPostCode] = useState("");
    const [street, setStreet] = useState("");
    const [buildingNum, setBuildingNum] = useState("");

    let alt = "Nie ma";
    const clickHandler = () => {
        navigation.goBack()
    }

    const setAddressFields = async (addressInfo) => {
        try {
            const cityVillage = addressInfo.address.city || addressInfo.address.village;
            const postCode = addressInfo.address.postcode;
            const road = addressInfo.address.road;
            const postCity = addressInfo.address.municipality;
            const houseNumber = addressInfo.address.house_number;
            if (addressInfo) {
                setAddress(addressInfo);
                const cityVillageInsertVal = cityVillage ? cityVillage : '';
                const postCodeInsertVal = postCode ? postCode : '';
                const postCityInsertVal = postCity ? postCity : cityVillage;
                const roadInsertVal = road ? road : '';
                const houseNumberInsertVal = houseNumber ? houseNumber : '';
                setCity(cityVillageInsertVal);
                setPostCode(postCodeInsertVal);
                setStreet(roadInsertVal);
                setBuildingNum(houseNumberInsertVal);
            }

        } catch (error) {
            console.log("Wystąpił problem z danymi adresowymi: ");
            console.log(error);
            return;
        }
    }; 

    const getAddress = async (lat, lon) => {
        try {
            const response = await axios.get(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`
            );
            return response.data;
        } catch (error) {
            alert("Wystąpił problem z pobraniem adresu.");
            console.error(error);
        }
    };

    const getLocationPermission = async () => {
        try {
            let { status } = await Location.requestForegroundPermissionsAsync();
                if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                alert("Dostęp do danych lokalizacyjnych został odmówiony.");
                setWaitingForLocation(false);
                return;
            }
        }
        catch (error) {
            alert("Dostęp do danych lokalizacyjnych został odmówiony.");
            setWaitingForLocation(false);
            return;
        }
    };

    const getLocation = async () => {
        setWaitingForLocation(true);

        try {
            await getLocationPermission();
            const location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High });
            const addressInfo = await getAddress(location.coords.latitude, location.coords.longitude);
            setLocation(location);
            setAddressFields(addressInfo);
        } catch (error) {
            alert("Wystąpły problem z określeniem położenia.");
        }
        
        setWaitingForLocation(false);
    };

    return (
        <View flex="1" w="100%" backgroundColor="#F4BD57" style={{ justifyContent: 'space-between' }}>
            <MapView style={styles.map}
                     initialRegion={{
                         latitude: 50.87033,
                         longitude: 20.62752,
                         latitudeDelta: 0.0922,
                         longitudeDelta: 0.0421,
                     }}
            >
                <Marker
                    coordinate={{
                        latitude: 50.87233,
                        longitude: 20.66352}}
                    title={"Sushi"}
                    description={"Tu zjesz pyszne sushi"}>
                    <Image source={require("./images/marker.png")} style={{height: 35, width:35 }} alt={alt}/>
                </Marker>
                <Marker
                    coordinate={{
                        latitude: 50.88033,
                        longitude: 20.62352}}
                    title={"Kebab"}
                    description={"Tu dobre kebsy"}>
                    <Image source={require("./images/marker.png")} style={{height: 35, width:35 }} alt={alt} />
                </Marker>
                <Marker
                    coordinate={{
                        latitude: 50.86033,
                        longitude: 20.60352}}
                    title={"Kuchnia polska"}
                    description={"Rosołek jak u mamy"}>
                    <Image source={require("./images/marker.png")} style={{height: 35, width:35 }} alt={alt}/>
                </Marker>

                <Marker
                    coordinate={{
                        latitude: 50.84138,
                        longitude: 20.62352}}
                    title={"Kuchnia orientalna"}
                    description={"我是从波兰来的/我是"}>
                    <Image source={require("./images/marker.png")} style={{height: 35, width:35 }} alt={alt}/>
                </Marker>

                <Marker
                    coordinate={{
                        latitude: 50.88633,
                        longitude: 20.64592}}
                    title={"Homary"}
                    description={"Owoce morza"}>
                    <Image source={require("./images/marker.png")} style={{height: 35, width:35 }} alt={alt}/>
                </Marker>

                <Marker
                    coordinate={{
                        latitude: 50.8655,
                        longitude: 20.62592}}
                    title={"Pizza"}
                    description={"Pizza z Włoch"}>
                <Image source={require("./images/marker.png")} style={{height: 35, width:35 }} alt={alt}/>
                </Marker>
            </MapView>
            <TouchableOpacity
                activeOpacity={3}
                onPress={clickHandler}
                style={styles.touchableOpacityStyle}>
                <Image
                    source={require('./images/arrow.png')}
                    alt={alt}
                    style={styles.floatingButtonStyle}

                />
            </TouchableOpacity>
            <ScrollView>
                <Box borderWidth={1}>
                <Text mt="5" textAlign="center" borderTop="2" fontSize="25" fontWeight="bold">
                    Podaj adres lub wskaż na mapie
                </Text>
                <View flex="1">
                    <Center>
                            <View mt="10">
                                <Input placeholder="Adres" value={street} borderRadius="18" w="80%" placeholderTextColor="black" backgroundColor="white"/>
                            </View>
                            <View mt="10">
                                <Input placeholder="Miejscowość" value={city} borderRadius="18" w="80%" placeholderTextColor="black" backgroundColor="white"/>
                            </View>
                    </Center>
                </View>
                <Center flex="1">
                <View>
                    <Button borderRadius="10" mt="3" backgroundColor="#63C5C5" width="150" onPress={()=>navigation.goBack()} >
                        Potwierdź
                    </Button>
                </View>
                <View>
                    <Button borderRadius="10" mt="3" backgroundColor="#63C5C5" width="150" onPress={()=>getLocation()} >
                        Pobierz lokalizację
                    </Button>
                </View>

                </Center>
                </Box>
            </ScrollView>
            
        </View>

    );

}

    const styles = StyleSheet.create({
        map: {
            width: '100%',
            height: '100%',
            flex: 2.8,
        },
        touchableOpacityStyle: {
            position: 'absolute',
            width: 50,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            left: 20,
            top: 45,
        },
        floatingButtonStyle: {
            resizeMode: 'contain',
            width: 50,
            height: 50,
        }

    });