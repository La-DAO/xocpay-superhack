'use client'

import { toast } from 'sonner'
import { Button } from '../ui/button'

import { createWallet, walletConnect, inAppWallet, } from "thirdweb/wallets";
import { ConnectButton } from "thirdweb/react";
import { thirdwebClient } from '@/providers/Thirdweb';
import { DEFAULT_CHAIN, SUPPORTED_CHAINS } from '@/constants/Chain';

import { useEffect, useState } from 'react';

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
        // "email",
        "google",
        "farcaster",
        "passkey",
        "phone"
        // "apple",
        // "facebook",
        // "phone",
      ],
    },
  }),
  // createWallet("me.rainbow"),
];

type AuthButtonProps = {
  textButton?: string
  size?: 'default' | 'sm' | 'lg' | 'icon' | null | undefined
}

export default function AuthButton({
  textButton = 'Entrar',
  size,
}: AuthButtonProps) {

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

    <ConnectButton
      client={thirdwebClient}
      wallets={wallets}
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
        titleIcon:
          "https://bafybeia7qsejw7nwyghlbgjna5eopov72l5liottrxh7gkob2yysmhwdny.ipfs.w3s.link/cocoa-bean-256px.png",
        welcomeScreen: {
          img: {
            src: "https://bafybeia7qsejw7nwyghlbgjna5eopov72l5liottrxh7gkob2yysmhwdny.ipfs.w3s.link/cocoa-bean-256px.png",
            width: 150,
            height: 150,
          },
        },
        showThirdwebBranding: false,
      }}
      chain={DEFAULT_CHAIN}
      onConnect={handleConnect}
      onDisconnect={handleDisconnect}
      />
    </>
  )
}
