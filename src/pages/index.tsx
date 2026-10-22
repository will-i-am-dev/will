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
            alt="William Melo"

            quality={100}
            style={{ border: "0px", borderRadius: '100%', width: 180 }}
          />
        </Box>
        <Heading alignSelf={'flex-start'} mt={10} textAlign={'left'} fontSize="3xl" color={"black"} mb={6}>
            Hi, I'm William.
          </Heading>
          <Text fontSize={'xl'} lineHeight={'8'}>
            I currently work at <ChakraLink  target="_blank" color="secondary.500" href="https://lab.lapix.com.co/">Lapix</ChakraLink> as a front-end developer. I have a degree in Information Technology from UNIMINUTO University and am in the final semesters of a Software Engineering degree at Manuela Beltrán University.
          </Text>
          <Text fontSize={'xl'} lineHeight={'8'} mt={4}>
          This site offers a glimpse into who I am, my interests, and the projects I've worked on throughout my career as a developer.
          </Text>
      </Box>
     
    </Layout>
  );
};

export default IndexPage;
