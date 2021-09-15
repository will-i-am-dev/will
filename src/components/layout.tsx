import React,{useState} from "react";
import {
  Container,
  Heading,
  Box,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link, navigate } from 'gatsby';

export const Layout: React.FC = ({ children }) => {
  const [blur,setBlur]=useState(false)

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
          <ChakraLink onMouseOver={()=>setBlur(!blur)} onMouseOut={()=>setBlur(false)}  onMouseDown={()=>setBlur(false)} onMouseUp={()=>setBlur(false)}  onClick={()=>setBlur(false)} as={Link} to={'/about'} _hover={{ color: "black" }}>DALE CLICK</ChakraLink>
          <ChakraLink   onMouseOver={()=>setBlur(!blur)} onMouseOut={()=>setBlur(false)}  onClick={()=>setBlur(false)}  as={Link} to={'/proyects'} ml={5} _hover={{ color: "black" }}>
            PROYECTOS
          </ChakraLink>
        </Box>
      </Box>
      <Container   style={{ filter: blur? "blur(2px)":"blur(0px)" }} px={{base:0,md:'16px'}}  maxW={"container.md"}>
      {children}
      </Container>
    </Container>
  );
};
