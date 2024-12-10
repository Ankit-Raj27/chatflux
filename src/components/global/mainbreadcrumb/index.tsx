import { PAGE_ICON } from '@/constants/pages';
import { useUser } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';
import React from 'react';

type Props = {
    slug?: string;
};

const MainBreadCrumb = ({ slug }: Props) => {
    const { user } = useUser();
    const pathname = usePathname();
    const page = pathname.split('/').pop() || 'dashboard';

    return (
        <div className="flex flex-col items-start">
            {page === 'dashboard' && (
                <div className="flex justify-center w-full">
                    <div className="radial--gradient w-4/12 pt-5 lg:py-10 flex flex-col items-center">
                        <p className="text-secondary text-lg font-bold">Welcome Back!</p>
                        <h2 className="capitalize text-4xl font-medium">{user?.firstName}!</h2>
                    </div>
                </div>
            )}
            <span className="radial--gradient inline-flex py-5 lg:py-10 pr-16 gap-x-2 items-center">
                {PAGE_ICON[page.toUpperCase()]}
                <h2 className="font-semibold text-3xl capitalize">
                    {page === 'dashboard' ? 'Home' : page}
                </h2>
            </span>
        </div>
    );
};

export default MainBreadCrumb;
