'use client'

import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'

interface OnboardingStepProps {
    title: string
    description: string
}

const OnboardingStep = ({ title, description }: OnboardingStepProps) => (
    <div className='flex h-full flex-col items-center justify-center px-6 text-center text-white'>
        <h2 className='animate-fadeIn mb-4 text-3xl font-bold'>{title}</h2>
        <p className='animate-fadeIn animation-delay-300 text-lg'>{description}</p>
    </div>
)

const OnboardingWizard = () => {
    const [currentStep, setCurrentStep] = useState(0)
    const [bgPosition, setBgPosition] = useState(0)
    const steps = [
        {
            title: 'Welcome to PQF',
            description:
                'Predictive Quadratic Funding revolutionizes project financing in hackathons by combining quadratic funding with real-time prediction markets.',
        },
        {
            title: 'Contribute and Predict',
            description:
                'Contribute to projects using a quadratic funding model and bet on their success through a dynamic prediction market.',
        },
        {
            title: 'Earn Rewards',
            description:
                'Participate in a gamified experience, earning rewards for accurate predictions and impactful contributions.',
        },
    ]

    const nextStep = () => setCurrentStep(prev => (prev + 1) % steps.length)
    const prevStep = () => setCurrentStep(prev => (prev - 1 + steps.length) % steps.length)

    useEffect(() => {
        const interval = setInterval(() => {
            setBgPosition(prev => (prev + 1) % 100)
        }, 50)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className='relative flex h-screen flex-col overflow-hidden bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500'>
            <div
                className='absolute inset-0 opacity-30'
                style={{
                    backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                    backgroundPosition: `${bgPosition}px ${bgPosition}px`,
                    transition: 'background-position 0.5s linear',
                }}></div>
            <div className='relative z-10 flex-grow'>
                <OnboardingStep {...steps[currentStep]} />
                <div className='absolute bottom-10 left-0 right-0 flex justify-center space-x-4'>
                    <button
                        title='Previous Step'
                        type='button'
                        onClick={prevStep}
                        className='transform rounded-full bg-white bg-opacity-20 p-3 text-white transition-all duration-300 hover:scale-110 hover:bg-opacity-30'>
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        title='Next Step'
                        type='button'
                        onClick={nextStep}
                        className='transform rounded-full bg-white bg-opacity-20 p-3 text-white transition-all duration-300 hover:scale-110 hover:bg-opacity-30'>
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
            <div className='z-10 p-6'>
                <button
                    type='button'
                    title='Get Started'
                    className='w-full transform rounded-full bg-white px-6 py-3 text-lg font-semibold text-blue-600 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl'>
                    <Link href='/dashboard'>Get Started</Link>
                </button>
            </div>
        </div>
    )
}

export default OnboardingWizard
