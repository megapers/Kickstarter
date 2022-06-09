import { getSigner, getMetamaskSigner, getInfuraSigner} from './walletProvider';
import ContractData from '../ContractData.json';
import { ethers } from 'ethers'

export const getFactorySigner = async () => {
    const signer = await getSigner();

    try {
        const contractWithSigner = new ethers.Contract(ContractData.address, ContractData.abi, signer);
        return contractWithSigner;
    }
    catch (error) {
        console.log('Contract is not found:\n', error);
        return error;
    }

}

