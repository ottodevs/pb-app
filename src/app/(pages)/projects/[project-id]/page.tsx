import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { DollarSign, TrendingUp, MessageSquare } from 'lucide-react'

const ProjectDetailScreen = () => {
    const project = {
        name: 'EcoTech Solutions',
        description:
            'Developing sustainable energy solutions for urban environments. Our project aims to create efficient solar panels integrated into building materials, reducing the carbon footprint of cities while maintaining aesthetic appeal.',
        creator: 'Green Innovations Inc.',
        creatorAvatar: '/api/placeholder/100/100',
        fundingGoal: 50000,
        currentFunding: 32500,
        supporters: 128,
        predictionsCount: 76,
    }

    const fundingPercentage = (project.currentFunding / project.fundingGoal) * 100

    return (
        <div className='flex h-screen flex-col bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white'>
            <main className='animate-fadeIn flex-grow overflow-y-auto p-4'>
                <Card className='mb-6 bg-white bg-opacity-20 text-white'>
                    <CardHeader>
                        <CardTitle className='text-2xl font-bold'>{project.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className='mb-4 flex items-center space-x-2'>
                            <Avatar className='h-8 w-8'>
                                <AvatarImage src={project.creatorAvatar} alt={project.creator} />
                                <AvatarFallback>{project.creator[0]}</AvatarFallback>
                            </Avatar>
                            <span className='text-sm'>{project.creator}</span>
                        </div>
                        <p className='mb-4 text-sm'>{project.description}</p>
                        <div className='space-y-2'>
                            <div className='flex justify-between text-sm'>
                                <span>Funding Progress</span>
                                <span>{fundingPercentage.toFixed(2)}%</span>
                            </div>
                            <Progress value={fundingPercentage} className='w-full' />
                            <div className='flex justify-between text-sm'>
                                <span>{project.currentFunding} PQF raised</span>
                                <span>Goal: {project.fundingGoal} PQF</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <div className='mb-6 grid grid-cols-2 gap-4'>
                    <Button className='w-full bg-green-500 hover:bg-green-600'>
                        <DollarSign className='mr-2 h-4 w-4' />
                        Contribute
                    </Button>
                    <Button
                        variant='outline'
                        className='w-full border-white text-white hover:bg-white hover:text-blue-600'>
                        <TrendingUp className='mr-2 h-4 w-4' />
                        Make Prediction
                    </Button>
                </div>

                <Tabs defaultValue='updates' className='space-y-4'>
                    <TabsList className='grid w-full grid-cols-2'>
                        <TabsTrigger value='updates'>Updates</TabsTrigger>
                        <TabsTrigger value='comments'>Comments</TabsTrigger>
                    </TabsList>
                    <TabsContent value='updates' className='space-y-4'>
                        <Card className='bg-white bg-opacity-10'>
                            <CardHeader>
                                <CardTitle className='text-lg'>Latest Update</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className='text-sm'>
                                    We're excited to announce that we've successfully completed the prototype phase! Our
                                    team is now moving forward with larger scale testing.
                                </p>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value='comments' className='space-y-4'>
                        <Card className='bg-white bg-opacity-10'>
                            <CardHeader>
                                <CardTitle className='text-lg'>Recent Comments</CardTitle>
                            </CardHeader>
                            <CardContent className='space-y-2'>
                                <div className='flex items-start space-x-2'>
                                    <Avatar className='h-8 w-8'>
                                        <AvatarFallback>U</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className='text-sm font-semibold'>User123</p>
                                        <p className='text-xs'>
                                            This project looks promising! Can't wait to see the results.
                                        </p>
                                    </div>
                                </div>
                                {/* Add more comments */}
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </main>
        </div>
    )
}

export default ProjectDetailScreen
