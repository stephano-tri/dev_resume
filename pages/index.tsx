import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {introduceOnMe} from "../common/profile";
import HeaderTab from "../component/header/HeaderTab";
import React, {useState} from "react";
import MobileFlag from "../component/layout/MobileFlag";
import ProfileDisplay from "../component/dispaly/ProfileDisplay";
import PostDisplay from "../component/dispaly/PostDisplay";
import Fetch from "../api/post/Fetch";
import FetchName from "../api/post/FetchName";

export async function getStaticProps(){
  const res = await Fetch()
  let pageInfo = res?.data.results.map((page : any , idx : number) => {
    return {
      id : page.id,
      url : page.url
    }
  })

  let pages = []
  for await (let param of pageInfo){
    const res = await FetchName(param.id)
    pages.push({
    ...param,
    name : res?.data.results[0].title.plain_text
    })
 }

  return {props : {data : pages}}
}

const Home: NextPage = (props) => {

  //@ts-ignore
  const [pages, setPages] = useState<any>(props.data);
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  const isMobile = MobileFlag();

  const showWhichClicked = React.useCallback((idx: number) => {
    switch (idx) {
      case 0:
        return <ProfileDisplay/>
      case 1:
        return <PostDisplay posts={pages}/>
    }
  },[])

  return (
    <div className={styles.container} style={{width: isMobile ? '500px' : '100%' , height : '100%'}}>
      <div style={{width : isMobile ? '550px' : '100%' , height : '10px' , background : "linear-gradient(to bottom right, #ff9933 0%, #ffff66 100%)"}}>
      </div>
      <Head>
        <title>Eom-jihwan Developer</title>
        <meta name="description" content="head for resume"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div style={{width : !isMobile ? "700px" : '500px' , padding : '0 2rem' ,display : "flex" , flexDirection : "column"}}>
          <h1 className={styles.title}>
            어제보다 나은 나를
          </h1>
          <h1 className={styles.title}>
            추구하는,
          </h1>
        </div>
        <div style={{width : !isMobile ? "700px" : '500px', padding : '0 2rem'}}>
          <h1 className={styles.subtitle} style={{
            marginBlockEnd : '0px' ,
            fontSize : isMobile ? '3rem' : '4rem'
          }}>
            <a href="https://github.com/stephano-tri">Jihwan Eom</a>{"  "} 입니다
            <a>.</a>
          </h1>
        </div>
        <div className={styles.descriptionArea} style={{width : !isMobile ? "680px" : '500px' , padding : '0 1.5rem'}}>
          <p className={styles.description} key={"__des"}>
            {introduceOnMe.description}
          </p>
        </div>

        <div style={{width : !isMobile ? "750px" : '500px', padding : '0 2rem', display : 'flex' , flexDirection : 'column'}}>
          <HeaderTab index={selectedIndex} onClickHandler={setSelectedIndex} />
            <div style={{width : !isMobile ? "700px" : '500px' , alignItems : 'center' , justifyContent : 'center'}}>
              {showWhichClicked(selectedIndex)}
            </div>
        </div>

        </main>
    </div>
  )
}

export default Home
