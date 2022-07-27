import styled from "styled-components";
import React from "react";
import MobileFlag from "../layout/MobileFlag";

interface POST {
    id : string
    name : string
    url : string
}

interface POSTS {
    posts : POST[]
}


const PostDisplay : React.FunctionComponent<POSTS> = ({posts}) => {

    const isMobile = MobileFlag();

    return(
        <Container style={{width : !isMobile ? '700px' : '550px', height : '100%' , marginTop : '15px'  }}>
            <Header>
                <TabElement style={{width : '45%'}}>
                    Type
                </TabElement>
                <TabElement style={{width : '75%'}}>
                    Title
                </TabElement>
                <TabElement style={{width : '200px'}}>
                    Date
                </TabElement>
            </Header>
            {
                posts.map((post , idx) => (
                    <Contents onClick={() => {window.open(post.url)}}>
                            <Content>
                                <ContentElement style={{width : '45%'}}>
                                    {'Backend'}
                                </ContentElement>
                                <ContentElement style={{width : '75%'}}>
                                    {post.name}
                                </ContentElement>
                                <ContentElement style={{width : '200px'}}>
                                    {'1994-08-19'}
                                </ContentElement>
                            </Content>
                    </Contents>
                ))
            }
        </Container>
    )
}
export default PostDisplay;

const Container = styled.div`
    display : flex;
    width : 100%;
    height : 100%;
    flex-direction : column;
    padding : 2.5rem;
`

const Header = styled.div`
    display : flex;
    flex-direction : row;
`

const TabElement = styled.div`
    width : 100%;
`

const Contents = styled.div`
    display : flex;
    flex-direction : column;
    margin-top : 15px;
    &:hover {
     color : #FCAE1E;
    }
`

const Content = styled.div`
    width : 100%;
    display : flex;
    justify-content : flex-start;
`

const ContentElement = styled.div`
    width : 100%;
    white-space : pre;
    cursor : pointer;
`
