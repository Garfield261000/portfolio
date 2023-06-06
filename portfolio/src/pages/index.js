import * as React from 'react'
import Layout from '../components/Layout'
import '../styles/global.css'

const Home = () => {
  return (
    <Layout>
      <section>
        <p>Hi</p>
        <p>Im Rishabh</p>
        <p>A UI Developer</p>
      </section>
    </Layout>
  )
}

export const Head = () => <title>Home</title>

export default Home