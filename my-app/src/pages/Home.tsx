import * as React from "react";
import {
  Text,
  VStack,
  Grid,
  Center,
  Link as ChakraLink,
  Box,
  useColorMode,
} from "@chakra-ui/react";
import Header from "../components/Header";
import { Link as ReachLink } from "react-router-dom";

export const Home = () => {
  const { colorMode } = useColorMode();
  return (
    <Box backgroundColor={colorMode === "light" ? "#67A7CC" : "black"}>
      <Header />
      <Box p={2}>
        <Center fontSize="xl">
          <Grid>
            <Text paddingBottom={"1vh"} paddingTop={"1vh"}>
              都内でWebエンジニアをやってます。
            </Text>
            <Text paddingBottom={"1vh"} paddingTop={"1vh"}>
              主な出没場所: 渋谷、表参道、あるいは横浜、川崎
            </Text>
            <Text paddingBottom={"1vh"} paddingTop={"1vh"}>
              趣味: アプリ開発、ワンコインゲーム漁り、カフェ読書、英語、ラテン語
            </Text>
          </Grid>
        </Center>
      </Box>
      <Box>
        <VStack fontSize="3vh" p="5vh">
          <ChakraLink as={ReachLink} to="/skill" textDecoration={"underline"}>
            Skill
          </ChakraLink>
          <ChakraLink as={ReachLink} to="/profile" textDecoration={"underline"}>
            Profile
          </ChakraLink>
          <ChakraLink as={ReachLink} to="/todo" textDecoration={"underline"}>
            TODO
          </ChakraLink>
          <ChakraLink as={ReachLink} to="/blog" textDecoration={"underline"}>
            Blog
          </ChakraLink>
        </VStack>
      </Box>
    </Box>
  );
};

export default Home;
