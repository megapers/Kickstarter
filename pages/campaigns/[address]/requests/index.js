import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router'
import { Button } from 'semantic-ui-react';
import Link from 'next/link';
import { getContractByAddress } from '../../../../ethereum/factory';
import BlockchainContext from '../../../../store/blockchain-context';

const RequestIndex = () => {
    const [requestsCount, setRequestsCount] = useState(0);
    const router = useRouter();
    const { address } = router.query;
    const blockchainContext = useContext(BlockchainContext);
    const provider = blockchainContext.provider;

    useEffect(() => {
        (async () => {
            const contract = await getContractByAddress(address);
            try {
                const requestsCnt = await contract.getAllRequests();
                console.log(requestsCnt);

            } catch (error) {
                console.log(error);
            }

        })()
    }, [provider]);

    return (
        <div>
            {/* <p>{requestsCount}</p> */}
            <h3>Requests</h3>
            <Link href={`/campaigns/${address}/requests/new`}>
                <a>
                    <Button primary>
                        Add Request
                    </Button>
                </a>
            </Link>
        </div>
    );

}

export default RequestIndex;