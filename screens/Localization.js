import MapView, {Marker} from "react-native-maps";
import {Box, Button, Center, Image, Input, Text, View, VStack} from "native-base";
import {SafeAreaView, StyleSheet, TouchableOpacity} from "react-native";
import MainScreen from "./MainScreen";

export default function Localization({navigation}) {
let alt = "Nie ma";
    const clickHandler = () => {
        navigation.goBack()
    }

    return (
        <View flex="1" w="100%" h="100%" backgroundColor="#F4BD57">
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
            <Box h={300} borderWidth={1}>
            <Text mt="5" textAlign="center" borderTop="2" fontSize="25" fontWeight="bold">
                Podaj adres lub wskaż na mapie
            </Text>
<View flex="1">
    <Center>
            <View mt="10">
                <Input placeholder="Adres" borderRadius="18" w="80%" placeholderTextColor="black" backgroundColor="white"/>
            </View>
            <View mt="10">
                <Input placeholder="Miejscowość" borderRadius="18" w="80%" placeholderTextColor="black" backgroundColor="white"/>
            </View>
    </Center>
</View>
            <Center flex="1">
            <View>
                <Button borderRadius="10" mt="3" backgroundColor="#63C5C5" width="150" onPress={()=>navigation.goBack()} >
                    Potwierdź
                </Button>
            </View>

            </Center>
            </Box>
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
