import React, { Fragment } from 'react'

import { IItems } from '@/interfaces'

const ListDetail = ({ item }: { item: IItems }) => (
  <Fragment>
    <h1>{item.title}</h1>
    <div
      dangerouslySetInnerHTML={{
        __html: `${item.content}`,
      }}
    />
  </Fragment>
)

export default ListDetail
