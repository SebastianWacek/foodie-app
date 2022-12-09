import {Box, Button, Center, Heading, Image, Text, View} from "native-base";
import {StyleSheet} from "react-native";

export default function DetailsScreen({navigation}){
    return(
        <Center w="100%" h="100%" backgroundColor="#F4BD57">
            <Image
                source={require("./logo.png")}
                style={{width: 60, height: 60, borderRadius: 100}}
                alt={"Alt"}
            />
            <Box safeArea mb="20" p="2" py="8" w="90%" >
                <Heading size="lg"  fontWeight="600" color="coolGray.800" _dark={{
                    color: "warmGray.50"
                }}>
                </Heading>
            </Box>
        </Center>
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