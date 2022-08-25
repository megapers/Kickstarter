import { useState, useEffect, useContext, Fragment } from 'react';
import { useRouter } from 'next/router';
import { Input, Button, Form, Message } from 'semantic-ui-react';
import BlockchainContext from '../store/blockchain-context';

const ContributeForm = () => {
    const [amountInput, setAmountInput] = useState();
    const [errorMessage, setErrorMessage] = useState();
    const [loading, setLoading] = useState(false);
    const blockchainContext = useContext(BlockchainContext);
    const router = useRouter();
    const provider = blockchainContext.provider;

    async function submitHandler(event) {
        event.preventDefault();
        setLoading(true);
        setErrorMessage('');
        try {
            const factoryWithSigner = provider;
            await factoryWithSigner.contribute(amountInput);
        }
        catch (err) {
            setErrorMessage(err.message);
        }
        setLoading(false);
        //router.push('/');
    }

    return (
        <Form>
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
                primary type='submit'
                onClick={submitHandler}
                loading={loading}
            >
                Contribute!
            </Button>
        </Form>
    )
}

export default ContributeForm;