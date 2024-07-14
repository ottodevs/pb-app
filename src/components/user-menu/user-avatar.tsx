import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Route } from 'next'
import Link from 'next/link'

interface UserAvatarProps {
    userAvatar: string | null
}

export default function UserAvatar({ userAvatar }: UserAvatarProps) {
    return (
        <Avatar className='size-10 cursor-pointer' aria-label='Go to Profile' asChild>
            <Link href={'/profile' as Route}>
                {userAvatar && <AvatarImage alt='User Avatar' src={userAvatar} />}
                <AvatarFallback className='bg-[#d9d9d9]' />
            </Link>
        </Avatar>
    )
}
