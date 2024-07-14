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
        <div className='flex h-screen flex-col overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white'>
            <main className='animate-fadeIn flex-grow space-y-6 overflow-y-auto p-4'>
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
            </main>

            <nav className='bg-white bg-opacity-10 backdrop-blur-lg'>
                <ul className='flex justify-around p-2'>
                    {[
                        { icon: Home, label: 'Home' },
                        { icon: Rocket, label: 'Projects' },
                        { icon: LineChart, label: 'Predictions' },
                        { icon: Award, label: 'Rewards' },
                        { icon: User, label: 'Profile' },
                    ].map(({ icon: Icon, label }) => (
                        <li key={label}>
                            <Button variant='ghost' className='flex flex-col items-center text-white'>
                                <Icon className='h-6 w-6' />
                                <span className='mt-1 text-xs'>{label}</span>
                            </Button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default Dashboard
