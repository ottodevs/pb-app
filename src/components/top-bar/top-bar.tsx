import dynamic from 'next/dynamic'
import userAvatar from '@/../public/avatar.png'

const PageTitle = dynamic(() => import('@/components/top-bar/page-title'), {
    ssr: false,
})

const UserMenu = dynamic(() => import('@/components/user-menu'), {
    // ssr: false,
})

export default async function TopBarLayout(): Promise<JSX.Element> {
    // const userAvatar = await getUserAvatarAction()

    return (
        <header className='fixed left-0 top-0 z-30 w-dvw'>
            <nav className='mx-auto flex h-24 max-w-screen-md items-center justify-between px-4 pt-5'>
                <div className='flex w-1/4 justify-start'></div>
                <div className='relative flex w-1/2 justify-center'>
                    <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap'>
                        <PageTitle topBarTitle='PredictionBattle™' />
                    </div>
                </div>
                <div className='flex w-1/4 justify-end'>
                    <UserMenu userAvatar={userAvatar.src} />
                </div>
            </nav>
        </header>
    )
}
