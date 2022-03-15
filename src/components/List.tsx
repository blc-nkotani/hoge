import * as React from 'react'
import Link from 'next/link'

import { IItems } from '@/interfaces'

type Props = {
  items: IItems[]
}

const List = ({ items }: Props) => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>
        <Link href={`/contents/${item.id}`}>
          <a>{item.title}</a>
        </Link>
      </li>
    ))}
  </ul>
)

export default List
