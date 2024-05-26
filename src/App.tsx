import * as React from "react"
import {
    ChakraProvider,
    Box,
    Text,
    VStack,
    Grid,
    theme,
    Image
} from "@chakra-ui/react"
import mangoDesign from './md1.png';

export const App = () => (
    <ChakraProvider theme={theme}>
        <Box textAlign="center" fontSize="xl">
            <Grid minH="100vh" p={3}>
                <VStack spacing={0}>
                    <Image src={mangoDesign} alt="Mango design"></Image>
                    <Text>
                        Snyggt. Anpassat. Säkert.
                    </Text>
                </VStack>
            </Grid>
        </Box>
    </ChakraProvider>
);

export default App;

