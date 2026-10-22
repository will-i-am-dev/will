import React from "react";
import { Divider, Heading, Box, Text, Link as ChakraLink } from "@chakra-ui/react";
import { Layout } from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const About = () => (
  <Layout>
    <Box pt={{ base: 5, md: 10 }} px={{ base: 0, md: 8 }}>
      <Box display="flex" justifyContent="center" mb={8}>
        <Box
          borderRadius="50%"
          width="180px"
          height="180px"
          flexShrink={0}
          overflow="hidden"
          clipPath="circle(50%)"
        >
          <StaticImage
            src="../images/me.jpg"
            alt="William Melo"
            width={180}
            height={180}
            quality={100}
            imgStyle={{
              borderRadius: "50%",
              objectFit: "cover",
              width: "180px",
              height: "180px",
              transform: "translateY(-10px) scale(1.06)",
            }}
            style={{
              borderRadius: "100%",
              width: "180px",
              height: "180px",
              objectFit: "cover",
            }}
          />
        </Box>
      </Box>
      <Heading
        mt={10}
        textAlign="left"
        fontSize="3xl"
        color="black"
        mb={6}
      >
        Hi, I&apos;m William Melo!
      </Heading>
      <Text fontSize="xl" lineHeight="8" fontWeight="semibold">
        Software Engineer | Front-End Expert | Digital Banking Solutions
      </Text>
      <Text fontSize="xl" lineHeight="8" mt={6}>
        Thank you for visiting my page!
      </Text>
      <Text fontSize="xl" lineHeight="8" mt={4}>
        I&apos;m a Software Engineer with over 6 years of experience delivering
        scalable, high-performance web applications. I specialize in
        JavaScript, TypeScript, React.js, Next.js, and Node.js.
      </Text>
      <Text fontSize="xl" lineHeight="8" mt={4}>
        Currently, I work as a Front-End Expert Developer in the financial
        sector, building secure, user-centered, and accessible (WCAG-aligned)
        transactional platforms. I also have hands-on experience designing
        conversational digital workflows, including WhatsApp Banking solutions
        integrated with Genesys Cloud.
      </Text>
      <Text fontSize="xl" lineHeight="8" mt={4}>
        What I enjoy most about software development is finding clean,
        maintainable, and efficient solutions to complex technical problems.
      </Text>
      <Divider mt={8} mb={6} />
      <Heading textAlign="left" fontSize="3xl" color="black" mb={6}>
        A 10-Second Bio
      </Heading>
      <Box as="ul" pl={6}>
        <Text as="li" fontSize="xl" lineHeight="8">
          Based in Colombia and open to international opportunities, including
          opportunities in Canada.
        </Text>
        <Text as="li" fontSize="xl" lineHeight="8" mt={2}>
          Software Engineering degree from Universidad Manuela Beltrán.
        </Text>
        <Text as="li" fontSize="xl" lineHeight="8" mt={2}>
          Building digital banking products at Banco Caja Social.
        </Text>
        <Text as="li" fontSize="xl" lineHeight="8" mt={2}>
          Off the clock, I practice athletics and mountain biking.
        </Text>
        <Text as="li" fontSize="xl" lineHeight="8" mt={2}>
          Favorite band: <em>Héroes del Silencio</em>.
        </Text>
      </Box>
      <Divider mt={8} mb={6} />
      <Heading textAlign="left" fontSize="3xl" color="black" mb={6}>
        Let&apos;s Connect!
      </Heading>
      <Text fontSize="xl" lineHeight="8" mb={5}>
        I&apos;m always open to discussing new projects, technical challenges,
        and international career opportunities. Connect with me on{" "}
        <ChakraLink
          _hover={{ color: "black" }}
          target="_blank"
          rel="noopener noreferrer"
          color="secondary.500"
          href="https://www.linkedin.com/in/william-melo-dev/"
        >
          LinkedIn
        </ChakraLink>{" "}
        or email me at{" "}
        <ChakraLink color="secondary.500" href="mailto:m24.1@hotmail.com">
          m24.1@hotmail.com
        </ChakraLink>
        .
      </Text>
    </Box>
  </Layout>
);

export default About;
