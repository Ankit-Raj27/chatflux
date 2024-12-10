import React from 'react'
import PaymentButton from '../payment-button'

type Props = {}

const Upgrade
 = (props: Props) => {
  return (
    <div className='bg-[#252525]  p-3 rounded-2xl flex flex-col gap-y-3 items-center '>
        <span className='text-sm '>
            Upgrade to {""}
            <span className='bg-gradient-to-r from-[#CC3BD4] via-[#9634E6 to-[#D064AC] bg-clip-text font-bold text-transparent'> SmartAI</span>
        </span>
        <p className='text-[#9B9CA0] font-light text-sm'> Unlock all features <br />including AI and more.</p>
        <PaymentButton />
    </div>
  )
}

export default Upgrade
