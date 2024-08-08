'use client';

import PageWithNavbar from '@/components/layout/page'
import { useConnectedWallets } from "thirdweb/react";
import DashboardComponent from '@/components/Dashboard'
import LandingComponent from '@/components/Landing'

export default function Home() {

  const wallets = useConnectedWallets();

  return (
    <PageWithNavbar>
      {wallets.length > 0 && (
        <DashboardComponent />
      )}
      {wallets.length === 0 && (
        <LandingComponent />
      )}

    </PageWithNavbar>
  )
}
