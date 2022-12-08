import {Button, Text, View} from "native-base";
import {StyleSheet} from "react-native";

export default function DetailsScreen({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Drugi ekran nawigacji BottomTabs</Text>
            <Button title='Go back' onPress={() => navigation.goBack()}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    TextInput: {
        height: 40,
        width: 300,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },

    text:{
        fontSize: 24,
        marginBottom: 20,
    },

    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
});