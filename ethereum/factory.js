import { getSigner} from './walletProvider';
import { ethers } from 'ethers'
import ContractAddress from './abis/contract-address.json';
import CampaignFactory from './abis/CampaignFactory.json';

export const getFactorySigner = async () => {
    const signer = await getSigner();

    try {
        const contractWithSigner = new ethers.Contract(ContractAddress.KICKSTARTER, CampaignFactory.abi, signer);
        return contractWithSigner;
    }
    catch (error) {
        console.log('Contract is not found:\n', error);
        return error;
    }

}

