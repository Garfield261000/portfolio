import * as React from 'react'
import Layout from './layout'

const ContactPage = () => {
  return (
    <Layout>
     <div className='w-full min-h-screen bg-[#000000] text-white'>
        <p>This is Contact</p>
      </div>
    </Layout>
  )
}

export const Head = () => <title>Contact</title>

export default ContactPage