import React from "react";
import {
  Container,
  Heading,
  Box,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link, navigate } from 'gatsby';

export const Layout: React.FC = ({ children }) => {
  return (
    <Container maxW={"container.xl"}>
      <Box
        mt={5}
        display={"flex"}
        flexDirection={{base:'column',md:'row'}}
        justifyContent={{base:'center',md:"space-between"}}
        alignItems={{base:'center',md:'space-between'}}
        alignSelf={"flex-end"}
      >
        <Heading fontSize={"2xl"} as={Link} to={'/'} mb={{base:'20px',md:0}}>William Melo</Heading>
        <Box color={"secondary.500"} fontWeight={"700"}>
          <ChakraLink  as={Link} to={'/about'} _hover={{ color: "black" }}>DALE CLICK</ChakraLink>
          <ChakraLink   as={Link} to={'/proyects'} ml={5} _hover={{ color: "black" }}>
            PROYECTOS
          </ChakraLink>
        </Box>
      </Box>
      <Container px={{base:0,md:'16px'}}  maxW={"container.md"}>
      {children}
      </Container>
    </Container>
  );
};
