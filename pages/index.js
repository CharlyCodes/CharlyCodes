import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  useColorModeValue,
  chakra,
  Wrap
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import {
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoFacebook,
} from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbTwitch from '../public/images/links/TW.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container maxW='container.sm'>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello there!... I&apos;m science in computer engineering student and a
        self-taught game developer from México!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Carlos Chin
          </Heading>
          <p>@CharlyCodes</p>
          <p>
            Science in computer Engineering student 🎒 ( Speedcuber / Game Developer 🎮 / Designer )
          </p>
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
          I&apos;m a science in computer engineering student, Jr videogames
          developer, speedcuber and teacher of electronic, robotics and
          videogames programming for kids and teenagers. I like to learn new
          things everyday. I&apos;m also a Junior Delegate of the{' '}
          <NextLink
            href="https://www.worldcubeassociation.org/"
            passHref
            scroll={false}
          >
            <Link target="_blank" style={{ textDecoration: 'none' }}>World Cube Association</Link>
          </NextLink>{' '}
          and help other volunteers to organice and have speedcubing
          competitions in the country.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="purple">
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
          Student of Bachelor of Science in Computer Engineering.
        </BioSection>

        <BioSection>
          <BioYear>2022 - Present</BioYear>I work as a programming teacher at{' '}
          <Link href="https://www.academyplus.us/" target="_blank" style={{ textDecoration: 'none' }}>
            Academy Plus
          </Link>
        </BioSection>
        <BioSection>
          <BioYear>2014 - 2022</BioYear>
          Technology teacher at YOUGUI School of Technology. I taught: Game
          design, game proramming, Character Animation, Arduino and Robotics
          with LEGO MINDSTORMS EV3. Ages 7 - 17
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Object Oriented programming teacher at MISION ADMISION. I worked as a
          high School Teacher for one semester.
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Jr Programmer at RCK Games. Worked with the develop of the videogame
          &quot;Lawlers Super Service&quot; Using the Godot Engine.
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Adaptation and resking of the videogame &quot;Frutiyuks de Animayuks&quot;
          available on the Google Play Store.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ❤️
        </Heading>
        <Paragraph >
          Music, Photography, speedcubing, videogames and play with my Dog 🐶
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Socials
        </Heading>

        <Wrap spacing="2" justify="center">
          <Link
            href="https://github.com/CharlyCodes"
            target="_blank"
            style={{ textDecoration: 'none' }}
          >
            <Button
              variant="ghost"
              colorScheme="gray"
              size="md"
              leftIcon={<IoLogoGithub />}
            >
              Github
            </Button>
          </Link>

          <Link
            href="https://www.instagram.com/charlycodes"
            target="_blank"
            style={{ textDecoration: 'none' }}
          >
            <Button
              variant="ghost"
              colorScheme="pink"
              size="md"
              leftIcon={<IoLogoInstagram />}
            >
              Instagram
            </Button>
          </Link>

          <Link
            href="https://www.facebook.com/CharlyCodes"
            target="_blank"
            style={{ textDecoration: 'none' }}
          >
            <Button
              variant="ghost"
              colorScheme="facebook"
              size="md"
              leftIcon={<IoLogoFacebook />}
            >
              Facebook
            </Button>
          </Link>

          <Link
            href="https://www.instagram.com/olasoymila"
            target="_blank"
            style={{ textDecoration: 'none' }}
          >
            <Button
              variant="ghost"
              colorScheme="pink"
              size="md"
              leftIcon={<IoLogoInstagram />}
            >
              Mila🐶
            </Button>
          </Link>
        </Wrap>
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
</List> */}
        <Section></Section>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/channel/UC6__C4AOKNflgEOEK_6dYPg?sub_confirmation=1"
            title="CharlyCodes"
            thumbnail={thumbYouTube}
          >
            My YouTube channel (Consider Subscribe)
          </GridItem>
          <GridItem
            href="https://twitch.tv/charlycodes"
            title="CharlyCodes"
            thumbnail={thumbTwitch}
          >
            I stream gameplays and coding sessions 
          </GridItem>
        </SimpleGrid>

        {/*<Box align="center" my={4}>
          <NextLink href="/posts" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="purple">
              Popular posts
            </Button>
          </NextLink>
</Box>**/}
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
