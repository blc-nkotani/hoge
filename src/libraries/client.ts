import { createClient } from 'microcms-js-sdk'

type Props = {
  serviceDomain: string
  apiKey: string
}

export const client = createClient(<Props>{
  serviceDomain: process.env.SERVICE_DOMAIN,
  apiKey: process.env.API_KEY,
})
