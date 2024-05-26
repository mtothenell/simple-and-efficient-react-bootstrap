import * as React from "react"
import {
    ChakraProvider,
    Box,
    Text,
    theme,
    Image
} from "@chakra-ui/react"
import mangoDesign from './md1.png';

export const App = () => (
    <ChakraProvider theme={theme}>

        <Box display="flex"
             flexDirection="column"
             justifyContent="center"
             alignItems="center"
             height="100vh"
        >
            <Image src={mangoDesign} alt="Mango design" mb={0}></Image>
            <Text>
                "Creating stylish, functional, and custom made applications"
            </Text>
            <Text>
                Contact Ola Magnell at mtothenell@gmail.com
            </Text>
        </Box>

    </ChakraProvider>
);

export default App;

