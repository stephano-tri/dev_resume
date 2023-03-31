import styled from "styled-components";
import React from "react";

interface Project {
    header: string
    subHeader: string
    stack: string
    description: string
}

const projectList: Project[] = [
    {
        header : "Saga Pattern",
        subHeader : "분산 트랜잭션 환경에서의 atomicity를 보장하기 위한 방법",
        stack : "Spring Boot, Mysql, Kafka",
        description : "쇼핑몰의 결제 서비스를 시나리오로 여러 실패(잔액 부족, 재고 부족, 결제 실패 등)를 발생시켜 Orchestration 방식을 통한 Saga Pattern을 구현"
    },
    {
        header : "2phase commit",
        subHeader : "분산 트랜잭션 환경에서의 atomicity를 보장하기 위한 고전적인 방법(여러 노드를 걸친다)",
        stack : "Spring Boot, Mysql. RabbitMQ",
        description : "간단한 쇼핑몰 주문 시나리오를 2phase commit을 통해 구현"
    }
]

const ProjectContent: React.FunctionComponent<Project> = ({header, subHeader, stack, description}) => {
    return (
        <Container>
            <Header>
                {header}
                <DotContent>
                    .
                </DotContent>
            </Header>
            <Content>
                {subHeader}
            </Content>
            <Content style={{fontWeight : 'bold', color : '#FCAE1E', fontSize : '20px'}}>
                Stack
            </Content>
            <Content>
                {stack}
            </Content>
            <Content style={{fontWeight : 'bold', color : '#FCAE1E', fontSize : '20px'}}>
                Description
            </Content>
            <Content>
                {description}
            </Content>
        </Container>
    )
}

const ProjectDisplay = () => {
    return(
        <Container>
            {projectList.map((project, index) => {
                return (
                    <ProjectContent
                        key={index}
                        header={project.header}
                        subHeader={project.subHeader}
                        stack={project.stack}
                        description={project.description}
                    />
                )
              })
            }
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


