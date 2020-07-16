import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../../components/container/Container'
import Image from '../../components/image/Image'
import Title from '../../components/title/Title'

function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link to="/variant/list">
        <Container>
          <Image />
          <Title style={{ marginLeft: 10 }}>Lorem Ipsum</Title>
        </Container>
      </Link>
      <Link to="/variant/list">
        <Container>
          <Image />
          <Title style={{ marginLeft: 10 }}>Lorem Ipsum</Title>
        </Container>
      </Link>
    </>
  )
}

export default Home
