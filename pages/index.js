import {
  Button,
  Container,
  Box,
  Heading,
  Image,
  Link,
  Icon,
  List,
  ListItem,
  useColorModeValue,
  Divider
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import NextLink from 'next/link'
import { BioSection, BioYear } from '../components/bio'
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

const Page = () => {
  return (
    <Layout>
      <Container mt={8}>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Robin Williscroft
            </Heading>
            <p>Developer / Designer / Dungeon Master</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="125px"
              display="inline-block"
              borderRadius="full"
              src="/images/profile.png"
              alt="Profile Picture"
            />
          </Box>
        </Box>
        <Divider my={6} />
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title" fontSize={25}>
            Work
          </Heading>
          <Paragraph>
            Robin is a freelancer and full-stack developer based in Gothenburg
            with a passion for building digital services, playing with
            animations using ThreeJS, and painting miniatures. He has a knack
            for all things relating to frontend development, from planning and
            designing all the way to solving real-life problems with code. When
            not online, he loves hanging out with his family and taking long
            hikes with his{' '}
            <Link isExternal href="https://www.instagram.com/p/CZWvjmJM_S-/">
              Labrador, Nike
            </Link>
            . Currently, he is employed as a frontend development intern at
            Lynk&Co and works on his free time on projects to progress his
            knowledge in software engineering and machine learning.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/projects">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="orange">
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title" fontSize={25}>
            Bio
          </Heading>
          <BioSection>
            <BioYear>1993</BioYear>
            Born in Trollhättan, Sweden.
          </BioSection>
          <BioSection>
            <BioYear>2012</BioYear>
            Finished the Game Development program at Ljud & Bild-skolan
            specializing in 3D & animation.
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Completed a vocational degree in Frontend development at
            IT-Högskolan in Mölndal, Sweden.
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Works at Lynk&Co as a Frontend Development Intern.
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="sub-title" fontSize={25}>
            Hobbies
          </Heading>
          <Paragraph>
            <Link
              isExternal
              href="https://www.goodreads.com/user/show/146280090-robin-williscroft"
            >
              Books
            </Link>
            , Writing, Tabletop Games, Painting Miniatures, Animation
          </Paragraph>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title" fontSize={25}>
            Contact
          </Heading>
          <List>
            <ListItem>
              <Link
                href="https://github.com/r-lofcroft"
                target="_blank"
                isExternal
              >
                <Button
                  variant="ghost"
                  colorScheme="orange"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @r-lofcroft
                </Button>
              </Link>
              <Link
                href="https://www.instagram.com/robinthebroccoli/"
                target="_blank"
                isExternal
              >
                <Button
                  variant="ghost"
                  colorScheme="orange"
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  @robinthebroccoli
                </Button>
              </Link>
              <Link
                href="https://www.linkedin.com/in/robin-williscroft/"
                target="_blank"
                isExternal
              >
                <Button
                  variant="ghost"
                  colorScheme="orange"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  @Robin-Williscroft
                </Button>
              </Link>
            </ListItem>
          </List>
          <Box
            borderRadius="lg"
            mb={6}
            p={3}
            mt={6}
            textAlign="center"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            css={{ backdropFilter: 'blur(10px)' }}
          >
            Feel free to get in touch!
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}
export default Page
