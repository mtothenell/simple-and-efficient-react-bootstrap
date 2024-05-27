import * as React from "react"
import {
    ChakraProvider,
    Box,
    Text,
    theme,
    Image, Divider, Link
} from "@chakra-ui/react"
import mangoDesign from './md1.png';

export const App_oldest = () => (
    <ChakraProvider theme={theme}>
            <Box display="flex"
                 flexDirection="column"
                 justifyContent="center"
                 alignItems="center"
                 height="100vh"
                 width="100%"
                 textAlign="center"
            >
                <Divider orientation="horizontal" height="10px" width="100vh" bg="black"/>
                <Image src={mangoDesign} alt="Mango design" mb={0}></Image>
                <Link href="mailto:mtothenell@gmail.com">
                    Making stylish, functional, and secure applications.
                </Link>
                <Divider orientation="horizontal" height="10px" width="100vh" bg="black"/>
            </Box>
    </ChakraProvider>
);

export default App_oldest;

