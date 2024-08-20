'use client';

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const error = () => {
  return (
    <section className='flex flex-col container'>
        <h1 className='text-5xl text-center font-bold text-gray-800 my-16'>Ops, não encontramos este país</h1>

        <Link href="/" className="flex items-center py-2">
        <Image src="/arrow-left.svg" alt='Left Arrow' width={24} height={24} />
         Voltar</Link>
    </section>
  )
}

export default error