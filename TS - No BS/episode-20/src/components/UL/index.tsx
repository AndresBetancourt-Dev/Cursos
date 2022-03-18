import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

function UL<T>({ items, render, itemClick }: DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> & { items: T[], render: (item: T) => ReactNode, itemClick?: (item: T) => void }) {
  return (
    <ul style={{ width: 'inherit', display: 'flex', flexDirection: 'column', gap: '0.5em' }}>
      {
        items.map((item: T, index) => (
          <li style={{
            display: 'flex',
            width: 'inherit',
            justifyContent: 'space-between',
            fontWeight: 100,
          }} onClick={() => { itemClick?.(item) }} key={index}>{render(item)}</li>
        ))
      }
    </ul>
  )
}

export default UL