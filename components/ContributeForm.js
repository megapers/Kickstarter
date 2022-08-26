import { useState, useEffect, useContext, Fragment } from 'react';
import { ethers } from 'ethers'

import { Input, Button, Form, Message } from 'semantic-ui-react';
import BlockchainContext from '../store/blockchain-context';
import { getContractByAddress } from '../ethereum/factory';

const ContributeForm = (props) => {
    const [amountInput, setAmountInput] = useState(0);
    const [errorMessage, setErrorMessage] = useState();
    const [loading, setLoading] = useState(false);
    const blockchainContext = useContext(BlockchainContext);
    const provider = blockchainContext.provider;

    async function submitHandler(event) {
        event.preventDefault();
        setLoading(true);
        setErrorMessage('');
        const campaign = await getContractByAddress(props.contractAddress);
        try {
            const amount = ethers.utils.parseEther(amountInput);
            const tx = await campaign.contribute({ value: amount });
            tx.wait();
        }
        catch (err) {
            setErrorMessage(err.message);
        }
        setLoading(false);
        //router.push('/');
    }

    return (
        <Form onSubmit={submitHandler}>
            <Form.Field>
                <label>Amount to Contribute</label>
                <Input
                    value={amountInput}
                    label='ether'
                    labelPosition='right'
                    onChange={event => setAmountInput(event.target.value)}
                />
            </Form.Field>
            <Button
                primary
            >
                Contribute!
            </Button>
        </Form>
    )
}

export default ContributeForm;