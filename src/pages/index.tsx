import { GetStaticProps } from 'next'

import { IItems } from '@/interfaces'
import { client } from '@/libraries/client'

import Layout from '@/components/Layout'
import List from '@/components/List'

const IndexPage = ({ hoge }: { hoge: IItems[] }) => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <List items={hoge} />
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get({ endpoint: 'hoge' })
  return {
    props: {
      hoge: data.contents,
    },
  }
}

export default IndexPage
