'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { AlertCircle, TrendingUp, TrendingDown } from 'lucide-react'
import { Line, LineChart } from 'recharts'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'

interface PredictionCardProps {
    project: {
        name: string
        currentOdds: string
        trend: string
        data: { name: string; value: number }[]
    }
}

const PredictionCard = ({ project }: PredictionCardProps) => {
    const { name, currentOdds, trend, data } = project

    const chartConfig = {
        value: {
            label: 'Value',
            color: 'hsl(var(--chart-1))',
        },
    }

    return (
        <Card className='mb-4 overflow-hidden bg-white bg-opacity-10 text-white transition-all duration-300 hover:bg-opacity-20'>
            <CardHeader className='pb-2'>
                <div className='flex items-start justify-between'>
                    <CardTitle className='text-lg font-semibold'>{name}</CardTitle>
                    <Badge variant={trend === 'up' ? 'default' : 'destructive'} className='flex items-center'>
                        {trend === 'up' ? (
                            <TrendingUp className='mr-1 h-4 w-4' />
                        ) : (
                            <TrendingDown className='mr-1 h-4 w-4' />
                        )}
                        {currentOdds}
                    </Badge>
                </div>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className='min-h-[100px] w-full'>
                    <LineChart accessibilityLayer data={data}>
                        <Line type='monotone' dataKey='value' stroke='var(--color-value)' strokeWidth={2} dot={false} />
                        <ChartTooltip content={<ChartTooltipContent />} />
                    </LineChart>
                </ChartContainer>
                <Button
                    variant='outline'
                    className='mt-3 w-full border-white text-white transition-colors duration-300 hover:bg-white hover:text-blue-600'>
                    Place Prediction
                </Button>
            </CardContent>
        </Card>
    )
}

const PredictionsScreen = () => {
    const projects = [
        {
            id: 1,
            name: 'EcoTech Solutions',
            currentOdds: '2.5x',
            trend: 'up',
            data: [
                { name: 'Jan', value: 1000 },
                { name: 'Feb', value: 1200 },
                { name: 'Mar', value: 1500 },
                { name: 'Apr', value: 1800 },
                { name: 'May', value: 2000 },
            ],
        },
        {
            id: 2,
            name: 'HealthAI',
            currentOdds: '1.8x',
            trend: 'down',
            data: [
                { name: 'Jan', value: 2000 },
                { name: 'Feb', value: 1800 },
                { name: 'Mar', value: 1900 },
                { name: 'Apr', value: 1700 },
                { name: 'May', value: 1600 },
            ],
        },
        // Add more projects as needed
    ]

    return (
        <div className='flex h-screen flex-col bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white'>
            <main className='animate-fadeIn flex-grow overflow-y-auto p-4'>
                <h1 className='mb-4 text-2xl font-bold'>Predictions</h1>
                <div className='space-y-4'>
                    {projects.map(project => (
                        <PredictionCard key={project.id} project={project} />
                    ))}
                </div>
            </main>

            <div className='bg-white bg-opacity-10 p-4 backdrop-blur-lg'>
                <Button className='w-full bg-yellow-500 text-white hover:bg-yellow-600'>
                    <AlertCircle className='mr-2 h-4 w-4' />
                    New prediction result available!
                </Button>
            </div>
        </div>
    )
}

export default PredictionsScreen
