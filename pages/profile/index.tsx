import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import {introduceOnMe} from "../../common/profile";
import HeaderTab from "../../component/header/HeaderTab";
import {useEffect, useState} from "react";
import MobileFlag from "../../component/layout/MobileFlag";
import ProfileDisplay from "../../component/dispaly/ProfileDisplay";

const Profile : NextPage = () => {

  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  const isMobile = MobileFlag();

  return (
    <div className={styles.container}>
      <Head>
        <title>Profile of Eom-ji-hwan</title>
        <meta name="description" content="head for resume"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.profileMain}>
          <ProfileDisplay/>
      </main>
      <footer className={styles.footer}>
        <a>
          Powered by{' '} Americano
          <span className={styles.logo}>
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Profile
