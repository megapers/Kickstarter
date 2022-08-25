import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router'
import { Card, Grid } from 'semantic-ui-react';
import BlockchainContext from '../../store/blockchain-context';
import { getContractByAddress } from '../../ethereum/factory';
import ContributeForm from '../../components/ContributeForm';

const CampaignShow = () => {
    const [summary, setSummary] = useState({});
    const router = useRouter();
    const { address } = router.query;
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
                'The manager created this campaign and can create requests to withdraw money',
            style: { overflowWrap: 'break-word' }
        },
        {
            header: summary.minimumContribution,
            meta: 'Minimum Contribution (wei)',
            description: 'You must contribute at least this much wei to become an approver.'
        },
        {
            header: summary.requestCount,
            meta: 'Number of Requests',
            description: 'A request tries to withdraw money from the contract. Requests must be approved by approvers.'
        },
        {
            header: summary.approversCount,
            meta: 'Number of Approvers',
            description: 'Number of people who have already donated to this campaign.'
        },
        {//Make sure it's in Wei
            header: summary.balance,
            meta: 'Campaign Balance (ether)',
            description: 'The balance is how much money this campaign has left to spend.'
        }
    ];

    return (
        <div>
            <h3>Campaign show</h3>
            <Grid>
                <Grid.Column width={10}>
                    <Card.Group items={items} />
                </Grid.Column>

                <Grid.Column width={6}>
                    <ContributeForm />
                </Grid.Column>
            </Grid>
        </div>
    );

}

export default CampaignShow;