import MapView, {Marker} from "react-native-maps";
import {Button, Center, Image, Input, Text, View, VStack} from "native-base";
import {SafeAreaView, StyleSheet, TouchableOpacity} from "react-native";
import MainScreen from "./MainScreen";

export default function Localization({navigation}) {

    const clickHandler = () => {
        navigation.navigate("MainScreen")
    }

    return (
        <View flex="1" w="100%" h="100%" backgroundColor="#F4BD57">
            <MapView style={styles.map}
                     initialRegion={{
                         latitude: 49.691145,
                         longitude: 21.999572,
                         latitudeDelta: 0.0922,
                         longitudeDelta: 0.0421,
                     }}
            >
                <Marker
                    coordinate={{
                        latitude: 49.691145,
                        longitude: 21.999572}}
                    title={"Zdrojowa 36"}
                    description={"Brzozów"}
                />
            </MapView>
            <TouchableOpacity
                activeOpacity={3}
                onPress={clickHandler}
                style={styles.touchableOpacityStyle}>
                <Image
                    source={require('./arrow.png')}
                    alt={"Alt"}
                    style={styles.floatingButtonStyle}
                />
            </TouchableOpacity>
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
                <Button borderRadius="10" mt="3" color="#63C5C5" width="150" onPress={()=>navigation.navigate('MainScreen')} >
                    Potwierdź
                </Button>
            </View>
            </Center>
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
