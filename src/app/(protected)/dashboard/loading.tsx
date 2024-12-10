import Loader from '@/components/global/loader'
import React from 'react'

function loading() {
  return (
    <div className='h-screen flex justify-center items-center '>
        <Loader state > ...Loading </Loader> 
    </div>
  )
}

export default loading
