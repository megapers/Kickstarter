import { useState, useEffect, Fragment } from 'react';
import { useRouter } from 'next/router';
import { getFactorySigner } from '../ethereum/factory';
import { Card, Button } from 'semantic-ui-react';

export default (props) => {
    const router = useRouter();
    const [campaigns, setCampaigns] = useState(props.campaigns);

    useEffect(() => {
        async function fetchData() {
            if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
                const factoryWithSigner = await getFactorySigner();
                if (factoryWithSigner) {
                    const deployedCampaigns = await factoryWithSigner.getDeployedCampaigns();
                    setCampaigns(deployedCampaigns);
                    //console.log(props.infuraURL);
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

    function submitHandler(event) {
        event.preventDefault();
        router.push('/campaigns/new');
       
    }
    return (
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
    );
};

export async function getStaticProps() {
    const factoryWithSigner = await getFactorySigner();
    const campaigns = await factoryWithSigner.getDeployedCampaigns();
    return {
        props: {
            campaigns,
            //infuraURL: process.env.INFURA_URL
        },
        revalidate: 10//Fetches data from server every 10 seconds
    };
}