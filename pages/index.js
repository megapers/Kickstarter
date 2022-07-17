import { useState, useEffect, useContext, Fragment } from 'react';
import { useRouter } from 'next/router';
import { getFactorySigner } from '../ethereum/factory';
import { Card, Button } from 'semantic-ui-react';
import BlockchainContext from '../store/blockchain-context';

export default () => {
    const router = useRouter();
    const [campaigns, setCampaigns] = useState([]);
    const blockchainContext = useContext(BlockchainContext);
    const provider = blockchainContext.provider;

    useEffect(() => {
        async function fetchData() {
            if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
                const factoryWithSigner = provider;
                if (factoryWithSigner) {
                    const deployedCampaigns = await factoryWithSigner.getDeployedCampaigns();
                    setCampaigns(deployedCampaigns);
                }
            }
        }
        fetchData();
    }, [provider]);

    const items = campaigns.map(address => {
        return {
            header: address,
            description: <a>View Campaign</a>,
            fluid: true
        };
    });

    function submitHandler(event) {
        event.preventDefault();
        router.push('/campaigns/new');

    }
    return (
        <div>
            {
                blockchainContext.isLoaded ?
                    <Fragment>
                        <h3>Open Campaigns</h3>
                        <Button
                            floated="right"
                            content="Create Campaign"
                            icon="add circle"
                            primary
                            onClick={submitHandler}
                        />
                        <Card.Group items={items} />
                    </Fragment>
                    : <p>Loading...</p>
            }
        </div>
    );
};

