import {Box, Button, Center, FormControl, Heading, Stack, HStack, Input, Link, VStack, ScrollView} from "native-base";
import {StyleSheet, Text, TouchableHighlight, TouchableOpacity} from "react-native";
import { NativeBaseProvider } from 'native-base';
import {Image} from 'native-base';
import {useState} from "react";

export default function BasketScreen({navigation}){
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
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{justifyContent: 'center'}}>
        <Box safeArea flex="1" maxW="100%">
            <Heading size="lg"  fontWeight="900" fontSize="30" >
                Koszyk
            </Heading>

            <Stack mb="2" mt="3"  direction={{
                base: "column",
            }} space={5} mx={{}}>
                <TouchableOpacity
                    style={{width:320, height:60,backgroundColor:"#EBE2E2", borderRadius:5 }}>
                    <Image
                        source={require("./images/basket.png")}
                        style={{width: 40, height: 40, marginBottom: 10, marginTop:10, marginLeft:270, borderRadius:10, backgroundColor:"#63C5C5"}}
                        alt={"Alt"}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    style={{width:320,backgroundColor:"#EBE2E2", height:60, borderRadius:5 }}>
                    <Image
                        source={require("./images/basket.png")}
                        style={{width: 40, height: 40, marginBottom: 10, marginTop:10, marginLeft:270, borderRadius:10, backgroundColor:"#63C5C5"}}
                        alt={"Alt"}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    style={{width:320, height:60,backgroundColor:"#EBE2E2", borderRadius:5  }}>
                    <Image
                        source={require("./images/basket.png")}
                        style={{width: 40, height: 40, marginBottom: 10, marginTop:10, marginLeft:270, borderRadius:10, backgroundColor:"#63C5C5"}}
                        alt={"Alt"}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{width:320, height:60,backgroundColor:"#EBE2E2", borderRadius:5  }}>
                    <Image
                        source={require("./images/basket.png")}
                        style={{width: 40, height: 40, marginBottom: 10, marginTop:10, marginLeft:270, borderRadius:10, backgroundColor:"#63C5C5"}}
                        alt={"Alt"}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{width:320, height:60,backgroundColor:"#EBE2E2", borderRadius:5  }}>
                    <Image
                        source={require("./images/basket.png")}
                        style={{width: 40, height: 40, marginBottom: 10, marginTop:10, marginLeft:270, borderRadius:10, backgroundColor:"#63C5C5"}}
                        alt={"Alt"}
                    />
                </TouchableOpacity>
            </Stack>
        </Box>
        </ScrollView>
        <Box w="100%" h="300" borderWidth="1" backgroundColor={"#EBE2E2"} showsVerticalScrollIndicator={false} contentContainerStyle={{justifyContent: 'center'}}>
    <Text style={{fontWeight: "500", marginTop: 40, marginLeft:5, fontSize:30}}>
        Podsumowanie:
    </Text>
     <Text style={{fontWeight: "500", marginTop: 20, marginLeft:5, fontSize:30}}>
                Opłata za dostawę:
     </Text>
      <Text style={{fontWeight: "900", marginTop: 20, marginLeft:5, fontSize:30}}>
                Do zapłaty:
      </Text>
            <Center>
            <Button borderRadius="10" mt="5" backgroundColor="#63C5C5" width="150" height="70" onPress={()=>navigation.navigate('PaymentScreen')} >
                Zamów
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
