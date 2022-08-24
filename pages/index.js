import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoFacebook, IoLogoYoutube, IoLogoTwitch} from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello there... I&apos;m science in computer engineering student and a self-taught game developer from México!

      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Carlos Chin
          </Heading>
          <p>@CharlyCodes</p>
          <p>Computer Science Student ( Speedcuber / Game Developer / Designer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/chin.png"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          I&apos;m a science in computer engineering student, Jr videogames developer, speedcuber and teacher of electronic, robotics and videogames programming for kids and teenagers. I like to learn new things everyday. I'm also a
          Junior Delegate of the{' '}
          <NextLink href="https://www.worldcubeassociation.org/" passHref scroll={false} >
            <Link target="_blank">World Cube Association</Link>
          </NextLink>{' '}
          and help other volunteers to organice and have speedcubing competitions in the country.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Resume
        </Heading>
        <BioSection>
          <BioYear>2022 - Present</BioYear>
          Student of Bachelor of Science in Computer Engineering Student.
        </BioSection>

        <BioSection>
          <BioYear>2022 - Present</BioYear>
          I work as a programming teacher at <Link href='https://www.academyplus.us/' target="_blank">Academy Plus</Link>
        </BioSection>
        <BioSection>
          <BioYear>2014 - 2022</BioYear>
          Technology teacher at YOUGUI School of Technology. I taught: Game design, game proramming, Character Animation, Arduino and Robotics with LEGO MINDSTORMS EV3. Ages 7 - 17
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Object Oriented programming teacher at MISION ADMISION. I worked as a high School Teacher for one semester.
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Jr Programmer at RCK Games. Worked with the develop of the videogame "Lawlers Super Service" Using the Godot Engine.
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Adaptation and resking of the videogame "Frutiyuks de Animayuks" available on the Google Play Store.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ❤️
        </Heading>
        <Paragraph>
          Music,{' '} Photography,{' '}videogames and play with my Dog 🐶
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Socials
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/CharlyCodes" target="_blank">
              <Button
                variant="ghost"
                colorScheme="telegram"
                leftIcon={<IoLogoGithub />}
              >
                @CharlyCodes
              </Button>
            </Link>
          </ListItem>

          {/*<ListItem>
            <Link href="https://twitter.com/CharlyCodes" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @CharlyCodes
              </Button>
            </Link>
</ListItem>*/}
          <ListItem>
            <Link href="https://www.instagram.com/charlycodes" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<IoLogoInstagram />}
              >
                @CharlyCodes
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="https://www.facebook.com/CharlyCodes" target="_blank">
              <Button
                variant="ghost"
                colorScheme="facebook"
                leftIcon={<IoLogoFacebook/>}
              >
                @CharlyCodes
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="https://www.youtube.com/channel/UC6__C4AOKNflgEOEK_6dYPg?sub_confirmation=1" target="_blank">
              <Button
                variant="ghost"
                colorScheme="red"
                leftIcon={<IoLogoYoutube />}
              >
                @CharlyCodes
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="https://twitch.tv/charlycodes" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<IoLogoTwitch/>}
              >
                @CharlyCodes
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/devaslife"
            title="Dev as Life"
            thumbnail={thumbYouTube}
          >
            My YouTube channel (&gt;100k subs)
          </GridItem>
          <GridItem
            href="https://www.inkdrop.app/"
            title="Inkdrop"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/posts" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
