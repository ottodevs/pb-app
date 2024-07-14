'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { TrendingUp } from 'lucide-react'
import {
    // useReadPredictionBattleGetProjects,
    useReadPredictionBattleCurrentRoundId,
    // useWritePredictionBattleBet,
} from '@/types/contracts'
import { parseEther } from 'viem'

const ProjectDetailScreen = () => {
    const router = useRouter()
    const { id } = router.query
    const [project, setProject] = useState<any>(null)
    const { data: currentRoundId } = useReadPredictionBattleCurrentRoundId()
    // const { data: projectsData } = useReadPredictionBattleGetProjects({ args: [currentRoundId ?? BigInt(0)] })
    // const { writeContract: bet } = useWritePredictionBattleBet()

    // useEffect(() => {
    //     if (projectsData && id) {
    //         const projectData = JSON.parse(projectsData[Number(id)])
    //         setProject({
    //             ...projectData,
    //             fundingGoal: 50000, // You might want to add this to your contract
    //             currentFunding: 32500, // You might want to add this to your contract
    //             supporters: 128, // You might want to add this to your contract
    //             predictionsCount: 76, // You might want to add this to your contract
    //         })
    //     }
    // }, [projectsData, id])

    if (!project) return <div>Loading...</div>

    const fundingPercentage = (project.currentFunding / project.fundingGoal) * 100

    const handleBet = async () => {
        if (currentRoundId === undefined) {
            console.error('Current round ID is undefined')
            return
        }
        try {
            // await bet({
            //     args: [currentRoundId, BigInt(id as string), parseEther('1')], // Assuming 1 PQF as bet amount
            // })
        } catch (error) {
            console.error('Error placing bet:', error)
        }
    }

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
                                <AvatarFallback>{project.name[0]}</AvatarFallback>
                            </Avatar>
                            <span className='text-sm'>{project.name}</span>
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

                <div className='mb-6'>
                    <Button className='w-full bg-green-500 hover:bg-green-600' onClick={handleBet}>
                        <TrendingUp className='mr-2 h-4 w-4' />
                        Place Bet
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
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </main>
        </div>
    )
}

export default ProjectDetailScreen
