import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router'
import { Button, Table } from 'semantic-ui-react';
import Link from 'next/link';
import { getContractByAddress } from '../../../../ethereum/factory';
import BlockchainContext from '../../../../store/blockchain-context';
import RequestRow from '../../../../components/RequestRow';

const RequestIndex = () => {
    const [approversCount, setApproversCount] = useState(0);
    const [requests, setRequests] = useState([]);
    const [requestCount, setrequestCount] = useState([]);
    const [approved, setApproved] = useState(false);
    const [finalized, setFinalized] = useState(false);

    const router = useRouter();
    const { address } = router.query;
    const blockchainContext = useContext(BlockchainContext);
    const provider = blockchainContext.provider;
    const { Header, Row, HeaderCell, Body } = Table;

    useEffect(() => {
        (async () => {
            try {
                const contract = await getContractByAddress(address);
                const allRequests = await contract.getAllRequests();
                const approversCnt = await contract.approversCount();
                const reqCount = await contract.getRequestsCount();
                setRequests(allRequests);
                setApproversCount(approversCnt);
                setrequestCount(reqCount.toNumber());

            } catch (error) {
                console.log(error);
            }

        })()
    }, [address, requestCount, approved, finalized]);

    function renderRows() {
        return requests.map((request, index) => {
            return <RequestRow
                key={index}
                id={index}
                request={request}
                address={address}
                approversCount={approversCount}
                approve={setApproved}
                finalize={setFinalized}
            />
        });
    }

    return (
        <div>
            <h3>Requests</h3>
            <Link href={`/campaigns/${address}/requests/new`}>
                <a>
                    <Button primary floated='right' style={{ marginBottom: 10 }}>
                        Add Request
                    </Button>
                </a>
            </Link>
            <Table>
                <Header>
                    <Row>
                        <HeaderCell>ID</HeaderCell>
                        <HeaderCell>Description</HeaderCell>
                        <HeaderCell>Amount</HeaderCell>
                        <HeaderCell>Recipient</HeaderCell>
                        <HeaderCell>Approval Count</HeaderCell>
                        <HeaderCell>Approve</HeaderCell>
                        <HeaderCell>Finalize</HeaderCell>
                    </Row>
                </Header>

                <Body>
                    {renderRows()}

                </Body>
            </Table>
            <div>Found {requestCount} requests</div>

        </div>
    );

}

export default RequestIndex;