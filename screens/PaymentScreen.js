import {Box, Button, Center, FormControl, Heading, Stack, HStack, Input, Link, VStack} from "native-base";
import {StyleSheet, Text, TouchableHighlight, TouchableOpacity} from "react-native";
import { NativeBaseProvider } from 'native-base';
import {Image} from 'native-base';
import {useState} from "react";

import HistoryScreen from './HistoryScreen'

export default function PaymentScreen({navigation}){


    const [index, setIndex] = useState(null);

    return <Center w="100%" h="100%" backgroundColor="#F4BD57">
        <TouchableOpacity
            activeOpacity={2}
            onPress={()=> navigation.goBack()}
            style={styles.touchableOpacityStyle}>
            <Image
                source={require('./images/arrow.png')}
                alt={"Alt"}
                style={styles.floatingButtonStyle}
            />
        </TouchableOpacity>
            <Box>
            <Center>
                <Image
                    source={require("./images/logo.png")}
                    style={{width: 120, height: 120, borderRadius: 100, marginBottom: 10, marginTop:3}}
                    alt={"Alt"}
                />

            </Center>
            </Box>
        <Box safeArea maxW="100%">
            <Heading size="lg"  fontWeight="bold" >
                Metoda płatności
            </Heading>

            <Stack mb="2.5" mt="3" direction={{
                base: "row",
            }} space={5} mx={{}}>
                <TouchableOpacity
                    style={{marginLeft: 15, marginRight: 15}}
                    onPress={() => setIndex(1)}

                >
                    <Image
                        source={require('./images/blik.png')}
                        alt={"Alt"}
                        style={{width: 160, height: 120, borderRadius: 10, borderWidth:4, marginBottom: 10,  borderColor: index === 1 ? "green" : "#F4BD57"}}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => setIndex(2)}
                    style={{marginLeft: 15, marginRight: 15}}
                >
                    <Image
                        source={require('./images/osobisty.png')}
                        alt={"Alt"}
                        style={{width: 160, height: 120, borderRadius: 10, borderWidth:4,  marginBottom: 10, borderColor: index === 2 ? 'green' : '#F4BD57'}}
                    />
                </TouchableOpacity>

                </Stack>

            <Stack mb="2.5" mt="1.5" direction={{
                base: "row",
            }} space={5} mx={{}}>
                <TouchableOpacity
                    style={{marginLeft: 15, marginRight: 15}}
                    onPress={() => setIndex(3)}
                >
                    <Image
                        source={require('./images/gpay.jpg')}
                        alt={"Alt"}
                        style={{width: 160, height: 120, borderRadius: 10, borderWidth:4,  marginBottom: 10, borderColor: index === 3 ? 'green' : '#F4BD57'}}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{marginLeft: 15, marginRight: 15}}
                    onPress={() => setIndex(4)}
                >
                    <Image
                        source={require('./images/apay.jpg')}
                        alt={"Alt"}
                        style={{width: 160, height: 120, borderRadius: 10, borderWidth:4,  marginBottom: 10, borderColor: index === 4 ? 'green' : '#F4BD57'}}
                    />
                </TouchableOpacity>
            </Stack>

            <Heading size="lg" fontWeight="bold">
                Dostawa
            </Heading>

            <Center>
                <Button mt="2" backgroundColor="#63C5C5" width="250" height="12" borderRadius="10">
                    Użyj mojej lokalizacji
                </Button>
                <Button mt="2" backgroundColor="#63C5C5" width="150" height="12" borderRadius="10" mb="20" onPress={()=>navigation.navigate('Localization')} >
                    Wprowadź adres
                </Button>

                <Button mt="2" backgroundColor="#63C5C5" width="180" height="20" borderRadius="10" onPress={()=>navigation.navigate('HistoryScreen')}>
                    Zamawiam
                </Button>
            </Center>
        </Box>

    </Center>;
};

const styles = StyleSheet.create({
    touchableOpacityStyle: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        left: 10,
        top: 60
    },
    floatingButtonStyle: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
    }

});
