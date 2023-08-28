import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-200'>
      <div className='p-[3rem]'>
        <p className='font-bold text-2xl'>
          Collections!
        </p>
        <div className='grid grid-cols-4 mt-2 footer-links'>
          <div className='flex flex-col'>
            <Link href="">Amiri</Link>
            <Link href="">Bottega</Link>
            <Link href="">Versace</Link>
            <Link href="">NorthFace Gucci</Link>
            <Link href="">Gucci</Link>
          </div>
          <div className='flex flex-col'>
            <Link href="">Prada</Link>
            <Link href="">Louis Vuition</Link>
            <Link href="">Palm Angels</Link>
            <Link href="">Balenciaga</Link>
            <Link href="">Naked Wolve</Link>
          </div>
          <div className='flex flex-col'>
            <Link href="">VLone</Link>
            <Link href="">Trapstar</Link>
            <Link href="">Chrome Hearts</Link>
            <Link href="">Givenchy</Link>
            <Link href="">Burbery</Link>
          </div>
          <div className='flex flex-col'>
            <Link href="">Celine</Link>
            <Link href="">Channel</Link>
            <Link href="">Dior</Link>
            <Link href="">Fendi</Link>
            <Link href="">Lacoste</Link>
          </div>
        </div>
      </div>
      <div className='flex justify-between py-8 px-[3rem] border-t border-slate-300'>
        <p>Copyright DesignerStore.All Rights Reserved</p>
        <p>Designed by <span className='underline'>Amos Mwongela</span></p>
      </div>
    </div>
  )
}

export default Footer