"use client"
import { PAGE_BREAD_CRUMBS } from '@/constants/pages'
import { usePaths } from '@/hooks/user-nav'
import { Menu } from 'lucide-react'
import React from 'react'
import Sheet from "../sheet"
import { Separator } from '@/components/ui/separator'
import { HelpDuoToneWhite } from '@/icons'
import ClerkAuthState from '../clerk-auth-state'
import { SubscriptionPlan } from '../subscription-plan'
import Items from '../sidebar/items'
import Upgrade from '../sidebar/upgrade'
import CreateAutomation from '../create-automation'
import Search from './search'
import Notification from './notification'
import MainBreadCrumb from '../mainbreadcrumb'


type Props = {

    slug: string
}

const Infobar = ({ slug }: Props) => {
    const { page } = usePaths()
    const currentPage = PAGE_BREAD_CRUMBS.includes(page) || page == slug
    return (currentPage && <div className='flex flex-col'>
        <div className='flex gap-x-3 lg:gap-x-5 justify-end'>
            <span className='lg:hidden flex items-center flex-1 gap-x-2'>
                <Sheet trigger={<Menu />} className="lg:hidden" >
                    <div className='flex flex-col gap-y-5 w-full h-full p-3
             bg-[#0e0e0e] opacity-90 bg-clip-padding backdrop-filter
              backdrop--blur__safari backdrop-blur-3xl'>

                        <div className='flex flex-col py-3'>
                            <Items page={page} slug={slug} />
                        </div>
                        <div className='px-16'>
                            <Separator orientation='horizontal' className='bg-[#333336] border-1' />
                        </div>
                        <div className='px-3 flex flex-col gap-y-5'>
                            <div className='flex gap-x-2 '>
                                <ClerkAuthState />
                                <p className='text-[#9B9CA0]'> Profile </p>
                            </div>
                            <div className='flex gap-x-3'>
                                <HelpDuoToneWhite />
                                <p>Help</p>
                            </div>
                        </div>
                        <SubscriptionPlan type='FREE'>
                            <div className='flex flex-1 flex-col justify-end'>
                                <Upgrade />
                            </div>
                        </SubscriptionPlan>
                    </div>
                </Sheet>
            </span>
            <Search />
            <CreateAutomation />
            <Notification></Notification>
        </div>
        <MainBreadCrumb
            slug={slug}
        />
    </div>)
}

export default Infobar