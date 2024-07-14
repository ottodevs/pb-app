import React from 'react'
import { Home, Rocket, LineChart, Award, User } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface DashboardCardProps {
    title: string
    value: string
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const DashboardCard = ({ title, value, icon: Icon }: DashboardCardProps) => (
    <Card className='bg-white bg-opacity-10 text-white'>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>{title}</CardTitle>
            <Icon className='h-4 w-4 text-muted-foreground' />
        </CardHeader>
        <CardContent>
            <div className='text-2xl font-bold'>{value}</div>
        </CardContent>
    </Card>
)

interface ProjectCardProps {
    name: string
    description: string
    endDate: string
}

const ProjectCard = ({ name, description, endDate }: ProjectCardProps) => (
    <Card className='bg-white bg-opacity-10 text-white'>
        <CardHeader>
            <CardTitle>{name}</CardTitle>
        </CardHeader>
        <CardContent>
            <p className='text-sm text-gray-300'>{description}</p>
            <p className='mt-2 text-xs text-gray-400'>Ends on: {endDate}</p>
        </CardContent>
    </Card>
)

const Dashboard = () => {
    return (
        <>
            <h1 className='mb-4 text-2xl font-bold'>Welcome back, User!</h1>

            <section className='grid grid-cols-2 gap-4'>
                <DashboardCard title='Projects Supported' value='12' icon={Rocket} />
                <DashboardCard title='Active Predictions' value='8' icon={LineChart} />
                <DashboardCard title='Rewards Earned' value='250 PQF' icon={Award} />
                <DashboardCard title='Ranking' value='#42' icon={Award} />
            </section>

            <section>
                <h2 className='mb-3 text-xl font-semibold'>Featured Projects</h2>
                <div className='space-y-4'>
                    <ProjectCard
                        name='EcoTech Solutions'
                        description='Developing sustainable energy solutions for urban environments.'
                        endDate='July 30, 2024'
                    />
                    <ProjectCard
                        name='HealthAI'
                        description='AI-powered diagnostics for early disease detection.'
                        endDate='August 15, 2024'
                    />
                </div>
            </section>
        </>
    )
}

export default Dashboard
