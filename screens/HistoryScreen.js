import {Box, Button, Center, FormControl, Heading, Stack, HStack, Input, Link, VStack, ScrollView, FlatList} from "native-base";
import {StyleSheet, Text, TouchableHighlight, TouchableOpacity} from "react-native";
import {Image, useToast} from 'native-base';
import {useEffect, useState} from "react";
import {auth, db} from '../firebase';

export default function HistoryScreen({route, navigation}){

  const [orders, setOrders] = useState([]);
  const [sum, setSum] = useState(0);

  // wykonanie tych operacji po przejściu do tego ekranu
  useEffect(() => {
    const uid = auth.currentUser.uid; // zapisanie do zmiennej id zalogowanego usera z firebase authorization

    // onSnapshot - automatyczne odświeżanie danych z bazy
    // querySnapshot - lista dokumentów wszystkich zamówień
    const unsubscribe = db.collection('users').doc(uid).collection('orders').onSnapshot(querySnapshot => {
      const orders = [];
      // forEach - pętla przechodzi przez wszystkie pobrane z bazy dokumenty
      querySnapshot.forEach(documentSnapshot => {
        orders.push({ // dodanie nowego elementu (zamówienia) do listy z informacji pobranej z bazy
          ...documentSnapshot.data(), // ... - pobranie zawartości obiektu "rozpakowanie"
          id: documentSnapshot.id, // dodanie id dokumentu jako id do każdego elementu listy
        });
        // liczenie ceny podsumowania wydatków
        setSum(0);
        documentSnapshot.data().prices.forEach(itemPrice => {
          setSum(preVal => preVal+itemPrice); // preVal - poprzednia wartość sumy wydatków + itemPrice - cena zamówienia na liście
        });
      });
      // zapisanie pobranych zamówień do useState, aby móc wyświetlić zmiany automatycznie na ekranie
      setOrders(orders);
    });
    // bezpieczne zamknięcie onSnapshot żeby już nie odczytywał danych z bazy po wyjściu z ekranu
    return () => unsubscribe();
  }, []);

  // dodanie zera wiodącego przed np. zamiast 1.1.2023 to sprawia, że: 01.01.2023
  const zeroPad = (num) => String(num).padStart(2, '0');
  // funkcja renderująca "wyświetlająca" element listy
  const RenderItem = ({ item, index }) => {
    // utworzenie nowej daty, którą ustawiamy datą odczytaną z bazy jako tekst
    const itemDate = new Date(item.orderDate);
    const dayText = zeroPad(itemDate.getUTCDate());
    const monthText = zeroPad(itemDate.getUTCMonth());
    const yearText = itemDate.getUTCFullYear();

    const hourText = zeroPad(itemDate.getUTCHours());
    const minutesText = zeroPad(itemDate.getUTCMinutes());
    // składanie całej daty
    const dateText = dayText+'.'+monthText+'.'+yearText + ' - ' + hourText+' : '+minutesText;

    return (
      <Box style={styles.dishItem}>
        <HStack>
          <Box>
            <Text style={{ backgroundColor: '#fff', color: 'black', fontWeight: '600', fontSize: 18, padding: 20, marginRight: 10, borderRadius: 10 }}>{index+1}</Text>
          </Box>
          <VStack>
            {/* wyświetlanie informacji o zamówieniu */}
            <Text>{dateText}</Text>
            <Text>{item.address}</Text>
            <Text>{item.city}</Text>
            <Text style={{ font: 16, fontWeight: 'bold' }}>Produkty:</Text>
            <VStack>
            {
              // wyświetlenie listy zamówień
              item.dishes.map((dish, index) => {
                return (<Text key={index}>{index+1}: {dish} - {item.prices[index]} zł</Text>);
              })
            }
            </VStack>
          </VStack>
        </HStack>
      </Box>
    );
  };

  const EmptyComponent = () => {
    return (
      <Box w="100%">
        <Text style={{ fontSize: 24 }}>Nie dokonano jeszcze żadnych zamówień</Text>
      </Box>
    );
  };

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
      <Box>
          <Center>
              <Image
                  source={require("./images/logo.png")}
                  style={{width: 120, height: 120, borderRadius: 100, marginBottom: 10, marginTop:30}}
                  alt={"Alt"}
              />
          </Center>
      </Box>
      <Box safeArea flex="1" w="100%" px="10">
          <Heading size="lg"  fontWeight="900" fontSize="30" >
              Moje zamówienia
          </Heading>
          {/* Komponent listy zamówień */}
          <FlatList
            data={orders}
            renderItem={RenderItem}
            keyExtractor={item => item.id}
            ListEmptyComponent={EmptyComponent}
            style={{ marginBottom: 20 }}
          />
      </Box>

      {/* toFixed(2) - do 2 miejsc po przecinku */}
      <Box w="100%" h="100" borderWidth="1" backgroundColor={"#EBE2E2"} showsVerticalScrollIndicator={false} contentContainerStyle={{justifyContent: 'center'}}>
        <Text style={{fontWeight: "500", marginTop: 40, marginLeft:5, fontSize:26}}>
            Podsumowanie: {sum.toFixed(2)} zł
        </Text>
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
        height:60,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderRadius: 20
    },
    dishItem: {
        paddingVertical: 10,
        fontWeight: "bold",
        fontSize: 15,
        borderBottomWidth: 2,
        borderBottomColor: '#333',
    },
});
