import * as React from "react";
import { Box, VStack, Text, Checkbox, Grid, GridItem } from "@chakra-ui/react";

const Todo = () => {
  return (
    <Box fontSize={"xl"}>
      <VStack>
        <Text>TODO</Text>
        <Grid pr={5} pl={5}>
          <GridItem colStart={3} colEnd={6}>
            <Checkbox isReadOnly>Some...</Checkbox>
          </GridItem>
        </Grid>
      </VStack>
    </Box>
  );
};

export default Todo;
