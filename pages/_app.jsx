import { createClient, configureChains, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { SessionProvider } from "next-auth/react";
import { mainnet } from "wagmi/chains";
import '../styles/globals.css'
import { ThirdwebProvider } from "@thirdweb-dev/react";

const { provider, webSocketProvider } = configureChains(
  [mainnet],
  [publicProvider()]
);



const client = createClient({
  provider,
  webSocketProvider,
  autoConnect: true,
});

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider activeChain="mumbai"
    authConfig={{
      // Set this to your domain to prevent phishing attacks
      domain: "example.org",
      // The URL of your Auth API
      authUrl: "/api/auth",
      loginRedirect: '/nft/nftlogin',
    }}>
    <WagmiConfig client={client}>
      <SessionProvider session={pageProps.session} refetchInterval={0}>
        <Component {...pageProps} />
        </SessionProvider>
    </WagmiConfig>
    </ThirdwebProvider>
  );
}

export default MyApp;