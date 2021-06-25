import React from 'react'
import Footer from './Footer'
import Header from './Header'

const BaseLayout = (props) => {
  return (
    <>
      <Header /> <br /> <br />
      {props.children} <br /> <br />
      <Footer />       
    </>
  )
}

export default BaseLayout
