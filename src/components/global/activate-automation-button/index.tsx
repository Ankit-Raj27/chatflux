import { Button } from '@/components/ui/button'
import React from 'react'
import Loader from '../loader'
import { ActiveAutomation } from '@/icons/active-automation'

type Props = {}

const ActivateAutomationButton = (props: Props) => {
    // WIP : Set up optimistic UI
    // Fetch automation data
    return (
        <Button className='lg:px-10 bg-gradient-to-br hover:opacity-80 text-white
        rounded-full from-[#3352CC] font-medium to-[#1C2D70] ml-4'>
            <Loader state={false} >
                <ActiveAutomation />
                <p className='lg:inline hidden'>Activate</p>
            </Loader> 
        </Button>
    )
}

export default ActivateAutomationButton 