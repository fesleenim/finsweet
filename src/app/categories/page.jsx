import Link from 'next/link'
import React from 'react'

const items = [
  {
    name: "lola",
    id: "1"
  },
  {
    name: "pion",
    id: "2"
  },
  {
    name: "atirgul",
    id: "3"
  }
]

function CategoriesPage() {
  return (
    <div>CategoriesPage
      <div className='card flex gap-4'>
        {
          items.map((item)=>
            <div key={item?.id}>
              <h1 >{item.name}</h1>
              <p>{item.id}</p>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default CategoriesPage