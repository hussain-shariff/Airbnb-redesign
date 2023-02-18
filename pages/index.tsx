import type { NextPage } from 'next'
import Head from 'next/head'
import Header from "../Components/Header"
import Hero from "../Components/Hero"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Hero/>
    </div>
  )
}

export default Home
