import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Image,
  Center,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box fontSize="xl">
      <header>
        <Grid>
          <ColorModeSwitcher justifySelf="flex-end" />
        </Grid>
      </header>
      <Center fontSize="xl">
      <Image
  borderRadius='full'
  boxSize='150px'
  src='./kanezoh.jpg'
  alt='Kanezoh'
/>
    </Center>
      <Text>hello</Text>
      <Grid minH="100vh" p={3}>
        <Text>hello</Text>
        <Text>hello</Text>
        <Text>hello</Text>
        <Text>hello</Text>
        <Text>hello</Text>
        <Text>hello</Text>
      </Grid>
    </Box>
  </ChakraProvider>
)
