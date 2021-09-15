import React from "react";
import {
  Container,
  Heading,
  Box,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Layout } from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link, navigate } from "gatsby";

const IndexPage = () => {
  return (
    <Layout>
      <Box
        pt={{base:5,md:20}}
        px={{base:0,md:8}}
        display="flex"
        flexDirection={"column"}
        alignContent={"center"}
        justifyContent="center"
        alignItems={"center"}
      >
        <Box  borderRadius={'full'} boxSize={180} >
          <StaticImage
          
            src="../images/me.jpg"
            alt="me"

            quality={100}
            style={{ border: "0px", borderRadius: '100%', width: 180 }}
          />
        </Box>
        <Heading  mt={10} textAlign={'left'} fontSize="3xl" color={"black"} mb={6}>
            Hola, soy William
          </Heading>
          <Text fontSize={'xl'} lineHeight={'8'}>
            Actualmente trabajo en <ChakraLink color="secondary.500" href="https://lab.lapix.com.co/">Lapix</ChakraLink> como desarrollador FrontEnd, soy Tecnólogo en Informática de la universidad UNIMINUTO y estudiante de últimos semestres de Ingenieria de Software de la universidad Manuela Beltran.  
          </Text>
          <Text fontSize={'xl'} lineHeight={'8'} mt={4}>
          Este sitio muestra un poco de mi, mis intereses y los proyectos que he realizado a lo largo de este año de experiencia que tengo como desarrollador.
          </Text>
      </Box>
     
    </Layout>
  );
};

export default IndexPage;
