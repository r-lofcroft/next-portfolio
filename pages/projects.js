import { Container, Divider, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { TempGridItem, WorkGridItem } from '../components/grid-item'
import thumbAirbean from '../public/images/projects/cupDrone.webp'
import textAdventure from '../public/images/projects/text-adventure.webp'
import hackwrack from '../public/images/projects/hackwrack.webp'
import buddybuildr from '../public/images/projects/buddybuildr.webp'
import astrofobia from '../public/images/projects/astrofobia.webp'

import Layout from '../components/layouts/article'

const Projects = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4} mt={4}>
          School projects
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} alignItems="end" gap={7}>
          <Section>
            <WorkGridItem
              id="airbean"
              title="Airbean"
              thumbnail={thumbAirbean}
              href="https://github.com/r-lofcroft/Airbean-frontend"
            >
              Frontend for a coffee delivery service utilizing drones and
              capable of delivering 0 coffees an hour made in React paired with
              backend using NodeJS & Express.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="buddybuildr"
              title="Buddybuildr"
              thumbnail={buddybuildr}
              href="https://github.com/r-lofcroft/buddybuildr-chat"
            >
              Global chat for fitness and wellbeing made using React, Firebase,
              and Styled Components.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="hackwrack"
              title="Hackwrack"
              thumbnail={hackwrack}
              href="https://github.com/r-lofcroft/hackwrack"
            >
              A demo using Wordpress to create a website for a fictitious
              company specializing in frontend development consultancy.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="adventure hunters"
              title="Adventure Hunters"
              thumbnail={textAdventure}
              href="https://github.com/r-lofcroft/TextAdventure"
            >
              Larger group project creating a text adventure made with VueJS
              aimed at reading .MD files depending on user choices.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4} mt={8}>
          Personal projects
        </Heading>
        <Section>
          <TempGridItem
            disabled
            id="astrofobia"
            title="Astrofobia"
            thumbnail={astrofobia}
          >
            A pixelated 3D thriller game set on a desolate space station
            featuring an in-depth morality system and is currently in
            development in UE5.
          </TempGridItem>
        </Section>
      </Container>
    </Layout>
  )
}
export default Projects
