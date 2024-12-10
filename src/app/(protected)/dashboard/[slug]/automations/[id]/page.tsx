import Trigger from '@/components/global/automations/trigger'
import AutomationBreadCrumbs from '@/components/global/bread-crumbs/mainbreadcrumb/automationbreadcrumbs'
import { Warning } from '@/icons'
import React from 'react'

type Props = {
    params: { id: string }
}
// WIP : Set some meta data
const page = ({ params }: Props) => {
    // WIP : Connect real automations list
    return (
        <div className=" flex flex-col items-center gap-y-20">
            <AutomationBreadCrumbs id={params.id} />
            <div className=' w-full lg:w-10/12 xl:w-6/12 p-5 rounded-xl flex flex-col bg-[#1D1D1D] gap-y-3'>
                <div className="flex gap-x-2">
                    <Warning />
                    When...
                </div>
                <Trigger id={params.id} />
                </div>
        </div>
    )
}

export default page