import * as React from "react"
import {
    ChakraProvider,
    Box,
    Text,
    theme,
    Image, Divider, Link, Grid, GridItem
} from "@chakra-ui/react"
import mangoDesign from './md1.png';

const height = 100/3;
export const App = () => (



    <ChakraProvider theme={theme}>
        <Grid templateRows='repeat(54 1fr)' gap={0}>
            <GridItem w='100%' h={`${height}vh`} bg='grey' />
            <GridItem w='100%' h={`${height}vh`} bg='white'>
                <Image src={mangoDesign} alt="Mango design" mb={0}></Image>
                <Link href="mailto:mtothenell@gmail.com">
                    Making stylish, functional, and secure applications.
                </Link>
            </GridItem>
            <GridItem w='100%' h={`${height}vh`} bg='grey' />
        </Grid>
    </ChakraProvider>
);

export default App;

