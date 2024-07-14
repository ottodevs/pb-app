'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { DateTimePicker } from '@/components/ui/date-time-picker'
import {
    predictionBattleAddress,
    useReadNounsAllowance,
    useReadPredictionBattleCurrentRoundId,
    useWritePredictionBattleAddProject,
    useWritePredictionBattleCreateRound,
    useWritePredictionBattleResolveMarket,
} from '@/types/contracts'
import { Address, parseEther } from 'viem'
import { useAccount } from 'wagmi'
import { wagmi } from '@/components/providers/configs'

const HostPage: React.FC = () => {
    const { address } = useAccount()
    const [roundData, setRoundData] = useState({
        startTime: undefined as Date | undefined,
        endTime: undefined as Date | undefined,
        resolutionTime: undefined as Date | undefined,
        lowBetCap: '',
        highBetCap: '',
        prizeDistribution: '',
    })
    const [projectData, setProjectData] = useState({
        name: '',
        url: '',
    })

    const { writeContract: createRound } = useWritePredictionBattleCreateRound()
    const { writeContract: addProject } = useWritePredictionBattleAddProject()
    const { writeContract: resolveMarket } = useWritePredictionBattleResolveMarket()

    const { data: nounsAllowance } = useReadNounsAllowance({
        args: [address as Address, predictionBattleAddress[wagmi.config.state.chainId as ChainId]],
    })

    const { data: currentRoundId } = useReadPredictionBattleCurrentRoundId()

    const handleCreateRound = async () => {
        try {
            createRound({
                args: [
                    BigInt(roundData.startTime?.getTime() ?? 0 / 1000),
                    BigInt(roundData.endTime?.getTime() ?? 0 / 1000),
                    BigInt(roundData.resolutionTime?.getTime() ?? 0 / 1000),
                    parseEther(roundData.lowBetCap),
                    parseEther(roundData.highBetCap),
                    roundData.prizeDistribution.split(',').map(n => BigInt(n.trim())),
                ],
            })
        } catch (error) {
            console.error('Error creating round:', error)
        }
    }

    const handleAddProject = async () => {
        if (currentRoundId === undefined) {
            console.error('Current round ID is undefined')
            return
        }
        try {
            addProject({
                args: [currentRoundId, JSON.stringify(projectData)],
            })
        } catch (error) {
            console.error('Error adding project:', error)
        }
    }

    const handleResolveMarket = async () => {
        if (currentRoundId === undefined) {
            console.error('Current round ID is undefined')
            return
        }
        try {
            resolveMarket({
                args: [currentRoundId],
            })
        } catch (error) {
            console.error('Error resolving market:', error)
        }
    }

    return (
        <div className='container mx-auto p-4'>
            <h1 className='mb-6 text-3xl font-bold'>Host Dashboard</h1>

            <Tabs defaultValue='create-round'>
                <TabsList className='grid w-full grid-cols-3'>
                    <TabsTrigger value='create-round'>Create Round</TabsTrigger>
                    <TabsTrigger value='add-project'>Add Project</TabsTrigger>
                    <TabsTrigger value='resolve-market'>Resolve Market</TabsTrigger>
                </TabsList>

                <TabsContent value='create-round'>
                    <Card>
                        <CardHeader>
                            <CardTitle>Create New Round</CardTitle>
                            <CardDescription>Set up a new prediction round</CardDescription>
                        </CardHeader>
                        <CardContent className='space-y-2'>
                            <DateTimePicker
                                value={roundData.startTime}
                                onChange={date => setRoundData({ ...roundData, startTime: date })}
                                placeholder='Start Time'
                            />
                            <DateTimePicker
                                value={roundData.endTime}
                                onChange={date => setRoundData({ ...roundData, endTime: date })}
                                placeholder='End Time'
                            />
                            <DateTimePicker
                                value={roundData.resolutionTime}
                                onChange={date => setRoundData({ ...roundData, resolutionTime: date })}
                                placeholder='Resolution Time'
                            />
                            <Input
                                placeholder='Low Bet Cap'
                                value={roundData.lowBetCap}
                                onChange={e => setRoundData({ ...roundData, lowBetCap: e.target.value })}
                                type='number'
                            />
                            <Input
                                placeholder='High Bet Cap'
                                value={roundData.highBetCap}
                                onChange={e => setRoundData({ ...roundData, highBetCap: e.target.value })}
                                type='number'
                            />
                            <Input
                                placeholder='Prize Distribution (comma-separated)'
                                value={roundData.prizeDistribution}
                                onChange={e => setRoundData({ ...roundData, prizeDistribution: e.target.value })}
                            />
                        </CardContent>
                        <CardFooter>
                            <Button onClick={handleCreateRound}>Create Round</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>

                <TabsContent value='add-project'>
                    <Card>
                        <CardHeader>
                            <CardTitle>Add Project</CardTitle>
                            <CardDescription>Add a new project to the current round</CardDescription>
                        </CardHeader>
                        <CardContent className='space-y-2'>
                            <Input
                                placeholder='Project Name'
                                value={projectData.name}
                                onChange={e => setProjectData({ ...projectData, name: e.target.value })}
                            />
                            <Input
                                placeholder='Project URL'
                                value={projectData.url}
                                onChange={e => setProjectData({ ...projectData, url: e.target.value })}
                            />
                        </CardContent>
                        <CardFooter>
                            <Button onClick={handleAddProject}>Add Project</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>

                <TabsContent value='resolve-market'>
                    <Card>
                        <CardHeader>
                            <CardTitle>Resolve Market</CardTitle>
                            <CardDescription>Finalize the current round and distribute rewards</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>
                                Current Round ID:{' '}
                                {currentRoundId !== undefined ? currentRoundId.toString() : 'Loading...'}
                            </p>
                            <p className='text-yellow-500'>
                                Warning: This action is irreversible. Make sure all bets have been placed and the round
                                has ended before resolving the market.
                            </p>
                        </CardContent>
                        <CardFooter>
                            <Button onClick={handleResolveMarket} disabled={currentRoundId === undefined}>
                                Resolve Market
                            </Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default HostPage
