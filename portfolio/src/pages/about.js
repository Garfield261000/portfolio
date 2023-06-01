import * as React from 'react'
import Layout from './layout'

const AboutPage = () => {
  return (
    <Layout>
      <div className='w-full min-h-screen bg-[#000000] text-white'>
        <p>This is About</p>
      </div>
    </Layout>
  )
}

export const Head = () => <title>About</title>

export default AboutPage