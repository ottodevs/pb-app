import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Switch } from '@/components/ui/switch'
import { Bell, Shield, CreditCard, Settings, History } from 'lucide-react'

const UserProfileScreen = () => {
    const user = {
        name: 'Alice Johnson',
        avatar: '/api/placeholder/100/100',
        contributions: 15,
        predictions: 32,
        successRate: '78%',
    }

    return (
        <div className='flex h-screen flex-col bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white'>
            <main className='animate-fadeIn flex-grow overflow-y-auto p-4'>
                <Card className='mb-6 bg-white bg-opacity-20 text-white'>
                    <CardContent className='flex items-center space-x-4 pt-6'>
                        <Avatar className='h-20 w-20'>
                            <AvatarImage src={user.avatar} alt={user.name} />
                            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                            <h1 className='text-2xl font-bold'>{user.name}</h1>
                            <p className='text-sm text-gray-300'>
                                Contributions: {user.contributions} | Predictions: {user.predictions}
                            </p>
                            <p className='text-sm text-gray-300'>Success Rate: {user.successRate}</p>
                        </div>
                    </CardContent>
                </Card>

                <Tabs defaultValue='activity' className='space-y-4'>
                    <TabsList className='grid w-full grid-cols-2'>
                        <TabsTrigger value='activity'>Activity</TabsTrigger>
                        <TabsTrigger value='settings'>Settings</TabsTrigger>
                    </TabsList>
                    <TabsContent value='activity' className='space-y-4'>
                        <Card className='bg-white bg-opacity-10'>
                            <CardHeader>
                                <CardTitle className='text-lg'>Recent Activity</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className='space-y-2'>
                                    <li className='flex items-center space-x-2'>
                                        <History className='h-4 w-4' />
                                        <span>Contributed to EcoTech Solutions</span>
                                    </li>
                                    <li className='flex items-center space-x-2'>
                                        <History className='h-4 w-4' />
                                        <span>Made a prediction on HealthAI</span>
                                    </li>
                                    {/* Add more activity items */}
                                </ul>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value='settings' className='space-y-4'>
                        <Card className='bg-white bg-opacity-10'>
                            <CardHeader>
                                <CardTitle className='text-lg'>Account Settings</CardTitle>
                            </CardHeader>
                            <CardContent className='space-y-4'>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center space-x-2'>
                                        <Bell className='h-4 w-4' />
                                        <span>Notifications</span>
                                    </div>
                                    <Switch />
                                </div>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center space-x-2'>
                                        <Shield className='h-4 w-4' />
                                        <span>Two-Factor Authentication</span>
                                    </div>
                                    <Switch />
                                </div>
                                <Button
                                    variant='outline'
                                    className='w-full border-white text-white hover:bg-white hover:text-blue-600'>
                                    <CreditCard className='mr-2 h-4 w-4' />
                                    Manage Withdrawal Methods
                                </Button>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </main>
        </div>
    )
}

export default UserProfileScreen
