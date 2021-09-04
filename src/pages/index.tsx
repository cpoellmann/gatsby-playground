import React from "react"
import Layout from '../components/Layout'
import Card from '../components/Card'
import Paragraph from '../components/Paragraph'
import { SimpleGrid } from "@chakra-ui/react"

export default function Home() {
  return (
    <Layout>
      <Paragraph />
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }}>
        <Card />
        <Card />
        <Card />
      </SimpleGrid>
    </Layout>
  )
}
