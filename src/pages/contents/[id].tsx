import { GetStaticProps, GetStaticPaths } from 'next'

import { IItems } from '@/interfaces'
import { client } from '@/libraries/client'

import Layout from '@/components/Layout'
import ListDetail from '@/components/ListDetail'

const StaticPropsDetail = ({ data }: { data: IItems }) => {
  // if (errors) {
  //   return (
  //     <Layout title="Error | Next.js + TypeScript Example">
  //       <p>
  //         <span style={{ color: 'red' }}>Error:</span> {errors}
  //       </p>
  //     </Layout>
  //   )
  // }
  return (
    <Layout title="">
      <ListDetail item={data} />
    </Layout>
  )
}

export default StaticPropsDetail

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get({
    endpoint: `hoge`
  })
  const paths = data.contents.map((datum: IItems) => `/contents/${datum.id}`)

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const id: string | string[] = context.params ? context.params.id : 'undefined'
    const data = await client.get({
      endpoint: 'hoge',
      contentId: id.toString()
    })
    return {
      props: {
        data,
      },
    }
  } catch (err: any) {
    return { props: { errors: err.message } }
  }
}
