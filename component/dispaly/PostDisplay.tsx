import styled from "styled-components";

const PostDisplay = () => {
    return(
        <Container>
            <Header>
                <TabElement style={{marginRight : '75px'}}>
                    Type
                </TabElement>
                <TabElement style={{marginRight : '295px'}}>
                    Title
                </TabElement>
                <TabElement>
                    Date
                </TabElement>
            </Header>
            <Contents>
                <ContentElement>
                    {'Backend           '} {'why we use webflux ?                                       '} {'06/30/22'}
                </ContentElement>
            </Contents>
        </Container>
    )
}
export default PostDisplay;

const Container = styled.div`
    display : flex;
    width : 100%;
    height : 100%;
    flex-direction : column;
    padding : 1.5rem;
`

const Header = styled.div`
    display : flex;
    flex-direction : row;
`

const TabElement = styled.div`
    margin-right : 200px;
`

const Contents = styled.div`
    display : flex;
    flex-direction : column;
    margin-top : 15px;
    &:hover {
     color : #FCAE1E;
    }
`

const ContentElement = styled.div`
    width : 100%;
    white-space : pre;
    cursor : pointer;
`
