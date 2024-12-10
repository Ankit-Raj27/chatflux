
import { Sheet as ShadcnSheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import React from 'react'

type Props = {
    trigger: React.ReactNode
    children: React.ReactNode
    className?: string
}

const Sheet = ({ children, trigger, className }: Props) => {
    return (
        <ShadcnSheet >
            <SheetTrigger className={className}>
                {trigger}
            </SheetTrigger>
            <SheetTitle>
                <SheetContent side={'left'} className='p-0'>
                    {children}
                </SheetContent>
            </SheetTitle>
        </ShadcnSheet>
    )
}

export default Sheet