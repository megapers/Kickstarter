import { useState, useEffect } from 'react';
import { Fragment } from 'react';
import { getFactorySigner } from '../ethereum/factory';
import { Card, Button } from 'semantic-ui-react';

export default (props) => {
    const [campaigns, setCampaigns] = useState(props.campaigns);

    useEffect(() => {
        async function fetchData() {
            if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
                const factoryWithSigner = await getFactorySigner();
                if (factoryWithSigner) {
                    //factoryWithSigner.createCampaign('100');
                    const deployedCampaigns = await factoryWithSigner.getDeployedCampaigns();
                    setCampaigns(deployedCampaigns);
                }
            }
        }
        fetchData();
    }, []);

    const items = campaigns.map(address => {
        return {
            header: address,
            description: <a>View Campaign</a>,
            fluid: true
        };
    });
    return (
        <Fragment>
            <h3>Open Campaigns</h3>
            <Button
                floated="right"
                content="Create Campaign"
                icon="add circle"
                primary
            />
            <Card.Group items={items} />
        </Fragment>
    );
};

export async function getStaticProps() {
    const factoryWithSigner = await getFactorySigner();
    //factoryWithSigner.createCampaign('100');
    const campaigns = await factoryWithSigner.getDeployedCampaigns();
    return {
        props: {
            campaigns,
            infuraURL: process.env.INFURA_URL
        },
        revalidate: 10//Fetches data from server every 10 seconds
    };
}