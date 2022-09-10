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
    <Layout title="Lawlers">
        <Container maxW='container.md'>
            <Title>
                Lawlers's Super Service <Badge>2021</Badge>
            </Title>
            <P>
            Videogame created for Lawlers Restaurant
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href='/'>Lawlers super service<ExternalLinkIcon mx='2px'/></Link>
                </ListItem>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href='/'>Lawlers super service<ExternalLinkIcon mx='2px'/></Link>
                </ListItem>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href='/'>Lawlers super service<ExternalLinkIcon mx='2px'/></Link>
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