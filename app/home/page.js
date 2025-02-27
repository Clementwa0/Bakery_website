import React from 'react'
import Link from 'next/link'

const Home = () => {
  return (
    <section className="text-center py-16 bg-orange-100">
    <h1 className="text-4xl font-bold">Delicious Baked Goods</h1>
    <p className="text-lg mt-2">Freshly baked, just for you!</p>
    <Link href="/menu" className="mt-4 inline-block bg-orange-500 text-white py-2 px-6 rounded">
      Browse Menu
    </Link>
  </section>
  )
}

export default Home