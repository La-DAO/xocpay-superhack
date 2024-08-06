import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider, http, createConfig } from "wagmi";
import { baseSepolia } from "wagmi/chains";
import { coinbaseWallet } from "wagmi/connectors";

export const config = createConfig({
    chains: [
        baseSepolia, 
    ],
    connectors: [coinbaseWallet({
      appName: "XocPay",
      appLogoUrl: "https://github.com/La-DAO/xocpay/blob/main/public/images/logos/cocoa-bean-512px.png",
      preference: "smartWalletOnly",
    })],
    transports: {
      [baseSepolia.id]: http(),
    },
  });
  
  const queryClient = new QueryClient();
  
  export const Wagmi = ({ children } : { 
    children: React.ReactNode
   }) => {
    return (
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </WagmiProvider>
    );
  };