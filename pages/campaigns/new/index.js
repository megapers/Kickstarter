import { Fragment, useState } from 'react';
import { useRouter } from 'next/router';
import { Input, Button, Form, Message } from 'semantic-ui-react'
import { getFactorySigner } from "../../../ethereum/factory";

const CampaignNew = () => {
    const router = useRouter();
    const [amountInput, setAmountInput] = useState();
    const [errorMessage, setErrorMessage] = useState();
    const [loading, setLoading] = useState(false);

    async function submitHandler(event) {
        event.preventDefault();
        setLoading(true);
        setErrorMessage('');
        try {
            const factoryWithSigner = await getFactorySigner();
            await factoryWithSigner.createCampaign(amountInput);
        }
        catch (err) {
            setErrorMessage(err.message);
        }
        setLoading(false);
        router.push('/');
    }

    return (
        <Fragment>
            <h3>Create a Campaign</h3>
            <Form error={!!errorMessage}>{/*!!turn string to boolean */}
                <Form.Field>
                    <label>Minimum Contribution</label>
                    <Input
                        label='wei'
                        labelPosition='right'
                        onChange={event => setAmountInput(event.target.value)}
                    />
                </Form.Field>
                <Message error header="Oops!" content={errorMessage} />
                <Button
                    primary type='submit'
                    onClick={submitHandler}
                    loading={loading}
                >
                    Create!
                </Button>
            </Form>
        </Fragment>
    )
}

export default CampaignNew;