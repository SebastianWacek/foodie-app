import React from "react";
import {View, Text, ImageBackground, Image, TouchableOpacity} from 'react-native'
import {DrawerContentScrollView, DrawerItemList, } from "@react-navigation/drawer";

import Ionicons from 'react-native-vector-icons/Ionicons'

const CustomDrawer = (props, navigation) => {
    return(
        <View style={{flex:1}}>
        <DrawerContentScrollView {...props}
        contentContainerStyle={{backgroundColor: '#ffbf7c'}}>
            <ImageBackground source={require('../screens/images/menu_bcg.jpg')}
            style={{padding:20}}
            >
                <Image
                    source={require('../screens/images/pf.jpeg')}
                    style={{width: 100, height:100, borderRadius:20, marginBottom: 15}}
                ></Image>
                 <Text style={{fontSize: 30}}>Imie i nazwisko</Text>
            </ImageBackground>
            <View style={{flex:1, backgroundColor: '#fff', paddingTop: 10}}>
            <DrawerItemList {...props} />
            </View>
        </DrawerContentScrollView>
            <View style={{padding:20, borderTopWidth:1, borderTopColor:'#ccc'}}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("LoginScreen")} style={{paddingVertical:15}}>
                    <View style={{flexDirection:'row', alignItems: 'center'}}>
                        <Ionicons name="exit-outline" size={22}/>
                        <Text style={{
                                fontSize:15,
                                marginLeft:5,
                            }}>
                            Wyloguj się
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            </View>
    )
}

export default CustomDrawer