import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, TrendingDown, Star, Clock, DollarSign } from 'lucide-react'

interface ProjectCardProps {
    project: {
        name: string
        description: string
        timeLeft: string
        totalRaised: string
        trend: string
        popularity: number
    }
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    const { name, description, timeLeft, totalRaised, trend, popularity } = project

    return (
        <Card className='mb-4 overflow-hidden bg-white bg-opacity-10 text-white transition-all duration-300 hover:bg-opacity-20'>
            <CardHeader className='pb-2'>
                <div className='flex items-start justify-between'>
                    <CardTitle className='text-lg font-semibold'>{name}</CardTitle>
                    <div className='flex space-x-1'>
                        {trend === 'up' && <TrendingUp className='h-5 w-5 text-green-400' />}
                        {trend === 'down' && <TrendingDown className='h-5 w-5 text-red-400' />}
                        {[...Array(popularity)].map((_, i) => (
                            <Star key={i} className='h-5 w-5 text-yellow-400' fill='currentColor' />
                        ))}
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <p className='mb-2 text-sm text-gray-300'>{description}</p>
                <div className='flex items-center justify-between text-xs text-gray-400'>
                    <div className='flex items-center'>
                        <Clock className='mr-1 h-4 w-4' />
                        {timeLeft}
                    </div>
                    <div className='flex items-center'>
                        <DollarSign className='mr-1 h-4 w-4' />
                        {totalRaised} PQF
                    </div>
                </div>
                <Button
                    variant='outline'
                    className='mt-3 w-full border-white text-white transition-colors duration-300 hover:bg-white hover:text-blue-600'>
                    View Details
                </Button>
            </CardContent>
        </Card>
    )
}

const ProjectsScreen = () => {
    const projects = [
        {
            id: 1,
            name: 'EcoTech Solutions',
            description: 'Developing sustainable energy solutions for urban environments.',
            timeLeft: '3 days left',
            totalRaised: '15,000',
            trend: 'up',
            popularity: 3,
        },
        {
            id: 2,
            name: 'HealthAI',
            description: 'AI-powered diagnostics for early disease detection.',
            timeLeft: '7 days left',
            totalRaised: '12,500',
            trend: 'up',
            popularity: 4,
        },
        {
            id: 3,
            name: 'EduConnect',
            description: 'Bridging educational gaps through decentralized learning platforms.',
            timeLeft: '2 days left',
            totalRaised: '8,000',
            trend: 'down',
            popularity: 2,
        },
        // Add more projects as needed
    ]

    return (
        <div className='flex h-screen flex-col bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white'>
            <main className='animate-fadeIn flex-grow overflow-y-auto p-4'>
                <h1 className='mb-4 text-2xl font-bold'>Projects</h1>
                <div className='space-y-4'>
                    {projects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </main>

            {/* Navigation bar component would go here */}
        </div>
    )
}

export default ProjectsScreen
