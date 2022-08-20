import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router'
import { Card } from 'semantic-ui-react';
import BlockchainContext from '../../store/blockchain-context';
import { getContractByAddress } from '../../ethereum/factory';

const CampaignShow = () => {
    const [summary, setSummary] = useState({});
    const router = useRouter()
    const { address } = router.query
    const blockchainContext = useContext(BlockchainContext);
    const provider = blockchainContext.provider;

    useEffect(() => {
        (async () => {
            const contract = await getContractByAddress(address);
            try {
                const contractSummary = await contract.getSummary();

                setSummary({
                    minimumContribution: (contractSummary[0]).toNumber(),
                    balance: (contractSummary[1]).toNumber(),
                    requestCount: (contractSummary[2]).toNumber(),
                    approversCount: (contractSummary[3]).toNumber(),
                    manager: (contractSummary[4])
                });
            } catch (error) {
                console.log('Loading contract...');
            }

        })()
    }, [provider]);

    const items = [
        {
            header: summary.manager,
            meta: 'Address of Manager',
            description:
                'The manager crrated this campaign and can create requests to withdraw money',
            style: { overflowWrap: 'break-word' }
        }
    ];

    return (
        <div>
            <h2>Campaign show</h2>
            <Card.Group items={items} />
        </div>
    );

}

export default CampaignShow;