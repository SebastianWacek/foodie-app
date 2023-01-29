import {Box, Button, Center, FormControl, Heading, Stack, Image, Input, Link, VStack} from "native-base";
import {Text} from "react-native";
import LoginScreen from "./LoginScreen";

export default function RegisterScreen({navigation}){
    return <Center w="100%" h="100%" backgroundColor="#F4BD57">
        <Image
            source={require("./images/logo.png")}
            style={{width: 180, height: 180, borderRadius: 100}}
            alt={"Alt"}
        />
        <Box safeArea mb="20" p="2" py="8" w="90%" >
            <Heading size="lg"  fontWeight="600" color="coolGray.800" _dark={{
                color: "warmGray.50"
            }}>
            </Heading>
            <Box>
                <VStack space={8} mt="1">
                    <FormControl>
                        <FormControl.Label>
                            <Text style = {{fontSize: 25, fontWeight: "bold"}}>
                                Login
                            </Text>
                        </FormControl.Label>
                        <Input w="100%"  backgroundColor="white"/>
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>
                            <Text style = {{fontSize: 25, fontWeight: "bold"}}>
                                Hasło
                            </Text>
                        </FormControl.Label>
                        <Input type="password" backgroundColor="white"/>
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>
                            <Text style = {{fontSize: 25, fontWeight: "bold"}}>
                                Potwierdź hasło
                            </Text>
                        </FormControl.Label>
                        <Input type="password" backgroundColor="white"/>
                    </FormControl>
                    <Center>
                        <Button borderRadius="10" mt="5" backgroundColor="#63C5C5" width="150" onPress={()=>navigation.navigate('MainScreen')} >
                            Zarejestruj
                        </Button>
                    </Center>
                    <VStack mb="3" alignItems="center">
                        <Link _text={{
                            color: "indigo.500",
                            fontWeight: "small",
                            fontSize: "sm"
                        }} onPress={()=>navigation.navigate('Login')}>
                            Zaloguj się
                        </Link>
                    </VStack>
                </VStack>
            </Box>
        </Box>
    </Center>
};