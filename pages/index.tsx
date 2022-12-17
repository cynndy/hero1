import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import MainPage from './mainpage'
import Listing from '../components/Listing'
import Work from '../components/Work'
import Start from '../components/Start'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>EcoVision</title>
        <link rel="icon" href="/" />
        
      </Head>
      
     <MainPage />
     <Listing />
     <Work />
     <Start />

 

    </div>
  )
}

export default Home
