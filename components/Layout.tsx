import React from 'react'
import Container from '@material-ui/core/Container'
import Header from './Header'
import Footer from './Footer'

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <Container fixed>{children}</Container>
      <Footer />
    </>
  )
}
