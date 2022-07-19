import {
  Button,
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Link
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import NextLink from 'next/link'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          mt={6}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          Hello, I&apos;m an frontend developer based in Sweden!
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Robin Williscroft
            </Heading>
            <p>Developer / Designer / DM</p>
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
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/robin.jpg"
              alt="Profile Picture"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title" fontSize={25}>
            Work
          </Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laboru{' '}
            <NextLink href="/works/lorem">
              <Link>Lorem</Link>
            </NextLink>
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
            , Writing, Tabletop Games, Painting Miniatures,{' '}
            <Link href="#">Animation</Link>
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  )
}
export default Page
