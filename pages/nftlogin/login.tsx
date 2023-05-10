import {
    useAddress,
    useMetamask,
    useContract,
    useClaimNFT,
    useNetwork,
    useNetworkMismatch,
    useLogin,
} from "@thirdweb-dev/react";

import { ChainId } from "@thirdweb-dev/sdk";

export default function Login() {
const address = useAddress();
const connectWithMetamask = useMetamask();

const [, switchNetwork ] = useNetwork();
const networkMismatch = useNetworkMismatch();

const {contract} = useContract(
"0x5825F215E1E6c02cC6C916f1D3F67D7bB62135Cc"
);

const { mutate: claimNft, isLoading: isClaiming } = 
    useClaimNFT(contract);

const { login } = useLogin();


return (
<div>{address ? (
    <>
    <p>Welcome, {address.slice(0, 6)}...</p>
    <button onClick={() => login()}>Login
    </button>

    <p>For demo purpose, you can claim an NFT from our collection below:</p>

    <button onClick={() => {
        if (networkMismatch) {
            switchNetwork(ChainId.Mumbai);
            return;
        }
        claimNft({
            quantity: 1,
            tokenId: 0,
            to: address,
        });
    }}>
        {!isClaiming ? " Claim an NFT " : "Claiming..."}
    </button>
    
    </>
    ) : (
        <>
        <button onClick={() => connectWithMetamask()}>Connect Wallet</button>
        </>
    )}
</div>

);
}