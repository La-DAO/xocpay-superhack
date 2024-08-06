import { createThirdwebClient } from "thirdweb";
import { ThirdwebProvider } from "thirdweb/react";

const clientId = process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID || '';

export const thirdwebClient = createThirdwebClient({
  clientId,
});

export const Thirdweb = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThirdwebProvider>
      {children}
    </ThirdwebProvider>
  );
};

export default Thirdweb;