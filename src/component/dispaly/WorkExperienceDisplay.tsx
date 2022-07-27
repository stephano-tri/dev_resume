import styled from "styled-components";
import React from "react";

const WorkExperienceDisplay = () => {
    return(
        <Container>
            <Header>
                <TabElement onClick={() => {window.open('http://sizl.co.kr/')}}>
                    SIZL
                </TabElement>
            </Header>
            <Contents>
                스마트팩토리 관련 제조 공정 자동화 기술을 개발 (시리즈 A 투자 유치)
            </Contents>
            <Content>
                <ContentElement style={{flexDirection : 'column' , width : '500px'}}>
                    <div>
                        Backend Developer
                    </div>
                    <div>
                        Frontend Developer
                    </div>
                    <div style={{marginTop : '10px' , fontSize : '14px' , color : 'gray'}}>
                        2021-03 ~ NOW
                    </div>
                    <div style={{marginTop : '12px' , fontSize : '12px' , color : 'forestgreen'}}>
                        Spring-boot (+Webflux) , Express
                    </div>
                    <div style={{marginTop : '2px' , fontSize : '12px' , color : 'forestgreen'}}>
                        Mysql , ES , MongoDB
                    </div>
                    <div style={{marginTop : '2px' , fontSize : '12px' , color : 'forestgreen'}}>
                        React (+Next.js) , React-native
                    </div>
                </ContentElement>
                <ContentElement>
                    <ContentDescription>
                        <div style={{marginRight : '5px'}}> • </div>
                        자사 솔루션 MES(ERP) 백엔드 개발
                    </ContentDescription>
                    <ContentDescription>
                        <div style={{marginRight : '5px'}}> • </div>
                        <div style={{display : 'flex' , flexDirection : 'column'}}>
                            <div>
                                자사 솔루션 UMS , WMS
                            </div>
                            <div>
                                (Monitoring system) 프론트엔드 개발
                            </div>
                        </div>
                    </ContentDescription>
                    <ContentDescription>
                        <div style={{marginRight : '5px'}}> • </div>
                        자사 솔루션 MES(ERP) 어플리케이션 개발
                    </ContentDescription>
                    <ContentDescription>
                        <div style={{marginRight : '5px'}}> • </div>
                        <div style={{display : 'flex' , flexDirection : 'column'}}>
                            <div>
                                자사 솔루션 MES(ERP) Microservice
                            </div>
                            <div>
                                Architecture 전환 프로젝트 참여
                            </div>
                        </div>
                    </ContentDescription>
                </ContentElement>
            </Content>


        </Container>
    )
}
export default WorkExperienceDisplay

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
    width : 100%;
    font-size : 24px;
    weight : bold;
    color : gray;
    &:hover {
     color : #FCAE1E;
    };
    cursor : pointer;
    text-decoration : underline;
    text-decoration-color : #FCAE1E;
    text-decoration-thickness : 4px;
`

const Contents = styled.div`
    display : flex;
    flex-direction : column;
    margin-top : 15px;
`

const Content = styled.div`
    width : 100%;
    display : flex;
    justify-content : flex-start;
    margin-top : 35px;
`

const ContentElement = styled.div`
    width : 100%;
    white-space : pre;
    display : flex;
    flex-direction : column;
`

const ContentDescription = styled.div`
    width : 100%;
    margin-bottom : 12px;
    display : flex;
    font-size : 15px;
`
