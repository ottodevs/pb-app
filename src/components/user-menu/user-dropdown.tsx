/**
 * @file src/components/user-dropdown/user-dropdown.tsx
 * @description This file contains the `UserDropdown` component that renders the entire user dropdown menu,
 * including the avatar trigger and the list of dropdown items.
 */

'use client'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuPortal,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { EllipsisIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import UserDropdownList from './user-dropdown.list'

/**
 * UserDropdown component that renders the full dropdown menu for the user.
 *
 * @component
 * @returns {JSX.Element} The rendered user dropdown menu.
 */
const UserDropdown: React.FC = (): JSX.Element => {
    const [open, setOpen] = useState(false)
    const [container, setContainer] = useState<HTMLElement | null>(null)

    useEffect(() => {
        // Assumes that the main container has the global reference mainRef
        setContainer(document.querySelector('main'))
    }, [])

    return (
        <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger>
                <EllipsisIcon className='cursor-pointer' size={24} />
            </DropdownMenuTrigger>
            {open && <div className='dropdown-backdrop' />}
            <DropdownMenuPortal container={container}>
                <DropdownMenuContent align='end'>
                    <UserDropdownList setOpen={setOpen} />
                </DropdownMenuContent>
            </DropdownMenuPortal>
        </DropdownMenu>
    )
}

export default UserDropdown
