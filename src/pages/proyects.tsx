import React from "react";
import {
  Divider,
  Heading,
  Box,
  Text,
  Tag,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Layout } from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  url: string;
  image: React.ReactNode;
};

const projects: Project[] = [
  {
    title: "SiAgéndalo",
    description:
      "An end-to-end scheduling product I designed and built independently with Next.js, Node.js, and PostgreSQL. It brings customer booking and business operations together, with 24/7 availability, appointment and client management, and automated WhatsApp reminders that help service businesses reduce missed appointments.",
    technologies: ["Next.js", "Node.js", "PostgreSQL"],
    url: "https://www.siagendalo.com/",
    image: (
      <StaticImage
        src="../images/image-1792688031434.png"
        alt="SiAgéndalo online appointment scheduling product"
        quality={95}
        layout="fullWidth"
      />
    ),
  },
  {
    title: "Mi Pago Amigo",
    description:
      "Contributed to the modernization of Banco Caja Social's digital payment platform, moving a legacy .NET product to a Next.js frontend and NestJS backend. The work brings the bill-payment journey onto a current web stack while separating the presentation and service layers for a more maintainable product.",
    technologies: ["Next.js", "NestJS", ".NET migration"],
    url: "https://www.mipagoamigo.com/MPA_WebSite/ServicePayments",
    image: (
      <StaticImage
        src="../images/image-1792687951821.png"
        alt="Mi Pago Amigo digital bill payment portal"
        quality={95}
        layout="fullWidth"
      />
    ),
  },
  {
    title: "Banco Caja Social WhatsApp Service Channel",
    description:
      "Built a digital service channel for Banco Caja Social's individual customers, combining a React, Next.js, and Tailwind CSS experience with bot logic implemented in Node.js and Genesys Cloud. The work connects the customer-facing journey with conversational automation, making common banking support flows available through WhatsApp.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Node.js", "Genesys Cloud"],
    url: "https://www.bancocajasocial.com/canales-alternos/whatsapp-de-servicio/",
    image: (
      <StaticImage
        src="../images/image-1792687919269.png"
        alt="Banco Caja Social WhatsApp customer service channel"
        quality={95}
        layout="fullWidth"
      />
    ),
  },
  {
    title: "Cuentamiga Digital",
    description:
      "Owned end-to-end frontend development for Banco Caja Social's first fully digital savings account. I built the digital account-opening experience that enabled customers to start the process online, translating a core banking product into a clear, form-led customer journey.",
    technologies: ["Frontend ownership", "Digital banking"],
    url: "https://digital.bancocajasocial.com/cuentamiga/",
    image: (
      <StaticImage
        src="../images/image-1792687896497.png"
        alt="Cuentamiga Digital online savings account opening experience"
        quality={95}
        layout="fullWidth"
      />
    ),
  },
  {
    title: "Nomadu",
    description:
      "Built the frontend for a learning management platform serving Colombian insurance companies, delivering distinct experiences for students and administrators. The product brings courses, assessments, forums, news, reference content, and documents into one cohesive learning environment, supported by a consistent interface across a broad set of workflows.",
    technologies: ["React", "TypeScript", "Gatsby", "GraphQL", "Firebase", "Chakra UI"],
    url: "https://www.nomadu.com.co/",
    image: (
      <StaticImage
        src="../images/nomadu.png"
        alt="Nomadu learning management platform"
        quality={95}
        layout="fullWidth"
      />
    ),
  },
  {
    title: "Financenter Loan Application",
    description:
      "Developed a digital loan application experience for Financenter, turning a high-stakes financial form into a focused, guided flow. I implemented the frontend and integrated Google reCAPTCHA validation to protect submissions and support the application process.",
    technologies: ["Preact", "TypeScript", "CSS", "Google reCAPTCHA"],
    url: "https://www.financenter.com.co/",
    image: (
      <StaticImage
        src="../images/financenter.png"
        alt="Financenter loan application project"
        quality={95}
        layout="fullWidth"
      />
    ),
  },
  {
    title: "Exportapp",
    description:
      "Built the frontend for a medium-fidelity product prototype that helps Colombian small and medium-sized businesses explore export opportunities. I translated the product concept into a clear, structured experience for comparing export alternatives and understanding the potential of products in international markets.",
    technologies: ["React.js", "TypeScript", "Gatsby", "Chakra UI"],
    url: "https://exportapp.lapix.com.co/",
    image: (
      <StaticImage
        src="../images/exportapp.png"
        alt="Exportapp export opportunity platform"
        quality={95}
        layout="fullWidth"
      />
    ),
  },
];

const ProjectCard = ({ project }: { project: Project }) => (
  <Box my={8} borderRadius={"lg"} shadow={"md"} borderWidth={1} overflow="hidden">
    <Box>{project.image}</Box>
    <Box p={5}>
      <Heading
        mt={2}
        textAlign={"left"}
        fontSize="3xl"
        color={"black"}
        mb={6}
      >
        {project.title}
      </Heading>
      <Text fontSize={"xl"}>{project.description}</Text>
      <Box display={"flex"} flexWrap={"wrap"} my={2}>
        {project.technologies.map((technology) => (
          <Tag
            key={technology}
            mr={2}
            my={1}
            size={"md"}
            variant="solid"
            colorScheme="linkedin"
          >
            {technology}
          </Tag>
        ))}
      </Box>
      <Divider mt={5} mb={3} />
      <ChakraLink
        _hover={{ color: "black" }}
        fontSize={"xl"}
        target="_blank"
        rel="noopener noreferrer"
        color="secondary.500"
        href={project.url}
      >
        Visit Website
      </ChakraLink>
    </Box>
  </Box>
);

const Proyects = () => (
  <Layout>
    <Box pt={{ base: 5, md: 10 }}>
      <Heading
        mt={10}
        textAlign={"left"}
        fontSize="3xl"
        color={"black"}
        mb={6}
      >
        Projects
      </Heading>
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </Box>
  </Layout>
);

export default Proyects;
