import * as React from "react";
import { Grid, Image, VStack } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <header>
      <Grid>
        <ColorModeSwitcher justifySelf="flex-end" />
      </Grid>
      <VStack>
        <Image
          borderRadius="full"
          boxSize="150px"
          src="./kanezoh.jpg"
          alt="Kanezoh"
        />
        <Text>かねぞう/Kanezoh</Text>
      </VStack>
    </header>
  );
};

export default Header;
