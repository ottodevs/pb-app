import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Gift, CreditCard, Repeat } from 'lucide-react'

interface RewardCardProps {
    reward: {
        title: string
        amount: number
        type: string
        date: string
    }
}

const RewardCard = ({ reward }: RewardCardProps) => {
    const { title, amount, type, date } = reward

    return (
        <Card className='mb-4 overflow-hidden bg-white bg-opacity-10 text-white transition-all duration-300 hover:bg-opacity-20'>
            <CardHeader className='pb-2'>
                <div className='flex items-start justify-between'>
                    <CardTitle className='text-lg font-semibold'>{title}</CardTitle>
                    <Badge variant='secondary' className='text-xs'>
                        {type}
                    </Badge>
                </div>
            </CardHeader>
            <CardContent>
                <div className='mb-2 flex items-center justify-between'>
                    <span className='text-2xl font-bold'>{amount} PQF</span>
                    <span className='text-xs text-gray-300'>{date}</span>
                </div>
                <div className='flex space-x-2'>
                    <Button
                        variant='outline'
                        className='flex-1 border-white text-white transition-colors duration-300 hover:bg-white hover:text-blue-600'>
                        <CreditCard className='mr-2 h-4 w-4' />
                        Withdraw
                    </Button>
                    <Button
                        variant='outline'
                        className='flex-1 border-white text-white transition-colors duration-300 hover:bg-white hover:text-blue-600'>
                        <Repeat className='mr-2 h-4 w-4' />
                        Reinvest
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}

const RewardsScreen = () => {
    const rewards = [
        {
            id: 1,
            title: 'Successful Prediction: EcoTech',
            amount: 500,
            type: 'Prediction',
            date: '2024-07-15',
        },
        {
            id: 2,
            title: 'Contribution Bonus: HealthAI',
            amount: 250,
            type: 'Contribution',
            date: '2024-07-10',
        },
        {
            id: 3,
            title: 'Weekly Activity Reward',
            amount: 100,
            type: 'Activity',
            date: '2024-07-07',
        },
        // Add more rewards as needed
    ]

    const totalRewards = rewards.reduce((sum, reward) => sum + reward.amount, 0)

    return (
        <div className='flex h-screen flex-col bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white'>
            <main className='animate-fadeIn flex-grow overflow-y-auto p-4'>
                <h1 className='mb-4 text-2xl font-bold'>Rewards</h1>

                <Card className='mb-6 bg-white bg-opacity-20 text-white'>
                    <CardContent className='pt-6'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <p className='text-sm font-medium'>Total Rewards</p>
                                <p className='text-3xl font-bold'>{totalRewards} PQF</p>
                            </div>
                            <Gift className='h-12 w-12 text-yellow-400' />
                        </div>
                    </CardContent>
                </Card>

                <h2 className='mb-3 text-xl font-semibold'>Recent Rewards</h2>
                <div className='space-y-4'>
                    {rewards.map(reward => (
                        <RewardCard key={reward.id} reward={reward} />
                    ))}
                </div>
            </main>
        </div>
    )
}

export default RewardsScreen
