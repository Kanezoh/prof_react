import React from "react";
import {
  Box,
  Grid,
  GridItem,
  ListItem,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

const Skill = () => {
  return (
    <Box fontSize={"xl"}>
      <VStack>
        <Text fontWeight={"bold"} pb={5}>
          技術スタック
        </Text>
      </VStack>
      <Grid pr={5} pl={5}>
        <GridItem colStart={3} colEnd={6}>
          <UnorderedList>
            <ListItem>Ruby(Rails)</ListItem>
            <ListItem>TypeScript, JavaScript(React, Next.js, NestJS)</ListItem>
            <ListItem>MongoDB</ListItem>
            <ListItem>MySQL</ListItem>
          </UnorderedList>
        </GridItem>
      </Grid>
      <VStack>
        <Text fontWeight={"bold"} pb={5}>
          経歴
        </Text>
      </VStack>
      <GridItem pr={5} pl={5}>
        <UnorderedList spacing={"2"}>
          <ListItem>2020/02 ~ 2022/02: </ListItem>
          <Text fontSize={"lg"}>
            大学3,4年時にWebベンチャーで週4程度のアルバイト。Rubyを使ってクローラーを書いたり、Rails製自社サービスの開発を行なった。サービスの高速化のためにMySQLのクエリチューニングなども行なっていた。
          </Text>
          <ListItem>2022/04 ~ 現在: </ListItem>
          <Text fontSize={"lg"}>
            SaaS企業に新卒入社。社内のデータ基盤に関わる部署に配属され、TypeScriptを使ったバックエンド(NestJS),
            フロントエンド(React,
            Next.js)開発を行なっている。たまにインフラ(AWS)のコード(terraform)なども書く。
          </Text>
        </UnorderedList>
      </GridItem>
    </Box>
  );
};

export default Skill;
