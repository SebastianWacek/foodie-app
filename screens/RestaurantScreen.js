import {
    Box,
    Button,
    Center,
    FormControl,
    Heading,
    Image,
    Input,
    Link,
    ScrollView,
    Text,
    View,
    VStack
} from "native-base";
import {ImageBackground, StyleSheet, TouchableOpacity} from "react-native";
import {useRoute} from "@react-navigation/native";
import MainScreen from "./MainScreen";
import React from "react";

export default function RestaurantScreen({route, navigation}){
    const {
        name,
        description,
        otherParam,
        dishName1,
        dishName2,
        dishName3,
        dishName4,
        dishName5,
        price1,
        price2,
        price3,
        price4,
        price5,
    } = route.params;
    return(
        <Box w="100%" h="100%" backgroundColor="#F4BD57">
           <Box h={"40%"}>
               <Image
                   source={(otherParam)}
                   style={{width: "100%", height: "100%"}}
                   alt={"Alt"}
               />
           </Box>
            <View style={{marginTop:5, height:'10%'}}>

                        <Text style = {{fontSize: 40, lineHeight:40, marginTop:10, textAlign:'center', fontWeight: "bold"}}>
                            {name}
                        </Text>
                <Text style = {{fontSize: 20, marginTop:5, textAlign:'center', fontWeight: "bold"}}>
                    {description}
                </Text>
            </View>
            <ScrollView contentContainerStyle={{alignItems:'center'}}>
               <View style={{ width: '95%', marginTop:10, height: 100,borderRadius:5, backgroundColor:"white"}}>
                   <View>
                   <Text style={{fontWeight:'bold', fontSize:20, textAlign:'center', marginTop:5}}>{dishName1}</Text>
                   <Text style={{fontWeight:'500', fontSize:20, textAlign:'center', marginTop:5}}>{price1}</Text>
                   </View>
                   <View style = {{flexDirection:'row', flexWrap:'wrap'}}>
                   <TouchableOpacity>
                       <Image
                           source={require('./images/plus.png')}
                           alt={"Alt"}
                           style={styles.floatingButtonStylePlus}

                       />
                   </TouchableOpacity>
                   <TouchableOpacity>
                       <Image
                           source={require('./images/minus.png')}
                           alt={"Alt"}
                           style={styles.floatingButtonStyleMinus}

                       />
                   </TouchableOpacity>
                   </View>
               </View>
                <View style={{ width: '95%', marginTop:10, height: 100,borderRadius:5, backgroundColor:"white"}}>
                    <View>
                        <Text style={{fontWeight:'bold', fontSize:20, textAlign:'center', marginTop:5}}>{dishName2}</Text>
                        <Text style={{fontWeight:'500', fontSize:20, textAlign:'center', marginTop:5}}>{price2}</Text>
                    </View>

                    <View style = {{flexDirection:'row', flexWrap:'wrap'}}>
                        <TouchableOpacity>
                            <Image
                                source={require('./images/plus.png')}
                                alt={"Alt"}
                                style={styles.floatingButtonStylePlus}

                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={require('./images/minus.png')}
                                alt={"Alt"}
                                style={styles.floatingButtonStyleMinus}

                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ width: '95%', marginTop:10, height: 100,borderRadius:5, backgroundColor:"white"}}>
                    <View>
                        <Text style={{fontWeight:'bold', fontSize:20, textAlign:'center', marginTop:5}}>{dishName3}</Text>
                        <Text style={{fontWeight:'500', fontSize:20, textAlign:'center', marginTop:5}}>{price3}</Text>
                    </View>

                    <View style = {{flexDirection:'row', flexWrap:'wrap'}}>
                        <TouchableOpacity>
                            <Image
                                source={require('./images/plus.png')}
                                alt={"Alt"}
                                style={styles.floatingButtonStylePlus}

                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={require('./images/minus.png')}
                                alt={"Alt"}
                                style={styles.floatingButtonStyleMinus}

                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ width: '95%', marginTop:10, height: 100,borderRadius:5, backgroundColor:"white"}}>
                    <View>
                        <Text style={{fontWeight:'bold', fontSize:20, textAlign:'center', marginTop:5}}>{dishName4}</Text>
                        <Text style={{fontWeight:'500', fontSize:20, textAlign:'center', marginTop:5}}>{price4}</Text>
                    </View>
                    <View style = {{flexDirection:'row', flexWrap:'wrap'}}>
                        <TouchableOpacity>
                            <Image
                                source={require('./images/plus.png')}
                                alt={"Alt"}
                                style={styles.floatingButtonStylePlus}

                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={require('./images/minus.png')}
                                alt={"Alt"}
                                style={styles.floatingButtonStyleMinus}

                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ width: '95%', marginTop:10, marginBottom:30, height: 100,borderRadius:5, backgroundColor:"white"}}>
                    <View>
                        <Text style={{fontWeight:'bold', fontSize:20, textAlign:'center', marginTop:5}}>{dishName5}</Text>
                        <Text style={{fontWeight:'500', fontSize:20, textAlign:'center', marginTop:5}}>{price5}</Text>
                    </View>

                    <View style = {{flexDirection:'row', flexWrap:'wrap'}}>
                        <TouchableOpacity>
                            <Image
                                source={require('./images/plus.png')}
                                alt={"Alt"}
                                style={styles.floatingButtonStylePlus}

                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={require('./images/minus.png')}
                                alt={"Alt"}
                                style={styles.floatingButtonStyleMinus}

                            />
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>
            <TouchableOpacity>
                <Button
                    style={styles.floatingButton}
                    onPress = {()=>navigation.navigate('BasketScreen')}
                >Zamawiam
                </Button>
            </TouchableOpacity>
        </Box>
    );
}

const styles = StyleSheet.create({

    floatingButtonStylePlus: {
        width: 30,
        height: 30,
        marginTop:20,
        marginLeft: 10
    },
    floatingButtonStyleMinus: {
        width: 30,
        height: 30,
        marginTop:20,
        marginLeft:320,
    },
    floatingButton: {
        alignItems:'center',
        flexDirection:'row',
        width: 150,
        height: 60,
        borderRadius: 10,
        backgroundColor: '#63C5C5',
        fontSize: 20,
        position: 'absolute',
        bottom: 10,
        right: '30%',
    }

});
