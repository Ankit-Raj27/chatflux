import { Button } from '@/components/ui/button'
import React from 'react'

type Props = {}

const PaymentButton = (props: Props) => {
  return (
    // Get their subs detail
    <div>
        <Button className='bg-gradient-to-br text-white rounded-full from-[#9685DB] to-[#CC3BD4]'>Upgrade!</Button>
    </div>
  )
}

export default PaymentButton