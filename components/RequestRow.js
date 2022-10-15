import { Button, Table } from 'semantic-ui-react';
import { ethers } from 'ethers';
import { getContractByAddress } from '../ethereum/factory';

const RequestRow = (props) => {
    const { id, request, approversCount, address } = props;
    const { Row, Cell } = Table;
    const readyToFinalize = request.approvalCount > approversCount / 2;

    const onApprove = async () => {
        const contract = await getContractByAddress(address);
        const tx = await contract.approveRequest(id);
        await tx.wait();
    };

    const onFinalize = async () => {
        const contract = await getContractByAddress(address);
        const tx = await contract.finalizeRequest(id);
        await tx.wait();
    };

    return (
        <Row disabled={request.complete} positive={readyToFinalize && !request.complete}>
            <Cell>{id}</Cell>
            <Cell>{request.description}</Cell>
            <Cell>{ethers.utils.formatEther((request.value).toString())}</Cell>
            <Cell>{request.recipient}</Cell>
            <Cell>{(request.approvalCount).toNumber()}/{approversCount.toNumber()}</Cell>
            <Cell>
                {request.complete ? null : (
                    <Button color="green" basic onClick={onApprove}>
                        Approve
                    </Button>
                )}
            </Cell>
            <Cell>
                {request.complete ? null : (
                    <Button color="teal" basic onClick={onFinalize}>
                        Finalize
                    </Button>
                )}
            </Cell>
        </Row>
    );
}

export default RequestRow;