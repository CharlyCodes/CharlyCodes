import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta} from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
    <Layout title="Robotics">
        <Container maxW='container.md'>
            <Title>
                Robotics <Badge>2005 - 2022</Badge>
            </Title>
            <P>
            Videogame created for the Animayuks coorporation 
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href='/'>Frutiyuks de animayuks<ExternalLinkIcon mx='2px'/></Link>
                </ListItem>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href='/'>Frutiyuks de animayuks<ExternalLinkIcon mx='2px'/></Link>
                </ListItem>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href='/'>Frutiyuks de animayuks<ExternalLinkIcon mx='2px'/></Link>
                </ListItem>
            </List>
            <WorkImage src="/images/works/Thumbs.png" alt="Lluvia_Frutas"/>
            <p>
                Description of the image
            </p>
            <WorkImage src="/images/works/Thumbs.png" alt="Lluvia_Frutas"/>
            <WorkImage src="/images/works/Thumbs.png" alt="Lluvia_Frutas"/>
            <WorkImage src="/images/works/Thumbs.png" alt="Lluvia_Frutas"/>
        </Container>
        

    </Layout>
)

export default Work
export {getServerSideProps } from '../../components/chakra'