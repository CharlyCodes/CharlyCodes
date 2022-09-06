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
    <Layout title="Lluvia de Frutas">
        <Container maxW='container.md'>
            <Title>
                Lluvia de Frutas <Badge>2014</Badge>
            </Title>
            <P>
            The first videogame i participated... 
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href='/'>Lluvia de frutas <ExternalLinkIcon mx='2px'/></Link>
                </ListItem>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href='/'>Lluvia de frutas <ExternalLinkIcon mx='2px'/></Link>
                </ListItem>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href='/'>Lluvia de frutas <ExternalLinkIcon mx='2px'/></Link>
                </ListItem>
            </List>
        </Container>
        

    </Layout>
)

export default Work
