import {
    Box,
    Button,
    Center,
    FormControl,
    Heading,
    Stack,
    HStack,
    Input,
    Link,
    VStack,
    ScrollView,
    Spinner
} from "native-base";
import {StyleSheet, Text, TouchableHighlight, TouchableOpacity} from "react-native";
import { NativeBaseProvider } from 'native-base';
import {Image} from 'native-base';
import {useState} from "react";

export default function BasketScreen({navigation}){

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
        <Image
            source={require("./images/logo.png")}
            style={{width: 140, height: 140,marginTop:10, borderRadius: 100}}
            alt={"Alt"}
        />
<Box>
    <Text style={{fontSize: 23, fontWeight: 'bold', marginTop:40}}>Twoje zamowienie jest w trakcie realizacji</Text>
    <HStack space={2} justifyContent="center">
        <Spinner accessibilityLabel="Loading posts" />
        <Heading color="primary.500" fontSize="md">
            Loading
        </Heading>
    </HStack>
</Box>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{justifyContent: 'center'}}>
            <Box safeArea flex="1" mt={25} maxW="100%">
                <Heading size="lg"  fontWeight="900" fontSize="28" >
                    Historia Twoich zamówień
                </Heading>

                <Stack mb="2" mt="10"  direction={{
                    base: "column",
                }} space={5} mx={{}}>
                    <TouchableOpacity
                        style={{width:320, height:60,backgroundColor:"#EBE2E2", borderRadius:5 }}>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{width:320, height:60,backgroundColor:"#EBE2E2", borderRadius:5 }}>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{width:320, height:60,backgroundColor:"#EBE2E2", borderRadius:5 }}>
                    </TouchableOpacity>

                </Stack>
            </Box>
        </ScrollView>


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
