import styled from "styled-components";
import React from "react";

const ProjectContent = () => {
    return (
        <Container>
            <Header>
                Saga Pattern
                <DotContent>
                    .
                </DotContent>
            </Header>
            <Content>
                분산 트랜잭션 환경에서의 atomicity를 보장하기 위한 방법
            </Content>
            <Content style={{fontWeight : 'bold', color : '#FCAE1E', fontSize : '20px'}}>
                Stack
            </Content>
            <Content>
                Spring Boot, Mysql, Kafka
            </Content>
            <Content style={{fontWeight : 'bold', color : '#FCAE1E', fontSize : '20px'}}>
                Description
            </Content>
            <Content>
                쇼핑몰의 결제 서비스를 시나리오로 여러 실패(잔액 부족, 재고 부족, 결제 실패 등)를 발생시켜 Orchestration 방식을 통한 Saga Pattern을 구현
            </Content>
        </Container>
    )
}

const ProjectDisplay = () => {
    return(
        <Container>
            <ProjectContent/>
            <ProjectContent/>
            <ProjectContent/>
            <ProjectContent/>
            <ProjectContent/>
        </Container>
    )
}
export default ProjectDisplay

const Container = styled.div`
    display : flex;
    width : 100%;
    height : 100%;
    flex-direction : column;
    padding : 0.7rem;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
`

const Header = styled.div`
    display: flex;
    font-size : 26px;
    font-weight : bold;
    color : gray;
    &:hover {
     color : #FCAE1E;
    };
    cursor : pointer;
    `

const Content = styled.div`
    display : flex;
    flex-direction : column;
    margin-top : 15px;
    line-height : 1.5;
`

const DotContent = styled.div`
    font-size : 30px;
    font-weight : bold;
    color : #FCAE1E;
    margin-left : 3px;
    margin-top : -3px;
`


