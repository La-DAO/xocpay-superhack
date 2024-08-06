'use client'

import { toast } from 'sonner'
import { Button } from '../ui/button'

import { createWallet, walletConnect, inAppWallet, } from "thirdweb/wallets";
import { ConnectButton } from "thirdweb/react";
import { thirdwebClient } from '@/providers/Thirdweb';
import { DEFAULT_CHAIN, SUPPORTED_CHAINS } from '@/constants/Chain';

import { useEffect, useState } from 'react';
import { useAccount, useConnect, useDisconnect } from 'wagmi'

const walletsSetup = [
  createWallet("com.coinbase.wallet", {
    walletConfig: {
      options: "smartWalletOnly",
    },
  }),
];

const wallets = [
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  walletConnect(),
  inAppWallet({
    auth: {
      options: [
        "email",
        "google",
        "apple",
        "facebook",
        "phone",
      ],
    },
  }),
  createWallet("me.rainbow"),
];

type AuthButtonProps = {
  textButton?: string
  size?: 'default' | 'sm' | 'lg' | 'icon' | null | undefined
}

export default function AuthButton({
  textButton = 'Entrar',
  size,
}: AuthButtonProps) {

  const { address, isConnected, connector } = useAccount();
  const [clientOnly, setClientOnly] = useState(false);

  useEffect(() => {
    setClientOnly(true);
  }, []);


  function onClickHandler() {
    toast.warning('Auth required, go to authButton component to configure')
  }

  const handleConnect = (userInfo: any) => {
    console.log(userInfo)
  }

  const handleDisconnect = () => {
    console.log('disconnect')
  }

  return (
    <>
    {/* <Button onClick={onClickHandler} size={size} className="font-medium">
      {textButton}
    </Button> */}

    { clientOnly &&isConnected && address && (
      <div>
        <p>{address}</p>
      </div>
    )}

    <ConnectButton
      client={thirdwebClient}
      wallets={walletsSetup}
      theme={"light"}
      connectButton={{ 
        label: "Entrar",
        style: {
          backgroundColor: '#f25e40',
          color: '#fff',
          borderRadius: '8px',
          fontSize: '18px',
          minWidth: '116px',
        }
      }}
      connectModal={{
        size: "wide",
        title: "XocPay",
        showThirdwebBranding: false,
      }}
      chain={DEFAULT_CHAIN}
      onConnect={handleConnect}
      onDisconnect={handleDisconnect}
      />
    </>
  )
}
