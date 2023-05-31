import React from 'react'
import Link from 'next/link'

export default function NFT() {
  return (
    <div className='text-center pt-2'>
    <Link href="../nft/mint"><h3 className='text-white bg-gradient-to-br from-black to-amber-900/80 px-4 py-3 cursor-pointer'>♥ Mint your free NFT to gain access to Exclusive Content ♥</h3></Link>
    </div>
  )
}
