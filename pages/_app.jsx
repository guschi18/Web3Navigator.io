import { createClient, configureChains, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { mainnet } from "wagmi/chains";
import '../styles/globals.css'
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { domainName } from "../const/yourDetails";

const { provider, webSocketProvider } = configureChains(
  [mainnet],
  [publicProvider()]
);


const activeChain = "mumbai";

const client = createClient({
  provider,
  webSocketProvider,
  autoConnect: true,
});

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider activeChain={activeChain}
    authConfig={{
      // Set this to your domain to prevent phishing attacks
      domain: domainName,
      // The URL of your Auth API
      authUrl: "/api/auth",
      loginRedirect: '/exclusive-content',
    }}>
    <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;