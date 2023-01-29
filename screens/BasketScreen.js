import {Box, Button, Center, FormControl, Heading, Stack, HStack, Input, Link, VStack, ScrollView} from "native-base";
import {StyleSheet, Text, TouchableHighlight, TouchableOpacity} from "react-native";
import { NativeBaseProvider } from 'native-base';
import {Image, useToast} from 'native-base';
import {useState} from "react";


export default function BasketScreen({route, navigation}){
    const {
        sum, dishName
    } = route.params;

    function delivery(sum){
        if(sum>30){
            return 0;
        }else{

            return 8;
        }
    }
    const toast = useToast();
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
        <TouchableOpacity
            activeOpacity={2}
            onPress={() => toast.show({
                render: () => {
                    return <Box bg="#63C5C5" h={10} px="3" py="1" rounded="sm" mt={20} style={{fontSize:20, justifyContent:"center"}}>
                        Darmowa dostawa powyżej 30 zł!
                    </Box>;
                },
                placement:"top"
            })}
            style={styles.touchableOpacityStyleInfo}>
            <Image
                source={require('./images/info.png')}
                alt={"Alt"}
                style={styles.floatingButtonStyle}
            />
        </TouchableOpacity>
        <Box>
            <Center>
                <Image
                    source={require("./images/logo.png")}
                    style={{width: 120, height: 120, borderRadius: 100, marginBottom: 10, marginTop:10}}
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

                <TouchableOpacity style={styles.dishContainer}>
                        <Text style={styles.dishText}>
                            {dishName[0]}
                        </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.dishContainer}>
                    <Text style={styles.dishText}>
                        {dishName[1]}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dishContainer}>
                    <Text style={styles.dishText}>
                        {dishName[2]}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dishContainer}>
                    <Text style={styles.dishText}>
                        {dishName[3]}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dishContainer}>
                    <Text style={styles.dishText}>
                        {dishName[4]}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dishContainer}>
                    <Text style={styles.dishText}>
                        {dishName[5]}
                    </Text>
                </TouchableOpacity>
            </Stack>
        </Box>
        </ScrollView>

        <Box w="100%" h="300" borderWidth="1" backgroundColor={"#EBE2E2"} showsVerticalScrollIndicator={false} contentContainerStyle={{justifyContent: 'center'}}>
    <Text style={{fontWeight: "500", marginTop: 40, marginLeft:5, fontSize:30}}>
        Podsumowanie: {sum} zł
    </Text>
     <Text style={{fontWeight: "500", marginTop: 20, marginLeft:5, fontSize:30}}>
                Opłata za dostawę: {delivery(sum)}
     </Text>
      <Text style={{fontWeight: "900", marginTop: 20, marginLeft:5, fontSize:30}}>
                Do zapłaty: {sum+delivery(sum)} zł
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
    touchableOpacityStyleInfo: {
        position: 'absolute',
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        right: 10,
        top: 60
    },
    floatingButtonStyle: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
    },
    dishContainer: {
        width:320,
        height:40,
        fontWeight: "bold",
        alignItems: "center"
    },
    dishText: {
        fontWeight: "bold",
        height: 40,
        fontSize:15,


    }


});
