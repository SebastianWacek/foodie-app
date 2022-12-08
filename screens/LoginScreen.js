
import {Box, Button, Center, FormControl, Heading, HStack, Image, Input, Link, VStack} from "native-base";
import {Text} from "react-native";

export default function LoginScreen({navigation}){
    return <Center w="100%" h="100%" backgroundColor="#F4BD57">
        <Image
            source={require("./logo.png")}
            style={{width: 150, height: 150, borderRadius: 100}}
        />
        <Box safeArea p="2" py="8" w="100%" maxW="290">
            <Heading size="lg"  fontWeight="600" color="coolGray.800" _dark={{
                color: "warmGray.50"
            }}>
            </Heading>
            <Box>
            <VStack space={10} mt="10">
                <FormControl>
                    <FormControl.Label>Email ID</FormControl.Label>
                    <Input />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Password</FormControl.Label>
                    <Input type="password" />
                    <Link _text={{
                        fontSize: "xs",
                        fontWeight: "500",
                        color: "indigo.500"
                    }} alignSelf="flex-end" mt="1">
                        Forget Password?
                    </Link>
                </FormControl>
                <Button color="#63C5C5" width="150"  ml="60">
                    Sign in
                </Button>
                <HStack mt="6" justifyContent="center">
                    <Text fontSize="sm" color="coolGray.600" _dark={{
                        color: "warmGray.200"
                    }}>
                        I'm a new user.{" "}
                    </Text>
                    <Link _text={{
                        color: "indigo.500",
                        fontWeight: "medium",
                        fontSize: "sm"
                    }} href="#">
                        Sign Up
                    </Link>
                </HStack>
            </VStack>
            </Box>
        </Box>
    </Center>
};
