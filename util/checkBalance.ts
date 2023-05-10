export default async function checkBalance(sdk, address) {
    const {contract} = sdk.useContract(
        "0x5825F215E1E6c02cC6C916f1D3F67D7bB62135Cc"
        );

    const balance = await contract.balanceOf(address, 0);

    return balance.gt(0);

}