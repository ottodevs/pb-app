'use client'

import { Route } from 'next'
import Link from 'next/link'

export default function PageTitle({ topBarTitle }: { topBarTitle: string }) {
    return (
        <Link href={'/' as Route}>
            <h1 className='text-[0.875rem] font-semibold'>{topBarTitle}</h1>
        </Link>
    )
}
