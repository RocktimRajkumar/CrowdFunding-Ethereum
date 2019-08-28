import React, { Component } from 'react'
import { Table, Button } from 'semantic-ui-react';
import web3 from '../Ethereum/web3';

export default class RequestRow extends Component {
    render() {
        const { Row, Cell } = Table;
        const { id, request, approversCount } = this.props;
        return (
            <Row>
                <Cell>{id}</Cell>
                <Cell>{request.description}</Cell>
                <Cell>{web3.utils.fromWei(request.value, 'ether')} (ether)</Cell>
                <Cell>{request.recipient}</Cell>
                <Cell>{request.approvalCount}/{approversCount}</Cell>
                <Cell>
                <Button color='green' basic>Approve</Button>
                </Cell>
                <Cell>{}</Cell>
            </Row>
        );
    }
}
