import { Box, VStack, Text } from "@chakra-ui/react";
import * as React from "react";

const Work = () => {
  return (
    <Box fontSize={"xl"}>
      <VStack>
        <Text fontWeight={"bold"} pb={5}>
          技術スタック
        </Text>
        <Text pb={5} textColor={"grey"}>
          Work in Progress...
        </Text>
      </VStack>
    </Box>
  );
};

export default Work;
