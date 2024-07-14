/**
 * @file src/providers/providers.tsx
 * @description the main providers for the application
 */
'use client'

import { PrivyProvider } from '@privy-io/react-auth'
import { WagmiProvider } from '@privy-io/wagmi'
import { HydrationBoundary, dehydrate } from '@tanstack/react-query'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { Toaster } from 'sonner'
import { queryClient as getQueryClient, privy, wagmi } from './configs'

export default function Providers({ children }: React.PropsWithChildren) {
    const queryClient = getQueryClient()

    return (
        <PrivyProvider {...privy}>
            <PersistQueryClientProvider {...queryClient}>
                <HydrationBoundary state={dehydrate(queryClient.client)}>
                    <WagmiProvider {...wagmi}>
                        {children}
                        <Toaster position='top-center' visibleToasts={1} />
                    </WagmiProvider>
                </HydrationBoundary>
            </PersistQueryClientProvider>
        </PrivyProvider>
    )
}
