import { Fragment, useState, useContext } from 'react';
import { Input, Button, Form, Message } from 'semantic-ui-react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getContractByAddress } from '../../../../ethereum/factory';
import { ethers } from 'ethers'

const RequestNew = () => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [recipient, setRecipient] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const router = useRouter();
    const { address } = router.query;

    const onSubmit = async event => {
        event.preventDefault();
        setLoading(true);
        setErrorMessage('');

        const campaign = await getContractByAddress(address);

        try {
            const amountEth = ethers.utils.parseEther(amount);
            const tx = await campaign.createRequest(
                description,
                amountEth,
                recipient
            );
            tx.wait();
            router.push(`/campaigns/${address}/requests`);
        } catch (err) {
            setErrorMessage(err.message);
        }
        setLoading(false);
    }

    return (
        <Fragment>
            <Link href={`/campaigns/${address}/requests`}>
                <a>Back</a>
            </Link>
            <h3>Create a Request</h3>
            <Form onSubmit={onSubmit} error={!!errorMessage}>
                <Form.Field>
                    <label>Descriptrion</label>
                    <Input
                        value={description}
                        onChange={event => setDescription(event.target.value)}
                    />
                </Form.Field>

                <Form.Field>
                    <label>Value in Ether</label>
                    <Input
                        value={amount}
                        onChange={event => setAmount(event.target.value)}
                    />
                </Form.Field>

                <Form.Field>
                    <label>Recipient</label>
                    <Input
                        value={recipient}
                        onChange={event => setRecipient(event.target.value)}
                    />
                </Form.Field>

                <Message error header="Oops!" content={errorMessage} />
                <Button
                    primary
                    loading={loading}
                >
                    Create!
                </Button>

            </Form>
        </Fragment>
    );
}

export default RequestNew;