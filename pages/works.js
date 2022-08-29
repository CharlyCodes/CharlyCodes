import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import thumbWalknote from '../public/images/works/walknote_eyecatch.png'
import thumbFourPainters from '../public/images/works/the-four-painters_eyecatch.jpg'
import thumbMargelo from '../public/images/works/margelo_eyecatch.png'
import thumbModeTokyo from '../public/images/works/modetokyo_eyecatch.png'
import thumbStyly from '../public/images/works/styly_eyecatch.png'
import thumbPichu2 from '../public/images/works/pichu2_eyecatch.png'
import thumbFreeDBTagger from '../public/images/works/freedbtagger_eyecatch.png'
import thumbAmembo from '../public/images/works/amembo_eyecatch.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={30} mb={4}>
        Works
      </Heading>

      <Divider my={6}/>

      <Heading as="h3" fontSize={20} mb={4} >Videogames</Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="lluvia_frutas" title="Lluvia de frutas" thumbnail={thumbInkdrop}>
            Videogame made for the XVI Yucatecan Science Fair
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="frutiyuks"
            title="Frutiyuks de Animayuks"
            thumbnail={thumbWalknote}
          >
            Videogame made for the Animayuks corporation
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="lawlers"
            title="Lawler's super service"
            thumbnail={thumbFourPainters}
          >
            Videogame made for the restaurant Lawlers
          </WorkGridItem>
        </Section>
        
        <Section delay={0.1}>
          <WorkGridItem
            id="remake"
            title="Lluvia de Frutas Remake"
            thumbnail={thumbFourPainters}
          >
            Remake of my first Videogame "Lluvia de frutas"
          </WorkGridItem>
        </Section>

      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Experience as a teacher
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="robotics" thumbnail={thumbMargelo} title="Robotics Teacher">
            Teacher of Robotics using the LEGO MINDSTORMS EV3 System
          </WorkGridItem>
        </Section>

        <Section delay={0.3}>
          <WorkGridItem
            id="electronic"
            thumbnail={thumbModeTokyo}
            title="Electronic Teacher"
          >
            Teacher of Electronic Using the Arduino platform
          </WorkGridItem>
        </Section>

        <Section delay={0.3}>
          <WorkGridItem id="videogame" thumbnail={thumbStyly} title="Videogames Teacher">
            Teacher of videogames using different platforms
          </WorkGridItem>
        </Section>

        <Section delay={0.3}>
          <WorkGridItem id="design" thumbnail={thumbStyly} title="Design Teacher">
            Teacher of design using different platforms
          </WorkGridItem>
        </Section>

        <Section delay={0.3}>
          <WorkGridItem id="fll" thumbnail={thumbStyly} title="FIRST LEGO LEAGUE Coach">
            Coach of a team that participated in the FLL
          </WorkGridItem>
        </Section>

        <Section delay={0.3}>
          <WorkGridItem id="oop" thumbnail={thumbStyly} title="Object Oriented Programming Teacher">
            Teacher of Object Oriented programming
          </WorkGridItem>
        </Section>

        <Section delay={0.3}>
          <WorkGridItem id="techConference" thumbnail={thumbStyly} title="Tech talks and Workshops">
            Talks and Workshops of Technology
          </WorkGridItem>
        </Section>


      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Speedcube
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="fmat" thumbnail={thumbPichu2} title="FMAT Championship 2014">
            Fisrt official speedcube competition in Mérida Yucatán. 
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="weekend"
            thumbnail={thumbFreeDBTagger}
            title="Speedcube Weekend Mérida 2016"
          >
            Official Speedcube competition in Mérida Yucatán
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="wca" thumbnail={thumbAmembo} title="WCA Jr Mexican Delegate">
            Jr Delegate of the World Cube Association
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
        <WorkGridItem id="conference" thumbnail={thumbAmembo} title="Talks and Workshops">
            Rubik's Cube and speedcube related activities
          </WorkGridItem>
        </Section>
      </SimpleGrid>


    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
