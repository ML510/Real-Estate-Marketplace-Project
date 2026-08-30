import { getCurrentUser } from '@/server-actions/getCurrentUser';
import { redirect } from 'next/navigation';
import React from 'react'

export default async function layout({ children }: Readonly<{ children: React.ReactNode }>) {
    const user = await getCurrentUser();

    if(!user){
        redirect("/")
    }
    return (
        <>
            {children}
        </>
    )
}