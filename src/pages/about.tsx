import React from "react";
import {
  Container,
  Divider,
  Heading,
  Box,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Layout } from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link, navigate } from "gatsby";

const About = () => {
  return (
    <Layout>
      <Box  pt={{base:5,md:10}}
        px={{base:0,md:8}}>
        <Heading
          mt={10}
          textAlign={"left"}
          fontSize="3xl"
          color={"black"}
          mb={6}
        >
          Hola!
        </Heading>
        <Text fontSize={"xl"} lineHeight={"8"}>
          Gracias por visitar mi pagina.
        </Text>
        <br />
        <Text fontSize={"xl"} lineHeight={"8"}>
          Aquí podras encontrar un resumen de mis ideas, de lo que me gusta
          hacer, es decir una pequeña descripción de quien soy yo.
        </Text>
        <Divider mt={8} mb={6} />
        <Heading textAlign={"left"} fontSize="3xl" color={"black"} mb={6}>
          10 Segundos de Bio
        </Heading>
        <Text fontSize={"xl"} lineHeight={"8"}>
         Soy Colombiano
        </Text>
        <br />
        <Text fontSize={"xl"} lineHeight={"8"}>
         Vivo en Soacha - Cundinamarca
        </Text>
        <br />
        <Text fontSize={"xl"} lineHeight={"8"}>
         Trabajo en  <ChakraLink   target="_blank" color="secondary.500" href="https://lab.lapix.com.co/">Lapix</ChakraLink>
        </Text>
        <br />
        <Text fontSize={"xl"} lineHeight={"8"}>
         Lo que más me apasiona del desarrollo de software es encontrar la solución al problema.
        </Text>
        <br />
        <Text fontSize={"xl"} lineHeight={"8"}>
         Practico el atletismo y el ciclomontañismo.
        </Text>
        <br />
        <Text fontSize={"xl"} lineHeight={"8"}>
        Mi libro favorito: Un mundo común, de Marina Garcés.
        </Text>
        <Divider mt={8} mb={6} />
        <Heading textAlign={"left"} fontSize="3xl" color={"black"} mb={6}>
          Contáctame
        </Heading>
        <Text fontSize={"xl"} lineHeight={"8"}>
        Estoy en  <ChakraLink        _hover={{ color: "black" }}
              target="_blank" color="secondary.500" href="https://twitter.com/Will_i_am_dev">Twitter</ChakraLink>  y   <ChakraLink         _hover={{ color: "black" }}
              target="_blank" color="secondary.500" href="https://www.linkedin.com/in/william-melo-8701831b1/">Linkedin</ChakraLink>, si quieres puedes seguirme o enviarme un mensaje directo.
        </Text>
      </Box>
    </Layout>
  );
};

export default About;
