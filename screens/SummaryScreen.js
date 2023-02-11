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
import {useContext, useEffect, useState} from "react";//
import {auth, db} from '../firebase';//
import { MainContext } from "../context";//

export default function SummaryScreen({route, navigation}){

    const [finished, setFinished] = useState(false);//
    const [infoText, setInfoText] = useState('');//
    const {basketInfo} = useContext(MainContext);//

    useEffect(() => {
        const uid = auth.currentUser.uid; // zapisanie do zmiennej id zalogowanego usera z firebase authorization
    
        db.collection('users').doc(uid).collection('orders').add(
          basketInfo
        ).then(() => {
          // alert("Zamówienie zostało złożone.");
          setInfoText("Zamówienie zostało złożone.");
          setFinished(true);
        }).catch(error => {
          // alert(`Wystąpił błąd podczas zamawiania: ${error}`);
          setInfoText(`Wystąpił błąd podczas zamawiania: ${error}`);
          setFinished(true);
          console.log(`Błąd wysyłania zamówienia: ${error}`);
        });
      }, []);

      const goToMainScreen = () => {
        navigation.navigate('MainScreen');
      };

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
            style={{width: 140, height: 140,marginTop:40, borderRadius: 100}}
            alt={"Alt"}
        />
        {/* if */}
        {!finished ? (
        <Box>
            <Text style={{fontSize: 23, fontWeight: 'bold', marginTop:40}}>Twoje zamowienie jest w trakcie realizacji</Text>
            <HStack space={5} justifyContent="center">
                <Spinner accessibilityLabel="Zamawianie" />
                  <Heading color="primary.500" fontSize="md">
                </Heading>
            </HStack>
        </Box>
        // else
        ) : ( 
          <VStack safeArea flex="1" mt={25} w="100%" maxW="100%">
            <Center>
              <Text style={{fontSize: 36, textAlign: 'center'}}>{infoText}</Text>
              <Button borderRadius="10" mt="3" mb={7} backgroundColor="#63C5C5" width="250" onPress={()=>goToMainScreen()} >
                Wróć do ekranu głównego
              </Button>
            </Center>

          </VStack>
        )}
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
