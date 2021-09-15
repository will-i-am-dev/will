import React from "react";
import {
  Container,
  Divider,
  Heading,
  Box,
  Text,
  Tag,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Layout } from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link, navigate } from "gatsby";

const Proyects = () => {
  return (
    <Layout>
      <Box pt={{ base: 5, md: 10 }}>
        <Heading
          mt={10}
          textAlign={"left"}
          fontSize="3xl"
          color={"black"}
          mb={6}
        >
          Proyectos
        </Heading>
        <Box mb={5} borderRadius={"lg"} shadow={"md"} borderWidth={1}>
          <Box>
            <StaticImage
              src="../images/exportapp.png"
              alt="exportapp"
              quality={100}
              style={{
                border: "1px",
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
                width: "100%",
              }}
            />
          </Box>
          <Box p={5}>
            <Heading
              mt={2}
              textAlign={"left"}
              fontSize="3xl"
              color={"black"}
              mb={6}
            >
              Exportapp
            </Heading>
            <Text fontSize={"xl"}>
              Exportapp es una pagina que permite a las Pymes de Colombia poder
              conocer las alternativas de exportacion y el potencial de su
              producto en el exterior, realice el FrontEnd de este prototipo de
              fidelidad media.
            </Text>

            <Box display={"flex"} my={2}>
              <Tag mr={2} size={"md"} variant="solid" colorScheme="linkedin">
                React.js
              </Tag>
              <Tag mr={2} size={"md"} variant="solid" colorScheme="messenger">
                TypeScript
              </Tag>
              <Tag mr={2} size={"md"} variant="solid" colorScheme="purple">
                Gatsby
              </Tag>
              <Tag mr={2} size={"md"} variant="solid" colorScheme="teal">
                ChakraUI
              </Tag>
            </Box>
            <Divider mt={5} mb={3} />
            <ChakraLink
              _hover={{ color: "black" }}
              fontSize={"xl"}
              target="_blank"
              color="secondary.500"
              href="https://exportapp.lapix.com.co/"
            >
              Visitar Página
            </ChakraLink>
          </Box>
        </Box>

        <Box my={8} borderRadius={"lg"} shadow={"md"} borderWidth={1}>
          <Box>
            <StaticImage
              src="../images/financenter.png"
              alt="exportapp"
              quality={100}
              style={{
                border: "1px",
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
                width: "100%",
              }}
            />
          </Box>
          <Box p={5}>
            <Heading
              mt={2}
              textAlign={"left"}
              fontSize="3xl"
              color={"black"}
              mb={6}
            >
              Financenter - Formulario crédito
            </Heading>
            <Text fontSize={"xl"}>
              Realice un formulario de solicitud de credito con validación
              google-reCaptcha para la entidad financiera Financenter.
            </Text>

            <Box display={"flex"} my={2}>
              <Tag mr={2} size={"md"} variant="solid" colorScheme="purple">
                Preact
              </Tag>
              <Tag mr={2} size={"md"} variant="solid" colorScheme="messenger">
                TypeScript
              </Tag>
              <Tag mr={2} size={"md"} variant="solid" colorScheme="teal">
                CSS
              </Tag>
              <Tag mr={2} size={"md"} variant="solid" colorScheme="blackAlpha">
                reCAPTCHA
              </Tag>
            </Box>
            <Divider mt={5} mb={3} />
            <ChakraLink
              _hover={{ color: "black" }}
              fontSize={"xl"}
              target="_blank"
              color="secondary.500"
              href="https://www.financenter.com.co/"
            >
              Visitar Página
            </ChakraLink>
          </Box>
        </Box>

        <Box my={8} borderRadius={"lg"} shadow={"md"} borderWidth={1}>
          <Box>
            <StaticImage
              src="../images/nomadu.png"
              alt="exportapp"
              quality={100}
              style={{
                border: "1px",
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
                width: "100%",
              }}
            />
          </Box>
          <Box p={5}>
            <Heading
              mt={2}
              textAlign={"left"}
              fontSize="3xl"
              color={"black"}
              mb={6}
            >
              Nomadu
            </Heading>
            <Text fontSize={"xl"}>
              Plataforma LMS para las aseguradoras Colombianas, en este desarrollo realice el
              FrontEnd de las plataformas para los estudiantes y los
              administradores, implementando los modulos de: noticias,
              diccionario, documentos, cursos, dashboard, evaluaciones, foro y otros más.
            </Text>
            <Box display={"flex"} my={2}>
            <Tag mr={2} size={"md"} variant="solid" colorScheme="linkedin">
                React.js
              </Tag>
              <Tag mr={2} size={"md"} variant="solid" colorScheme="messenger">
                TypeScript
              </Tag>
              <Tag mr={2} size={"md"} variant="solid" colorScheme="purple">
                Gatsby
              </Tag>
              <Tag mr={2} size={"md"} variant="solid" colorScheme="pink">
              GraphQL
              </Tag>
              <Tag mr={2} size={"md"} variant="solid" colorScheme="yellow">
               Firebase
              </Tag>
              <Tag mr={2} size={"md"} variant="solid" colorScheme="teal">
                ChakraUI
              </Tag>
            </Box>
            <Divider mt={5} mb={3} />
            <ChakraLink
              _hover={{ color: "black" }}
              target="_blank"
              fontSize={"xl"}

              color="secondary.500"
              href="https://www.nomadu.com.co/"
            >
              Visitar Página
            </ChakraLink>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Proyects;
