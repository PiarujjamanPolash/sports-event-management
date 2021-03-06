import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from './components/navbar';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sports Event Management System</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <script src="jquery-3.5.1.js" />
        <script type="text/javascript" src="script.js" />
      </Head>
      <Navbar />
    
    </div>
  )
}
