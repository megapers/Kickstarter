import { ethers } from 'ethers'

export const getSigner = async () => {

    try {
        const provider = new ethers.providers.Web3Provider(ethereum, "any");
        await provider.send("eth_requestAccounts", []);
        return provider.getSigner();
    }
    catch (error) {
        console.log("Error connecting to Metamask: ", error.message);
        console.log("Connecting to Infura provider...");
        try {
            const provider = new ethers.providers.JsonRpcProvider(process.env.INFURA_URL);
            const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
            const signer = wallet.connect(provider);
            return signer;
        }
        catch (error) {
            console.log('Error connecting to Infura API:\n', error);
            return error;
        }
    }
}

export const getMetamaskSigner = async () => {
    try {
        const provider = new ethers.providers.Web3Provider(ethereum, "any");
        await provider.send("eth_requestAccounts", []);
        return provider.getSigner();
    }
    catch (error) {
        console.log("Error connecting to Metamask:\n", error.message);
    }
}

export const getInfuraSigner = async () => {
    try {
        const provider = new ethers.providers.JsonRpcProvider(process.env.INFURA_URL);
        const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
        const signer = wallet.connect(provider);
        return signer;
    }
    catch (error) {
        console.log('Error connecting to Infura API:\n', error);
        return error;
    }
}

