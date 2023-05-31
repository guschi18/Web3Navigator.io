import {
    useActiveClaimConditionForWallet,
    useAddress,
    useClaimConditions,
    useClaimerProofs,
    useClaimIneligibilityReasons,
    useContract,
    useTotalCirculatingSupply,
    Web3Button,
    ConnectWallet,
  } from "@thirdweb-dev/react";
  import { BigNumber, utils } from "ethers";
  import type { NextPage } from "next";
  import { useMemo, useState } from "react";
  import { parseIneligibility } from "../../util/parseIneligibility";
  import { contractAddress, erc1155TokenId } from "../../const/yourDetails";
  import Image from "next/image";
  import nft from "../../images/nft.jpg"
  import tor from "../../images/tor.jpg"
  import Link from "next/link";
  import Head from 'next/head';

  
  
  const Home: NextPage = () => {
    const address = useAddress();
    const [quantity, setQuantity] = useState(1);
    const { contract: editionDrop } = useContract(contractAddress);
    
  
    const claimConditions = useClaimConditions(editionDrop);
    const activeClaimCondition = useActiveClaimConditionForWallet(
      editionDrop,
      address,
      erc1155TokenId
    );
    const claimerProofs = useClaimerProofs(editionDrop, address || "", erc1155TokenId);
    const claimIneligibilityReasons = useClaimIneligibilityReasons(
      editionDrop,
      {
        quantity,
        walletAddress: address || "",
      },
      erc1155TokenId
    );
  
    const claimedSupply = useTotalCirculatingSupply(editionDrop, erc1155TokenId);
  
    const totalAvailableSupply = useMemo(() => {
      try {
        return BigNumber.from(activeClaimCondition.data?.availableSupply || 0);
      } catch {
        return BigNumber.from(1_000_000);
      }
    }, [activeClaimCondition.data?.availableSupply]);
  
    const numberClaimed = useMemo(() => {
      return BigNumber.from(claimedSupply.data || 0).toString();
    }, [claimedSupply]);
  
    const numberTotal = useMemo(() => {
      const n = totalAvailableSupply.add(BigNumber.from(claimedSupply.data || 0));
      if (n.gte(1_000_000)) {
        return "";
      }
      return n.toString();
    }, [totalAvailableSupply, claimedSupply]);
  
    const priceToMint = useMemo(() => {
      const bnPrice = BigNumber.from(
        activeClaimCondition.data?.currencyMetadata.value || 0
      );
      return `${utils.formatUnits(
        bnPrice.mul(quantity).toString(),
        activeClaimCondition.data?.currencyMetadata.decimals || 18
      )} ${activeClaimCondition.data?.currencyMetadata.symbol}`;
    }, [
      activeClaimCondition.data?.currencyMetadata.decimals,
      activeClaimCondition.data?.currencyMetadata.symbol,
      activeClaimCondition.data?.currencyMetadata.value,
      quantity,
    ]);
  
    const maxClaimable = useMemo(() => {
      let bnMaxClaimable;
      try {
        bnMaxClaimable = BigNumber.from(
          activeClaimCondition.data?.maxClaimableSupply || 0
        );
      } catch (e) {
        bnMaxClaimable = BigNumber.from(1_000_000);
      }
  
      let perTransactionClaimable;
      try {
        perTransactionClaimable = BigNumber.from(
          activeClaimCondition.data?.maxClaimablePerWallet || 0
        );
      } catch (e) {
        perTransactionClaimable = BigNumber.from(1_000_000);
      }
  
      if (perTransactionClaimable.lte(bnMaxClaimable)) {
        bnMaxClaimable = perTransactionClaimable;
      }
  
      const snapshotClaimable = claimerProofs.data?.maxClaimable;
  
      if (snapshotClaimable) {
        if (snapshotClaimable === "0") {
          // allowed unlimited for the snapshot
          bnMaxClaimable = BigNumber.from(1_000_000);
        } else {
          try {
            bnMaxClaimable = BigNumber.from(snapshotClaimable);
          } catch (e) {
            // fall back to default case
          }
        }
      }
  
      let max;
      if (totalAvailableSupply.lt(bnMaxClaimable)) {
        max = totalAvailableSupply;
      } else {
        max = bnMaxClaimable;
      }
  
      if (max.gte(1_000_000)) {
        return 1_000_000;
      }
      return max.toNumber();
    }, [
      claimerProofs.data?.maxClaimable,
      totalAvailableSupply,
      activeClaimCondition.data?.maxClaimableSupply,
      activeClaimCondition.data?.maxClaimablePerWallet,
    ]);
  
    const isSoldOut = useMemo(() => {
      try {
        return (
          (activeClaimCondition.isSuccess &&
            BigNumber.from(activeClaimCondition.data?.availableSupply || 0).lte(
              0
            )) ||
          numberClaimed === numberTotal
        );
      } catch (e) {
        return false;
      }
    }, [
      activeClaimCondition.data?.availableSupply,
      activeClaimCondition.isSuccess,
      numberClaimed,
      numberTotal,
    ]);
  
    const canClaim = useMemo(() => {
      return (
        activeClaimCondition.isSuccess &&
        claimIneligibilityReasons.isSuccess &&
        claimIneligibilityReasons.data?.length === 0 &&
        !isSoldOut
      );
    }, [
      activeClaimCondition.isSuccess,
      claimIneligibilityReasons.data?.length,
      claimIneligibilityReasons.isSuccess,
      isSoldOut,
    ]);
  
    const isLoading = useMemo(() => {
      return (
        activeClaimCondition.isLoading || claimedSupply.isLoading || !editionDrop
      );
    }, [activeClaimCondition.isLoading, editionDrop, claimedSupply.isLoading]);
  
    const buttonLoading = useMemo(
      () => isLoading || claimIneligibilityReasons.isLoading,
      [claimIneligibilityReasons.isLoading, isLoading]
    );
    const buttonText = useMemo(() => {
      if (isSoldOut) {
        return "Sold Out";
      }
  
      if (canClaim) {
        const pricePerToken = BigNumber.from(
          activeClaimCondition.data?.currencyMetadata.value || 0
        );
        if (pricePerToken.eq(0)) {
          return "Mint (Free)";
        }
        return `Mint (${priceToMint})`;
      }
      if (claimIneligibilityReasons.data?.length) {
        return parseIneligibility(claimIneligibilityReasons.data, quantity);
      }
      if (buttonLoading) {
        return "Checking eligibility...";
      }
  
      return "Claiming not available";
    }, [
      isSoldOut,
      canClaim,
      claimIneligibilityReasons.data,
      buttonLoading,
      activeClaimCondition.data?.currencyMetadata.value,
      priceToMint,
      quantity,
    ]);
  
    return (
      <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">
        <Head>
        <title>Shita-Kiri-Suzume Blog</title>
        <meta name="description" content="Shita-Kiri-Suzume Blog" />
      </Head>
        <div className="lg:col-span-4 bg-gradient-to-r from-red-400 via-pink-800 to-red-500">
        <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
      <div className="bg-white p-2 rounded-xl">
        <Image className="w-44 rounded-xl object-cover lg:h-96 lg:w-72"
        src={tor}
        alt="NFT-Logo" />
        </div>
        <div className="text-center p-5 spaye-y-2">
          <h2 className="text-xl text-gray-300">
            Login Collection Exclusive Content
          </h2>
        </div>
    </div>
    </div>

    <div className="flex flex-1 flex-col p-12 lg:col-span-6">
    <header className="flex flex-col items-center justify-center sm:flex-row sm:items-center sm:justify-between">
  <h1 className="w-52 cursor-pointer text-2xl font-extralight sm:w-80">{" "}<Link href="/">
    <span className="font-extrabold underline decoration-black">Shita-Kiri-Suzume Blog</span></Link> NFT Marketplace
  </h1>
  <ConnectWallet btnTitle="Login"
    className="!rounded-full !w-auto !bg-black !mt-4 !py-2 !px-1 !text-sm !font-bold !text-white !lg:px-5 !lg:py-3 !lg:text-base" />
</header>

    <hr className="my-2 border" />
    {address && (<p className="text-center text-lg text-black">Connected with wallet: {address.substring(0, 5)}...{address.substring(address.length - 5)}</p>)}
    <div className="mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:space-y-0 lg:justify-center">
    <div className="bg-gradient-to-br from-slate-100 via-fuchsia-300 to-sky-200 p-2 rounded-xl">
            <Image className="w-80 rounded-xl object-cover lg:h-auto" 
              src={nft}
              alt="NFT-Sparrow" />
              </div>
              <h3 className="text-2xl font-bold p-5 lg:text-4xl lg:font-bold">Shita-Kiri-Suzume Blog | NFT Drop</h3>
              {/* Amount claimed so far */}
              <div>
              <div className="pt-2 text-xl text-black">
                      Total Minted: {claimedSupply ? (
              <p>
              <b>{numberClaimed}</b>
                        {" / "}
                        {numberTotal || "∞"}
                      </p>
                    ) : (
                      // Show loading state if we're still loading the supply
                      <p>Loading...</p>
                    )} 
              </div>
                </div>
  
                {claimConditions.data?.length === 0 ||
                claimConditions.data?.every(
                  (cc) => cc.maxClaimableSupply === "0"
                ) ? (
                  <div>
                    <h2>
                      This drop is not ready to be minted yet. (No claim condition
                      set)
                    </h2>
                  </div>
                ) : (
                  <>
                    
  
                  
                    {address? (
                      <Web3Button
                          className="!mt-10 !w-96 !h-16 !bg-black !text-white !rounded-full !font-bold"
                          contractAddress={editionDrop?.getAddress() || ""}
                          action={(cntr) => cntr.erc1155.claim(erc1155TokenId, quantity)}
                          isDisabled={!canClaim || buttonLoading}
                          onError={(err) => {
                            console.error(err);
                            alert("Error claiming NFTs");
                          }}
                          onSuccess={() => {
                            setQuantity(1);
                            alert("Successfully claimed NFTs");
                          }}
                        >
                          {buttonLoading ? "Loading..." : buttonText}
                        </Web3Button>) : (
                        <p className="font-bold text-lg text-center">Please log in to unlock the minting function!</p>
                        )}
                  
                  </>
                )}
              </div>
        </div>
      </div>
    );
  };
  
  export default Home;