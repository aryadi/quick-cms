import React from 'react'
import Container from '../../components/container/Container'
import Image from '../../components/image/Image'
import Title from '../../components/title/Title'

function Home() {
  return (
    <>
      <h1>Home</h1>
      <Container>
        <Image />
        <Title style={{marginLeft: 10}}>Lorem Ipsum</Title>
      </Container>
      <Container>
        <Image />
        <Title style={{marginLeft: 10}}>Lorem Ipsum</Title>
      </Container>
    </>
  )
}

export default Home
