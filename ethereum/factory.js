import { getSigner } from './walletProvider';
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

export const getContractByAddress = async (address) => {
    const signer = await getSigner();

    try {
        const Request = "(string description, uint256 value, address payable recipient, bool complete, uint256 approvalCount)";
        const abi = [
            "function getSummary() public view returns (uint, uint, uint, uint, address)",
            "function contribute() public payable",
            "function createRequest(string, uint256, address)",
            `function getAllRequests() public view returns (${Request}[] memory)`,
            "function getRequestsCount() public view returns (uint)"
        ]

        const contractWithSigner = new ethers.Contract(address, abi, signer);
        return contractWithSigner;
    }
    catch (error) {
        console.log('Contract is not found:\n', error);
        return error;
    }

}

