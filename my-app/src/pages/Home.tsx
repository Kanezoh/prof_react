import * as React from "react";
import {
  Text,
  VStack,
  Grid,
  Center,
  Link as ChakraLink,
  Box,
} from "@chakra-ui/react";
import { Link as ReachLink, Route, Routes } from "react-router-dom";
import Skill from "./Skill";
import Header from "../components/Header";
import Todo from "./Todo";
import Work from "./Work";

export const Home = () => {
  return (
    <Box paddingBottom={5}>
      <Header />
      <HomeContent />
      <Routes>
        <Route path="/skill" element={<Skill />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/works" element={<Work />} />
      </Routes>
    </Box>
  );
};

const HomeContent = () => {
  return (
    <>
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
          <ChakraLink as={ReachLink} to="/works" textDecoration={"underline"}>
            Works
          </ChakraLink>
          <ChakraLink as={ReachLink} to="/profile" textDecoration={"underline"}>
            Profile
          </ChakraLink>
          <ChakraLink as={ReachLink} to="/todo" textDecoration={"underline"}>
            Todo
          </ChakraLink>
          <ChakraLink
            href="https://kanezoh.hateblo.jp/"
            textDecoration={"underline"}
            isExternal
          >
            Blog
          </ChakraLink>
        </VStack>
      </Box>
    </>
  );
};

export default Home;
