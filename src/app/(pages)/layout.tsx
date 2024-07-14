import { Button } from '@/components/ui/button'
import { AwardIcon, HomeIcon, LineChartIcon, RocketIcon, UserIcon } from 'lucide-react'
import Link from 'next/link'

export default function PagesLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex h-screen flex-col overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white'>
            <main className='animate-fadeIn flex-grow space-y-6 overflow-y-auto p-4'>{children}</main>
            <nav className='bg-white bg-opacity-10 backdrop-blur-lg'>
                <ul className='flex justify-around p-2'>
                    {[
                        { icon: HomeIcon, label: 'Home', link: '/dashboard' },
                        { icon: RocketIcon, label: 'Projects', link: '/projects' },
                        { icon: LineChartIcon, label: 'Predictions', link: '/predictions' },
                        { icon: AwardIcon, label: 'Rewards', link: '/rewards' },
                        { icon: UserIcon, label: 'Profile', link: '/profile' },
                    ].map(({ icon: Icon, label, link }) => (
                        <li key={label}>
                            <Link href={link}>
                                <Button
                                    variant='link'
                                    className='flex size-full flex-col items-center text-white'
                                    size='icon'>
                                    <Icon className='size-6' />
                                    <span className='mt-1 text-xs'>{label}</span>
                                </Button>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}
